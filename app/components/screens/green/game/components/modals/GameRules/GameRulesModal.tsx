import React, { useRef } from 'react'
import { GameButton } from '@/components/screens/vichy/game/components/GameButton'
import styled from 'styled-components'
import styles from './GameRulesModal.module.scss'
import useScrollbars from '@/shared/hooks/use-scrollbars'
import { useSortGameStore } from '@/components/screens/green/game/stores/sort-game.store'
import {
	nonSortableItems,
	sortableItems,
} from '@/components/screens/green/game/utils/sort-game-items'

const GameRulesModal = ({ close }) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const resetGame = useSortGameStore((state) => state.resetGame)
	const startGame = useSortGameStore((state) => state.startGame)
	useScrollbars(containerRef, true)

	const handleStartGame = () => {
		close()
		resetGame()
		startGame()
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.main} ref={containerRef}>
					<div className={styles.title}>Правила сортировки</div>

					<div className={styles.text}>
						Ловите контейнером те элементы, <br />которые соответствуют его
						назначению. Наберите как&nbsp;можно больше очков за 2 минуты времени
					</div>
					<div className={styles.content}>
						<div className={styles.section}>
							<div className={styles.caption}>в контейнер «Несу перемены»</div>
							<ul className={styles.itemList}>
								{sortableItems.map((item, idx) => (
									<li className={styles.item} key={idx}>
										<div className={styles.itemCover}>
											<img src={item.src} />
										</div>
										<div className={styles.itemInfo}>
											<div className={styles.itemName}>{item.name}</div>
										</div>
									</li>
								))}
							</ul>
						</div>

						<div className={styles.section}>
							<div className={styles.sCaption}>мимо контейнера</div>
							<ul className={styles.itemList}>
								{nonSortableItems.map((item, idx) => (
									<li className={styles.item} key={idx}>
										<div className={styles.itemCover}>
											<img src={item.src} />
										</div>
										<div className={styles.itemInfo}>
											<div className={styles.itemName}>{item.name}</div>
											<div className={styles.itemDescription}>
												{item.description}
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.controls}>
					<Button button onClick={handleStartGame}>
						Начать игру
					</Button>
				</div>
			</div>
		</div>
	)
}

export default GameRulesModal

const Button = styled(GameButton)`
	max-width: 100%;
	width: auto;
	padding: 6px 24px;
	border-radius: 8px;
`
