import React, { useRef } from 'react'
import ConnectPointsWrapper from './ConnectPointsWrapper'

const ArrowSource = ({ boxId, handler, children, onClick }) => {
	const ref0 = useRef(null)

	return (
		<div
			id={boxId}
			style={{
				borderRadius: '50%',
				position: 'relative',
				cursor: 'grab',
			}}
			ref={ref0}
		>
			{children}
			<ConnectPointsWrapper
				boxId={boxId}
				handler={handler}
				ref0={ref0}
				onClick={onClick}
			/>
		</div>
	)
}

export default ArrowSource
