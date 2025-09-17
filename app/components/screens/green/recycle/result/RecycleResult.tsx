import React, {useEffect, useState} from 'react'

import styles from './RecycleResult.module.scss'
import scrollToElement from "@/utils/scrollToElement";
import RecycleButton from "@/components/screens/green/recycle/shared/RecycleButton";
import recycleQuestions from "@/components/screens/green/recycle/recycle.questions";
import recycleResults from "@/components/screens/green/recycle/recycleResults";
import {API} from "@/api";
import {EventsEnum} from "@/api/tracker";


const RecyleResult = () => {
    const [ready, setReady] = useState(false)
    const [score, setScore] = useState(0)

    const errorsCount = recycleQuestions.length - score
    const result = recycleResults.find(res => res.rating >= errorsCount) || recycleResults[recycleResults.length - 1]

    const offset = (errorsCount / 13) * 565.48

    const onShowResult = (event) => {
        const newScore = event.detail.score
        setReady(true)
        setScore(newScore)
        scrollToElement('recycle-result')

        API.tracker.sendEvent(EventsEnum.greenGameResult, `params[score]=${newScore}`)
    }

    const onGameRestart = () => {
        const event = new CustomEvent('recycle-game-restart')
        document.dispatchEvent(event)

        setTimeout(() => {
            setReady(false)
        }, 700)
    }

    useEffect(() => {
        if (ready) {
            scrollToElement('recycle-result')
        }
    }, [ready])

    useEffect(() => {
        document.addEventListener('recycle-show-result', onShowResult, false)

        return () => document.removeEventListener('recycle-show-result', onShowResult, false)
    }, [])

    return (
        <div className={styles.wrapper} style={{maxHeight: ready ? '1399px' : 0}}>
            <div id="recycle-result" className={styles.page}>

                <div className={styles.result}>
                    <div className={styles.shape4}>
                        <img src="/assets/images/green/recycle/result/shape-3.svg"/>
                    </div>

                    <div className={styles.shape3}></div>

                    <div className={styles.shape1}>
                        <img src="/assets/images/green/recycle/result/shape-1.svg"/>
                    </div>

                    <div className={styles.shape2}>
                        <img src="/assets/images/green/recycle/result/shape-2.svg"/>
                    </div>

                    <div className={styles.resultHead}>
                        <div className={styles.gameTotal}>
                            <img className="recycle__circle-item"
                                 src="/assets/images/green/recycle/result/circe-text.svg" alt=""/>
                            <div className={styles.gameTotalMain}>
                                <div className={styles.gameTotalView}>
                                    <div className={styles.gameTotalBar}>
                                        <svg id="svg" width="192" height="192" viewBox="0 0 192 192" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle r="84" cx="96" cy="96" fill="transparent"
                                                    strokeDasharray="565.48" stroke-aligment="inside"
                                                    strokeDashoffset="0"></circle>
                                            <circle id="bar" r="84" cx="96" cy="96" fill="transparent"
                                                    strokeDasharray="565.48" stroke-aligment="inside"
                                                    strokeDashoffset="0"
                                                    style={{strokeDashoffset: offset}}></circle>
                                        </svg>
                                    </div>
                                    <div className={styles.gameTotalCount}>
                                        {score}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.resultBody}>
                        <div className={styles.resultTitle}>{result.title}</div>
                        <div className={styles.resultCaption}>
                            {result?.caption}
                        </div>
                        <div>
                            <RecycleButton
                                className={styles.playAgain}
                                onClick={onGameRestart}
                            >
                                Играть ещё
                            </RecycleButton>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecyleResult
