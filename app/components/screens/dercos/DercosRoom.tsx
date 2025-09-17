import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import useWindowSize from '@/hooks/useWindowSize'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import DercosHelpOverlay from './DercosHelpOverlay'
import DercosPhotoLight from './lights/DercosPhotoLight'
import MemoDercosShelf from './shelf/DercosShelf'
import DercosInactivityHelp from './DercosInactivityHelp'
import DercosTour from '@/components/screens/dercos/DercosTour'
import DercosBannerLight from '@/components/screens/dercos/lights/DercosBannerLight'
import dynamic from 'next/dynamic'
import { RoomNameEnum, useTagsPreview } from '@/api/use-tags'
import Molecule from '@/components/ui/molecule/Molecule'
import ImagePreloader from '@/components/screens/dercos/modals/mission/ImagePreloader'

const DercosClientCloud = dynamic(() => import('../dercos/DercosCloud'), {
	ssr: false,
})

const scZoomOptions = {
	offset: 1030,
	areaH: 600,
	areaW: 410,
	translate: -6.5,
}

const DercosRoom = (props) => {
	// Always passed when wrapped in RoomPanorama
	const { zoomIntoProducts, transition } = props
	const cloud = useTagsPreview(RoomNameEnum.Dercos)
	const maxScale = cloud?.maxScale || 30
	const tags = cloud?.preview || []

	const locked = useUIStore((state) => state.locked)

	const [width, height] = useWindowSize()

	useEffect(() => {
		if (locked) {
			zoomIntoProducts(scZoomOptions)
		}
	}, [width, height])

	const handleShelfClick = () => {
		API.tracker.sendEvent(EventsEnum.dercosProductsVisit)
		zoomIntoProducts(scZoomOptions)
	}

	return (
		<DercosWrapper>
			<picture>
				<img src="assets/images/dercos/scene/dercos.jpg" alt="Dercos LOR" />
			</picture>

			<CloudWrapper>
				<DercosClientCloud maxScale={maxScale} data={tags} />
			</CloudWrapper>

			{!locked && <DercosBannerLight />}
			{/*{!locked && <DercosStands/>}*/}
			<MemoDercosShelf onClick={handleShelfClick} />
			<Molecule
				type="dercos"
				size={100}
				id="dercos-room"
				position={{
					bottom: '16%',
					left: '15%',
				}}
				direction="right"
				translate={{ x: '-50%' }}
			/>

			{!locked && <DercosPhotoLight />}
			{
				transition((style, item) =>
					item ? (
						<DercosHelpOverlay
							zoom={zoomIntoProducts.bind(null, scZoomOptions)}
							style={style}
						/>
					) : (
						''
					),
				) as any
			}
			<DercosInactivityHelp zoom={zoomIntoProducts.bind(null, scZoomOptions)} />

			<DercosTour />

			<ImagePreloader />
		</DercosWrapper>
	)
}

export default DercosRoom

const DercosWrapper = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100%;
	width: 100%;
`

const CloudWrapper = styled.div`
	transform: rotate(1deg);
	position: absolute;
	z-index: 11;
	top: 335px;
	left: 260px;
	user-select: none;
	background: #393938;
	border-radius: 64px;
`
