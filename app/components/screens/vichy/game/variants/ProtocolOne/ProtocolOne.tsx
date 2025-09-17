import React, { useRef } from 'react'
import clsx from 'clsx'
import PulseButton from '@/components/Help/PulsingButton'
import { CrossIcon } from '@/components/shared/icons/CrossIcon'
import { GameButton } from '@/components/screens/vichy/game/components/GameButton'
import { PlusIcon } from '@/components/shared/icons/PlusIcon'
import styled from 'styled-components'
import ProductsCarousel from '@/components/screens/vichy/game/components/ProductsCarousel/ProductsCarousel'
import { case1 } from '@/components/screens/vichy/game/cases/case1'
import SlotItem from '@/components/screens/vichy/game/components/Slot/SlotItem'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './ProtocolOne.module.scss'
import { useVichyGameStore } from '@/components/screens/vichy/game/stores/vichyGameStore'

import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'
import { Popover } from '@/components/shared/Popover/Popover'
import TipContinue from '@/components/screens/vichy/game/components/Tips/TipContinue'

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

const ProtocolOne = () => {
	const step = useVichyGameStore((state) => state.step)
	const slots = useVichyGameStore((state) => state.slots1)
	const selected = useVichyGameStore((state) => state.selected)
	const selection = useVichyGameStore((state) => state.selection)
	const activeSlot = useVichyGameStore((state) => state.activeSlot)
	const handleProductSelect = useVichyGameStore(
		(state) => state.handleProductSelect,
	)
	const handleClearSlot = useVichyGameStore((state) => state.handleClearSlot)
	const setActiveSlot = useVichyGameStore((state) => state.setActiveSlot)
	const setSelection = useVichyGameStore((state) => state.setSelection)
	const setShowSelectTip = useVichyGameStore((state) => state.setShowSelectTip)
	const anchor = useRef<HTMLDivElement | null>(null)
	const isTablet = useMediaQuery({ query: '(max-width: 1023.98px)' })

	const showContinueTip = useVichyGameStore((state) => state.showContinueTip)
	const setShowContinueTip = useVichyGameStore(
		(state) => state.setShowContinueTip,
	)
	const handleSlotClick = (groupId, slotId) => {
		setActiveSlot({ groupId, slotId })
	}

	const handleSelectToggle = () => {
		setShowSelectTip()
		setSelection(!selection)
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
							<FontBasedPulse onClick={handleSelectToggle}>
								{selection ? <PlusIcon /> : <CrossIcon />}
							</FontBasedPulse>
						</div>
						<div className="flex flex-grow">
							{!selection ? (
								<ul className={styles.list}>
									<li className={styles.listItem}>
										На выраженную жирность кожи практически в течение всего дня
									</li>
									<li className={styles.listItem}>
										На высыпания, которые пациент нередко травмирует,
										выдавливает
									</li>
									<li className={styles.listItem}>
										Появление свежих высыпаний зачастую связано со стрессом,
										несоблюдением диеты (фаст-фуд, газированные напитки,
										сладкое)
									</li>
									<li className={styles.listItem}>
										На связь появления высыпаний с менструальным циклом
									</li>
									<li className={styles.listItem}>
										Применение плотных тональных средств для камуфляжа зачастую
										провоцирует появление свежих элементов
									</li>
								</ul>
							) : (
								<ProductsCarousel
									key="case1"
									cases={case1}
									selected={selected}
									selectProduct={handleProductSelect('slots1')}
								/>
							)}
						</div>
					</div>
					{!selection && (
						<div
							className={clsx(styles.productContainer, {
								[styles.hide]: isTablet,
							})}
						>
							<img
								src="/assets/images/vichy/game/bottles.png"
								className={styles.product}
								alt="product"
							/>

							<div className={styles.choose}>
								<AnimatePresence
									key={'tip-continue' + setShowContinueTip}
									initial={false}
								>
									{showContinueTip && anchor && (
										<Popover
											placement="left"
											onClickOutside={() => setShowContinueTip()}
											anchor={anchor}
										>
											<TipContinue onClick={() => setShowContinueTip()} />
										</Popover>
									)}
								</AnimatePresence>
								<div ref={anchor}>
									<FontBasedButton button={true} onClick={handleSelectToggle}>
										Выбрать
									</FontBasedButton>
								</div>
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
				{slots.map((group, index) => (
					<div className={styles.box} key={group.id}>
						<div className={styles.area}>
							{group.slots.map((slot, idx) => (
								<SlotItem
									index={index === 0 && idx === 0}
									items={case1}
									group={group}
									slot={slot}
									activeSlot={activeSlot}
									handleSelectSlot={handleSlotClick}
									clearSlot={handleClearSlot('slots1')}
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

export default ProtocolOne

const FontBasedButton = styled(GameButton)`
	font-size: calc(1.4 * var(--size));
`

const FontBasedPulse = styled(PulseButton)`
	font-size: calc(1.4 * var(--size));
	padding: calc(0.8 * var(--size));
`
