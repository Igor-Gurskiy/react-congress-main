import useHover from '@/hooks/useHover';
import { easePoly } from 'd3-ease';
import React, { useRef } from "react";
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';

const VichyBrochureLight = ({ ...otherProps }) => {

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
                <Light style={style} src="assets/images/vichy/light/brochure-light.png" />
            ) : '')}
        </Wrapper>
    )
}

export default VichyBrochureLight


const Wrapper = styled.a`
    position: absolute;
    top: 609px;
    left: 1587px;
    width: 220px;
    height: 180px;
    cursor: pointer;
    z-index: 11;
`

const Light = styled(animated.img)`
    position: absolute;
    top: -45px;
    left: -87px;
    pointer-events: none;
`