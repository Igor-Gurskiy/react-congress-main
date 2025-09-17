import useHover from '@/hooks/useHover'
import { useUIStore } from '@/stores/uiStore'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import CabinLightBase from '@/components/CabinLight'
import { useRouter } from 'next/router'

const LRPGameLight = () => {
	const router = useRouter()
	const ref = useRef(null)
	const active = useHover(ref)
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
		router.push('/lrp/game')
	}

	return (
		<Wrapper ref={ref} onClick={handleCabinClick}>
			{transitions((style, item) =>
				item ? (
					<Light style={style} src="assets/images/lrp/light/game-light.png" />
				) : (
					''
				),
			)}

			<CabinLight $locked={locked} />
		</Wrapper>
	)
}

export default LRPGameLight

const Wrapper = styled.div`
	position: absolute;
	top: 334px;
	right: 221px;
	width: 446px;
	height: 721px;
	cursor: pointer;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -80px;
	left: -60px;
	pointer-events: none;
`

export const CabinLight = styled(CabinLightBase)`
	user-select: none;
	background: url(assets/images/cabin-light.png);
	top: 25%;
	left: 0;
	width: 445px;
	height: 515px;
`
