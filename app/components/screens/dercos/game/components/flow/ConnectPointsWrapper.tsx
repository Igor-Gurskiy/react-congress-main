import React, { useRef } from 'react'
import { useDraggable } from '@dnd-kit/core'
import Xarrow from 'react-xarrows'

const connectPointStyle = {
	position: 'absolute',
	width: 15,
	height: 15,
	background: 'transparent',
	zIndex: 10,
}

const connectPointOffset = {
	left: { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' },
	right: { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' },
	top: { left: '50%', top: 0, transform: 'translate(-50%, -50%)' },
	bottom: { left: '50%', top: '100%', transform: 'translate(-50%, -50%)' },
}

const ConnectPointsWrapper = ({ boxId, handler, ref0, onClick = () => {} }) => {
	const ref1 = useRef(null)
	const { attributes, listeners, setNodeRef, isDragging, transform } =
		useDraggable({
			id: boxId,
		})

	// Рассчитываем ширину и высоту connectPoint
	const connectPointSize = {
		width: ref0.current?.offsetWidth || 0,
		height: ref0.current?.offsetHeight || 0,
	}

	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined

	const color =
		boxId == 'source1' ? '#DE0311' : boxId == 'source2' ? '#00964A' : '#6D6D6D'

	return (
		<React.Fragment>
			<div
				onClick={onClick}
				className="connectPoint"
				style={{
					...connectPointStyle,
					...connectPointOffset[handler],
					...connectPointSize, // Добавляем размеры connectPoint
					...style,
					touchAction: 'none',
				}}
				ref={setNodeRef}
				{...attributes}
				{...listeners}
			/>

			<div
				ref={ref1}
				style={{
					...connectPointStyle,
					...connectPointOffset[handler],
					...style,
					width: isDragging ? 10 : connectPointSize.width,
					height: isDragging ? 10 : connectPointSize.height,
					pointerEvents: 'none',
				}}
			/>

			{isDragging ? (
				<Xarrow
					curveness={0.5}
					path="smooth"
					startAnchor="right"
					strokeWidth={3}
					color={color}
					start={ref0}
					end={ref1}
				/>
			) : null}
		</React.Fragment>
	)
}

export default ConnectPointsWrapper
