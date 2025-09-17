import { useUIStore } from '@/stores/uiStore'
import React, { useEffect } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import PreloaderStage from './PreloaderStage'

const excludeRoutes = ['game', 'recycle', 'formula', 'cloud']

const Preloader = ({ route }) => {
	const isLoading = useUIStore((state) => state.isLoading)
	const preloader = useUIStore((state) => state.preloader)
	const setPreloader = useUIStore((state) => state.setPreloader)

	useEffect(() => {
		const skip = excludeRoutes.reduce((acc, val) => {
			return route.includes(val) ? true : acc
		}, false)

		if (isLoading || skip) return

		setPreloader(true)
		setTimeout(() => setPreloader(false), 2500)
	}, [route])

	const transition = useTransition(preloader, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			duration: 300,
		},
	})

	if (isLoading) return null

	return transition((style, item) =>
		item ? (
			<PreloaderWrapper style={style}>
				<PreloaderStage />
			</PreloaderWrapper>
		) : (
			''
		),
	)
}

export default Preloader

const PreloaderWrapper = styled(animated.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	// height: 100vh;
	// height: calc(var(--vh, 1vh) * 100);

	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 33001;
	background: #fff;
`
