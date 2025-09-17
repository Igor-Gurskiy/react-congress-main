import React from 'react'

import styles from './RecycleIntro.module.scss'
import Marquee from "react-fast-marquee";
import RecycleButton from "@/components/screens/green/recycle/shared/RecycleButton";

const marqueSettings = {
    loop: 0,
    speed: 20,
    delay: 0
}


const GreenIntro = () => {

    const onGameStartHandle = (e) => {
        e.preventDefault()

        const event = new CustomEvent('recycle-game-rules')

        document.dispatchEvent(event)
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div className={styles.logo}>ACD</div>
            </div>
            <div className={styles.intro}>
                <div className={styles.body}>
                    <h1>СПАСАЙТЕ ВТОРСЫРЬЁ ОТ УНИЧТОЖЕНИЯ</h1>
                    <h3>ПРАКТИКУМ ПО СОРТИРОВКЕ</h3>
                </div>

                <div className={styles.shape3}></div>

                <div className={styles.shape1}>
                    <img src="/assets/images/green/recycle/intro/shape-1.svg"/>
                </div>

                <div className={styles.shape2}>
                    <img src="/assets/images/green/recycle/intro/shape-2.svg"/>
                </div>

                <div className={styles.marquee}>
                    <Marquee
                        direction="right"
                        {...marqueSettings}
                    >
                        <MarqueLine/>
                    </Marquee>
                </div>

                <div className={`${styles.marquee} ${styles.marquee2}`}>
                    <Marquee
                        direction="left"
                        {...marqueSettings}
                    >
                        <MarqueLine/>
                    </Marquee>
                </div>

            </div>

            <div className={styles.controls}>
                <RecycleButton
                    className={styles.play}
                    onClick={onGameStartHandle}
                >
                    Играть
                </RecycleButton>
            </div>
        </div>
    )
}

export default GreenIntro


const MarqueLine = () => {
    return (
        <>
            {[1, 2].map((id) => (
                <div
                    key={id}
                    style={{
                        display: 'inline-block',
                        marginRight: 8
                    }}
                >
                    ПРАКТИКУМ ПО СОРТИРОВКЕ // ACD // ПРАКТИКУМ ПО СОРТИРОВКЕ // ACD //
                </div>
            ))}
        </>
    )
}