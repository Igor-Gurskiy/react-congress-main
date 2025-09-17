import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import AppOverlay from '@/components/AppOverlay'
import RoomPanorama from '@/components/shared/panorama/RoomPanorama'
import VichyRoom from '@/components/screens/vichy/VichyRoom'
import AppLayout from '@/layouts/AppLayout'
import { useTourStore } from '@/stores/tourStore'
import { useVichyModalStore } from '@/stores/vichyModalStore'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import VichyMobileTour from '@/components/screens/vichy/VichyMobileTour'

const roomPoints = [830, 30, -900]
const VichyPage = () => {
	const setNewbie = useVichyModalStore((state) => state.setNewbie)
	const closeAll = useVichyModalStore((state) => state.closeAll)
	const setTour = useTourStore((state) => state.setTour)
	const tour = useTourStore((state) => state.tour)
	const isMobile = useMediaQuery({
		query: '(orientation: portrait) and (max-width: 767.98px)',
	})

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.vichyVisit)

		const tourStorage = localStorage.getItem('room_tour')
		if (!tourStorage) {
			setTour('vichy')
		}

		const isNewbie = localStorage.getItem('vichy')
		if (isNewbie) {
			setNewbie(false)
		}

		return () => closeAll()
	}, [])

	return (
		<AppLayout title="Vichy">
			<AppOverlay roomKey="vichy" setNewbie={setNewbie}>
				<>
					<RoomPanorama centerDx={30} points={roomPoints}>
						<VichyRoom />
						{/*<VichyRoom cloud={cloudMockData} />*/}
					</RoomPanorama>
					{tour === 'vichy' && isMobile && <VichyMobileTour />}
				</>
			</AppOverlay>
		</AppLayout>
	)
}

export default VichyPage
