import {API} from '@/api';
import {EventsEnum} from '@/api/tracker';
import useHover from '@/hooks/useHover';
import {useConferenceStore} from '@/stores/conferenceStore';
import {useUIStore} from '@/stores/uiStore';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';
import AdultScreen from "@/components/screens/сonference/stands/adults/AdultScreen";

const ConferenceAdult = ({...otherProps}) => {

    const ref = useRef(null)
    const active = useHover(ref)
    const setSchedule = useUIStore(state => state.setSchedule)
    const adult = useConferenceStore(state => state.adult)

    const transitions = useTransition(adult && active, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: {
            easing: easePoly.exponent(2),
            duration: 300
        },
    })

    const handleShowSchedule = () => {
        API.tracker.sendEvent(EventsEnum.confDay4)
        if (adult === 'live') {
            if (window) {
                window.open('https://events.loreal.com.ru/', '_blank')?.focus()
            }
        } else if (adult === null || adult === 'live-ended') {
            return
        } else {
            setSchedule('adult')
        }
    }

    return (
        <Wrapper ref={ref} {...otherProps} onClick={handleShowSchedule}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/conference/light/adult_light.png"/>
            ) : '')}

            <AdultScreen/>
        </Wrapper>
    )
}

export default ConferenceAdult

const Wrapper = styled.div`
  position: absolute;
  display: block;
  width: 211px;
  left: 1058px;
  top: 259px;

  height: 645px;
  cursor: pointer;
  user-select: none;
  z-index: 11;
`

const Light = styled(animated.img)`
  position: absolute;
  top: 46px;
  left: -66px;
  pointer-events: none;
  user-select: none;
`