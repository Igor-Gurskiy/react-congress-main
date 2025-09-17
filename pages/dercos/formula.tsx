import React, { useEffect } from 'react'

import AppLayout from '@/layouts/AppLayout'
import DercosFormula from '@/components/screens/dercos/formula/DercosFormula'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const DercosFormulaGamePage = () => {
	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.dercosGame)
	}, [])

	return (
		<AppLayout
			title="Собери формулу Dercos"
			style={{
				background: '#fff',
				// height: '100%',
				// overflowY: 'auto',
				overflow: 'hidden',
			}}
		>
			<DercosFormula />
		</AppLayout>
	)
}

export default DercosFormulaGamePage
