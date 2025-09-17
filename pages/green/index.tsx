import AppOverlay from '@/components/AppOverlay'
import RoomPanorama from '@/components/shared/panorama/RoomPanorama'
import AppLayout from '@/layouts/AppLayout'
import { useCeraveStore } from '@/stores/ceraveStore'
import { useTourStore } from '@/stores/tourStore'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import GreenRoom from '@/components/screens/green/GreenRoom'
import GreenMobileTour from '@/components/screens/green/GreenMobileTour'
import { EventsEnum } from '@/api/tracker'
import { API } from '@/api'

const roomPoints = [830, 25, -750]
const GreenPage = () => {
	const setNewbie = useCeraveStore((state) => state.setNewbie)
	const setTour = useTourStore((state) => state.setTour)
	const tour = useTourStore((state) => state.tour)
	const isMobile = useMediaQuery({
		query: '(orientation: portrait) and (max-width: 767.98px)',
	})

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.greenVisit)

		const tourStorage = localStorage.getItem('room_tour')
		if (!tourStorage) {
			setTour('green')
		}

		const isNewbie = localStorage.getItem('green')
		if (isNewbie) {
			setNewbie(false)
		}
	}, [])

	return (
		<AppLayout title="L4TF" style={{ background: '#D5D6D0' }}>
			<AppOverlay roomKey="green" setNewbie={setNewbie}>
				<>
					<RoomPanorama centerDx={25} points={roomPoints}>
						<GreenRoom />
					</RoomPanorama>
					{tour === 'green' && isMobile && <GreenMobileTour />}
				</>
			</AppOverlay>
		</AppLayout>
	)
}

export default GreenPage
