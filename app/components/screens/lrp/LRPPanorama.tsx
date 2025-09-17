import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import Panorama from '../../shared/panorama/Panorama'

const LRPPanorama = ({ children = null }) => {
    return (
        <Panorama>
            <Background />
            {children}
        </Panorama>
    )
}

export default LRPPanorama

const Background = styled(animated.div)`
    background: url(assets/images/LRP240821.jpg);
    position: absolute;
    width: 2500px;
    height: 1250px;
    top: 0%;
    left: 0%;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    transition: all 1s;
    transform: translateZ(0);
    will-change: transform;
`

