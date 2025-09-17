import React from 'react'
import clsx from 'clsx'
import PulseButton from '@/components/Help/PulsingButton'
import { CrossIcon } from '@/components/shared/icons/CrossIcon'
import { GameButton } from '@/components/screens/vichy/game/components/GameButton'
import { PlusIcon } from '@/components/shared/icons/PlusIcon'
import styled from 'styled-components'
import ProductsCarousel from '@/components/screens/vichy/game/components/ProductsCarousel/ProductsCarousel'
import SlotItem from '@/components/screens/vichy/game/components/Slot/SlotItem'
import { motion } from 'framer-motion'

import styles from './ProtocolTwo.module.scss'
import { case2 } from '@/components/screens/vichy/game/cases/case2'
import { useVichyGameStore } from '@/components/screens/vichy/game/stores/vichyGameStore'

const ProtocolTwo = () => {
	const step = useVichyGameStore((state) => state.step)
	const slots = useVichyGameStore((state) => state.slots2)
	const selected = useVichyGameStore((state) => state.selected)
	const selection = useVichyGameStore((state) => state.selection)
	const activeSlot = useVichyGameStore((state) => state.activeSlot)
	const handleProductSelect = useVichyGameStore(
		(state) => state.handleProductSelect,
	)
	const handleClearSlot = useVichyGameStore((state) => state.handleClearSlot)
	const setActiveSlot = useVichyGameStore((state) => state.setActiveSlot)
	const setSelection = useVichyGameStore((state) => state.setSelection)

	const handleSlotClick = (groupId, slotId) => {
		setActiveSlot({ groupId, slotId })
	}

	return (
		<>
			<motion.div
				initial={{ translateX: '100%', opacity: 0 }}
				animate={{
					translateX: 0,
					opacity: 1,
				}}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
				}}
				key={step}
				className={styles.body}
			>
				<div className={styles.content}>
					<div className={styles.main}>
						<div className={styles.question}>
							Какой протокол ухода
							<br />
							вы бы назначили пациенту?
						</div>
						<div className={styles.complaints}>
							<div className={styles.caption}>Жалобы</div>
							<FontBasedPulse onClick={() => setSelection(!selection)}>
								{selection ? <PlusIcon /> : <CrossIcon />}
							</FontBasedPulse>
						</div>
						<div className="flex flex-grow">
							{!selection ? (
								<ul className={styles.list}>
									<li className={styles.listItem}>
										На неравномерную пигментацию
									</li>
									<li className={styles.listItem}>
										На пигментные пятна на лбу, щеках, “тени” под глазами
									</li>
									<li className={styles.listItem}>
										На углубление носогубных и губо-подбородочных складок
									</li>
									<li className={styles.listItem}>
										Пигментация впервые стала появляться после родов,
										усиливается в последниние несколько лет после каждого
										летнего сезона
									</li>
								</ul>
							) : (
								<ProductsCarousel
									key="case2"
									cases={case2}
									selected={selected}
									selectProduct={handleProductSelect('slots2')}
								/>
							)}
						</div>
					</div>
					{!selection && (
						<div className={styles.productContainer}>
							<img
								src="/assets/images/vichy/game/bottles.png"
								className={styles.product}
								alt="product"
							/>

							<div className={styles.choose}>
								<FontBasedButton
									button={true}
									onClick={() => setSelection(!selection)}
								>
									Выбрать
								</FontBasedButton>
							</div>
						</div>
					)}
				</div>
			</motion.div>

			<motion.div
				initial={{ translateX: '100%', opacity: 0 }}
				animate={{
					translateX: 0,
					opacity: 1,
				}}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
				}}
				key={step}
				className={styles.quizz}
			>
				{slots.map((group) => (
					<div className={styles.box} key={group.id}>
						<div className={styles.area}>
							{group.slots.map((slot) => (
								<SlotItem
									items={case2}
									group={group}
									slot={slot}
									activeSlot={activeSlot}
									handleSelectSlot={handleSlotClick}
									clearSlot={handleClearSlot('slots2')}
								/>
							))}
						</div>
						<div className={clsx(styles.section, styles.sectionDivider)}>
							{group.section}
						</div>
					</div>
				))}
			</motion.div>
		</>
	)
}

export default ProtocolTwo

const FontBasedButton = styled(GameButton)`
	font-size: calc(1.4 * var(--size));
`

const FontBasedPulse = styled(PulseButton)`
	font-size: calc(1.4 * var(--size));
	padding: calc(0.8 * var(--size));
`
