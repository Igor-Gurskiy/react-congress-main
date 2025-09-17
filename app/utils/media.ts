// @ts-nocheck
import { css } from 'styled-components'

interface Sizes {
	[key: string]: number
}

interface Media {
	[key: string]: (...args: any) => string
}

export const sizes: Sizes = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 1024,
	xl: 1300,
	xxl: 1500,
	phone: 376,
	phone_m: 476,
	phone_xl: 640,
	tablet: 720,
	desktop: 1024,
	giant: 1200,
	five: 322,
}

const media: Media = Object.keys(sizes).reduce((finalMedia, size) => {
	return {
		...finalMedia,
		[size]: (...args: any) => {
			return css`
				@media (max-width: ${sizes[size] - 0.02}px) {
					${css(...args)}
				}
			`
		},
	}
}, {})

export const mediaMin: Media = Object.keys(sizes).reduce((finalMedia, size) => {
	return {
		...finalMedia,
		[size]: (...args: any) => {
			return css`
				@media (min-width: ${sizes[size]}px) {
					${css(...args)}
				}
			`
		},
	}
}, {})

export default media
