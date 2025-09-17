import React, { useEffect, useMemo, useState } from 'react'
import { scaleLog } from 'd3-scale'
import { WordCollider } from '@alesmenzel/cloud-react'
import {
	calculateScale,
	CLOUD_FONT,
	getRandomDelay,
	MAX_FONT_SIZE,
	MIN_FONT_SIZE,
} from '@/components/shared/tag-cloud/utils/cloud-utils'
import { useMeasure, useWindowSize } from 'react-use'
import CloudWord from '@/components/shared/tag-cloud/CloudWord'
import { getColorScale } from '@/components/shared/tag-cloud/utils/color-scales'
import useMyCloud, { Word } from '@/components/shared/tag-cloud/use-my-cloud'
import { RANDOMIZER } from '@/components/shared/tag-cloud/randomizers/Randomizer'
import RectangleWordColliderMask from '@/components/shared/tag-cloud/masks/RectangleWordColliderMask'

const useFontSizes = (minSize, maxSize) => {
	const { width, height } = useWindowSize()

	const isMobile = width < 768
	// const minRatio = Math.max(width / 1920, height / 1080)
	const fScale = Math.min(width / 1920, height / 1080)
	const minRatio = isMobile ? fScale * 1.5 : fScale

	return {
		min: minRatio * minSize,
		max: minRatio * maxSize,
		fontScale: minRatio,
	}
}

const Cloud = ({
	words: myWords,
	min: minInitial = MIN_FONT_SIZE,
	max: maxInitial = MAX_FONT_SIZE,
	colorScale,
	scale = 128,
}) => {
	const { min, max, fontScale: fScale } = useFontSizes(minInitial, maxInitial)

	const colors = useMemo(
		() => getColorScale(colorScale, fScale),
		[colorScale, fScale],
	)
	const [words, setWords] = useState<Word[]>(myWords)

	useEffect(() => {
		setWords(myWords)
	}, [myWords])

	// Responsive width/height
	const [ref, { width, height }] = useMeasure()

	// Word collider
	const COLLIDER = useMemo(
		() =>
			new WordCollider<Word>({
				width: 50,
				height: 50,
				font: CLOUD_FONT,
				textAlign: 'center',
				textBaseline: 'middle',
				mask: new RectangleWordColliderMask(),
				gap: 4,
			}),
		[],
	)

	// Scale word count to font size
	const fontScale = useMemo(() => {
		// Could use scaleLog to make the smaller words bigger, or scalePow
		return scaleLog().domain([1, scale]).range([min, max]).clamp(true)
	}, [words])

	// Set initial width/height and options
	const { points, updateCloudItems } = useMyCloud({
		width,
		height,
		options: {
			randomizer: RANDOMIZER,
			collider: COLLIDER,
			attempts: 50,
			items: words,
			transform: (item) => {
				const fontSize = fontScale(item.count)
				return {
					...item,
					count: fontSize,
					delay: getRandomDelay() * 4,
					scale: Number(calculateScale(min, max, fontSize)),
				}
			},
		},
	})

	return (
		<div className="resizer" ref={ref as any}>
			<div style={{ width, height, position: 'absolute' }}>
				<svg width={width} height={height} style={{ overflow: 'visible' }}>
					{points.map((point) => (
						<CloudWord
							key={point.item.text}
							colorScale={colors}
							point={point}
							fontScale={fScale}
							updateCloudItems={updateCloudItems}
						/>
					))}
				</svg>
			</div>
		</div>
	)
}

export default Cloud
