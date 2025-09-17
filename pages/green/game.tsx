import React, { useEffect } from 'react'

import AppLayout from '@/layouts/AppLayout'
import CatchGame from '@/components/screens/green/game/CatchGame'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const CatchGamePage = () => {
	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.greenSortVisit)
	}, [])

	return (
		<AppLayout
			title="L4TF"
			style={{
				background: '#fff',
				overflow: 'hidden',
			}}
		>
			<CatchGame />
		</AppLayout>
	)
}

export default CatchGamePage
