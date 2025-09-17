import useHover from '@/hooks/useHover'
import { useUIStore } from '@/stores/uiStore'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import CabinLightBase from '@/components/CabinLight'
import Link from 'next/link'

const DercosPhotoLight = () => {
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

	return (
		<Link legacyBehavior href="/dercos/game">
			<Wrapper ref={ref}>
				{transitions((style, item) =>
					item ? (
						<Light style={style} src="assets/images/dercos/light/game.png" />
					) : (
						''
					),
				)}

				<CabinLight $locked={locked} />
			</Wrapper>
		</Link>
	)
}

export default DercosPhotoLight

const Wrapper = styled.div`
	position: absolute;
	top: 220px;
	right: 233px;
	width: 330px;
	height: 824px;
	cursor: pointer;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -55px;
	left: -66px;
	pointer-events: none;
`
export const CabinLight = styled(CabinLightBase)`
	user-select: none;
	background: url(assets/images/cabin-light.png);
	top: 5%;
	left: -5%;

	opacity: 0.2;
	width: 560px;
	height: 689px;
`
