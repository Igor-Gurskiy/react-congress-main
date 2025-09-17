import {API} from '@/api';
import {EventsEnum} from '@/api/tracker';
import useHover from '@/hooks/useHover';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';

const GreenBrochureLight = ({...otherProps}) => {

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
        API.tracker.sendEvent(EventsEnum.greenBrochure)
    }

    return (
        <Wrapper ref={ref} {...otherProps}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/green/light/scheme-light.png"/>
            ) : '')}

            <DownloadScheme tabIndex={-1} onClick={handleSchemeClick}
                            href="assets/files/green/L4TF-ACD-Congress-2022.pdf" download
                            target="_blank"/>
        </Wrapper>
    )
}

export default GreenBrochureLight

const Download = styled.a`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 111;
`

const DownloadScheme = styled(Download)`
  top: 0px;
`

const Wrapper = styled.div`
  position: absolute;
  display: block;
  top: 418px;
  left: 1629px;
  width: 325px;
  height: 600px;
  cursor: pointer;
`

const Light = styled(animated.img)`
  position: absolute;
  top: -44px;
  left: -80px;
  pointer-events: none;
`