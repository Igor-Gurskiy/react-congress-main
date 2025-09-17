import {API} from '@/api';
import {EventsEnum} from '@/api/tracker';
import useHover from '@/hooks/useHover';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';

const BrochureLight = () => {

    const ref = useRef(null)
    const active = useHover(ref)

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

    return (
        <Wrapper ref={ref}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/hall/light/brochure-light.png"/>
            ) : '')}

            <DownloadBrochure tabIndex={-1} onClick={handleBrochureClick}
                              href="/assets/files/conference/ACD-Congress-2022.pdf" download target="_blank"/>
        </Wrapper>
    )
}

export default BrochureLight

const DownloadBrochure = styled.a`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 195px;
  height: 290px;
  outline: none;
  user-select: none;
`

const Wrapper = styled.div`
  position: absolute;
  top: 880px;
  left: 1690px;
  width: 200px;
  height: 295px;
  cursor: pointer;
  z-index: 11;
`

const Light = styled(animated.img)`
  position: absolute;
  top: -48px;
  left: -112px;
  pointer-events: none;
  user-select: none;
`