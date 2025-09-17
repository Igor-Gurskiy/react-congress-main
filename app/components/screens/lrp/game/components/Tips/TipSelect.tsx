import React from 'react'
import TipWrapper from '@/components/screens/lrp/game/components/Tips/TipWrapper'

const TipSelect = ({ onClick, color }) => {
	return (
		<TipWrapper
			src="/assets/images/lrp/game/select-tip.svg"
			onClick={onClick}
			color={color}
		>
			Выбирайте <b>подходящее средство</b> для&nbsp;<b>описания</b>. Активные
			зоны автоматически выделяются по порядку слева направо
		</TipWrapper>
	)
}

export default TipSelect
