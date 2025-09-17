import { mediaMin } from '@/utils/media'
import React from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

const TourWelcome = ({ open, children }) => {
    const transition = useTransition(open, {
        from: { opacity: 0, transform: 'scale(0.8)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(1.1)' }
    })

    return transition((style, item) => item ? (
        <WelcomeMsg style={style}>
            {children}
        </WelcomeMsg>
    ) : '')
}

export default TourWelcome

const WelcomeMsg = styled(animated.div)`
    font-weight: 300;
    font-size: 64px;
    line-height: 77px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    position: absolute;
    

    ${mediaMin.md`
        top: 708px;
        left: 1275px;
    `}

    @media (orientation: landscape) and (max-height: 767.98px) {
        top: 708px;
        left: 1275px;
    }
`