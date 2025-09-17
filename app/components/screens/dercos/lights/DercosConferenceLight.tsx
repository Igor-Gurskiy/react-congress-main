import useHover from '@/hooks/useHover';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';

const DercosConferenceLight = ({children, ...otherProps}) => {

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

    return (
        <Wrapper ref={ref} {...otherProps}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/dercos/light/sprogramm.png"/>
            ) : '')}
            {children}
        </Wrapper>
    )
}

export default DercosConferenceLight


const Wrapper = styled.div`
  position: absolute;
  top: 491px;
  left: 1038px;
  width: 385px;
  height: 240px;
  cursor: pointer;
  z-index: 11;
`

const Light = styled(animated.img)`
  position: absolute;
  top: -100px;
  left: -92px;
  pointer-events: none;
`