import React, {useEffect} from 'react'
import clsx from "clsx"

import styles from './RecycleRules.module.scss'
import RecycleButton from "@/components/screens/green/recycle/shared/RecycleButton";
import scrollToElement from "@/utils/scrollToElement";

const RecycleInfo = () => {

    const onGameStartHandle = (e) => {
        e.preventDefault()

        const event = new CustomEvent('recycle-game-start')

        document.dispatchEvent(event)
    }

    const scrollToRules = () => {
        scrollToElement('recycle-rules')
    }

    useEffect(() => {
        document.addEventListener('recycle-game-rules', scrollToRules, false)

        return () => {
            document.removeEventListener('recycle-game-rules', scrollToRules, false)
        }
    }, [])

    return (
        <div className={styles.section} id="recycle-rules">
            <div className={styles.header}>
                <div className={styles.logo}>ПРАВИЛА ИГРЫ</div>
            </div>
            <div className={styles.rules}>
                <div className={styles.rulesList}>
                    <div className={styles.rulesItem}>
                        <div className={styles.rulesIcon}>
                            <img src="/assets/images/green/recycle/rules/icon-1.svg" alt=""/>
                        </div>
                        <div className={styles.rulesCaption}>
                            Определите<br/>
                            ТИП МУСОРА
                        </div>
                    </div>
                    <div className={styles.rulesItem}>
                        <div className={clsx(styles.rulesIcon, styles.rulesIconBig)}>
                            <img src="/assets/images/green/recycle/rules/icon-2.svg" alt=""/>
                        </div>
                        <div className={styles.rulesCaption}>
                            Разместите мусор либо к отходам, либо к вторсырью, либо в контейнер «несу перемены», нажав
                            на кнопку соответствующего контейнера
                        </div>
                    </div>
                    <div className={styles.rulesItem}>
                        <div className={styles.rulesIcon}>
                            <img src="/assets/images/green/recycle/rules/icon-3.svg" alt=""/>
                        </div>
                        <div className={styles.rulesCaption}>
                            Узнайте, насколько хорошо вы умеете сортировать отходы
                        </div>
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
        </div>
    )
}

export default RecycleInfo