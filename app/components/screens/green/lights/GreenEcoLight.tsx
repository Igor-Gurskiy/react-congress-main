import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import ModalService from '@/components/shared/modal/ModalService'
import StoriesModal from '../modals/stories/StoriesModal'

const GreenEcoLight = ({ ...otherProps }) => {
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

	const handleClick = () => {
		ModalService.open(StoriesModal, { padding: 0 })
	}

	return (
		<Wrapper ref={ref} {...otherProps} onClick={handleClick}>
			{transitions((style, item) =>
				item ? (
					<Light style={style} src="assets/images/green/light/eco-light.png" />
				) : (
					''
				),
			)}
		</Wrapper>
	)
}

export default GreenEcoLight

const Wrapper = styled.div`
	position: absolute;
	top: 695px;
	left: 502px;
	width: 221px;
	height: 179px;
	cursor: pointer;
	z-index: 11;
	user-select: none;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -52px;
	left: -60px;
	pointer-events: none;
`
