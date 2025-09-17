import useWindowSize from '@/hooks/useWindowSize'
import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useTransition } from 'react-spring'
import Panorama from './Panorama'
import PanoramaViewTrack from './PanoramaViewTrack'
import { calculateZoomToPoint } from '@/utils/calculateShelfZoom'

const RoomPanorama: React.FC<RoomPanoramaPropsType> = ({
	children,
	fixed,
	points,
	centerDx,
}) => {
	const scaleRatio = useUIStore((state) => state.scaleRatio)
	const helpOverlay = useUIStore((state) => state.helpOverlay)
	const locked = useUIStore((state) => state.locked)
	const setLocked = useUIStore((state) => state.setLocked)
	const tour = useTourStore((state) => state.tour)
	const move = useTourStore((state) => state.move)
	const isMobile = useMediaQuery({
		query: '(orientation: portrait) and (max-width: 767.98px)',
	})

	const [to, setTo] = useState({ x: 0, y: 0, scale: scaleRatio })
	const [width, height] = useWindowSize()

	const transition = useTransition(helpOverlay, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	})

	const zoomIntoProducts = (opts: ZoomIntoProductsPropsType) => {
		const { x, y, scale } = calculateZoomToPoint({
			width,
			height,
			scaleRatio,
			...opts,
		})

		setLocked(true)
		setTo({ x, y, scale })
	}

	useEffect(() => {
		if (tour && move) {
			setTo({ x: move, y: 0, scale: scaleRatio })
		}
	}, [tour, move])

	const isTrackVisible = isMobile && !fixed && !locked && !tour

	return (
		<>
			<Panorama fixed={fixed} centerDx={centerDx} to={to} points={points}>
				{React.cloneElement(children, { zoomIntoProducts, transition })}
			</Panorama>
			{isTrackVisible && <PanoramaViewTrack />}
		</>
	)
}

type ZoomIntoProductsPropsType = {
	offset: number
	areaH: number
	areaW: number
	translate?: number
}

type RoomPanoramaPropsType = {
	children: JSX.Element
	fixed?: boolean
	points?: number[]
	centerDx?: number
}

export default RoomPanorama
