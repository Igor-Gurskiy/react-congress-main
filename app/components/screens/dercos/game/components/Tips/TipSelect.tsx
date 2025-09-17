import React from 'react'
import TipWrapper from '@/components/screens/vichy/game/components/Tips/TipWrapper'

const TipSelect = ({ onClick }) => {
	return (
		<TipWrapper src="/assets/images/dercos/linegame/drag.svg" onClick={onClick}>
			Кликните на иконку продукта и тяните
			<br />к фотографиям клинических случаев
		</TipWrapper>
	)
}

export default TipSelect
