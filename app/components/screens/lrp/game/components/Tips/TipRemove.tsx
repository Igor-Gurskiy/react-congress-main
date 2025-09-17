import React from 'react'
import TipWrapper from '@/components/screens/lrp/game/components/Tips/TipWrapper'

const TipRemove = ({ onClick }) => {
	return (
		<TipWrapper
			color="#000"
			src="/assets/images/lrp/game/remove-tip.svg"
			onClick={onClick}
		>
			Если вы хотите изменить выбор —<br />
			нажмите крестик под продуктом
			<br />и выберите новый.
		</TipWrapper>
	)
}

export default TipRemove
