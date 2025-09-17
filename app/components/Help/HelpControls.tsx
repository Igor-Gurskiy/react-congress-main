import { useUIStore } from '@/stores/uiStore'
import React, { useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

const HelpControls = () => {
    const helpOverlay = useUIStore(state => state.helpOverlay)
    
    const [styles, api] = useSpring(() => ({
        from: { transform: 'translateX(0px)' },
        to: [
            { transform: 'translateX(-20px)' },
            { transform: 'translateX(0px)' },
            { transform: 'translateX(20px)' },
            { transform: 'translateX(0px)' },
        ],
        delay: 1000,
        loop: { delay: 1500 },
        config: {
            mass: 1, tension: 170, friction: 26,
            duration: 300
        }
    }))

    // const dissapear = useSpring({
    //     from: { opacity: 1 },
    //     to: { opacity: 0 },
    //     delay: 2000,
    //     config: {
    //         mass: 1,
    //         tension: 170,
    //         friction: 26,
    //         duration: 300
    //     }
    // })

    useEffect(() => {
        if (helpOverlay) {
            api.start()
        }
    }, [helpOverlay])

    return (
        <Wrapper>
            <animated.div style={styles}><img src="assets/images/manual.png" /></animated.div>
            <Text>
                Листать вправо-влево<br />
                для просмотра комнаты
            </Text>
        </Wrapper>
    )
}

export default HelpControls

const Text = styled.div`
    font-weight: 800;
    font-size: 22px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 0px 10px rgba(0, 0, 0, 0.6);
`

const Wrapper = styled.div`
    position: absolute;
    left: 1087px;
    top: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`