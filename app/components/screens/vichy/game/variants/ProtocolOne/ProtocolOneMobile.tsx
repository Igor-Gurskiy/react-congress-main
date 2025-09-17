import React from 'react'
import clsx from 'clsx'
import PulseButton from '@/components/Help/PulsingButton'
import { CrossIcon } from '@/components/shared/icons/CrossIcon'
import { GameButton } from '@/components/screens/vichy/game/components/GameButton'
import { PlusIcon } from '@/components/shared/icons/PlusIcon'
import { case1 } from '@/components/screens/vichy/game/cases/case1'
import SlotItem from '@/components/screens/vichy/game/components/Slot/SlotItem'
import { AnimatePresence, motion } from 'framer-motion'
import { useVichyGameStore } from '@/components/screens/vichy/game/stores/vichyGameStore'

import styles from './ProtocolOneMobile.module.scss'

import ProductsCarousel from '@/components/screens/vichy/game/components/ProductsCarousel/ProductsCarousel'
import ProgressBar from '@/components/screens/vichy/game/components/ProgressBar/ProgressBar'
import SlotsContainer from '@/components/screens/vichy/game/components/Slot/SlotsContainer'

import dynamic from 'next/dynamic'

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

const ProtocolOneMobile = () => {
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

	const handleSlotClick = (groupId, slotId) => {
		setActiveSlot({ groupId, slotId })
	}

	const handleSelectToggle = () => {
		setShowSelectTip()
		setSelection(!selection)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.column}>
					<img
						src="/assets/images/vichy/game/case1/person2.png"
						className={styles.product}
						alt="product"
					/>
					<MediaQuery minDeviceWidth={640} maxDeviceWidth={1024}>
						{(matches) =>
							matches ? (
								<AnimatePresence mode="wait">
									{!selection && (
										<motion.div
											initial={{ translateY: '100%', opacity: 0 }}
											animate={{
												translateY: 0,
												opacity: 1,
											}}
											transition={{
												type: 'spring',
												stiffness: 260,
												damping: 20,
											}}
											key={step}
											className={styles.bottlesContainer}
										>
											<img
												src="/assets/images/vichy/game/mbottles.png"
												className={styles.bottles}
												alt="product"
											/>

											<div className={styles.choose}>
												<GameButton button={true} onClick={handleSelectToggle}>
													Выбрать
												</GameButton>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							) : null
						}
					</MediaQuery>
				</div>
				<div className={clsx(styles.column, styles.rightCol)}>
					<div className={styles.progress}>
						<ProgressBar />
					</div>
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
									<PulseButton onClick={handleSelectToggle}>
										{selection ? <PlusIcon /> : <CrossIcon />}
									</PulseButton>
								</div>
								<div className="flex">
									<AnimatePresence mode="wait">
										{!selection && (
											<motion.ul
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
												className={styles.list}
											>
												<li className={styles.listItem}>
													На выраженную жирность кожи практически в течение
													всего дня
												</li>
												<li className={styles.listItem}>
													На высыпания, которые пациент нередко травмирует,
													выдавливает
												</li>
												<li className={styles.listItem}>
													Появление свежих высыпаний зачастую связано со
													стрессом, несоблюдением диеты (фаст-фуд, газированные
													напитки, сладкое)
												</li>
												<li className={styles.listItem}>
													На связь появления высыпаний с менструальным циклом
												</li>
												<li className={styles.listItem}>
													Применение плотных тональных средств для камуфляжа
													зачастую провоцирует появление свежих элементов
												</li>
											</motion.ul>
										)}
									</AnimatePresence>
								</div>

								<MediaQuery maxDeviceWidth={640}>
									{(matches) =>
										matches ? (
											<AnimatePresence mode="wait">
												{!selection && (
													<motion.div
														initial={{ translateY: '100%', opacity: 0 }}
														animate={{
															translateY: 0,
															opacity: 1,
														}}
														transition={{
															type: 'spring',
															stiffness: 260,
															damping: 20,
														}}
														key={step}
														className={styles.mobileBottles}
													>
														<img
															src="/assets/images/vichy/game/mbottles.png"
															className={styles.bottles}
															alt="product"
														/>

														<div className={styles.choose}>
															<GameButton
																button={true}
																onClick={handleSelectToggle}
															>
																Выбрать
															</GameButton>
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										) : null
									}
								</MediaQuery>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			<AnimatePresence mode="wait">
				{selection && (
					<motion.div
						initial={{ translateY: '100%', opacity: 0 }}
						animate={{
							translateY: 0,
							opacity: 1,
						}}
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 20,
						}}
						key={step}
						className={styles.carouselContainer}
					>
						<ProductsCarousel
							key="case1"
							selected={selected}
							cases={case1}
							selectProduct={handleProductSelect('slots1')}
						/>
					</motion.div>
				)}
			</AnimatePresence>

			<div className={styles.slotsContainer}>
				<SlotsContainer>
					{slots.map((group, index) => (
						<div className={clsx(styles.box, styles.slot)} key={group.id}>
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
				</SlotsContainer>
			</div>
		</div>
	)
}

export default ProtocolOneMobile
