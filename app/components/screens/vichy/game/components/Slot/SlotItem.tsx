import clsx from 'clsx'
import React, { useMemo, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PulseButton from '@/components/Help/PulsingButton'
import { CrossIcon } from '@/components/shared/icons/CrossIcon'

import styles from './SlotItem.module.scss'
import { useVichyGameStore } from '@/components/screens/vichy/game/stores/vichyGameStore'
import { Popover } from '@/components/shared/Popover/Popover'
import TipRemove from '@/components/screens/vichy/game/components/Tips/TipRemove'
import TipSelect from '@/components/screens/vichy/game/components/Tips/TipSelect'

const SlotItem = ({
	index = false,
	items,
	slot,
	group,
	activeSlot,
	handleSelectSlot,
	clearSlot,
}) => {
	const showSelectTip = useVichyGameStore((state) => state.showSelectTip)
	const showRemoveTip = useVichyGameStore((state) => state.showRemoveTip)
	const setShowSelectTip = useVichyGameStore((state) => state.setShowSelectTip)
	const setShowRemoveTip = useVichyGameStore((state) => state.setShowRemoveTip)

	const isCurrentSlot = useMemo(
		() =>
			activeSlot
				? activeSlot.groupId == group.id && activeSlot.slotId == slot.id
				: null,
		[activeSlot, group, slot],
	)
	const isRemoveTipSlot = useMemo(
		() =>
			activeSlot
				? showRemoveTip.groupId == group.id && showRemoveTip.slotId == slot.id
				: null,
		[showRemoveTip, group, slot],
	)

	const item = useMemo(
		() => items.find((c) => c.key == slot.product),
		[slot, items],
	)

	const isCorrect = useMemo(
		() => group.correct.includes(slot.product),
		[group, slot],
	)
	const anchor = useRef<HTMLDivElement | null>(null)
	const anchorRemove = useRef<HTMLDivElement | null>(null)

	return (
		<div ref={anchor}>
			<AnimatePresence
				key={'tip-select' + index + setShowSelectTip}
				initial={false}
			>
				{showSelectTip && index && !item && anchor && (
					<Popover
						placement="right"
						onClickOutside={() => setShowSelectTip()}
						anchor={anchor}
					>
						<TipSelect onClick={() => setShowSelectTip()} />
					</Popover>
				)}
			</AnimatePresence>
			<AnimatePresence key={'tip-remove'} initial={false}>
				{isRemoveTipSlot && anchorRemove && item && (
					<Popover
						placement="right-end"
						onClickOutside={() =>
							setShowRemoveTip({ groupId: null, slotId: null })
						}
						anchor={anchorRemove}
					>
						<TipRemove
							onClick={() => setShowRemoveTip({ groupId: null, slotId: null })}
						/>
					</Popover>
				)}
			</AnimatePresence>
			<div className={styles.status}>
				{item && <div>{isCorrect ? <Correct /> : <Incorrect />}</div>}
			</div>
			<div
				className={clsx(styles.puzzle, {
					[styles.selected]: slot.product,
					[styles.currentPuzzle]: isCurrentSlot,
				})}
				key={slot.id}
				onClick={() => handleSelectSlot(group.id, slot.id)}
			>
				<AnimatePresence mode="wait">
					{item && (
						<motion.img
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0, opacity: 0 }}
							transition={{
								type: 'spring',
								stiffness: 260,
								damping: 20,
							}}
							src={item.src}
						/>
					)}
				</AnimatePresence>
				{item && (
					<div
						ref={anchorRemove}
						className={styles.controls}
						onClick={() => {
							clearSlot(slot.product, { groupId: group.id, slotId: slot.id })
						}}
					>
						<PulseButton className={styles.btn}>
							<CrossIcon />
						</PulseButton>
					</div>
				)}
			</div>
		</div>
	)
}

export default SlotItem

const Incorrect = () => (
	<svg
		width="17"
		height="17"
		viewBox="0 0 17 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M5.30217 5.29897C4.91165 5.68949 4.91165 6.32266 5.30217 6.71318L7.0643 8.47531L5.29289 10.2467C4.90237 10.6372 4.90237 11.2704 5.29289 11.6609C5.68342 12.0515 6.31658 12.0515 6.70711 11.6609L8.47852 9.88953L10.3588 11.7698C10.7493 12.1603 11.3825 12.1603 11.773 11.7698C12.1635 11.3793 12.1635 10.7461 11.773 10.3556L9.89273 8.47531L11.6609 6.70711C12.0515 6.31658 12.0515 5.68342 11.6609 5.29289C11.2704 4.90237 10.6372 4.90237 10.2467 5.29289L8.47852 7.0611L6.71638 5.29897C6.32586 4.90844 5.6927 4.90844 5.30217 5.29897Z"
			fill="#E41315"
		/>
		<rect
			x="1"
			y="1"
			width="15"
			height="15"
			rx="7.5"
			stroke="#E41315"
			stroke-width="2"
		/>
	</svg>
)

const Correct = () => (
	<svg
		width="17"
		height="17"
		viewBox="0 0 17 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M5.29289 8.71279C4.90237 9.10331 4.90237 9.73648 5.29289 10.127L6.9206 11.7547C7.15033 11.9844 7.46403 12.079 7.76291 12.0385C8.06238 12.0797 8.37696 11.9852 8.60721 11.755L12.6551 7.70711C13.0456 7.31658 13.0456 6.68342 12.6551 6.29289C12.2646 5.90237 11.6314 5.90237 11.2409 6.29289L7.76404 9.76972L6.70711 8.71279C6.31658 8.32226 5.68342 8.32226 5.29289 8.71279Z"
			fill="#00964A"
		/>
		<rect
			x="1"
			y="1"
			width="15"
			height="15"
			rx="7.5"
			stroke="#00964A"
			stroke-width="2"
		/>
	</svg>
)
