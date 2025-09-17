import React, { useMemo, useState } from 'react'
import { scaleLinear, scaleLog } from 'd3-scale'
import {
	ArchimedeanRandomRandomizer,
	CanvasHorizontalAlign,
	useCloud,
	WordCollider,
} from '@alesmenzel/cloud-react'
import {
	generateColorScale,
	MAX_FONT_SIZE,
	MIN_FONT_SIZE,
} from '@/components/shared/tag-cloud/utils/cloud-utils'
import { useMeasure } from 'react-use'
import { AnimatePresence, motion } from 'framer-motion'
import RectangleWordColliderMask from '@/components/shared/tag-cloud/masks/RectangleWordColliderMask'

const FONT = 'Gilroy'
const RANDOMIZER = new ArchimedeanRandomRandomizer<Word>({
	width: 100,
	height: 100,
})

const vichyColorScale = generateColorScale(
	[MIN_FONT_SIZE, MAX_FONT_SIZE * 0.5, MAX_FONT_SIZE],
	['#999896', '#999896', '#343434'],
)

const lrpColorScale = generateColorScale(
	[
		MIN_FONT_SIZE,
		MAX_FONT_SIZE * 0.25,
		MAX_FONT_SIZE * 0.45,
		MAX_FONT_SIZE * 0.5,
		MAX_FONT_SIZE,
	],
	[
		'#FFF',
		'rgba(255, 255, 255, 0.60)',
		'rgba(255, 255, 255, 0.60)',
		'#FFF',
		'#FFF',
	],
)

const defaultColorScale = scaleLinear<string, string>()
	.domain([
		MIN_FONT_SIZE,
		MAX_FONT_SIZE * 0.35,
		MAX_FONT_SIZE * 0.5,
		MAX_FONT_SIZE * 0.55,
		MAX_FONT_SIZE * 0.8,
		MAX_FONT_SIZE,
	])
	.range(['#999896', '#999896', '#00964A', '#DE0311', '#DE0311', '#343434'])
	.clamp(true)

export type Word = { text: string; count: number }

type SideType = {
	text: CanvasTextAlign
	base: CanvasHorizontalAlign
}

function Cloud({
	words: myWords,
	side = { text: 'center', base: 'bottom' } as SideType,
	min = MIN_FONT_SIZE,
	max = MAX_FONT_SIZE,
	color = '#fff',
	scale = 128,
}) {
	// List of words from some storage, e.g. from API
	const [words] = useState<Word[]>(myWords)

	// Responsive width/height
	const [ref, { width, height }] = useMeasure()
	const COLLIDER = useMemo(
		() =>
			new WordCollider<Word>({
				width: 100,
				height: 100,
				font: FONT,
				textAlign: 'center',
				textBaseline: 'middle',
				mask: new RectangleWordColliderMask(),
				gap: 4,
			}),
		[],
	)

	// Scale word count to font size
	const fontScale = useMemo(() => {
		// Could use also scaleLog instead to make the smaller words bigger
		return scaleLog().domain([1, scale]).range([min, max]).clamp(true)
	}, [words])

	// Set initial width/height and options
	const { points } = useCloud<Word>({
		width,
		height,
		randomizer: RANDOMIZER,
		collider: COLLIDER,
		attempts: 50,
		items: words,
		transform: (item) => {
			return { ...item, count: fontScale(item.count) }
		},
	})

	return (
		<div className="resizer" ref={ref as any}>
			<div style={{ width, height, position: 'absolute' }}>
				<svg
					width={width}
					height={height}
					style={{ overflow: 'visible' }}
					className="room-tag-cloud"
				>
					<AnimatePresence mode="wait">
						{points.map((point, i) => {
							const { item, index } = point

							return (
								<motion.g
									initial={{
										scale: 0.8,
										opacity: 0,
										translateX: width / 2,
										translateY: height / 2,
									}}
									animate={{
										scale: 1,
										opacity: 1,
										translateX: point.x,
										translateY: point.y,
									}}
									transition={{
										type: 'spring',
										stiffness: 260,
										damping: 20,
									}}
									key={item.text + item.count + index}
									onClick={() => console.log('clicked ', item.text)}
								>
									<svg
										x="0"
										y="0"
										fontSize={item.count}
										style={{ overflow: 'visible' }}
									>
										<text
											className="room-tag-cloud__word"
											fill={color}
											fontWeight={getFontFamily(item.count, max)}
											fontSize={item.count}
											fontFamily={FONT}
											textAnchor="middle"
											alignmentBaseline="middle"
										>
											{item.text}
										</text>
									</svg>
								</motion.g>
							)
						})}
					</AnimatePresence>
				</svg>
			</div>
		</div>
	)
}

export default Cloud

const getFontFamily = (count: number, max = 128) => {
	const bp1 = 0.75 * max // 96 of 128
	const bp2 = 0.2 * max
	const bp3 = 0.25 * max
	const bp4 = 0.4 * max
	const bp5 = 0.5 * max
	if (count >= bp1 || (count >= bp2 && count <= bp3)) return 'bold'
	if (count > bp3 || (count >= bp4 && count <= bp5)) return 'lighter'
	return 'normal'
}
