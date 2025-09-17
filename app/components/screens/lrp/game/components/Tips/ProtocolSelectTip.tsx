import React, { useEffect, useRef, useState } from 'react'
import styles from '@/components/screens/lrp/game/variants/ProtocolOne/ProtocolOne.module.scss'
import { AnimatePresence } from 'framer-motion'
import { Popover } from '@/components/shared/Popover/Popover'
import TipSelect from '@/components/screens/lrp/game/components/Tips/TipSelect'
import { useLRPGameStore } from '@/components/screens/lrp/game/stores/LRPGameStore'

export const ProtocolSelectTip = () => {
	const anchor = useRef<HTMLImageElement | null>(null)
	const [show, setShow] = useState(false)
	const isStarted = useLRPGameStore((state) => state.isStarted)
	const showSelectTip = useLRPGameStore((state) => state.showSelectTip)
	const setShowSelectTip = useLRPGameStore((state) => state.setShowSelectTip)

	const toggleShow = () => setShow(!show)

	useEffect(() => {
		if (showSelectTip) {
			setShow(true)
		}
	}, [showSelectTip])

	useEffect(() => {
		if (!isStarted) return
		setShowSelectTip()
	}, [isStarted])

	return (
		<div>
			<img
				className={styles.help__btn}
				onClick={toggleShow}
				src="/assets/images/lrp/game/case1/help.svg"
				alt=""
				ref={anchor}
			/>
			<AnimatePresence key={'lrp-tip-select' + show} initial={false}>
				{show && anchor && (
					<Popover
						placement="right"
						onClickOutside={toggleShow}
						anchor={anchor}
					>
						<TipSelect color="#009D86" onClick={toggleShow} />
					</Popover>
				)}
			</AnimatePresence>
		</div>
	)
}
