import {API} from '@/api';
import {EventsEnum} from '@/api/tracker';
import useHover from '@/hooks/useHover';
import {useUIStore} from '@/stores/uiStore';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';
import {useConferenceStore} from '@/stores/conferenceStore';
import KidsScreen from "@/components/screens/сonference/stands/kids/KidsScreen";

const ConferenceKids = ({...otherProps}) => {

    const ref = useRef(null)
    const active = useHover(ref)
    const setSchedule = useUIStore(state => state.setSchedule)
    const ped = useConferenceStore(state => state.ped)

    const transitions = useTransition(ped && active, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: {
            easing: easePoly.exponent(2),
            duration: 300
        },
    })

    const handleShowSchedule = () => {
        API.tracker.sendEvent(EventsEnum.confDay2)
        if (ped === 'live') {
            if (window) {
                window.open('https://events.loreal.com.ru/', '_blank')?.focus()
            }
        } else if (ped === null || ped === 'live-ended') {
            return
        } else {
            setSchedule('ped')
        }
    }

    return (
        <Wrapper ref={ref} {...otherProps} onClick={handleShowSchedule}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/conference/light/ped_light.png"/>
            ) : '')}

            <KidsScreen/>
        </Wrapper>
    )
}

export default ConferenceKids

const Wrapper = styled.div`
  position: absolute;
  display: block;
  top: 230px;
  left: 579px;
  width: 218px;
  height: 685px;
  cursor: pointer;
  user-select: none;
  z-index: 11;
`

const Light = styled(animated.img)`
  position: absolute;
  top: 42px;
  left: -91px;
  pointer-events: none;
  user-select: none;
`