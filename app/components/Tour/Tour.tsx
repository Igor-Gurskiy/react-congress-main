import React from 'react'
import {animated, useTransition} from 'react-spring'
import styled from 'styled-components'
import TourArrow from './TourArrow'
import TourLight from './TourLight'
import TourStep from './TourStep'
import TourWelcome from './TourWelcome'

const Tour = ({open, children}) => {

    const transition = useTransition(open, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })


    return transition((style, item) => item ? (
        <TourWrapper style={style}>
            {children}
        </TourWrapper>
    ) : '')
}

export default Tour

Tour.Step = TourStep
Tour.Welcome = TourWelcome
Tour.Light = TourLight
Tour.Arrow = TourArrow

const TourWrapper = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1001;
`