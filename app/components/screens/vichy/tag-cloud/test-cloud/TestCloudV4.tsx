// @ts-nocheck
import React, { useCallback, useMemo } from 'react'
import { scalePow } from 'd3-scale'
import {
	MAX_FONT_SIZE,
	MIN_FONT_SIZE,
} from '@/components/shared/tag-cloud/utils/cloud-utils'

import { motion } from 'framer-motion'
import Wordcloud from '@/components/shared/cloud/Cloud'
import { WordData } from '@/components/screens/vichy/tag-cloud/test-cloud/TestCloudV3'
import styled from 'styled-components'
import { Text } from '@visx/text'

const fixedValueGenerator = () => 0.5

const TestCloudV4 = ({
	data = [] as any,
	scale,
	width = 0,
	height = 0,
	min = MIN_FONT_SIZE,
	max = MAX_FONT_SIZE,
}) => {
	const fontScale = useMemo(() => {
		// Could use also scaleLog instead to make the smaller words bigger
		return scalePow().domain([1, scale]).range([min, max]).clamp(true)
	}, [scale])

	const fontSizeSetter = useCallback(
		(datum: WordData) => fontScale(datum.value),
		[fontScale],
	)
	return (
		<Wrapper>
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
								whileHover={{ scale: 1.2, cursor: 'pointer' }}
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
		</Wrapper>
	)
}

export default TestCloudV4

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

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	flex: 1;
`
