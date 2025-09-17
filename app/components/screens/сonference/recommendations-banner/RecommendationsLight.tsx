import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import RecommendationsBanner from '@/components/screens/сonference/recommendations-banner/RecommendationsBanner'

const RecommendationsLight = ({ ...otherProps }) => {
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
		<Wrapper ref={ref} {...otherProps}>
			{transitions((style, item) =>
				item ? (
					<Light
						style={style}
						src="assets/images/conference/light/recommendations.png"
					/>
				) : (
					''
				),
			)}
			<RecommendationsBanner />
		</Wrapper>
	)
}

export default RecommendationsLight

const Wrapper = styled.a`
	position: absolute;
	top: 380px;
	right: 288px;
	width: 375px;
	height: 445px;
	cursor: pointer;
	z-index: 11;

	user-select: none;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -55px;
	left: -7px;
	pointer-events: none;
`
