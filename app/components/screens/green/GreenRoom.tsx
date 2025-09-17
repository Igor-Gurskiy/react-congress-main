import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import useWindowSize from '@/hooks/useWindowSize'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import GreenHelpOverlay from './GreenHelpOverlay'

import GreenInactivityHelp from './GreenInactivityHelp'
import GreenShelf from './shelf/GreenShelf'
import GreenVichyLight from '@/components/screens/green/lights/GreenVichyLight'
import GreenGameLight from '@/components/screens/green/lights/GreenGameLight'
import GreenTour from '@/components/screens/green/GreenTour'
import GreenEcoLight from '@/components/screens/green/lights/GreenEcoLight'
import GreenLRPLight from '@/components/screens/green/lights/GreenLRPLight'

const scZoomOptions = {
	offset: 1060,
	areaH: 400,
	areaW: 350,
	translate: -6.5,
}

const GreenRoom = (props) => {
	// Always passed when wrapped in RoomPanorama
	const { zoomIntoProducts, transition } = props

	const locked = useUIStore((state) => state.locked)

	const [width, height] = useWindowSize()

	useEffect(() => {
		if (locked) {
			zoomIntoProducts(scZoomOptions)
		}
	}, [width, height])

	const handleShelfClick = () => {
		API.tracker.sendEvent(EventsEnum.greenProductsVisit)
		zoomIntoProducts(scZoomOptions)
	}

	return (
		<Wrapper>
			<picture>
				<img src="assets/images/green/scene/green-scene.jpg" alt="Dercos LOR" />
			</picture>

			{!locked && <GreenVichyLight />}
			{!locked && <GreenLRPLight />}
			{!locked && <GreenEcoLight />}

			<GreenShelf onClick={handleShelfClick} />

			<GreenGameLight />
			{
				transition((style, item) =>
					item ? (
						<GreenHelpOverlay
							zoom={zoomIntoProducts.bind(null, scZoomOptions)}
							style={style}
						/>
					) : (
						''
					),
				) as any
			}
			<GreenInactivityHelp zoom={zoomIntoProducts.bind(null, scZoomOptions)} />

			<GreenTour />
		</Wrapper>
	)
}

export default GreenRoom

const Wrapper = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100%;
	width: 100%;
`
