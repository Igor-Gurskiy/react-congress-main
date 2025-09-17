import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Человеку рекомендуется <br /> выпивать{' '}
					<b>
						по 1,5-2 литра <br /> воды в день
					</b>
				</StoriesTitle>
				<StoriesTitle>
					КАК БЫ НЕ БЫЛО УДОБНО
					<br /> использовать
					<br /> одноразовые стаканчики,
					<br />
					расположенные рядом
					<br /> с кулером —{' '}
					<b>
						задумайтесь
						<br /> о покупке многоразовой
						<br /> альтернативы
					</b>
				</StoriesTitle>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories13.png" alt="" />
		</StoriesContainer>
	)
}

const StoriesContainer = styled.div`
	position: relative;
	height: 518px;
	width: 291px;

	img {
		height: 518px;
		width: 291px;
		user-select: none;
		pointer-events: none;
	}
`
const StoriesContent = styled.div`
	position: absolute;
	top: 15%;
	left: 8%;
	text-align: left;
`

const StoriesTitle = styled.div`
	color: #fff;
	font-size: 15px;
	font-weight: 400;
	line-height: 125%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 45px;
`

export default StoriesSlider
