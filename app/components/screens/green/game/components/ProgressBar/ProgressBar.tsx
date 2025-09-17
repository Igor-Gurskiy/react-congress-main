import React, { useEffect, useMemo, useState } from 'react'

import styles from './ProgressBar.module.scss'
import { useSortGameStore } from '@/components/screens/green/game/stores/sort-game.store'
import ResultsModal, {
	pluralize,
} from '@/components/screens/green/game/components/modals/Results/ResultsModal'
import { AnimatePresence, motion } from 'framer-motion'
import ModalService from '@/components/shared/modal/ModalService'

const GameTimer = () => {
	const stopGame = useSortGameStore((state) => state.stopGame)
	const [time, setTime] = useState(0)

	useEffect(() => {
		if (time >= 120) {
			stopGame()
			ModalService.open(ResultsModal)
		}

		let interval: NodeJS.Timeout
		interval = setInterval(() => {
			setTime(time + 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [time])

	return <span>{120 - time} с</span>
}

const ProgressBar = () => {
	const isStarted = useSortGameStore((state) => state.isStarted)
	const score = useSortGameStore((state) => state.score)
	const queue = useSortGameStore((state) => state.queue)
	const product = useMemo(() => queue.find(Boolean), [queue])

	const percentage = useMemo(
		() => Number(((score / 14) * 10).toFixed(0)),
		[score],
	)

	return (
		<AnimatePresence mode="wait">
			{isStarted && (
				<motion.div
					initial={{ translateY: '-100%', translateX: '-50%', opacity: 0 }}
					animate={{
						translateY: 0,
						translateX: '-50%',
						opacity: 1,
					}}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}
					className={styles.wrapper}
				>
					<div className={styles.container}>
						<div className={styles.percentageValue}>
							<GameTimer />
						</div>
						<div className={styles.bar}>
							<div
								className={styles.progress}
								style={{ width: `${percentage}%` }}
							/>
						</div>
					</div>
					<div className={styles.info}>
						<div className={styles.caption}>
							{product && (
								<div className="flex items-center gap-x-2">
									<div className="flex flex-center w-12 h-10">
										<img
											className="w-auto h-full"
											src={product.src}
											alt="logo product"
										/>
									</div>
									<div className={styles.name}>{product.name}</div>
								</div>
							)}
						</div>

						<div className="flex flex-center gap-x-2">
							<div className={styles.score}>{score}</div>
							<div className={styles.scoreText}>{pluralize(score)}</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default ProgressBar
