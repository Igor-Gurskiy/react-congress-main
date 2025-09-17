import {API} from '@/api';
import {EventsEnum} from '@/api/tracker';
import useHover from '@/hooks/useHover';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';

const DercosSchemeLight = ({...otherProps}) => {

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
        API.tracker.sendEvent(EventsEnum.dercosBrochure)
    }

    return (
        <Wrapper ref={ref} {...otherProps}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/dercos/light/catalog.png"/>
            ) : '')}

            <DownloadScheme tabIndex={-1} onClick={handleSchemeClick} href="assets/files/vichy/VICHY_catalog_pdf.pdf"
                            download target="_blank"/>
        </Wrapper>
    )
}

export default DercosSchemeLight

const Download = styled.a`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 11;
`

const DownloadScheme = styled(Download)`
  top: 0px;
`

const Wrapper = styled.div`
  position: absolute;
  display: block;
  top: 525px;
  left: 1534px;
  width: 324px;
  height: 458px;
  cursor: pointer;
`

const Light = styled(animated.img)`
  position: absolute;
  top: -54px;
  left: -80px;
  pointer-events: none;
`