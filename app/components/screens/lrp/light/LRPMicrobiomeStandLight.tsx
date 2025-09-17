import useHover from '@/hooks/useHover';
import { easePoly } from 'd3-ease';
import React, { useRef } from "react";
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';

const LRPMicrobiomeStandLight = ({ children, ...otherProps }) => {

    const ref = useRef(null)
    const active = useHover(ref)

    const transitions = useTransition(active, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: {
            easing: easePoly.exponent(2),
            duration: 300
        },
    })

    return (
        <Wrapper ref={ref} {...otherProps}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/lrp/light/microbiome-light.png" />
            ) : '')}
            {children}
        </Wrapper>
    )
}

export default LRPMicrobiomeStandLight


const Wrapper = styled.div`
    position: absolute;
    top: 190px;
    left: 1148px;
    width: 270px;
    height: 220px;
    cursor: pointer;
    z-index: 11;
    user-select: none;
`

const Light = styled(animated.img)`
    position: absolute;
    top: -104px;
    left: -243px;
    pointer-events: none;
`