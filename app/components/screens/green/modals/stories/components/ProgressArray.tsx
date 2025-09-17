import { FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {
	onStoryEnd,
	onStoryStart,
} from '@/components/screens/green/modals/stories/story-callbacks'
import { IStoryItem } from '@/components/screens/green/modals/stories/stories'

export function timestamp() {
	return window.performance && window.performance.now
		? window.performance.now()
		: new Date().getTime()
}

interface IProgressArray {
	count: number
	current: number
	next: Function
	pause: boolean
	item: IStoryItem
}

const STORY_VIEW_INTERVAL = 5000

export const ProgressArray: FC<IProgressArray> = ({
	count,
	current,
	next,
	pause,
	item,
}) => {
	const [time, setTime] = useState<number>(0)
	const lastTime = useRef<number>(0)
	const timeRef = useRef<number>(0)

	useEffect(() => {
		setTime(0)
	}, [current])

	useEffect(() => {
		timeRef.current = time
	}, [time])

	useEffect(() => {
		onStoryStart(item.events.visit)

		setTimeout(() => {
			if (!pause) {
				animationFrameId.current = requestAnimationFrame(incrementCount)
				lastTime.current = timestamp()
			}
		}, 300)

		return () => {
			if (!animationFrameId.current) return
			cancelAnimationFrame(animationFrameId.current)
			onStoryEnd(
				item.events.duration,
				Math.round(((timeRef.current / 100) * STORY_VIEW_INTERVAL) / 1000),
			)
		}
	}, [current, pause])

	let animationFrameId = useRef<number>()

	let countCopy = count
	const incrementCount = () => {
		if (countCopy === 0)
			if (lastTime.current == undefined) lastTime.current = timestamp()
		const t = timestamp()
		const dt = t - lastTime.current
		lastTime.current = t
		setTime((time: number) => {
			const interval = STORY_VIEW_INTERVAL
			countCopy = time + (dt * 100) / interval
			return countCopy
		})
		if (countCopy < 100) {
			animationFrameId.current = requestAnimationFrame(incrementCount)
		} else {
			// storyEndCallback()
			if (!animationFrameId.current) return
			cancelAnimationFrame(animationFrameId.current)

			next()
		}
	}

	return (
		<ProgressWrapper>
			{Array.from({ length: count }).map((_, idx) => (
				<Progress
					key={idx}
					count={time}
					isCurrent={current == idx}
					viewed={current > idx}
				/>
			))}
		</ProgressWrapper>
	)
}

const Progress = ({ count, isCurrent, viewed }) => {
	const countState = viewed ? 100 : isCurrent ? Number(count) : 0

	return (
		<ProgressItem>
			<ProgressStatus $count={countState} />
		</ProgressItem>
	)
}

const ProgressWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 8px;
	padding: 0 12px;
	position: absolute;
	width: 100%;
	top: 30px;
	left: 0;
	z-index: 9;
`
type ProgressStatus = { $count: number }

const ProgressStatus = styled.div.attrs<ProgressStatus>((props) => ({
	style: {
		transform: `translateX(${props.$count}%)`,
	},
}))<ProgressStatus>`
	background: rgba(239, 239, 239, 1);
	position: absolute;
	height: 100%;
	top: 0;
	left: -100%;
	width: 100%;
	will-change: transform;
`

const ProgressItem = styled.div`
	display: flex;
	flex-grow: 1;
	height: 6px;
	border-radius: 10px;
	background: rgba(235, 235, 235, 0.4);
	position: relative;
	overflow: hidden;
`
