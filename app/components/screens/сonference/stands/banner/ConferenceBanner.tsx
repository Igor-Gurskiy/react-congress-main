import {API} from '@/api';
import {EventsEnum} from '@/api/tracker';
import useHover from '@/hooks/useHover';
import {useConferenceStore} from '@/stores/conferenceStore';
import {useUIStore} from '@/stores/uiStore';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';
import BannerScreen from "@/components/screens/сonference/stands/banner/BannerScreen";

const ConferenceBanner = ({...otherProps}) => {

    const ref = useRef(null)
    const active = useHover(ref)
    const setSchedule = useUIStore(state => state.setSchedule)
    const program = useConferenceStore((state) => state.program)

    const transitions = useTransition(program && active, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: {
            easing: easePoly.exponent(2),
            duration: 300
        }
    })

    const handleShowSchedule = () => {
        API.tracker.sendEvent(EventsEnum.confDay1)
        if (program === 'live') {
            if (window) {
                window.open('https://events.loreal.com.ru/', '_blank')?.focus()
            }
        } else if (program === null || program === 'live-ended') {
            return
        } else {
            setSchedule('program')
        }
    }

    return (
        <Wrapper ref={ref} {...otherProps} onClick={handleShowSchedule}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/conference/light/banner-light.png"/>
            ) : '')}

            <BannerScreen/>
        </Wrapper>
    )
}

export default ConferenceBanner

const Wrapper = styled.div`
  display: block;

  position: absolute;
  left: 80px;
  top: 235px;
  width: 430px;
  height: 650px;

  cursor: pointer;
  user-select: none;
  z-index: 11;
`

const Light = styled(animated.img)`
  position: absolute;
  top: -235px;
  left: -80px;
  pointer-events: none;
  user-select: none;
`