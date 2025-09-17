import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useUIStore } from '../stores/uiStore'

const Screens = () => {
    const [screen, setScreen] = useState(1)
    const locked = useUIStore(state => state.locked)

    // useEffect(() => {
    //     setScreen(1)
    // }, [])

    // useEffect(() => {
    //     const updater = setTimeout(() => {
    //         if (locked) return setScreen(1)
    //         const nextScreen = screen === 3 ? 1 : screen + 1
    //         return setScreen(nextScreen)
    //     }, 3000)

    //     return () => {
    //         clearTimeout(updater)
    //     }
    // }, [locked, screen])

    // useEffect(() => {
    //     if (!locked) {
    //         setScreen(state => state < 3 ? state + 1 : 1)
    //     } else {
    //         setScreen(1)
    //     }
    // }, [locked])

    return (
        <Screen>
            <Screen1 style={{ opacity: screen === 1 ? 1 : 0 }} />
            {/* <Screen2 style={{ opacity: screen === 2 ? 1 : 0 }} />
            <Screen3 style={{ opacity: screen === 3 ? 1 : 0 }} /> */}
        </Screen>
    )
}

export default Screens

const ScreenAnimation = keyframes`
    0% {
        transform: translate3d(0px, 0px, 0px);
    }
    15% {
        transform: translate3d(-18px, 24px, 0px);
    }
    30% {
        transform: translate3d(-30px, 0px, 0px);
    }
    45% {
        transform: translate3d(-24px, -18px, 0px);
    }
    60% {
        transform: translate3d(0px, -30px, 0px);
    }
    75% {
        transform: translate3d(24px, -18px, 0px);
    }
    90%{
        transform: translate3d(30px, 0px, 0px);
    }
    100% {
        transform: translate3d(0px, 0px, 0px);
    }
`

const Screen = styled.div`
    position: absolute;
    width: 2500px;
    height: 1250px;
    top: 0%;
    left: 0%;
    transition: all 0.3s ease-out;
    /* animation: ${ScreenAnimation} 25s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite; */
    z-index: 1;
`

const ScreenBase = styled.div`
    background-size: contain;
    position: absolute;
    width: 2500px;
    height: 1250px;
    background-position: center center;
    top: 0%;
    left: 0%;
    transition: all 0.7s ease-out;
    will-change: opacity;
    transform: translateZ(0);
`
const Screen1 = styled(ScreenBase)`
    background-image: url(assets/images/screen1.png);
`
const Screen2 = styled(ScreenBase)`
    background-image: url(assets/images/screen2.png);
`
const Screen3 = styled(ScreenBase)`
    background-image: url(assets/images/screen3.png);
`