import React, { useMemo } from 'react'
import {
	GameButton,
	GameButtonGreen,
	GameButtonOrange,
	GameButtonPink,
} from '@/components/screens/lrp/game/components/GameButton'

import styles from './ProgressBar.module.scss'
import { useLRPGameStore } from '@/components/screens/lrp/game/stores/LRPGameStore'
import { stepBySection } from '@/components/screens/lrp/game/LRPGame'
import { useUIStore } from '@/stores/uiStore'

const ProgressBar = ({ section = 'cicaplast' }) => {
	const score = useLRPGameStore((state) => state.score)
	const maxScore = useLRPGameStore((state) => state.maxScore)
	const correct = useLRPGameStore((state) => state.correct)
	const spec = useUIStore((state) => state.specialization)
	const step = useLRPGameStore((state) => state.step)
	const nextStep = useLRPGameStore((state) => state.nextStep)

	const percentage = useMemo(
		() => Number(((score / maxScore) * 100).toFixed(0)),
		[score, maxScore],
	)

	const showNext = useMemo(() => {
		let multiplier = spec === 'oncology' ? 5 : 4
		return score && score % (step * multiplier) == 0
	}, [score, step])

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.percentageValue}>{percentage}%</div>
				<div className={styles.bar}>
					<div
						className={`${styles.progress} ${
							styles[`progress${stepBySection[section]}`]
						}`}
						style={{ width: `${percentage}%` }}
					/>
				</div>
			</div>

			{showNext ? (
				<div className={styles.info}>
					{section === 'effaclar' ? (
						<GameButtonGreen button={true} onClick={nextStep}>
							Далее
						</GameButtonGreen>
					) : section === 'rosalic' ? (
						<GameButtonPink button={true} onClick={nextStep}>
							Далее
						</GameButtonPink>
					) : section === 'anthelios' ? (
						<GameButtonOrange button={true} onClick={nextStep}>
							Далее
						</GameButtonOrange>
					) : (
						<GameButton button={true} onClick={nextStep}>
							Далее
						</GameButton>
					)}
				</div>
			) : null}
		</div>
	)
}

export default ProgressBar
