'use client'
import { scaleLinear } from 'd3-scale'

export const CLOUD_FONT = 'Gilroy'
export const MIN_FONT_SIZE = 14
export const MAX_FONT_SIZE = 100
export const generateColorScale = (domain: number[], colors: string[]) =>
	scaleLinear<string, string>().domain(domain).range(colors).clamp(true)

export const getFontFamily = (count: number, scale: number = 1) => {
	if (count >= 96 * scale || (count >= 24 * scale && count <= 36 * scale))
		return 'bold'
	if (count >= 36 * scale || (count >= 52 * scale && count <= 64 * scale))
		return 'lighter'
	return 'normal'
}

export function getRandomDelay() {
	const min = 3
	const max = 6
	const step = 0.2

	const randomSteps = (max - min) / step
	const randomStep = Math.floor(Math.random() * randomSteps) * step

	return min + randomStep
}

export function calculateScale(min, max, size) {
	const range = (size - min) / (max - min)
	return 1.2 + Math.max(0, 0.5 - range * 2)
}
