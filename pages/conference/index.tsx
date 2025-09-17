import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import AppOverlay from '@/components/AppOverlay'
import RoomPanorama from '@/components/shared/panorama/RoomPanorama'
import AppLayout from '@/layouts/AppLayout'
import React, { useEffect } from 'react'
import { useUIStore } from '@/stores/uiStore'
import ConferenceRoom from '@/components/screens/сonference/ConferenceRoom'
import { dispatchCloseModals } from '@/components/shared/modal/modal-utils'

const roomPoints = [720, -30, -800]
const ConferencePage = () => {
	const setLocked = useUIStore((state) => state.setLocked)
	const setSchedule = useUIStore((state) => state.setSchedule)

	useEffect(() => {
		setLocked(false)

		// tracker info
		API.tracker.sendEvent(EventsEnum.confVisit)

		return () => {
			setSchedule(null)
			dispatchCloseModals()
		}
	}, [])

	return (
		<AppLayout title="Конференц-зал">
			<AppOverlay>
				<RoomPanorama points={roomPoints}>
					<ConferenceRoom />
				</RoomPanorama>
			</AppOverlay>
		</AppLayout>
	)
}

export default ConferencePage
