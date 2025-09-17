import React from 'react'
import clsx from 'clsx'
import { case1 } from '@/components/screens/lrp/game/cases/case1'
import SlotItem from '@/components/screens/lrp/game/components/Slot/SlotItem'
import { useLRPGameStore } from '@/components/screens/lrp/game/stores/LRPGameStore'

import styles from './ProtocolOneMobile.module.scss'

import ProductsCarousel from '@/components/screens/lrp/game/components/ProductsCarousel/ProductsCarousel'
import ProgressBar from '@/components/screens/lrp/game/components/ProgressBar/ProgressBar'
import SlotsContainer from '@/components/screens/lrp/game/components/Slot/SlotsContainer'

import dynamic from 'next/dynamic'
import { ProtocolSelectTip } from '@/components/screens/lrp/game/components/Tips/ProtocolSelectTip'

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

const ProtocolOneMobile = () => {
	const step = useLRPGameStore((state) => state.step)
	const slots = useLRPGameStore((state) => state.slots1)
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
								src="/assets/images/lrp/game/case1/bg2.png"
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
								src="/assets/images/lrp/game/case1/bg3.jpg"
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
									<ProgressBar section="effaclar" />
								</div>
								<div className={styles.main}>
									<div className={styles.question}>
										Уход для кожи, <br /> склонной к акне
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
									<ProgressBar section="effaclar" />
								</div>
								<div className={styles.main}>
									<div className={styles.question}>
										Уход для кожи, <br /> склонной к акне
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
									<div style={{ zIndex: 2 }}>{group.section}</div>
								</div>
							</div>
						))}
					</SlotsContainer>
				</div>

				<div className={styles.carouselContainer}>
					<ProductsCarousel
						key="case1"
						selected={selected}
						cases={case1}
						selectProduct={handleProductSelect('slots1')}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProtocolOneMobile
