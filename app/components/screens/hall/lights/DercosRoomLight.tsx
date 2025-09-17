import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import Link from 'next/link'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

const DercosRoomLight = () => {
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
		<Link legacyBehavior href="/dercos">
			<Wrapper ref={ref}>
				{transitions((style, item) =>
					item ? (
						<Light
							style={style}
							src="assets/images/hall/light/dercos-light.png"
						/>
					) : (
						''
					),
				)}
			</Wrapper>
		</Link>
	)
}

export default DercosRoomLight

const Wrapper = styled.div`
	position: absolute;
	top: 570px;
	right: 80px;
	width: 540px;
	height: 450px;
	cursor: pointer;
	z-index: 8;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -55px;
	left: -55px;
	pointer-events: none;
	user-select: none;
`
