import React, { useEffect } from 'react'

import AppLayout from '@/layouts/AppLayout'
import dynamic from 'next/dynamic'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const Game = dynamic(() => import('@/components/screens/vichy/game/VichyGame'))
const VichyFormulaGamePage = () => {
	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.vichyGameVisit)
	}, [])

	return (
		<AppLayout
			title="Лаборатория Vichy"
			style={{
				background: '#fff',
				// height: '100%',
				// overflowY: 'auto',
				overflow: 'hidden',
			}}
		>
			<Game />
		</AppLayout>
	)
}

export default VichyFormulaGamePage
