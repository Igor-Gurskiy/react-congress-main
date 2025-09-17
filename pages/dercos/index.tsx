import AppOverlay from '@/components/AppOverlay'
import RoomPanorama from '@/components/shared/panorama/RoomPanorama'
import DercosRoom from '@/components/screens/dercos/DercosRoom'
import AppLayout from '@/layouts/AppLayout'
import React, { useEffect } from 'react'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import { useMediaQuery } from 'react-responsive'
import { useTourStore } from '@/stores/tourStore'
import { useDercosStore } from '@/stores/dercosStore'
import DercosMobileTour from '@/components/screens/dercos/DercosMobileTour'

const roomPoints = [770, 20, -870]

const DercosPage = () => {
	const setNewbie = useDercosStore((state) => state.setNewbie)
	const setTour = useTourStore((state) => state.setTour)
	const tour = useTourStore((state) => state.tour)
	const isMobile = useMediaQuery({
		query: '(orientation: portrait) and (max-width: 767.98px)',
	})

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.dercosVisit)

		const tourStorage = localStorage.getItem('room_tour')
		if (!tourStorage) {
			setTour('dercos')
		}

		const isNewbie = localStorage.getItem('dercos')
		if (isNewbie) {
			setNewbie(false)
		}
	}, [])

	return (
		<AppLayout title="Dercos">
			<AppOverlay roomKey="dercos" setNewbie={setNewbie}>
				<>
					<RoomPanorama centerDx={20} points={roomPoints}>
						<DercosRoom />
					</RoomPanorama>
					{tour === 'dercos' && isMobile && <DercosMobileTour />}
				</>
			</AppOverlay>
		</AppLayout>
	)
}

export default DercosPage
