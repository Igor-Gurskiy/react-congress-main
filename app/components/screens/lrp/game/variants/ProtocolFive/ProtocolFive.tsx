import React from 'react'
import clsx from 'clsx'
import ProductsCarousel from '@/components/screens/lrp/game/components/ProductsCarousel/ProductsCarousel'
import { case5 } from '@/components/screens/lrp/game/cases/case5'
import SlotItem from '@/components/screens/lrp/game/components/Slot/SlotItem'
import { motion } from 'framer-motion'

import styles from './ProtocolFive.module.scss'
import { useLRPGameStore } from '@/components/screens/lrp/game/stores/LRPGameStore'

import dynamic from 'next/dynamic'
import { ProtocolSelectTip } from '@/components/screens/lrp/game/components/Tips/ProtocolSelectTip'

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

const ProtocolFive = () => {
	const step = useLRPGameStore((state) => state.step)
	const slots = useLRPGameStore((state) => state.slots5)
	const selected = useLRPGameStore((state) => state.selected)
	const activeSlot = useLRPGameStore((state) => state.activeSlot)
	const handleProductSelect = useLRPGameStore(
		(state) => state.handleProductSelect,
	)
	const handleClearSlot = useLRPGameStore((state) => state.handleClearSlot)
	const setActiveSlot = useLRPGameStore((state) => state.setActiveSlot)

	const handleSlotClick = (groupId, slotId) => {
		setActiveSlot({ groupId, slotId })
	}

	return (
		<div className={styles.content}>
			<div className={styles.main}>
				<div className="mx-[5vw]">
					<div className={styles.question}>
						Интенсивный уход для коррекции гиперпигментации и возрастных
						изменений
					</div>
					<ProtocolSelectTip />
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
					className={styles.quizz}
				>
					<div className={styles.quizzContainer}>
						{slots.map((group, index) => (
							<div className={styles.box} key={group.id}>
								<div className={styles.area}>
									{group.slots.map((slot, idx) => (
										<SlotItem
											index={index === 0 && idx === 0}
											items={case5}
											group={group}
											slot={slot}
											color="#36B0FC"
											activeSlot={activeSlot}
											handleSelectSlot={handleSlotClick}
											clearSlot={handleClearSlot('slots5')}
										/>
									))}
								</div>
								<div className={clsx(styles.section, styles.sectionDivider)}>
									{group.section}
								</div>
							</div>
						))}
					</div>
				</motion.div>

				<div className={styles.carousel}>
					<ProductsCarousel
						key="case5"
						cases={case5}
						selected={selected}
						selectProduct={handleProductSelect('slots5')}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProtocolFive
