import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

const LRPBrochureLight = ({ ...otherProps }) => {
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
		API.tracker.sendEvent(EventsEnum.lrpBrochure)
	}

	return (
		<Wrapper ref={ref} {...otherProps}>
			{transitions((style, item) =>
				item ? (
					<Light style={style} src="assets/images/lrp/light/brochure.png" />
				) : (
					''
				),
			)}

			<DownloadBrochure
				tabIndex={-1}
				onClick={handleBrochureClick}
				href="assets/La-Roche-Posay-Brochure.pdf"
				download
				target="_blank"
			/>
		</Wrapper>
	)
}

export default LRPBrochureLight

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
	display: block;
	top: 925px;
	left: 1075px;
	width: 420px;
	height: 125px;
	cursor: pointer;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -100px;
	left: -65px;
	pointer-events: none;
`
