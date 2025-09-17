import { EventsEnum } from '@/api/tracker'
import ModalService from '@/components/shared/modal/ModalService'
import VideoModal from '@/components/shared/video-modal/VideoModal'
import useHover from '@/hooks/useHover'
import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import { easePoly } from 'd3-ease'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

export const handleLorealRedirect = () => {
	if (window) {
		window.open('https://events.loreal.com.ru/', '_blank')?.focus()
	}
}

const handleVideo = () => {
	ModalService.open(VideoModal, {
		videoId: 'DZ9Do1JsNMU',
		trackerId: EventsEnum.hallVideo,
		trackerProgressId: EventsEnum.hallVideoProgress,
	})
}

export const handleHallTv = () => {
	handleVideo()
	// handleLorealRedirect()
	// const activeTime = 1703970000000 <= Date.now()
	//
	// if (activeTime) {
	// 	handleVideo()
	// 	// } else if (Date.now() >= 1668063600000) {
	// } else {
	// 	handleRedirect()
	// }
}

const TVLight = () => {
	const ref = useRef(null)
	const active = useHover(ref)
	const helpOverlay = useUIStore((state) => state.helpOverlay)
	const tour = useTourStore((state) => state.tour)
	const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' })

	const transitions = useTransition(active, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			easing: easePoly.exponent(2),
			duration: 300,
		},
	})

	const showVideo = !helpOverlay && !tour && !isMobile

	return (
		<Wrapper ref={ref} onClick={handleHallTv}>
			{transitions((style, item) =>
				item ? (
					<Light style={style} src="assets/images/hall/light/tv-light.png" />
				) : (
					''
				),
			)}

			<SpecImage src="assets/images/hall/tv_open.png" />
			{/*{showVideo && (*/}
			{/*	<video autoPlay muted playsInline loop id="myVideo">*/}
			{/*		<source src="assets/images/hall/opening.mp4" type="video/mp4" />*/}
			{/*	</video>*/}
			{/*)}*/}
			{/*<Tags/>*/}
		</Wrapper>
	)
}

export default TVLight

const SpecImage = styled.img`
	position: absolute;
	z-index: 10;
	top: -12px;
	left: -8px;
	user-select: none;
`

const Wrapper = styled.div`
	position: absolute;
	top: 123px;
	left: 985px;
	width: 528px;
	height: 325px;
	cursor: pointer;
	z-index: 11;

	padding: 20px 8px;

	& > video {
		z-index: 111;
		position: absolute;
		left: 0;
		top: 0;
	}
`

const Light = styled(animated.img)`
	position: absolute;
	top: -83px;
	left: -163px;
	pointer-events: none;
	user-select: none;
`
