import React from 'react'
import clsx from "clsx"

import styles from './RecycleInfo.module.scss'

const RecycleInfo = () => {
    return (
        <div className={styles.section}>
            <div className={styles.info}>
                <div className={clsx(styles.shape, styles.shape2)}></div>
                <div className={clsx(styles.shape, styles.shape1)}>
                    <img src="/assets/images/green/recycle/info/shape-1.svg" alt=""/>
                </div>
                <div className={clsx(styles.head)}>
                    ПОЧЕМУ ЭТО&nbsp;ВАЖНО?
                </div>
                <div className={styles.recycleInfoBody}>
                    <div className={styles.recycleInfoBodyLeft}>
                        Чем больше отходов попадает во вторичное использование, тем меньше ресурсов планеты потребуется
                        для производства новых товаров.
                    </div>
                    <div className={styles.recycleInfoBodyRight}>
                        Мы работаем с лидерами отрасли переработки, чтобы свести к минимуму уничтожение отходов. Нужна
                        ваша помощь в правильной сортировке для максимальной эффективности процесса утилизации.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecycleInfo