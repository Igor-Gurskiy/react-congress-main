import React from 'react'
import { GameButton } from '@/components/screens/vichy/game/components/GameButton'
import styles from './Welcome.module.scss'
import { useVichyGameStore } from '@/components/screens/vichy/game/stores/vichyGameStore'

const Welcome = ({ close }) => {
	const setShowContinueTip = useVichyGameStore(
		(state) => state.setShowContinueTip,
	)
	const handleStartGame = () => {
		close()
		setShowContinueTip()
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				Добро пожаловать <br /> в лабораторию VICHY
			</div>
			<div className={styles.question}>
				Какой протокол ухода
				<br />
				вы бы назначили пациенту?
			</div>
			<div className={styles.text}>
				Выберите из продуктов те, <br />
				которые подходят для лечения пациента
			</div>
			<div className={styles.controls} onClick={handleStartGame}>
				<GameButton button={true}>Играть</GameButton>
			</div>
			<div className={styles.ad}>Реклама skin.ru ERID: 2SDnjdLpHtk</div>
		</div>
	)
}

export default Welcome
