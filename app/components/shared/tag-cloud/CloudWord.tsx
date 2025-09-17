import { motion, useAnimate } from 'framer-motion'
import React, { useEffect } from 'react'
import {
	CLOUD_FONT,
	getFontFamily,
} from '@/components/shared/tag-cloud/utils/cloud-utils'

const CloudWord = ({ colorScale, point, updateCloudItems, fontScale }) => {
	const { item, rendered } = point
	const [scope, animate] = useAnimate()

	useEffect(() => {
		if (!item.added) return
		const main = colorScale(item.count)
		animate(
			scope.current,
			{ fill: [main, '#f00', main, '#f00', main, '#f00', main] },
			{
				duration: 3,
				onComplete: () => {
					updateCloudItems([point])
				},
			},
		)
	}, [item])

	return (
		<motion.g
			initial={{
				scale: rendered ? 1 : 0.8,
				opacity: point.visible ? 1 : rendered ? 1 : 0,
				translateX: point.lastX,
				translateY: point.lastY,
			}}
			animate={{
				scale: 1,
				opacity: point.visible ? 1 : 0,
				translateX: point.x,
				translateY: point.y,
			}}
			style={{
				position: point.visible ? 'inherit' : 'absolute',
				pointerEvents: point.visible ? 'all' : 'none',
			}}
			transition={{
				duration: 0.5,
			}}
		>
			<g
				style={{
					// @ts-ignore
					'--scale-factor': item['scale'] - 1,
					// animation: `scaling ${item['delay']}s ease-in-out infinite`,
					// animationDelay: item['delay'] + 'ms',
				}}
			>
				<motion.g
					whileHover={{
						scale: item['scale'],
						cursor: 'pointer',
					}}
					initial={{ scale: 1 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}
				>
					<svg
						x="0"
						y="0"
						fontSize={item.count}
						style={{ overflow: 'visible' }}
					>
						<text
							ref={scope}
							fill={colorScale(item.count)}
							fontWeight={getFontFamily(item.count, fontScale)}
							fontSize={item.count}
							fontFamily={CLOUD_FONT}
							textAnchor="middle"
							alignmentBaseline="middle"
						>
							{item.text}
						</text>
					</svg>
				</motion.g>
			</g>
		</motion.g>
	)
}

export default CloudWord
