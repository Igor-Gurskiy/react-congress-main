import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import AppOverlay from '@/components/AppOverlay'
import LRPMobileTour from '@/components/screens/lrp/LRPMobileTour'
import LRPStage from '@/components/screens/lrp/LRPStage'
import RoomPanorama from '@/components/shared/panorama/RoomPanorama'
import AppLayout from '@/layouts/AppLayout'
import { useLRPStore } from '@/stores/lrpStore'
import { useTourStore } from '@/stores/tourStore'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

const roomPoints = [720, -30, -800]

const LRPPage = () => {
	const setNewbie = useLRPStore((state) => state.setNewbie)
	const closeAll = useLRPStore((state) => state.closeAll)
	const setTour = useTourStore((state) => state.setTour)
	const tour = useTourStore((state) => state.tour)
	const isMobile = useMediaQuery({
		query: '(orientation: portrait) and (max-width: 767.98px)',
	})

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpVisit)

		const tourStorage = localStorage.getItem('room_tour')
		if (!tourStorage) {
			setTour('lrp')
		}

		const isNewbie = localStorage.getItem('lrp')
		if (isNewbie) {
			setNewbie(false)
		}
	}, [])

	return (
		<AppLayout title="La Roche Posay">
			<AppOverlay roomKey="lrp" setNewbie={setNewbie}>
				<>
					<RoomPanorama centerDx={-30} points={roomPoints}>
						<LRPStage />
					</RoomPanorama>
					{tour === 'lrp' && isMobile && <LRPMobileTour />}
				</>
			</AppOverlay>
		</AppLayout>
	)
}

export default LRPPage
