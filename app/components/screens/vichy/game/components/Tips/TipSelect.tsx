import React from 'react'
import TipWrapper from '@/components/screens/vichy/game/components/Tips/TipWrapper'

const TipSelect = ({ onClick }) => {
	return (
		<TipWrapper
			src="/assets/images/vichy/game/select-tip.svg"
			onClick={onClick}
		>
			Выбирайте <b>раздел</b> ухода
			<br />и <b>средство</b> для него.
			<br />
			По умолчанию разделы автоматически
			<br />
			выделяются по порядку слева направо
		</TipWrapper>
	)
}

export default TipSelect
