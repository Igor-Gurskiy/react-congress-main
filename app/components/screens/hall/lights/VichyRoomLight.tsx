import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import Link from 'next/link'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

const VichyRoomLight = () => {
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
		<Link legacyBehavior href="/vichy">
			<Wrapper ref={ref}>
				{transitions((style, item) =>
					item ? (
						<Light
							style={style}
							src="assets/images/hall/light/vichy-light.png"
						/>
					) : (
						''
					),
				)}
			</Wrapper>
		</Link>
	)
}

export default VichyRoomLight

const Wrapper = styled.div`
	position: absolute;
	top: 590px;
	left: 1270px;
	width: 550px;
	height: 420px;
	cursor: pointer;
	z-index: 8;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -55px;
	left: -50px;
	pointer-events: none;
	user-select: none;
`
