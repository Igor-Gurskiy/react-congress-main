import styled from 'styled-components'
import React, { useEffect } from 'react'
import { dispatchCloseModals } from '@/components/shared/modal/modal-utils'
import FormulaBack from '@/components/screens/vichy/formula/shared/FormulaBack'
import ModalService from '@/components/shared/modal/ModalService'
import WelcomeModal from '@/components/screens/green/game/components/modals/Welcome/WelcomeModal'
import { useSortGameStore } from '@/components/screens/green/game/stores/sort-game.store'
import Tubes from '@/components/screens/green/game/components/Tubes/Tubes'
import GameContainer from '@/components/screens/green/game/components/GameContainer'
import ProgressBar from '@/components/screens/green/game/components/ProgressBar/ProgressBar'

const CatchGame = () => {
	const reset = useSortGameStore((state) => state.resetGame)

	useEffect(() => {
		setTimeout(() => ModalService.open(WelcomeModal), 1000)

		return () => {
			reset()
			dispatchCloseModals()
		}
	}, [])

	return (
		<Wrapper>
			<GameContainer />
			<Tubes />

			{/*<TurnPhoneTip />*/}

			<ProgressBar />
			<FormulaBack color="#fff" link="/green" />
		</Wrapper>
	)
}

export default CatchGame

const Wrapper = styled.div`
	background: url('/assets/images/green/game/bg.jpg') no-repeat center;
	background-size: cover;
	height: 100%;
	height: calc(var(--vh) * 100);
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	justify-content: center;
	align-items: flex-end;

	svg {
		overflow: visible;
	}

	#green-game-bg {
	}

	#green-game-corners {
		stroke-width: 24px;
		stroke: #fff;
	}
`
