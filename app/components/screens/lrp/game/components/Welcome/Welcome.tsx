import React from 'react'
import { GameButton } from '@/components/screens/lrp/game/components/GameButton'
import styles from './Welcome.module.scss'
import welcomeImage from '/public/assets/images/lrp/game/welcome-img.png'
import ScrollbarsBody from '@/components/ScollbarsBody'
import { useLRPGameStore } from '@/components/screens/lrp/game/stores/LRPGameStore'

const Welcome = ({ close }) => {
	const setStarted = useLRPGameStore((state) => state.setStarted)

	const handleClose = () => {
		close()
		setStarted()
	}

	return (
		<div className={styles.wrapper}>
			<ScrollbarsBody factor={-60}>
				<div className={styles.container}>
					<div className={styles.title}>
						Добро пожаловать <br /> в лабораторию La&nbsp;roche-posay
					</div>
					<div className={styles.text}>
						Определите средство La&nbsp;Roche-Posay по&nbsp;описанию
						и&nbsp;соберите уход для&nbsp;разных состояний кожи и&nbsp;получите
						шанс* выиграть один из&nbsp;лимитированных{' '}
						<b>ланч-боксов от&nbsp;марки La&nbsp;Roche-Posay</b>
					</div>
					<img className={styles.image} src={welcomeImage.src} alt="" />
					<div className={styles.description}>
						*1000 победителей будут выбраны случайным образом. Призы будут
						разосланы по&nbsp;окончании конгресса.
					</div>
					<div className={styles.controls}>
						<GameButton button onClick={handleClose}>
							Играть
						</GameButton>
					</div>
					<div className={styles.ad}>Реклама skin.ru ERID: 2SDnjbuoKbN</div>
				</div>
			</ScrollbarsBody>
		</div>
	)
}

export default Welcome
