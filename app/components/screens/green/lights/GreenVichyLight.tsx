import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import ModalService from '@/components/shared/modal/ModalService'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import VichyGreenModal from '@/components/screens/green/modals/vichy/VichyGreenModal'

const GreenVichyLight = ({ ...otherProps }) => {
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
		ModalService.open(VichyGreenModal)
		API.tracker.sendEvent(EventsEnum.greenVichyLabsVisit)
	}

	return (
		<Wrapper ref={ref} {...otherProps} onClick={handleClick}>
			{transitions((style, item) =>
				item ? (
					<Light
						style={style}
						src="assets/images/green/light/vichy-light.png"
					/>
				) : (
					''
				),
			)}
		</Wrapper>
	)
}

export default GreenVichyLight

const Wrapper = styled.div`
	position: absolute;
	top: 630px;
	left: 125px;
	width: 247px;
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
