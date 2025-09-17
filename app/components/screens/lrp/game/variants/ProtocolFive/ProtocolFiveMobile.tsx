import React from 'react'
import clsx from 'clsx'
import { case5 } from '@/components/screens/lrp/game/cases/case5'
import SlotItem from '@/components/screens/lrp/game/components/Slot/SlotItem'
import { useLRPGameStore } from '@/components/screens/lrp/game/stores/LRPGameStore'

import styles from './ProtocolFiveMobile.module.scss'

import ProductsCarousel from '@/components/screens/lrp/game/components/ProductsCarousel/ProductsCarousel'
import ProgressBar from '@/components/screens/lrp/game/components/ProgressBar/ProgressBar'
import SlotsContainer from '@/components/screens/lrp/game/components/Slot/SlotsContainer'

import dynamic from 'next/dynamic'
import { ProtocolSelectTip } from '@/components/screens/lrp/game/components/Tips/ProtocolSelectTip'

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

const ProtocolFiveMobile = () => {
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
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<MediaQuery minDeviceWidth={768} minWidth={768}>
					{(matches) =>
						matches ? (
							<img
								src="/assets/images/lrp/game/case5/bg2.png"
								className={styles.product}
								alt="product"
							/>
						) : null
					}
				</MediaQuery>
				<MediaQuery maxDeviceWidth={767.98} maxWidth={767.98}>
					{(matches) =>
						matches ? (
							<img
								src="/assets/images/lrp/game/case5/bg3.jpg"
								className={styles.product}
								alt="product"
							/>
						) : null
					}
				</MediaQuery>

				<MediaQuery minDeviceWidth={768} minWidth={768}>
					{(matches) =>
						matches ? (
							<div className={styles.content}>
								<div className={styles.progress}>
									<ProgressBar />
								</div>
								<div className={styles.main}>
									<div className={styles.question}>
										Интенсивный уход для коррекции гиперпигментации и возрастных
										изменений
									</div>
									<ProtocolSelectTip />
								</div>
							</div>
						) : null
					}
				</MediaQuery>
				<MediaQuery maxDeviceWidth={767.98} maxWidth={767.98}>
					{(matches) =>
						matches ? (
							<>
								<div className={styles.progress}>
									<ProgressBar />
								</div>
								<div className={styles.main}>
									<div className={styles.question}>
										Интенсивный уход для коррекции гиперпигментации и возрастных
										изменений
									</div>
									<ProtocolSelectTip />
								</div>
							</>
						) : null
					}
				</MediaQuery>

				<div className={styles.slotsContainer}>
					<SlotsContainer>
						{slots.map((group, index) => (
							<div className={clsx(styles.box, styles.slot)} key={group.id}>
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
									<div style={{ zIndex: 2 }}>{group.section}</div>
								</div>
							</div>
						))}
					</SlotsContainer>
				</div>

				<div className={styles.carouselContainer}>
					<ProductsCarousel
						key="case5"
						selected={selected}
						cases={case5}
						selectProduct={handleProductSelect('slots5')}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProtocolFiveMobile
