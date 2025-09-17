import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const BrochureLight = ({ ...otherProps }) => {
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

	const handleBrochureClick = () => {
		API.tracker.sendEvent(EventsEnum.confBrochure)
	}

	return (
		<Wrapper ref={ref} {...otherProps}>
			{transitions((style, item) =>
				item ? (
					<Light
						style={style}
						src="assets/images/conference/light/brochure.png"
					/>
				) : (
					''
				),
			)}

			<DownloadBrochure
				tabIndex={-1}
				onClick={handleBrochureClick}
				href="assets/Congress_2023.pdf"
				download
				target="_blank"
			/>
		</Wrapper>
	)
}

export default BrochureLight

const Download = styled.a`
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 111;
`

const DownloadBrochure = styled(Download)`
	top: 0;
`

const Wrapper = styled.div`
	position: absolute;
	top: 656px;
	left: 332px;
	width: 363px;
	height: 320px;
	cursor: pointer;
	z-index: 11;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -45px;
	left: -57px;
	pointer-events: none;
`
