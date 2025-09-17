import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import AppLayout from '@/layouts/AppLayout'
import React, { useEffect } from 'react'
import Recycle from '@/components/screens/green/recycle/Recycle'
import { dispatchCloseModals } from '@/components/shared/modal/modal-utils'

const GreenGamePage = () => {
	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.greenGame)

		return () => dispatchCloseModals()
	}, [])

	return (
		<AppLayout
			title="Мини-игра переработка"
			style={{ background: '#fff', overflowY: 'auto', overflowX: 'hidden' }}
		>
			<Recycle />
		</AppLayout>
	)
}

export default GreenGamePage
