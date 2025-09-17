import React from 'react'

import styles from './RulesHint.module.scss'
import HintButton from "@/components/screens/green/recycle/shared/HintButton";

const RecycleHint = () => {
    return (
        <div className={styles.hint}>
            <div className={styles.hintBody}>
                <div className={styles.hintIcon}>
                    <HintButton className={styles.hintIconButton}>?</HintButton>
                </div>
                <div className={styles.hintTitle}>
                    СОМНЕВАЕТЕСЬ? ВОСПОЛЬЗУЙТЕСЬ ПОДСКАЗКОЙ!
                </div>
            </div>
        </div>
    )
}

export default RecycleHint