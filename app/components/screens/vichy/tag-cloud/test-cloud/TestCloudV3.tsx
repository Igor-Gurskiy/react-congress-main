import React, { useCallback, useMemo } from 'react'
import { Text } from '@visx/text'
import Wordcloud from '@visx/wordcloud/lib/Wordcloud'
import { tags } from '@/utils/tags'
import { motion } from 'framer-motion'
import { scalePow } from 'd3-scale'
import {
	MAX_FONT_SIZE,
	MIN_FONT_SIZE,
} from '@/components/shared/tag-cloud/utils/cloud-utils'

interface ExampleProps {
	width: number
	height: number
}

export interface WordData {
	text: string
	value: number
}

const words = tags.concat()

// const fontScale = scaleLog({
// 	domain: [
// 		Math.min(...words.map((w) => w.value)),
// 		Math.max(...words.map((w) => w.value)),
// 	],
// 	range: [12, 128],
// })

const fixedValueGenerator = () => 0.5

export default function TestCloudV3({ data = [], maxScale, width, height }) {
	const fontScale = useMemo(() => {
		// Could use also scaleLog instead to make the smaller words bigger
		return scalePow()
			.domain([1, maxScale])
			.range([MIN_FONT_SIZE, MAX_FONT_SIZE])
			.clamp(true)
	}, [maxScale])
	const fontSizeSetter = useCallback(
		(datum: WordData) => fontScale(datum.value),
		[fontScale],
	)

	return (
		<div className="wordcloud">
			<Wordcloud
				words={data}
				width={width}
				height={height}
				fontSize={fontSizeSetter}
				font={'Gilroy'}
				padding={8}
				spiral="rectangular"
				rotate={0}
				random={fixedValueGenerator}
			>
				{(cloudWords) =>
					cloudWords.map((w, i) => (
						<g
							key={i}
							className="tag-cloud-text"
							style={{
								animation: `floating ${
									getRandomDelay() * 4
								}s ease-in-out infinite`,
								animationDelay: getRandomValue(i) + 'ms',
							}}
						>
							<motion.g
								whileHover={{ scale: 1.2, cursor: 'pointer', zIndex: 102 }}
								transition={{
									type: 'spring',
									stiffness: 260,
									damping: 20,
								}}
							>
								<Text
									// fill={colors[i % colors.length]}
									fill="#7F7F7F"
									fontWeight={getFontFamily(w.size)}
									textAnchor={'middle'}
									transform={`translate(${w.x}, ${w.y})`}
									fontSize={w.size}
									fontFamily={w.font}
									scaleToFit
								>
									{w.text}
								</Text>
							</motion.g>
						</g>
					))
				}
			</Wordcloud>
		</div>
	)
}

const getFontFamily = (count: number | undefined) => {
	if (!count) return 'normal'
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
