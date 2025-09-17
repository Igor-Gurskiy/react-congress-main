import useWindowSize from '@/hooks/useWindowSize'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import ConferenceHelpOverlay from './ConferenceHelpOverlay'
import ConferenceInactivityHelp from './ConferenceInactivityHelp'
import ConferenceProgram from '@/components/screens/сonference/program/ConferenceProgram'
import RecommendationsLight from '@/components/screens/сonference/recommendations-banner/RecommendationsLight'
import BrochureLight from '@/components/screens/сonference/BrochureLight'
import ConferenceCloud from '@/components/screens/сonference/ConferenceCloud'
import { RoomNameEnum, useTagsPreview } from '@/api/use-tags'

const scZoomOptions = {
	offset: 420,
	areaH: 500,
	areaW: 700,
	translate: -40,
}

const ConferenceRoom = (props) => {
	// Always passed when wrapped in RoomPanorama
	const { zoomIntoProducts, transition } = props
	const cloud = useTagsPreview(RoomNameEnum.Conference)
	const maxScale = cloud?.maxScale || 30
	const tags = cloud?.preview || []

	const locked = useUIStore((state) => state.locked)

	const [width, height] = useWindowSize()

	useEffect(() => {
		if (locked) {
			zoomIntoProducts(scZoomOptions)
		}
	}, [width, height])

	return (
		<ConferenceWrapper>
			<picture>
				<img
					src="assets/images/conference/scene/conference-scene.jpg"
					alt="Conference LOR"
				/>
			</picture>

			{/*<ConferenceKids />*/}
			{/*<ConferenceToxity />*/}
			{/*<ConferenceAdult />*/}
			{/*<ConferenceCosmetology />*/}

			{/*<ConferenceCabinLight />*/}
			{/*<ConferenceBanner />*/}
			<CloudWrapper>
				<ConferenceCloud maxScale={maxScale} data={tags} />
			</CloudWrapper>

			<BrochureLight />
			<ConferenceProgram />

			<RecommendationsLight />

			{
				transition((style, item) =>
					item ? <ConferenceHelpOverlay style={style} /> : '',
				) as any
			}

			<ConferenceInactivityHelp />
		</ConferenceWrapper>
	)
}

export default ConferenceRoom

const CloudWrapper = styled.div`
	position: absolute;
	z-index: 11;
	top: 300px;
	left: 250px;
	user-select: none;
	border-radius: 64px;
`

const ConferenceWrapper = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100%;
	width: 100%;

	picture {
		img {
			position: absolute;
			top: 0px;
			left: 0px;
			height: 100%;
			width: 100%;
		}
	}
`
