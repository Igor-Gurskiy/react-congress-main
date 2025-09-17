import React, {useEffect, useState} from 'react'
import {animated, useTransition} from "react-spring"

import styles from './RecycleAbout.module.scss'

const RecycleAbout = () => {
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
        document.addEventListener('open-recycle-about', onOpen, false)

        return () => document.removeEventListener('open-recycle-about', onOpen, false)
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
                    <div className={styles.shape1}>
                        <img src="/assets/images/green/recycle/game/about/shape1.svg" />
                    </div>

                    <div className={styles.shape2}>
                        <img src="/assets/images/green/recycle/game/about/shape2.svg" />
                    </div>
                    <div className={styles.container}>
                        <div className={styles.itemsContainer}>
                            <div className={styles.item}>
                                <div className={styles.itemNumber}>1</div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemTitle}>
                                        <div className={styles.itemName}>
                                            УПАКОВКА ДОЛЖНА БЫТЬ ЧИСТОЙ
                                        </div>
                                    </div>
                                    <div className={styles.itemDescription}>
                                        Пустую тару следует помыть, удалив остатки средства и загрязнения
                                    </div>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.itemNumber}>2</div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemTitle}>
                                        <div className={styles.itemName}>
                                            МАРКИРОВКА НА БАНОЧКАХ
                                        </div>
                                        <img src="/assets/images/green/recycle/game/about/icons.svg" />
                                    </div>
                                    <div className={styles.itemDescription}>
                                        Маркировка обозначает тип пластика, из которого сделана упаковка. Пока мы принимаем на переработку только пластик <b>с маркировкой 1,2 и 5</b>, а также тюбики с любой маркировкой <b>без металического слоя</b>.
                                    </div>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.itemNumber}>3</div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemTitle}>
                                        <div className={styles.itemName}>
                                            ТОЛЬКО ИЗ-ПОД КОСМЕТИКИ
                                        </div>
                                    </div>
                                    <div className={styles.itemDescription}>
                                        Мы не принимаем упаковку из-под средств бытовой химии, пищевых продуктов, техники и т.п.
                                        Мы также не принимаем тюбики от зубной пасты с металлизацией
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    ) : '')
}

export default RecycleAbout