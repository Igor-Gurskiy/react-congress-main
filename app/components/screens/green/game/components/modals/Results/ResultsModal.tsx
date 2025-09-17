import React, { useEffect, useRef } from 'react'
import { GameButton } from '@/components/screens/vichy/game/components/GameButton'
import styled from 'styled-components'
import useScrollbars from '@/shared/hooks/use-scrollbars'
import styles from './ResultsModal.module.scss'
import { useSortGameStore } from '@/components/screens/green/game/stores/sort-game.store'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const ResultsModal = ({ close, product }) => {
	const score = useSortGameStore((state) => state.score)
	const resetGame = useSortGameStore((state) => state.resetGame)
	const startGame = useSortGameStore((state) => state.startGame)

	const containerRef = useRef<HTMLDivElement>(null)
	const router = useRouter()

	useScrollbars(containerRef, true)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.greenSortResult, `params[score]=${score}`)
	}, [])

	const handleBack = () => {
		router.push('/green')
	}

	const handleRestartGame = () => {
		setTimeout(() => {
			resetGame()
			startGame()
		}, 300)
	}

	// const handleResultAction = () => {
	// 	if (score >= 14) {
	// 		handleBack()
	// 	} else {
	// 		handleRestartGame()
	// 	}
	// }

	return (
		<div className={styles.wrapper}>
			<div className={styles.container} ref={containerRef}>
				<div className={styles.main}>
					<div className={styles.rank}>{getRankName(score)}</div>
					<div className={styles.text}>Вы набрали</div>
					<div className={styles.points}>
						{score} {pluralize(score)}
					</div>
					<div className={styles.text}>
						{product ? (
							<>
								Вы ошиблись! Надеемся, что наши подсказки помогут вам
								разобраться в новых правилах. Спасибо, что сортируете мусор!
							</>
						) : (
							<>
								Отличный результат! Надеемся, что наши подсказки помогут вам
								разобраться в новых правилах. Спасибо, что сортируете мусор!
							</>
						)}
					</div>
				</div>
				<div className={styles.controls} onClick={close}>
					<Button button onClick={handleRestartGame}>
						Начать заново
					</Button>
					<Button button onClick={handleBack}>
						вернуться в комнату
					</Button>
				</div>
				{product && (
					<div
						className={clsx(styles.hint, {
							[styles.hintRecycle]: product.sortable,
						})}
					>
						<div className={styles.hintCover}>
							<img src={product.src} alt={product.name} />
						</div>
						<div className={styles.hintBody}>
							<div className={styles.incorrect}>НЕПРАВИЛЬНО</div>
							<div className={styles.productName}>{product.name}</div>
							<div className={styles.hintText}>{product.error}</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default ResultsModal

const Button = styled(GameButton)`
	width: 40%;
	padding: 6px 6px;
	border-radius: 8px;
	max-width: unset;

	.pulse-text {
		color: #fff;
		text-align: center;
		font-size: 16px;
		font-weight: 600;
	}

	@media screen and (max-width: 575.98px) {
		width: 100%;
	}
`

export const pluralize = (score: number) => {
	if (score === 1) {
		return 'очко'
	}
	if (score >= 2 && score <= 4) {
		return 'очка'
	}
	return 'очков'
}

const getRankName = (score: number) => {
	if (score <= 3) return 'Новичок'
	if (score >= 4 && score <= 8) return 'Исследователь'
	if (score >= 9 && score <= 11) return 'Мастер сортировки'
	return 'Эксперт сортировки'
}
