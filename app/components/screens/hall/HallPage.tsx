import AppOverlay from '@/components/AppOverlay'
import HallMobileTour from '@/components/screens/hall/HallMobileTour'
import HallScreen from '@/components/screens/hall/HallScreen'
import SpecializationSelector from '@/components/screens/hall/SpecializationSelector'
import RoomPanorama from '@/components/shared/panorama/RoomPanorama'
import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { dispatchCloseModals } from '@/components/shared/modal/modal-utils'

const HallPage = () => {
	const setLocked = useUIStore((state) => state.setLocked)
	const isMobile = useMediaQuery({
		query: '(orientation: portrait) and (max-width: 767.98px)',
	})
	const tour = useTourStore((state) => state.tour)
	const setHallTour = useTourStore((state) => state.setTour)
	const setVideo = useUIStore((state) => state.setVideo)

	useEffect(() => {
		setLocked(false)
		const tourStorage = localStorage.getItem('hall_tour')
		if (!tourStorage) {
			setHallTour('hall')
		}

		return () => dispatchCloseModals()
	}, [])

	return (
		<>
			<AppOverlay roomKey="hall" back={false}>
				<>
					<RoomPanorama>
						<HallScreen />
					</RoomPanorama>
					{tour === 'hall' && isMobile && <HallMobileTour />}
					<SpecializationSelector />
				</>
			</AppOverlay>

			{/*<HallVideoModal />*/}
		</>
	)
}

export default HallPage
