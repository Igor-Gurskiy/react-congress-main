import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import ModalService from '@/components/shared/modal/ModalService'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import VideoModal from '@/components/shared/video-modal/VideoModal'

const VichyLeftLight = ({ ...otherProps }) => {
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

	const handleClickLiftactivProject = () => {
		ModalService.open(VideoModal, {
			videoId: 'hXrO4M0Eq6c',
			trackerId: EventsEnum.vichyVideoVisit,
			trackerProgressId: EventsEnum.vichyVideoProgress,
		})
		API.tracker.sendEvent(EventsEnum.vichyBanner)
	}

	return (
		<Wrapper ref={ref} {...otherProps} onClick={handleClickLiftactivProject}>
			{transitions((style, item) =>
				item ? (
					<Light
						style={style}
						src="assets/images/vichy/light/banner-light.png"
					/>
				) : (
					''
				),
			)}
		</Wrapper>
	)
}

export default VichyLeftLight

const Wrapper = styled.div`
	position: absolute;
	top: 597px;
	left: 140px;
	width: 565px;
	height: 335px;
	cursor: pointer;
	z-index: 11;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -65px;
	left: -50px;
	pointer-events: none;
`
