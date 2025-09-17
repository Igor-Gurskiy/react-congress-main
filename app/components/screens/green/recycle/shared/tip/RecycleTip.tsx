import React, {EventHandler} from "react";

import styles from './RecycleTip.module.scss'
import RecycleButton from "@/components/screens/green/recycle/shared/RecycleButton";
import StemIcon from "@/components/screens/green/recycle/shared/tip/StemIcon";
import LeafIcon from "@/components/screens/green/recycle/shared/tip/LeafIcon";

const RecycleTip = ({ close = () => {}, handleClose = () => {} }) => {

    const onClose = () => {
        close()
        handleClose()
    }

    const handleChangesClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault()

        const modalEvent = new CustomEvent('open-recycle-changes')

        document.dispatchEvent(modalEvent)
    }

    return (
        <div className={styles.tip}>
            <div className={styles.tipHeader}>
                <div className={styles.tipLogoWrapper}>
                    <div className={styles.tipLogo}> ?</div>
                </div>
            </div>
            <div className={styles.tipCloseWrapper}>
                <div className={styles.tipClose} onClick={onClose}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1 1c-.5.6-.5 1.6 0 2.2L5 7 1 11A1.5 1.5 0 1 0 3.4 13L7 9.2l3.8 3.8a1.5 1.5 0 1 0 2.2-2.1L9.3 7 13 3.2A1.5 1.5 0 0 0 10.9 1L7.1 5 3.3 1C2.7.4 1.7.4 1 1Z"
                              fill="#8CCF3A"></path>
                    </svg>
                </div>
            </div>
            <div className={styles.tipBody}>
                <p>
                    Пластик, тетра пак, стекло, металл и пластиковые стаканчики — всё это вторсырьё. Следите за тем, чтобы
                    остатки пищи, мелкий мусор и грязная/жирная бумага не попали в контейнер для вторсырья и не загрязнили
                    его
                </p>
                <RecycleButton
                    className={styles.btnWrapper}
                    onClick={handleChangesClick}
                >
                    <StemIcon />
                    <p>Несу перемены</p>
                    <LeafIcon />
                </RecycleButton>
            </div>
        </div>
    )
}

export default RecycleTip