import React from 'react'
import clsx from 'clsx'
import PulseButton from '@/components/Help/PulsingButton'
import { CrossIcon } from '@/components/shared/icons/CrossIcon'
import { GameButton } from '@/components/screens/vichy/game/components/GameButton'
import { PlusIcon } from '@/components/shared/icons/PlusIcon'
import SlotItem from '@/components/screens/vichy/game/components/Slot/SlotItem'
import { AnimatePresence, motion } from 'framer-motion'
import { useVichyGameStore } from '@/components/screens/vichy/game/stores/vichyGameStore'

import styles from './ProtocolTwoMobile.module.scss'

import ProductsCarousel from '@/components/screens/vichy/game/components/ProductsCarousel/ProductsCarousel'
import ProgressBar from '@/components/screens/vichy/game/components/ProgressBar/ProgressBar'
import SlotsContainer from '@/components/screens/vichy/game/components/Slot/SlotsContainer'

import dynamic from 'next/dynamic'
import { case2 } from '@/components/screens/vichy/game/cases/case2'

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

const ProtocolTwoMobile = () => {
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
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.column}>
					<img
						src="/assets/images/vichy/game/case2/person2.png"
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
												<GameButton
													button={true}
													onClick={() => setSelection(!selection)}
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
									<PulseButton onClick={() => setSelection(!selection)}>
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
																onClick={() => setSelection(!selection)}
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
							key="case2"
							cases={case2}
							selected={selected}
							selectProduct={handleProductSelect('slots2')}
						/>
					</motion.div>
				)}
			</AnimatePresence>

			<div className={styles.slotsContainer}>
				<SlotsContainer>
					{slots.map((group) => (
						<div className={clsx(styles.box, styles.slot)} key={group.id}>
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
				</SlotsContainer>
			</div>
		</div>
	)
}

export default ProtocolTwoMobile
