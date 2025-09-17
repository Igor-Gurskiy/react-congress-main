import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import ModalService from '@/components/shared/modal/ModalService'
import EcologicalModal from '../modals/ecological/EcologicalModal'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const GreenLRPLight = ({ ...otherProps }) => {
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
		ModalService.open(EcologicalModal)
		API.tracker.sendEvent(EventsEnum.greenLRPLabsVisit)
	}

	return (
		<Wrapper ref={ref} {...otherProps} onClick={handleClick}>
			{transitions((style, item) =>
				item ? (
					<Light style={style} src="assets/images/green/light/lrp-light.png" />
				) : (
					''
				),
			)}
		</Wrapper>
	)
}

export default GreenLRPLight

const Wrapper = styled.div`
	position: absolute;
	top: 425px;
	left: 410px;
	width: 234px;
	height: 180px;
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
