import useHover from '@/hooks/useHover';
import {useUIStore} from '@/stores/uiStore';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';
import CabinLightBase from '../../../CabinLight';

const VichyCabinLight = ({...otherProps}) => {

    const locked = useUIStore(state => state.locked)
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
                <Light style={style} src="assets/images/vichy/light/game-light.png"/>
            ) : '')}
            <CabinLight $locked={locked}/>
        </Wrapper>
    )
}

export default VichyCabinLight


const Wrapper = styled.div`
  position: absolute;
  top: 240px;
  left: 1991px;
  width: 435px;
  height: 785px;
  cursor: pointer;
  z-index: 11;
`

const Light = styled(animated.img)`
  position: absolute;
  top: -60px;
  left: -55px;
  pointer-events: none;
`

const CabinLight = styled(CabinLightBase)`
  user-select: none;
  background: url(assets/images/cabin-light.png);
  top: 0%;
  right: 0%;
  width: 560px;
  height: 689px;
`