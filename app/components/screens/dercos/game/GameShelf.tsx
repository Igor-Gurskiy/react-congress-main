import React, { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'
import media from '@/utils/media'

import shelfBg from '/public/assets/images/dercos/linegame/shelf.png'
import PulseButton from '@/components/Help/PulsingButton'
import { PencilIcon } from '@/components/shared/icons/PencilIcon'
import ArrowSource from '@/components/screens/dercos/game/components/flow/ArrowSource'
import useWindowSize from '@/hooks/useWindowSize'
import { CrossIcon } from '@/components/shared/icons/CrossIcon'
import { AnimatePresence } from 'framer-motion'
import { Popover } from '@/components/shared/Popover/Popover'
import TipSelect from '@/components/screens/dercos/game/components/Tips/TipSelect'
import TipMulti from '@/components/screens/dercos/game/components/Tips/TipMulti'
import { useDercosGameStore } from '@/components/screens/dercos/game/stores/dercos-game-store'

const GameShelf = ({ start, anchorMulti, resultPopup }) => {
	const [width, height] = useWindowSize()
	const ratio = width / 1920
	const rWidth = ratio > 1 ? width / ratio : width
	const shelfWidth =
		width < 1025 && width < height ? rWidth * 0.65 : rWidth * 0.5
	const shelfHeight = shelfWidth / 0.75

	return (
		<ShelfContainer $result={resultPopup}>
			<ShelfBackground style={{ width: shelfWidth, height: shelfHeight }}>
				<img className="shelf-bg" src={shelfBg.src} alt="" />

				<ItemOne result={resultPopup} />
				<ItemTwo result={resultPopup} start={start} anchorMulti={anchorMulti} />
				<ItemThree result={resultPopup} />
			</ShelfBackground>
		</ShelfContainer>
	)
}

export default GameShelf

const isTipShown = (id: string) => {
	try {
		return localStorage.getItem(id) == 'true'
	} catch (e) {
		console.error('cant show remove tip')
	}

	return false
}

const setTipShown = (id: string) => {
	try {
		localStorage.setItem(id, 'true')
	} catch (e) {
		console.error('cant set tip shown')
	}
}

const ItemOne = ({ result }) => {
	const isGuide = useDercosGameStore((state) => state.isGuide)
	const arrows = useDercosGameStore((state) => state.arrows)
	const removeArrow = useDercosGameStore((state) => state.removeArrow)
	const hasConnections = arrows.some((arr) => arr.start == 'source1')

	return (
		<ShelfItemOne>
			<img
				className="item"
				src="/assets/images/dercos/linegame/aminexil.png"
				alt=""
			/>

			{!result && (
				<ArrowSource
					handler="right"
					boxId="source1"
					onClick={
						!isGuide && hasConnections
							? () => removeArrow('source1', 'source')
							: null
					}
				>
					<PulseButton className="paint-icon" style={{ color: '#000' }}>
						{hasConnections ? <CrossIcon /> : <PencilIcon />}
					</PulseButton>
				</ArrowSource>
			)}
		</ShelfItemOne>
	)
}

const ItemTwo = ({ result, start, anchorMulti }) => {
	const isGuide = useDercosGameStore((state) => state.isGuide)
	const arrows = useDercosGameStore((state) => state.arrows)
	const removeArrow = useDercosGameStore((state) => state.removeArrow)
	const hasConnections = arrows.some((arr) => arr.start == 'source2')
	const anchor = useRef<HTMLDivElement | null>(null)

	const [tip, setTip] = useState('')

	const checkTipShow = () => {
		const isDragShown = isTipShown('dercos-drag-tip')
		const isMultiShown = isTipShown('dercos-multi-tip')

		if (!isDragShown) {
			setTip('dercos-drag-tip')
		} else if (!isMultiShown) {
			setTip('dercos-multi-tip')
		} else {
			setTip('')
		}
	}

	useEffect(() => {
		if (!start) return
		checkTipShow()
	}, [start])

	const handleTipShown = (id: string) => {
		setTipShown(id)
		setTimeout(() => checkTipShow(), 100)
	}

	return (
		<ShelfItemTwo>
			<img
				className="item"
				src="/assets/images/dercos/linegame/dandruff.png"
				alt=""
			/>
			<div ref={anchor}>
				<AnimatePresence key={'dercos-drag-tip' + tip} initial={false}>
					{anchor && tip == 'dercos-drag-tip' && (
						<Popover
							placement="right"
							onClickOutside={handleTipShown.bind(null, 'dercos-drag-tip')}
							anchor={anchor}
						>
							<TipSelect
								onClick={handleTipShown.bind(null, 'dercos-drag-tip')}
							/>
						</Popover>
					)}
				</AnimatePresence>
				<AnimatePresence key={'dercos-multi-tip' + tip} initial={false}>
					{anchorMulti && tip == 'dercos-multi-tip' && (
						<Popover
							placement="bottom-end"
							withArrow={false}
							onClickOutside={handleTipShown.bind(null, 'dercos-multi-tip')}
							anchor={anchorMulti}
						>
							<TipMulti
								onClick={handleTipShown.bind(null, 'dercos-multi-tip')}
							/>
						</Popover>
					)}
				</AnimatePresence>
				{!result && (
					<ArrowSource
						handler="right"
						boxId="source2"
						onClick={
							!isGuide && hasConnections
								? () => removeArrow('source2', 'source')
								: null
						}
					>
						<PulseButton className="paint-icon" style={{ color: '#000' }}>
							{hasConnections ? <CrossIcon /> : <PencilIcon />}
						</PulseButton>
					</ArrowSource>
				)}
			</div>
		</ShelfItemTwo>
	)
}

const ItemThree = ({ result }) => {
	const isGuide = useDercosGameStore((state) => state.isGuide)
	const arrows = useDercosGameStore((state) => state.arrows)
	const removeArrow = useDercosGameStore((state) => state.removeArrow)
	const hasConnections = arrows.some((arr) => arr.start == 'source3')

	return (
		<ShelfItemThree>
			<img
				className="item"
				src="/assets/images/dercos/linegame/psolution.png"
				alt=""
			/>
			{!result && (
				<ArrowSource
					handler="right"
					boxId="source3"
					onClick={
						!isGuide && hasConnections
							? () => removeArrow('source3', 'source')
							: null
					}
				>
					<PulseButton className="paint-icon" style={{ color: '#000' }}>
						{hasConnections ? <CrossIcon /> : <PencilIcon />}
					</PulseButton>
				</ArrowSource>
			)}
		</ShelfItemThree>
	)
}

const ShelfContainer = styled.div<{ $result: boolean }>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 100vh;
	position: absolute;
	left: -5%;
	top: 0;

	@media screen and (max-width: 768px) {
		align-items: ${({ $result }) => ($result ? 'flex-start' : 'center')};
		top: ${({ $result }) => ($result ? '10%' : '0%')};
	}
`
const ShelfBackground = styled.div`
	display: flex;
	align-items: center;
	transform: translateX(-5%);

	position: relative;

	.shelf-bg {
		user-select: none;
		height: 100%;
		width: 100%;
		//z-index: -1;
	}
`

const ShelfItemOne = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 66.5%;
	left: 28%;
	height: 20%;
	z-index: 2;
	user-select: none;

	.item {
		height: 100%;
		user-select: none;
		margin-right: 16px;
	}

	.paint-icon,
	.cross-icon {
		width: 48px;
		height: 48px;
		padding: 8px;
		border: 2px solid #000;
		cursor: pointer;
		pointer-events: none;

		${media.md`	
			width: 32px;
			height: 32px;
		`}
		${media.sm`	
			margin-top: 30px;
			width: 32px;
			height: 32px;
		`}
	}
`

const ShelfItemTwo = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 42.2%;
	left: 62%;
	height: 20%;
	z-index: 2;
	user-select: none;

	.item {
		height: 100%;
		user-select: none;
		margin-right: 32px;
	}

	.paint-icon,
	.cross-icon {
		width: 48px;
		height: 48px;
		padding: 8px;
		border: 2px solid #000;
		cursor: pointer;
		pointer-events: none;
		${media.md`	
			width: 32px;
			height: 32px;
		`}
		${media.sm`	
			margin-top: 30px;
			width: 32px;
			height: 32px;
		`}
	}

	.message-left {
		width: 357px;
		z-index: 3;
	}

	.instruction__two-desktop {
		display: block;
		${media.lg`	
			display:none;
		`}
	}

	.game__message-desktop {
		display: block;
		transition: all 0.7s;
		${media.lg`	
			display:none;
		`}
	}
`

const ShelfItemThree = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 16.8%;
	left: 29%;
	height: 20%;
	z-index: 2;
	user-select: none;

	.item {
		height: 100%;
		user-select: none;
		margin-right: 32px;
	}

	.paint-icon,
	.cross-icon {
		width: 48px;
		height: 48px;
		padding: 8px;
		border: 2px solid #000;
		cursor: pointer;
		pointer-events: none;
		${media.md`	
			width: 32px;
			height: 32px;
		`}
		${media.sm`	
			margin-top: 30px;
			width: 32px;
			height: 32px;
		`}
	}

	.instruction__two-tablet {
		display: none;
		${media.lg`	
			display:block;
		`}
		${media.sm`	
			display:none;
		`}
	}

	.game__message-tablet {
		display: none;
		transition: all 0.7s;
		${media.lg`	
			display:block;
		`}
	}
`
