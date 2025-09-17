import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import MiniGame from '@/components/screens/minigame/MiniGame'

import AppLayout from '@/layouts/AppLayout'
import { useGameStore } from '@/stores/gameStore'
import React, { useEffect } from 'react'

const GamePage = () => {
	const resetGame = useGameStore((state) => state.resetGame)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.gameVisit)

		return () => resetGame()
	}, [])

	return (
		<AppLayout title="Мини-игра" style={{ background: '#fff' }}>
			<MiniGame />
		</AppLayout>
	)
}

export default GamePage
