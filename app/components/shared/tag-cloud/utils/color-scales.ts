import {
	generateColorScale,
	MAX_FONT_SIZE,
	MIN_FONT_SIZE,
} from '@/components/shared/tag-cloud/utils/cloud-utils'
import { scaleLinear } from 'd3-scale'

export const vichyColorScale = (fScale) =>
	generateColorScale(
		[
			MIN_FONT_SIZE * fScale,
			MAX_FONT_SIZE * 0.5 * fScale,
			MAX_FONT_SIZE * fScale,
		],
		['#999896', '#999896', '#343434'],
	)

export const lrpColorScale = (fScale) =>
	generateColorScale(
		[
			MIN_FONT_SIZE * fScale,
			MAX_FONT_SIZE * 0.25 * fScale,
			MAX_FONT_SIZE * 0.45 * fScale,
			MAX_FONT_SIZE * 0.5 * fScale,
			MAX_FONT_SIZE * fScale,
		],
		[
			'#FFF',
			'rgba(255, 255, 255, 0.60)',
			'rgba(255, 255, 255, 0.60)',
			'#FFF',
			'#FFF',
		],
	)

export const defaultColorScale = (fScale) =>
	scaleLinear<string, string>()
		.domain([
			MIN_FONT_SIZE * fScale,
			MAX_FONT_SIZE * 0.35 * fScale,
			MAX_FONT_SIZE * 0.5 * fScale,
			MAX_FONT_SIZE * 0.55 * fScale,
			MAX_FONT_SIZE * 0.8 * fScale,
			MAX_FONT_SIZE * fScale,
		])
		.range(['#999896', '#999896', '#00964A', '#DE0311', '#DE0311', '#343434'])
		.clamp(true)

export function getColorScale(cloudColorScale, fScale = 1) {
	const colorScales = {
		lrp: lrpColorScale(fScale),
		vichy: vichyColorScale(fScale),
		default: defaultColorScale(fScale),
	}

	return colorScales[cloudColorScale] || colorScales.default
}
