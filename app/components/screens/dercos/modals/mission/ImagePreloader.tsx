import { useEffect } from 'react'

const PreloadImages = () => {
	useEffect(() => {
		const imageSources = [
			'/assets/images/dercos/modals/mission/academy-desktop.png',
			'/assets/images/dercos/modals/mission/pc.png',
			'/assets/images/dercos/modals/mission/academy-tablet.png',
			'/assets/images/dercos/modals/mission/academy-mobile.png',
			'/assets/images/dercos/modals/mission/v-left.svg',
			'/assets/images/dercos/modals/mission/v-left-white.svg',
			'/assets/images/dercos/modals/mission/v-right.svg',
			'/assets/images/dercos/modals/mission/school-mobile.png',
			'/assets/images/dercos/modals/mission/nautilus.png',
			'/assets/images/dercos/modals/mission/rhrs.png',
			'/assets/images/dercos/modals/mission/trihology.png',
			'/assets/images/dercos/modals/mission/school.png',
			'/assets/images/dercos/modals/mission/hairs-day-logo.png',
			'/assets/images/dercos/modals/mission/hairs-bg.png',
			'/assets/images/dercos/modals/mission/hairs-mobile.png',
			'/assets/images/dercos/modals/mission/dercos-bg.png',
			'/assets/images/dercos/modals/mission/hairs-pattern-bg',
		]

		imageSources.forEach((src) => {
			const img = new Image()
			img.src = src
		})
	}, [])

	return null
}

export default PreloadImages
