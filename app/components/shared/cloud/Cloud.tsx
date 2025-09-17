import React, { useState } from 'react'
import d3Cloud from 'd3-cloud'
import { Group } from '@visx/group'
import { useDebounce } from 'react-use'

export interface BaseDatum {
	text: string
}

export interface WordcloudConfig<Datum extends BaseDatum> {
	/**
	 * Width of the wordcloud layout.
	 */
	width: number
	/**
	 * Height of the wordcloud layout.
	 */
	height: number
	/**
	 * Sets the words array.
	 */
	words: Datum[]
	/**
	 * Sets the padding accessor function, which indicates the numerical padding for each word.
	 *
	 * @default 1
	 */
	padding?: number | ((datum: Datum, index: number) => number)
	/**
	 * Sets the font accessor function, which indicates the font face for each word.
	 *
	 * @default serif
	 */
	font?: string | ((datum: Datum, index: number) => string)
	/**
	 * Sets the fontSize accessor function, which indicates the numerical font size for each word.
	 *
	 * @default function(datum) { return Math.sqrt(datum.value); }
	 */
	fontSize?: number | ((datum: Datum, index: number) => number)
	/**
	 * Sets the fontStyle accessor function, which indicates the font style for each word.
	 *
	 * @default normal
	 */
	fontStyle?: string | ((datum: Datum, index: number) => string)
	/**
	 * Sets the fontWeight accessor function, which indicates the font weight for each word.
	 *
	 * @default normal
	 */
	fontWeight?:
		| string
		| number
		| ((datum: Datum, index: number) => string | number)
	/**
	 * Sets the rotate accessor function, which indicates the rotation angle (in degrees) for each word.
	 *
	 * @default function() { return (~~(Math.random() * 6) -3) * 30; }
	 */
	rotate?: number | ((datum: Datum, index: number) => number)
	/**
	 * Sets the current type of spiral used for positioning words.
	 * This can either be one of the two built-in spirals, "archimedean" and "rectangular", or an arbitrary spiral generator can be used.
	 *
	 * @default archimedean
	 */
	spiral?:
		| 'archimedean'
		| 'rectangular'
		| ((size: [number, number]) => (t: number) => [number, number])
	/**
	 * Sets the internal random number generator, used for selecting the initial position of each word,
	 * and the clockwise/counterclockwise direction of the spiral for each word. Random function should return a number in the range [0, 1).
	 * When the returned value is a fixed value, the layout coordinates of each word will be the same every time the word cloud of the same data is rendered.
	 * By default, the browser's built-in 'Math.random' is used, which means that each rendering will change the position of the word.
	 *
	 * @default Math.random
	 */
	random?: () => number
}

function useWordcloud<Datum extends BaseDatum>({
	width,
	height,
	font,
	fontSize,
	fontStyle,
	fontWeight,
	padding,
	random,
	rotate,
	spiral,
	words,
}: WordcloudConfig<Datum>) {
	const [cloudWords, setCloudWords] = useState<d3Cloud.Word[]>([])

	const handleDraw = () => {
		if (width === 0 || height === 0) {
			return
		}

		const layout = d3Cloud<Datum>()

		layout.size([width, height])
		layout.words(words)
		if (typeof random !== 'undefined') layout.random(random)
		if (typeof font !== 'undefined') layout.font(font)
		if (typeof padding !== 'undefined') layout.padding(padding)
		if (typeof fontSize !== 'undefined') layout.fontSize(fontSize)
		if (typeof fontStyle !== 'undefined') layout.fontStyle(fontStyle)
		if (typeof fontWeight !== 'undefined') layout.fontWeight(fontWeight)
		if (typeof rotate !== 'undefined') layout.rotate(rotate)
		if (typeof spiral !== 'undefined') layout.spiral(spiral)

		layout.on('end', setCloudWords)
		layout.start()
	}

	const [_, cancel] = useDebounce(handleDraw, 500, [
		width,
		height,
		font,
		fontSize,
		fontStyle,
		fontWeight,
		padding,
		random,
		rotate,
		spiral,
		words,
	])

	return cloudWords
}

export interface WordcloudProps<Datum extends BaseDatum>
	extends WordcloudConfig<Datum> {
	children: (words: d3Cloud.Word[]) => React.ReactNode
}

export default function Wordcloud<Datum extends BaseDatum>(
	props: WordcloudProps<Datum>,
) {
	const { children, ...wordcloudConfig } = props
	const { width, height } = wordcloudConfig
	const words = useWordcloud(wordcloudConfig)

	if (width === 0 || height === 0) return null

	return (
		<div style={{ width, height }}>
			<svg width={width} height={height}>
				<Group left={width / 2} top={height / 2}>
					{children(words)}
				</Group>
			</svg>
		</div>
	)
}
