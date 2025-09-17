import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import ModalService from '@/components/shared/modal/ModalService'
import MissionModal from '@/components/screens/dercos/modals/mission/MissionModal'

const DercosBannerLight = () => {
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
		<Wrapper
			ref={ref}
			onClick={() => {
				API.tracker.sendEvent(EventsEnum.dercosBanner)
				ModalService.open(MissionModal)
				// ModalService.open(AminexilModal)
			}}
		>
			{transitions((style, item) =>
				item ? (
					<Light style={style} src="assets/images/dercos/light/banner.png" />
				) : (
					''
				),
			)}
		</Wrapper>
	)
}

export default DercosBannerLight

const Wrapper = styled.div`
	position: absolute;
	top: 651px;
	left: 202px;
	width: 535px;
	height: 335px;
	cursor: pointer;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -55px;
	left: -50px;
	pointer-events: none;
`
