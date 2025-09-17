import React, {useEffect, useState} from 'react'

import styles from './RecycleGame.module.scss'
import RecycleButton from "@/components/screens/green/recycle/shared/RecycleButton";
import HintButton from "@/components/screens/green/recycle/shared/HintButton";
import clsx from "clsx";
import recycleQuestions from "@/components/screens/green/recycle/recycle.questions";
import scrollToElement from "@/utils/scrollToElement";
import RecycleTip from "@/components/screens/green/recycle/shared/tip/RecycleTip";
import AnswerTip from "@/components/screens/green/recycle/shared/answer-tip/AnswerTip";
import RecycleTipRoot from "@/components/screens/green/recycle/shared/tip/RecycleTipRoot";
import RecycleTipService from "@/components/screens/green/recycle/shared/tip/RecycleTipService";
import {animated, useTransition} from "react-spring";
import RecycleChanges from "@/components/screens/green/recycle/changes/RecycleChanges";
import RecycleAbout from "@/components/screens/green/recycle/about/RecycleAbout";
import useWindowSize from "@/hooks/useWindowSize";


const RecyleGame = () => {
    const [ready, setReady] = useState(false)
    const [scale, setScale] = useState(1)
    const [height, setHeight] = useState<number | string>('100%')
    const [num, setNum] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [points, setPoints] = useState(0)
    const [screenWidth, screenHeight] = useWindowSize()
    const question = recycleQuestions[num]

    const transitions = useTransition(question, {
        from: {opacity: 0, scale: 0.8},
        enter: {opacity: 1, scale: 1},
        leave: {opacity: 0, scale: 0.8},
        config: {
            // easing: easePoly.exponent(2),
            duration: 300
        }
    })

    const handleAnswer = (variant: "green" | "grey" | "lrp") => {
        if (disabled) {
            return
        }

        if (!question) {
            alert('Произошла ошибка, обновите страницу')
            return
        }

        const isCorrect = question.variant.concat().includes(variant)
        const title = question.title
        const addPoints = isCorrect ? 1 : 0

        if (isCorrect) {
            setPoints(points + 1)
        }

        setDisabled(true)
        RecycleTipService.open(
            AnswerTip,
            {
                handleNext: handleNext.bind(null, points + addPoints),
                variant,
                correct: isCorrect,
                content: title
            }
        )
    }

    const handleNext = (score) => {
        if (recycleQuestions.length <= num + 1) {
            onShowResult(score)
            return
        }

        setDisabled(false)
        setNum(num + 1)
    }

    const handleHint = () => {
        if (disabled) return

        setDisabled(true)

        RecycleTipService.open(
            RecycleTip,
            {
                handleClose: setDisabled.bind(null, false)
            }
        )
    }

    const onGameStart = () => {
        setReady(true)
        scrollToElement('recycle-game-wrapper')

    }

    const onShowResult = (score) => {
        const event = new CustomEvent('recycle-show-result', {
            detail: {
                score
            }
        })

        document.dispatchEvent(event)
    }

    const onGameRestart = () => {
        setReady(true)
        setNum(0)
        setDisabled(false)
        setPoints(0)
        scrollToElement('recycle-game-wrapper')
    }

    useEffect(() => {
        if (ready) {
            scrollToElement('recycle-game-wrapper')
        }
    }, [ready])

    useEffect(() => {
        const vertical = window.innerWidth > window.innerHeight
        const scaleY = vertical ? (window.innerHeight - 60) / 995 : (window.innerHeight) / 685
        const scaleX = window.innerWidth / 1144

        const scale = vertical ? Math.min(scaleX, scaleY) : Math.max(scaleX, scaleY)

        if (scale > 1) {
            setScale(1)
        } else {
            setScale(scale)
        }
        setHeight(window.innerHeight + 50 * scale)

    }, [screenWidth, screenHeight])

    useEffect(() => {
        document.addEventListener('recycle-game-start', onGameStart, false)
        document.addEventListener('recycle-game-restart', onGameRestart, false)

        return () => {
            document.removeEventListener('recycle-game-start', onGameStart, false)
            document.removeEventListener('recycle-game-restart', onGameRestart, false)
        }
    }, [])

    return (
        <div className={styles.wrapper} style={{
            maxHeight: ready ? '1399px' : 0,
            // height
        }}>
            <div id="recycle-game-wrapper" className={styles.selector}/>
            <div className={styles.page} style={{
                transform: scale < 1 ? `scale(${scale})` : `scale(1)`,
                // padding: `${130 / scale}px ${20 / scale}px 0`
                transformOrigin: screenWidth ? 'center' : 'center',
                // padding: `${80 * scale}px ${20 / scale}px 0`,
                // marginTop: `${120 / scale}px`
            }}>
                <div className={styles.shape1}>
                    <img src="/assets/images/green/recycle/game/shape-1.svg"/>
                </div>

                <div className={styles.shape2}>
                    <img src="/assets/images/green/recycle/game/shape-2.svg"/>
                </div>

                <div className={styles.body}>
                    <div className={styles.box}>
                        <div id="recycle-game" className={styles.header}>
                            <div className={styles.logo}>
                                СПАСИте ВТОРСЫРЬЁ<br/>
                                ОТ УНИЧТОЖЕНИЯ
                            </div>
                        </div>

                        <div className={styles.view}>
                            {transitions((style, item) => item ? (
                                <animated.div style={style} className={styles.question}>
                                    <div className={styles.viewItem}>
                                        <div className={styles.gameItem}>
                                            <img src={item.icon} alt=""/>
                                        </div>
                                    </div>
                                    <div className={styles.gameCaption}>
                                        {item.caption}
                                    </div>
                                </animated.div>
                            ) : '')}
                        </div>

                        <div className={styles.tipsContainer}>
                            <RecycleTipRoot/>

                            <div className={styles.gameTip}>
                                <HintButton
                                    onClick={handleHint}
                                >
                                    ?
                                </HintButton>
                            </div>
                        </div>


                    </div>
                </div>

                <div className={styles.gameContainers}>
                    <div className={styles.gameContainer}>
                        <img src="/assets/images/green/recycle/game/container-1.svg" alt=""/>
                    </div>
                    <div className={styles.gameContainer}>
                        <img src="/assets/images/green/recycle/game/container-3.svg" alt=""/>
                    </div>
                    <div className={styles.gameContainer}>
                        <img src="/assets/images/green/recycle/game/container-2.svg" alt=""/>
                    </div>

                    <div className={styles.gamePanel}>
                        <div className={styles.gamePanelColumn}>
                            <RecycleButton
                                onClick={handleAnswer.bind(null, 'green')}
                                className={clsx(styles.button, styles.option)}
                            >
                                Вторсырье
                            </RecycleButton>
                        </div>
                        <div className={styles.gamePanelColumn}>
                            <RecycleButton
                                onClick={handleAnswer.bind(null, 'lrp')}
                                className={styles.button}
                            >
                                Несу перемены
                            </RecycleButton>
                        </div>
                        <div className={styles.gamePanelColumn}>
                            <RecycleButton
                                onClick={handleAnswer.bind(null, 'grey')}
                                className={styles.button}
                            >
                                Прочие отходы
                            </RecycleButton>
                        </div>
                    </div>
                </div>

                <RecycleChanges/>
                <RecycleAbout/>
            </div>
        </div>
    )
}

export default RecyleGame
