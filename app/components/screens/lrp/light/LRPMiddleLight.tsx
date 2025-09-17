import useHover from '@/hooks/useHover';
import {easePoly} from 'd3-ease';
import React, {useRef} from "react";
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components';
import ModalService from "@/components/shared/modal/ModalService";
import FondationModal from "@/components/screens/lrp/modals/fondation/FondationModal";

const LRPMiddleLight = () => {

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
        <Wrapper ref={ref} onClick={() => ModalService.open(FondationModal)}>
            {transitions((style, item) => item ? (
                <Light style={style} src="assets/images/lrp/light/middle-banner.png"/>
            ) : '')}
        </Wrapper>
    )
}

export default LRPMiddleLight

const Wrapper = styled.div`
  position: absolute;
  top: 743px;
  left: 363px;
  width: 346px;
  height: 106px;
  cursor: pointer;
`

const Light = styled(animated.img)`
  position: absolute;
  top: -52px;
  left: -48px;
  pointer-events: none;
`