import React from 'react'
import TipWrapper from '@/components/screens/vichy/game/components/Tips/TipWrapper'

const TipMulti = ({ onClick }) => {
	return (
		<TipWrapper
			src="/assets/images/dercos/linegame/multi-tip.svg"
			onClick={onClick}
		>
			На один продукт может приходиться
			<br />
			один или два клинических случая
		</TipWrapper>
	)
}

export default TipMulti
