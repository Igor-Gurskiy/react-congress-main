import {API} from '@/api';
import {EventsEnum} from '@/api/tracker';
import useHover from '@/hooks/useHover';
import {useUIStore} from '@/stores/uiStore';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';
import {useConferenceStore} from '@/stores/conferenceStore';
import ToxityScreen from "@/components/screens/сonference/stands/toxity/ToxityScreen";

const ConferenceToxity = ({...otherProps}) => {

    const ref = useRef(null)
    const active = useHover(ref)
    const setSchedule = useUIStore(state => state.setSchedule)
    const teen = useConferenceStore(state => state.teen)

    const transitions = useTransition(teen && active, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: {
            easing: easePoly.exponent(2),
            duration: 300
        },
    })

    const handleShowSchedule = () => {
        API.tracker.sendEvent(EventsEnum.confDay3)
        if (teen === 'live') {
            if (window) {
                window.open('https://events.loreal.com.ru/', '_blank')?.focus()
            }
        } else if (teen === null || teen === 'live-ended') {
            return
        } else {
            setSchedule('teen')
        }
    }

    return (
        <Wrapper ref={ref} {...otherProps} onClick={handleShowSchedule}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/conference/light/teen_light.png"/>
            ) : '')}

            <ToxityScreen/>
        </Wrapper>
    )
}

export default ConferenceToxity

const Wrapper = styled.div`
  position: absolute;
  display: block;
  height: 660px;
  width: 214px;
  left: 821px;
  top: 250px;


  cursor: pointer;
  user-select: none;
  z-index: 11;
`

const Light = styled(animated.img)`
  position: absolute;
  top: 54px;
  left: -66px;
  pointer-events: none;
  user-select: none;
`