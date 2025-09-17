import React, {useEffect, useState} from 'react'
import {animated, useTransition} from "react-spring"

import styles from './RecycleChanges.module.scss'

const RecycleChanges = () => {
    const [open, setOpen] = useState<boolean>(false)

    const transitions = useTransition(open, {
        from: {opacity: 0, y: -50},
        enter: {opacity: 1, y: 0},
        leave: {opacity: 0, y: -50},
        config: {
            // easing: easePoly.exponent(2),
            duration: 200
        }
    })

    const onClose = () => setOpen(false)
    const onOpen = () => setOpen(true)

    useEffect(() => {
        document.addEventListener('open-recycle-changes', onOpen, false)

        return () => document.removeEventListener('open-recycle-changes', onOpen, false)
    }, [])

    return transitions((style, item) => item ? (
        <animated.div style={style} className={styles.wrapper}>
            <div className={styles.changes} style={{background: "#fff", height: '100%'}}>
                <div className={styles.closeWrapper}>
                    <div className={styles.close} onClick={onClose}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M1 1c-.5.6-.5 1.6 0 2.2L5 7 1 11A1.5 1.5 0 1 0 3.4 13L7 9.2l3.8 3.8a1.5 1.5 0 1 0 2.2-2.1L9.3 7 13 3.2A1.5 1.5 0 0 0 10.9 1L7.1 5 3.3 1C2.7.4 1.7.4 1 1Z"
                                  fill="#8CCF3A"></path>
                        </svg>
                    </div>
                </div>

                <div className={styles.changeScrollableWrapper}>
                    <div className={styles.header} style={{ backgroundImage: 'url(/assets/images/green/recycle/game/changes/header.png)' }}>
                        <div className={styles.title}>НЕСУ ПЕРЕМЕНЫ</div>
                        <div className={styles.subtitle}>
                            ПРОЕКТ<br />
                            <b>ПО ПЕРЕРАБОТКЕ УПАКОВКИ</b><br />
                            ИЗ-ПОД КОСМЕТИКИ
                        </div>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.itemsContainer}>
                            <img src="/assets/images/green/recycle/game/changes/col1.png" />
                            <img src="/assets/images/green/recycle/game/changes/col2.png" />
                        </div>
                        <div className={styles.more}>Подробнее на сайте laroche-posay.ru/eco-project</div>
                    </div>
                </div>
            </div>
        </animated.div>
    ) : '')
}

export default RecycleChanges