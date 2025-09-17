import {API} from '@/api';
import {EventsEnum} from '@/api/tracker';
import useHover from '@/hooks/useHover';
import {useUIStore} from '@/stores/uiStore';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';
import CabinLightBase from "@/components/CabinLight";

const ConferenceCabinLight = ({...otherProps}) => {

    const ref = useRef(null)
    const active = useHover(ref)
    const locked = useUIStore(state => state.locked)
    const setCabin = useUIStore(state => state.setCabin)

    const transitions = useTransition(active, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: {
            easing: easePoly.exponent(2),
            duration: 300
        },
    })


    const handleBrochureClick = () => {
        API.tracker.sendEvent(EventsEnum.confBrochure)
    }

    const handleCabinClick = () => {
        API.tracker.sendEvent(EventsEnum.confPhotoVisit)
        setCabin('conference')
    }

    return (
        <Wrapper ref={ref} {...otherProps}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/conference/light/cabin_light.png"/>
            ) : '')}
            <CabinLight $locked={locked}/>
            <DownloadBrochure tabIndex={-1} onClick={handleBrochureClick}
                              href="/assets/files/conference/ACD-Congress-2022.pdf" download target="_blank"/>
        </Wrapper>
    )
}

export default ConferenceCabinLight
const DownloadBrochure = styled.a`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  outline: none;
  user-select: none;
  z-index: 1111;
`

const CabinLight = styled(CabinLightBase)`
  background: url('assets/images/cerave/cabin_light.png');
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-position: center left;
`

const Wrapper = styled.div`
  position: absolute;
  display: block;
  top: 325px;
  left: 1795px;
  width: 625px;
  height: 740px;
  cursor: pointer;
  user-select: none;
  z-index: 11;
`

const Light = styled(animated.img)`
  position: absolute;
  top: -167px;
  left: -150px;
  pointer-events: none;
  user-select: none;
`