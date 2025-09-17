import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import useWindowSize from '@/hooks/useWindowSize'
import { useUIStore } from '@/stores/uiStore'
import { usePinch } from '@use-gesture/react'
import React, { useEffect } from 'react'
import VichyCabinLight from './lights/VichyCabinLight'
import VichyHelpOverlay from './VichyHelpOverlay'
import VichyInactivityHelp from './VichyInactivityHelp'
import VichyLeftLight from './lights/VichyLeftLight'
import VichyShelf from './shelf/VichyShelf'
import VichyTour from './VichyTour'
import styled from 'styled-components'
import Link from 'next/link'
import VichyCloud from '@/components/screens/vichy/VichyCloud'
import { RoomNameEnum, useTagsPreview } from '@/api/use-tags'
import Molecule from '@/components/ui/molecule/Molecule'

const zoomOptions = {
	offset: 1035,
	areaH: 750,
	areaW: 380,
	translate: -6.3,
}

const VichyRoom = (props) => {
	// Always passed when wrapped in RoomPanorama
	const { zoomIntoProducts, transition } = props
	const cloud = useTagsPreview(RoomNameEnum.Vichy)
	const maxScale = cloud?.maxScale || 30
	const tags = cloud?.preview || []

	const locked = useUIStore((state) => state.locked)

	const [width, height] = useWindowSize()

	useEffect(() => {
		if (locked) {
			zoomIntoProducts(zoomOptions)
		}
	}, [width, height])

	const onPinch = usePinch(({ event }) => {
		event.stopPropagation()
		API.tracker.sendEvent(EventsEnum.vichyProductsVisit)
		zoomIntoProducts(zoomOptions)
	})

	const handleShelfClick = () => {
		API.tracker.sendEvent(EventsEnum.vichyProductsVisit)
		zoomIntoProducts(zoomOptions)
	}

	return (
		<>
			<picture>
				<img src="assets/images/vichy/scene/vichy-scene.jpg" alt="Vichy LOR" />
			</picture>

			<CloudWrapper>
				<VichyCloud maxScale={maxScale} data={tags} />
			</CloudWrapper>

			{!locked && <VichyLeftLight />}
			<VichyShelf onClick={handleShelfClick} {...onPinch()} />
			<Link legacyBehavior href="/vichy/game">
				<VichyCabinLight />
			</Link>

			<Molecule
				type="vichy"
				id="vichy-room"
				size={100}
				position={{
					bottom: '40%',
					left: '42%',
				}}
				direction="right"
				translate={{ x: '-50%' }}
			/>

			{
				transition((style, item) =>
					item ? (
						<VichyHelpOverlay
							zoom={zoomIntoProducts.bind(null, zoomOptions)}
							style={style}
						/>
					) : (
						''
					),
				) as any
			}

			<VichyInactivityHelp zoom={zoomIntoProducts.bind(null, zoomOptions)} />

			<VichyTour />
		</>
	)
}

export default VichyRoom

const CloudWrapper = styled.div`
	position: absolute;
	z-index: 11;
	top: 320px;
	left: 170px;
	user-select: none;
	border-radius: 64px;
`
