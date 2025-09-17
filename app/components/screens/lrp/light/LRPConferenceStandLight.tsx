import useHover from '@/hooks/useHover';
import { easePoly } from 'd3-ease';
import React, { useRef } from "react";
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';

const LRPConferenceStandLight = ({ children, ...otherProps }) => {

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
                <Light style={style} src="assets/images/lrp/light/conference-light.png" />
            ) : '')}
            {children}
        </Wrapper>
    )
}

export default LRPConferenceStandLight


const Wrapper = styled.div`
    position: absolute;
    top: 440px;
    left: 1028px;
    width: 510px;
    height: 280px;
    cursor: pointer;
    z-index: 11;
`

const Light = styled(animated.img)`
    position: absolute;
    top: -121px;
    left: -167px;
    pointer-events: none;
`