import React, { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components'

import { GameContainer } from '@/components/shared/game/GameContainer'
import FormulaScene from '@/components/screens/dercos/formula/scene/FormulaScene'
import FormulaBack from '@/components/screens/dercos/formula/shared/FormulaBack'
import FormulaBottle from '@/components/screens/dercos/formula/shared/bottle/FormulaBottle'
import FormulaHeader from '@/components/screens/dercos/formula/shared/header/FormulaHeader'
import { getSeconds } from 'date-fns'
import VichyFormulaIngredients from '@/components/screens/dercos/formula/DercosFormulaIngredients'
import FormulaImagePreloader from '@/components/screens/dercos/formula/FormulaImagePreloader'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

export const initialDercosFormulaState = {
	score: 0,
	layers: [],
	ids: [],
	finished: false,
	elapsed: 0,
}

export const vichyFormulaReducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			const isUsed = state.layers.includes(action.layer)

			if (isUsed) return state

			return {
				...state,
				score: state.score + 1,
				layers: state.layers.concat([action.layer]),
				ids: state.ids.concat([action.id]),
			}
		case 'update':
			return {
				...state,
				ids: state.ids.concat([action.id]),
			}
		case 'finish':
			return {
				...state,
				finished: true,
				elapsed: action.time,
			}
		default:
			return state
	}
}

const DercosFormula = () => {
	const [state, dispatch] = useReducer(
		vichyFormulaReducer,
		initialDercosFormulaState,
	)
	const { score } = state

	const [time, setTime] = useState(Date.now())

	useEffect(() => {
		const handleScore = (event) => {
			const { detail } = event

			if (detail.layer) {
				dispatch({ type: 'increment', layer: detail.layer, id: detail.id })
			} else {
				dispatch({ type: 'update', id: detail.id })
			}
		}

		document.addEventListener('vichy-formula-add', handleScore, false)

		return () =>
			document.removeEventListener('vichy-formula-add', handleScore, false)
	}, [])

	useEffect(() => {
		if (score === 5) {
			const elapsed = getSeconds(Date.now() - time)
			dispatch({ type: 'finish', time: elapsed })
			API.tracker.sendEvent(
				EventsEnum.dercosGameResult,
				`params[score]=${score}`,
			)
		}
	}, [score])

	return (
		<GameWrapper>
			<FormulaBack link="/dercos" />

			<FormulaContainer>
				<FormulaScene />
				<FormulaBottle state={state} />

				<VichyFormulaIngredients state={state} />
			</FormulaContainer>

			<FormulaHeader score={score} finished={state.finished} />

			<FormulaImagePreloader />
		</GameWrapper>
	)
}

export default DercosFormula

const FormulaContainer = styled(GameContainer)`
	padding: 0;
	margin: 0;
	//height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	height: var(--app-height);
`

const GameWrapper = styled.div`
	//max-width: 1144px;
	width: 100%;
	margin: 0 auto;
	min-height: 100vh;
	padding: 0px;
	height: 100vh;
	height: var(--app-height);
`
