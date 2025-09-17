import useHover from '@/hooks/useHover'
import { useUIStore } from '@/stores/uiStore'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import CabinLightBase from '@/components/CabinLight'

const GreenGameLight = () => {
	const ref = useRef(null)
	const active = useHover(ref)
	const router = useRouter()
	const locked = useUIStore((state) => state.locked)

	const transitions = useTransition(active, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			easing: easePoly.exponent(2),
			duration: 300,
		},
	})

	const handleCabinClick = () => {
		// API.tracker.sendEvent(EventsEnum.lrpPhotoVisit)
		router.push('/green/game')
	}

	return (
		<Wrapper ref={ref} onClick={handleCabinClick}>
			{transitions((style, item) =>
				item ? (
					<Light style={style} src="assets/images/green/light/game-light.png" />
				) : (
					''
				),
			)}
			{/*<CabinLight $locked={locked}/>*/}
		</Wrapper>
	)
}

export default GreenGameLight

const Wrapper = styled.div`
	position: absolute;
	top: 443px;
	right: 278px;
	width: 409px;
	height: 643px;
	cursor: pointer;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -50px;
	left: -45px;
	pointer-events: none;
`

export const CabinLight = styled(CabinLightBase)`
	user-select: none;
	background: url(assets/images/cabin-light.png);
	top: 10%;
	left: -15%;
	width: 560px;
	height: 689px;
`
