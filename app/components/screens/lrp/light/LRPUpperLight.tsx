import useHover from '@/hooks/useHover';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';
import ModalService from "@/components/shared/modal/ModalService";
import OncoSupportModal from "@/components/screens/lrp/modals/onco-support/OncoSupportModal";

const LRPUpperLight = () => {

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
        <Wrapper ref={ref} onClick={() => ModalService.open(OncoSupportModal)}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/lrp/light/upper-banner.png"/>
            ) : '')}
        </Wrapper>
    )
}

export default LRPUpperLight


const Wrapper = styled.div`
  position: absolute;
  top: 610px;
  left: 362px;
  width: 347px;
  height: 107px;
  cursor: pointer;
`

const Light = styled(animated.img)`
  position: absolute;
  top: -52px;
  left: -50px;
  pointer-events: none;
`