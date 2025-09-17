import React, { useMemo } from 'react'
import { GameButton } from '@/components/screens/vichy/game/components/GameButton'

import styles from './ProgressBar.module.scss'
import { useVichyGameStore } from '@/components/screens/vichy/game/stores/vichyGameStore'

const ProgressBar = () => {
	const score = useVichyGameStore((state) => state.score)
	const step = useVichyGameStore((state) => state.step)
	const nextStep = useVichyGameStore((state) => state.nextStep)
	const percentage = useMemo(
		() => Number(((score / 17) * 100).toFixed(0)),
		[score],
	)

	const showNext = useMemo(() => {
		if (step == 1 && score == 5) return true
		else if (step == 2 && score == 11) return true
		return step == 3 && score == 17
	}, [score, step])

	const finish = useMemo(() => {
		return step == 3 && score == 17
	}, [score, step])

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.percentageValue}>{percentage}%</div>
				<div className={styles.bar}>
					<div
						className={styles.progress}
						style={{ width: `${percentage}%` }}
					/>
				</div>
			</div>
			{showNext && (
				<div className={styles.info}>
					<div className={styles.caption}>
						{finish ? (
							<>
								проверьте результат
								<br />и нажмите кнопку «далее»
							</>
						) : (
							<>
								проверьте результат <br />и нажмите кнопку «далее»
							</>
						)}
					</div>

					<GameButton button={true} onClick={nextStep}>
						Далее
					</GameButton>
				</div>
			)}
		</div>
	)
}

export default ProgressBar
