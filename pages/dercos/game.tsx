import React, { useEffect } from 'react'

import AppLayout from '@/layouts/AppLayout'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import DercosGame from '@/components/screens/dercos/game/DercosGame'

const DercosGamePage = () => {
	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.dercosGameVisit)
	}, [])

	return (
		<AppLayout
			title="Проведи линии"
			style={{
				background: '#fff',
				// height: '100%',
				// overflowY: 'auto',
				overflow: 'hidden',
			}}
		>
			<DercosGame />
		</AppLayout>
	)
}

export default DercosGamePage
