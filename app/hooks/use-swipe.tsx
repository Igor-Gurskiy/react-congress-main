import { useState } from 'react'

interface IUseSwipeProps {
	onLeftSwipe?: () => void
	onRightSwipe?: () => void
	onDownSwipe?: () => void
	onUpSwipe?: () => void
	onSwipe?: () => void
	threshold?: number
	thresholdY?: number
	active?: boolean
}

const noop = () => {}

const useSwipe = ({
	onLeftSwipe = noop,
	onRightSwipe = noop,
	onDownSwipe = noop,
	onUpSwipe = noop,
	onSwipe = noop,
	threshold = 25,
	thresholdY = 50,
	active = true,
}: IUseSwipeProps) => {
	const [touchX, setTouchX] = useState<number | null>(0)
	const [touchY, setTouchY] = useState<number | null>(0)
	const onTouchStart = (e) => {
		if (!active) return
		setTouchX(e.touches[0].pageX)
		setTouchY(e.touches[0].pageY)
	}

	const onTouchEnd = (e) => {
		if (!active) return

		const endX = e.changedTouches[0].clientX
		const endY = e.changedTouches[0].clientY

		const shouldSwipeX =
			touchX && Math.abs(Math.abs(touchX) - Math.abs(endX)) > threshold
		const shouldSwipeY =
			touchY && Math.abs(Math.abs(touchY) - Math.abs(endY)) > thresholdY

		const isItScroll =
			touchY &&
			touchX &&
			Math.abs(Math.abs(touchY) - Math.abs(endY)) >
				Math.abs(Math.abs(touchX) - Math.abs(endX))

		if (shouldSwipeY && isItScroll) {
			if (touchY !== null && endY !== null) {
				const deltaY = endY - touchY

				if (deltaY > 0) {
					onDownSwipe()
				} else {
					onUpSwipe()
				}
				onSwipe()
				return
			}
		}

		if (!shouldSwipeX || isItScroll) return
		if (touchX !== null && endX !== null) {
			const deltaX = endX - touchX

			if (deltaX > 0) {
				onRightSwipe()
			} else {
				onLeftSwipe()
			}

			onSwipe()
		}

		setTouchX(null)
	}
	return { onTouchEnd, onTouchStart }
}

export default useSwipe
