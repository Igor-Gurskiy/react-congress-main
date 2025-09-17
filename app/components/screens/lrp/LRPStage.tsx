import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import LRPHelpOverlay from './LRPHelpOverlay'
import LRPInactivityHelp from './LRPInactivityHelp'
import LRPUpperLight from './light/LRPUpperLight'
import LRPGameLight from './light/LRPGameLight'
import LRPLowerLight from './light/LRPLowerLight'
import LRPShelf from './shelf/LRPShelf'
import LRPTour from './LRPTour'
import Molecule from '@/components/ui/molecule/Molecule'
import LRPMiddleLight from '@/components/screens/lrp/light/LRPMiddleLight'
import dynamic from 'next/dynamic'
import LRPBrochureLight from '@/components/screens/lrp/light/LRPBrochureLight'
import { useWindowSize } from 'react-use'
import { RoomNameEnum, useTagsPreview } from '@/api/use-tags'

const scZoomOptions = {
	offset: 1260,
	areaH: 600,
	areaW: 350,
	translate: -7.3,
}

// TODO: make for mobile different options
const scMobileZoomOptions = {
	offset: 150,
	areaH: 1200,
	areaW: 2220,
	translate: -1,
}
const LRPClientCloud = dynamic(() => import('../lrp/LRPCloud'), { ssr: false })

const LRPStage = (props) => {
	// Always passed when wrapped in RoomPanorama
	const { zoomIntoProducts, transition } = props
	const cloud = useTagsPreview(RoomNameEnum.LRP)
	const maxScale = cloud?.maxScale || 30
	const tags = cloud?.preview || []

	const locked = useUIStore((state) => state.locked)
	const { width, height } = useWindowSize()

	useEffect(() => {
		if (locked) {
			zoomIntoProducts(scZoomOptions)
		}
	}, [width, height])

	const handleShelfClick = () => {
		API.tracker.sendEvent(EventsEnum.lrpProductsVisit)
		zoomIntoProducts(scZoomOptions)
	}

	return (
		<LRPWrapper>
			<picture>
				<img src="assets/images/lrp/scene/lrp-scene.jpg" alt="lrp LOR" />
			</picture>

			<CloudWrapper>
				<LRPClientCloud maxScale={maxScale} data={tags} />
			</CloudWrapper>

			{!locked && <LRPUpperLight />}
			{!locked && <LRPMiddleLight />}
			{!locked && <LRPLowerLight />}

			<LRPShelf onClick={handleShelfClick} />

			<LRPGameLight />
			<LRPBrochureLight />

			<Molecule
				id="lrp-room"
				position={{ bottom: '55%', left: '50%' }}
				size={120}
				direction="left"
			/>

			{
				transition((style, item) =>
					item ? (
						<LRPHelpOverlay
							zoom={zoomIntoProducts.bind(null, scZoomOptions)}
							style={style}
						/>
					) : (
						''
					),
				) as any
			}
			<LRPInactivityHelp zoom={zoomIntoProducts.bind(null, scZoomOptions)} />
			<LRPTour />
		</LRPWrapper>
	)
}

export default LRPStage

const LRPWrapper = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100%;
	width: 100%;
`

const CloudWrapper = styled.div`
	position: absolute;
	z-index: 11;
	top: 296px;
	left: 343px;
	user-select: none;
	border-radius: 64px;
`
