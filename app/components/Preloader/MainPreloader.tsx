import { useUIStore } from '@/stores/uiStore'
import { easePoly } from 'd3-ease'
import React, { useEffect } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import styled from 'styled-components'
import RoomPanorama from '../shared/panorama/RoomPanorama'
import media from '@/utils/media'

const MainPreloader = () => {
	const isLoading = useUIStore((state) => state.isLoading)
	const setIsLoading = useUIStore((state) => state.setIsLoading)

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 2500)
	}, [])

	const text = useSpring({
		from: { opacity: 1 },
		to: [{ opacity: 0 }, { opacity: 1 }],
		loop: { delay: 800 },
		config: {
			easing: easePoly.exponent(2),
			duration: 1200,
		},
	})

	const transition = useTransition(isLoading, {
		from: { opacity: 1, transform: 'scale(1.2)' },
		enter: { opacity: 1, transform: 'scale(1)' },
		leave: { opacity: 0, transform: 'scale(1.2)' },
	})

	return transition((style, item) =>
		item ? (
			<PreloaderWrapper style={style}>
				<RoomPanorama fixed={true}>
					<AbsoluteWrapper>
						<picture>
							<source
								srcSet="/assets/images/preloader/preloader.webp"
								type="image/webp"
							/>
							<source
								srcSet="/assets/images/preloader/preloader.jpg"
								type="image/jpg"
							/>
							<img
								src="/assets/images/preloader/preloader.jpg"
								alt="preloader LOR"
							/>
						</picture>

						<LoadingText>
							<LoadingBrand>
								L'Oréal
								<br />
								Dermatological
								<br />
								Beauty <span>2023</span>
								<br />
							</LoadingBrand>
							<LoadingMessage style={text}>Идет загрузка</LoadingMessage>
						</LoadingText>
					</AbsoluteWrapper>
				</RoomPanorama>
			</PreloaderWrapper>
		) : (
			''
		),
	)
}

export default MainPreloader

const LoadingBrand = styled.div`
	color: #fff;
	text-align: center;
	font-size: 60px;
	font-style: normal;
	font-weight: 600;
	line-height: 95%;
	letter-spacing: 1.81px;
	text-transform: uppercase;

	span {
		color: #195298;
	}

	${media.sm`
        font-size: 48px;
    `}
`
const LoadingMessage = styled(animated.div)`
	text-align: center;
	font-size: 24px;
	font-weight: 400;
	letter-spacing: 1.56px;
	text-transform: uppercase;
	margin-top: 30px;

	${media.sm`
        font-size: 24px;
    `}
`

const AbsoluteWrapper = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100%;
	width: 100%;

	picture {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 2500px;
		height: 1250px;
	}
`

const LoadingText = styled.div`
	position: absolute;
	top: 140px;
	margin: 0 auto;
	left: 0;
	right: 0;

	color: #ffffff;
`

const PreloaderWrapper = styled(animated.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10002;
	background: #fff;
`
