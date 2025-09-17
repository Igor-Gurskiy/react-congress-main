import React, { useRef } from 'react'
import ConnectPointsWrapper from './ConnectPointsWrapper'
import { useDroppable } from '@dnd-kit/core'

const ArrowTarget = ({ boxId, handler, children }) => {
	const ref0 = useRef<HTMLDivElement>(null)

	const { isOver, setNodeRef } = useDroppable({
		id: boxId,
	})

	const style = {
		transform: isOver ? 'scale(1.2)' : 'scale(1.0)',
	}

	return (
		<div
			id={boxId}
			style={{
				borderRadius: '50%',
				position: 'relative',
				...style,
			}}
			ref={setNodeRef}
		>
			{children}
			<ConnectPointsWrapper {...{ boxId, handler, ref0 }} />
		</div>
	)
}

export default ArrowTarget
