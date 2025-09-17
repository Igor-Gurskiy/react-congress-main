import {API} from '@/api';
import {EventsEnum} from '@/api/tracker';
import useHover from '@/hooks/useHover';
import {useConferenceStore} from '@/stores/conferenceStore';
import {useUIStore} from '@/stores/uiStore';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';
import CosmetologyScreen from "@/components/screens/сonference/stands/cosmetology/CosmetologyScreen";

const ConferenceCosmetology = ({...otherProps}) => {

    const ref = useRef(null)
    const active = useHover(ref)
    const setSchedule = useUIStore(state => state.setSchedule)
    const cosm = useConferenceStore(state => state.cosm)

    const transitions = useTransition(cosm && active, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: {
            easing: easePoly.exponent(2),
            duration: 300
        },
    })

    const handleShowSchedule = () => {
        API.tracker.sendEvent(EventsEnum.confDay5)
        if (cosm === 'live') {
            if (window) {
                window.open('https://events.loreal.com.ru/', '_blank')?.focus()
            }
        } else if (cosm === null || cosm === 'live-ended') {
            return
        } else {
            setSchedule('cosm')
        }
    }

    return (
        <Wrapper ref={ref} {...otherProps} onClick={handleShowSchedule}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/conference/light/cosm_light.png"/>
            ) : '')}

            <CosmetologyScreen/>
        </Wrapper>
    )
}

export default ConferenceCosmetology

const Wrapper = styled.div`
  position: absolute;
  display: block;
  width: 211px;
  left: 1295px;
  top: 256px;

  height: 645px;
  cursor: pointer;
  user-select: none;
  z-index: 11;
`

const Light = styled(animated.img)`
  position: absolute;
  top: 30px;
  left: -115px;
  pointer-events: none;
  user-select: none;
`