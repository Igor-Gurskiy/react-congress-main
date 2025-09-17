import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import Link from 'next/link'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

const LRPRoomLight = () => {
	const ref = useRef(null)
	const active = useHover(ref)

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
		<Link legacyBehavior href="/lrp">
			<Wrapper ref={ref}>
				{transitions((style, item) =>
					item ? (
						<Light style={style} src="assets/images/hall/light/lrp-light.png" />
					) : (
						''
					),
				)}
			</Wrapper>
		</Link>
	)
}

export default LRPRoomLight

const Wrapper = styled.div`
	position: absolute;
	top: 585px;
	left: 600px;
	width: 620px;
	height: 430px;
	cursor: pointer;
	z-index: 11;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -55px;
	left: -60px;
	pointer-events: none;
	user-select: none;
`
