import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import StorySectionControls from '@/components/screens/green/modals/stories/components/StorySection/StorySectionControls'
import { useStoryMeasures } from '@/components/screens/green/modals/stories/components/StorySection/use-story-measures'
import { IStorySection } from '@/components/screens/green/modals/stories/stories'
import { FC, useState } from 'react'
import StoryItem from '@/components/screens/green/modals/stories/components/Story/StoryItem'
import { ProgressArray } from '@/components/screens/green/modals/stories/components/ProgressArray'
import useSwipe from '@/hooks/use-swipe'

interface IStorySectionProps {
	items: IStorySection
	idx: number
	pos: number
	selected: number
	hasNext: boolean
	hasPrev: boolean
	onSelect: Function
	close: () => void
}

const StorySection: FC<IStorySectionProps> = ({
	items,
	idx,
	pos = 0,
	selected,
	onSelect,
	hasNext,
	hasPrev,
	close,
}) => {
	const { width, height, translateX, scale, itemScale } = useStoryMeasures(pos)
	const isActiveSection = selected == idx

	const handleNext = () => {
		if (!hasNext) return
		onSelect(idx + 1)
	}

	const handlePrev = () => {
		if (!hasPrev) return
		onSelect(idx - 1)
	}

	return (
		<AnimatePresence initial={false} mode="wait">
			<SectionWrapper
				onClick={(e) => {
					if (!isActiveSection) {
						onSelect(idx)
					}
					e.stopPropagation()
				}}
				initial={false}
				animate={{
					x: translateX,
					scale: scale,
				}}
				transition={{
					type: 'spring',
					stiffness: 160,
					damping: 20,
				}}
				style={{
					width,
					height,
				}}
			>
				<StoryItemsViewer
					items={items}
					scale={itemScale}
					isActiveSection={isActiveSection}
					handleNextSection={handleNext}
					handlePrevSection={handlePrev}
					hasNext={hasNext}
					hasPrev={hasPrev}
					pos={pos}
					close={close}
				/>
			</SectionWrapper>
		</AnimatePresence>
	)
}

interface IStoryItemsViewer {
	items: IStorySection
	isActiveSection: boolean
	scale: number
	pos: number
	hasNext: boolean
	hasPrev: boolean
	handleNextSection: Function
	handlePrevSection: Function
	close: () => void
}

const StoryItemsViewer: FC<IStoryItemsViewer> = ({
	items,
	isActiveSection,
	scale,
	handleNextSection,
	handlePrevSection,
	hasPrev,
	hasNext,
	pos,
	close,
}) => {
	const [curr, setCurr] = useState(0)
	const [pause, setPause] = useState(false)

	const currItem = items.at(curr)
	const hasNextItem = curr + 1 < items.length
	const hasPrevItem = curr - 1 >= 0

	const handleNext = () => {
		const nextCurr = curr + 1
		if (nextCurr > items.length - 1) {
			handleNextSection()
			return
		}

		setCurr(nextCurr)
	}

	const handlePrev = () => {
		const prevCurr = curr - 1
		if (prevCurr < 0) {
			handlePrevSection()
			return
		}

		setCurr(prevCurr)
	}

	const { onTouchStart, onTouchEnd } = useSwipe({
		onLeftSwipe: handleNext,
		onRightSwipe: handlePrev,
		onDownSwipe: close,
		onUpSwipe: close,
		threshold: 10,
		thresholdY: 100,
	})

	if (!currItem) return null

	return (
		<ViewerWrapper onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
			{isActiveSection && (
				<ProgressArray
					item={currItem}
					count={items.length}
					current={curr}
					next={handleNext}
					pause={pause}
				/>
			)}
			<StoryItem
				item={currItem}
				scale={scale}
				isActiveSection={isActiveSection}
				onMouseDown={setPause.bind(null, true)}
				onMouseUp={setPause.bind(null, false)}
				onTouchStart={(e) => {
					e.preventDefault()
					setPause(true)
				}}
				onTouchEnd={(e) => {
					e.preventDefault()
					setPause(false)
				}}
			/>

			{/*{isActiveSection && !isMobile && (*/}
			{/*	<>*/}
			{/*		<Prev onClick={handlePrev} />*/}
			{/*		<Next onClick={handleNext} />*/}
			{/*	</>*/}
			{/*)}*/}

			<StorySectionControls
				hasPrev={hasPrev || hasPrevItem}
				hasNext={hasNext || hasNextItem}
				handleNext={handleNext}
				handlePrev={handlePrev}
				pos={pos}
			/>
		</ViewerWrapper>
	)
}

const ViewerWrapper = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
`
const ViewerControl = styled.div`
	position: absolute;
	top: 0;
	width: 50%;
	z-index: 10;
	height: 100%;
`

const Prev = styled(ViewerControl)`
	left: 0;
`
const Next = styled(ViewerControl)`
	left: 50%;
`

export default StorySection

const SectionWrapper = styled(motion.div)`
	transform-origin: left;
	position: absolute;
	left: 0;

	cursor: pointer;
`
