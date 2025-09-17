import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Если вы сортируете
					<br /> мусор, то лучше других
					<br /> знаете, что{' '}
					<b>
						одноразовые
						<br /> предметы пагубно
						<br /> влияют на окружающую
						<br /> среду
					</b>
				</StoriesTitle>
				<StoriesText>
					Пластиковые вилки, ложки,
					<br /> ножи, трубочки и контейнеры <br /> очень сложно переработать
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories9.png" alt="" />
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
	top: 18%;
	left: 8%;
	text-align: left;
`

const StoriesTitle = styled.div`
	color: #fff;
	font-size: 15px;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 40px;
`
const StoriesText = styled.div`
	color: #fff;
	font-size: 11px;
	font-weight: 400;
	line-height: 125%;
	letter-spacing: 1.26px;
	text-transform: uppercase;
`

export default StoriesSlider
