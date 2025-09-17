import React from 'react'
import TipWrapper from '@/components/screens/vichy/game/components/Tips/TipWrapper'

const TipRemove = ({ onClick }) => {
	return (
		<TipWrapper
			src="/assets/images/vichy/game/remove-tip.svg"
			onClick={onClick}
		>
			Если вы хотите изменить выбор —<br />
			нажмите крестик под продуктом
			<br />и выберите новый.
		</TipWrapper>
	)
}

export default TipRemove
