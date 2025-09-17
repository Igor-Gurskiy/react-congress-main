import React from 'react'
import TipWrapper from '@/components/screens/vichy/game/components/Tips/TipWrapper'

const TipContinue = ({ onClick }) => {
	return (
		<TipWrapper
			src="/assets/images/vichy/game/continue-tip.svg"
			onClick={onClick}
		>
			<div style={{ maxWidth: 380 }}>
				Ознакомьтесь с жалобами пациента и&nbsp;перейдите к подбору продуктов
			</div>
		</TipWrapper>
	)
}

export default TipContinue
