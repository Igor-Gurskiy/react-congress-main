import React, { useEffect } from 'react'

import AppLayout from '@/layouts/AppLayout'
import dynamic from 'next/dynamic'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const Game = dynamic(() => import('@/components/screens/lrp/game/LRPGame'))

const LRPFormulaGamePage = () => {
	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpGameVisit)
	}, [])
	return (
		<AppLayout
			title="Лаборатория LRP"
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

export default LRPFormulaGamePage
