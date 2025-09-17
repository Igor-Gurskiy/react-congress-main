import styles from './VichyGameResult.module.scss'
import { GameButton } from '@/components/screens/vichy/game/components/GameButton'
import Link from 'next/link'
import styled from 'styled-components'
import clsx from 'clsx'
import { useVichyGameStore } from '@/components/screens/vichy/game/stores/vichyGameStore'
import React, { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

import dynamic from 'next/dynamic'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

const VichyGameResult = () => {
	const step = useVichyGameStore((state) => state.step)
	const slots1 = useVichyGameStore((state) => state.slots1)
	const slots2 = useVichyGameStore((state) => state.slots2)
	const slots3 = useVichyGameStore((state) => state.slots3)
	const { score, heatmap } = useMemo(
		() => generateResult([slots1, slots2, slots3]),
		[slots1, slots2, slots3],
	)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.vichyGameResult, `params[score]=${score}`)
	}, [])

	return (
		<div className={styles.wrapper}>
			<MediaQuery maxDeviceWidth={640}>
				{(matches) =>
					matches ? (
						<div className={styles.img}>
							<img src="/assets/images/vichy/game/mobile-bg1.jpg" alt="bg-1" />
						</div>
					) : null
				}
			</MediaQuery>
			<MotionContainer
				initial={{ translateY: '100%', opacity: 0 }}
				animate={{ translateY: 0, opacity: 1 }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
				}}
				className={styles.container}
			>
				<div className={styles.progress}>
					<div className={styles.progressValue}>100%</div>
					<div className={styles.progressBar} />
				</div>
				<div className={styles.content}>
					<div className={styles.title}>Поздравляем!</div>
					<div className={styles.caption}>Вы правильно собрали</div>
					<div className={styles.map}>
						<Heatmap map={heatmap} />
					</div>
					<div className={styles.points}>
						<span>{score}</span> из 17 средств
					</div>
					<div className={styles.text}>
						и стали участником розыгрыша. По завершении онлайн-конгресса L'Oreal
						Dermatological Beauty искусственный интеллект выберет 500
						победителей, с которыми мы свяжемся после завершения конгресса.
					</div>
					<div className={styles.controls}>
						<Link href="/vichy">
							<ReturnButton button>Вернуться в комнату</ReturnButton>
						</Link>
					</div>
				</div>
			</MotionContainer>
			<MediaQuery maxDeviceWidth={640}>
				{(matches) =>
					matches ? (
						<div className={styles.img}>
							<img src="/assets/images/vichy/game/mobile-bg2.jpg" alt="bg-2" />
						</div>
					) : null
				}
			</MediaQuery>
		</div>
	)
}

const Heatmap = ({ map }) => {
	return (
		<div className={styles.heatmap}>
			{map.map((row, idx) => (
				<div key={idx} className={styles.row}>
					{row.map((slot, id) => (
						<div
							key={id}
							className={clsx(styles.slot, {
								[styles.correct]: slot,
								[styles.incorrect]: !slot,
							})}
						/>
					))}
				</div>
			))}
		</div>
	)
}

export default VichyGameResult

const MotionContainer = styled(motion.div)`
	margin: 0 auto;
	width: 100%;
	display: flex;
	max-width: 694px;
	flex-direction: column;
	align-items: center;
	background: linear-gradient(90deg, #fff 8.92%, rgba(255, 255, 255, 0.5) 100%);
	flex-shrink: 0;

	@media screen and (min-width: 640px) and (max-width: 1024px) {
		max-height: 100%;
		overflow-y: auto;
	}

	@media screen and (max-width: 1024px) {
		max-width: 360px;
		border-radius: 12px;
		background: linear-gradient(180deg, #fff 0%, #f5f5f5 100%);
		box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.08);
	}
`

export const ReturnButton = styled(GameButton)`
	max-width: 240px;
`

const generateResult = (slotsArr: any[]) => {
	const matrix: Array<boolean[]> = []
	let score = 0

	slotsArr.forEach((slots) => {
		const resMatrix: boolean[] = []
		slots.forEach((group) => {
			group.slots.forEach((slot) => {
				const isCorrect = group.correct.includes(slot.product)
				if (isCorrect) {
					score += 1
				}
				resMatrix.push(isCorrect)
			})
		})
		matrix.push(resMatrix)
	})

	return { score, heatmap: matrix }
}
