import FormulaIngredient from '@/components/screens/dercos/formula/shared/ingredient/FormulaIngredient'
import React from 'react'

import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import dercosIngredients from '@/components/screens/dercos/formula/config/ingredients'

const DercosFormulaIngredients = ({ state }) => {
	const transitions = useTransition(!state.finished, {
		from: { opacity: 0, scale: 1.5 },
		enter: { opacity: 1, scale: 1 },
		leave: { opacity: 0, scale: 1.5 },
		config: {
			// easing: easePoly.exponent(2),
			duration: 300,
		},
	})

	return transitions((style, item) =>
		item ? (
			<Wrapper style={style}>
				{dercosIngredients.map((ingredient) => (
					<FormulaIngredient
						state={state}
						key={ingredient.source}
						top={ingredient.pos.y}
						left={ingredient.pos.x}
						ingredient={ingredient}
					/>
				))}
			</Wrapper>
		) : (
			''
		),
	)
}

export default DercosFormulaIngredients

const Wrapper = styled(animated.div)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	transform-origin: center;
`
