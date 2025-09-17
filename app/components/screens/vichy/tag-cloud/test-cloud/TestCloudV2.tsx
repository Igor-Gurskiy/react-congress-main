// @ts-nocheck
import React, { useMemo } from 'react'
import { scalePow } from 'd3-scale'
import {
	MAX_FONT_SIZE,
	MIN_FONT_SIZE,
} from '@/components/shared/tag-cloud/utils/cloud-utils'
import MyTagCloud from '@/components/screens/vichy/tag-cloud/test-cloud/MyTagCloud'

import { motion } from 'framer-motion'

const TestCloudV2 = ({
	data = [] as any,
	scale,
	min = MIN_FONT_SIZE,
	max = MAX_FONT_SIZE,
}) => {
	const fontScale = useMemo(() => {
		// Could use also scaleLog instead to make the smaller words bigger
		return scalePow().domain([1, scale]).range([min, max]).clamp(true)
	}, [scale, min, max])

	return (
		<div className="app-outer">
			<div className="app-inner">
				<MyTagCloud
					random={() => 0.5}
					/*@ts-ignore*/
					className="tag-cloud"
					spiral="rectangular"
					style={{
						fontFamily: 'Gilroy',
						padding: 8,
						color: 'rgba(52, 52, 52, 0.6)',
					}}
				>
					{data.map((tag, i) => (
						<div
							key={tag.id}
							data-tag={tag.text}
							className="cloud-tag"
							style={{
								fontSize: fontScale(tag.value),
								fontFamily: 'Gilroy',
								fontWeight: getFontFamily(tag.value),
								lineHeight: 0.8,
								padding: 8,
								color: 'rgba(52, 52, 52, 0.6)',
								display: 'flex',
							}}
							text={tag.text}
						>
							<div
								style={{
									animation: `floating ${
										getRandomDelay() * 4
									}s ease-in-out infinite`,
									animationDelay: getRandomValue(i) + 'ms',
								}}
							>
								<motion.div
									whileHover={{ scale: 1.2, cursor: 'pointer' }}
									transition={{
										type: 'spring',
										stiffness: 260,
										damping: 20,
									}}
								>
									{tag.text}
								</motion.div>
							</div>
						</div>
					))}
				</MyTagCloud>
			</div>
		</div>
	)
}

export default TestCloudV2

const getFontFamily = (count: number) => {
	if (count >= 80 || (count >= 24 && count <= 36)) return 'bold'
	if (count >= 36 || (count >= 52 && count <= 64)) return 'lighter'
	return 'normal'
}

function getRandomValue(index) {
	// Генерируем случайное число от 1 до 10
	const randomMultiplier = Math.floor(Math.random() * 10) + 1

	// Вычисляем значение с рандомным шагом в 50
	const randomValue = index * 50 * randomMultiplier + 50

	// Ограничиваем значение максимумом 500
	return randomValue > 500 ? 500 : randomValue
}

function getRandomDelay() {
	const min = 3
	const max = 6
	const step = 0.2

	const randomSteps = (max - min) / step
	const randomStep = Math.floor(Math.random() * randomSteps) * step

	return min + randomStep
}
