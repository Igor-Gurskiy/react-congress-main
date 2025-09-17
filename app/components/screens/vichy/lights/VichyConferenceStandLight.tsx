import useHover from '@/hooks/useHover';
import { easePoly } from 'd3-ease';
import React, { useRef } from "react";
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';

const VichyConferenceStandLight = ({ children, ...otherProps }) => {

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
                <Light style={style} src="assets/images/vichy/light/conference-light.png" />
            ) : '')}
            {children}
        </Wrapper>
    )
}

export default VichyConferenceStandLight


const Wrapper = styled.div`
    position: absolute;
    top: 460px;
    left: 970px;
    width: 530px;
    height: 305px;
    cursor: pointer;
    z-index: 11;
`

const Light = styled(animated.img)`
    position: absolute;
    top: -54px;
    left: -112px;
    pointer-events: none;
`