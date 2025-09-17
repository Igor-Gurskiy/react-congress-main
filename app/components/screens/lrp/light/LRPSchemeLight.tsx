import {API} from '@/api';
import {EventsEnum} from '@/api/tracker';
import useHover from '@/hooks/useHover';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';

const LRPSchemeLight = ({...otherProps}) => {

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

    const handleSchemeClick = () => {
        API.tracker.sendEvent(EventsEnum.lrpScheme)
    }

    return (
        <Wrapper ref={ref} {...otherProps}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/lrp/light/scheme-light.png"/>
            ) : '')}

            <DownloadScheme tabIndex={-1} onClick={handleSchemeClick} href="assets/Catalogue_La_Roche_Posay.pdf"
                            download
                            target="_blank"/>
        </Wrapper>
    )
}

export default LRPSchemeLight

const Download = styled.a`
  position: absolute;
  left: 35px;
  width: 150px;
  height: 120px;
  z-index: 111;
`

const DownloadScheme = styled(Download)`
  top: 10px;
`

const Wrapper = styled.div`
  position: absolute;
  display: block;
  top: 635px;
  left: 1650px;
  width: 210px;
  height: 210px;
  cursor: pointer;
`

const Light = styled(animated.img)`
  position: absolute;
  top: -64px;
  left: -93px;
  pointer-events: none;
`