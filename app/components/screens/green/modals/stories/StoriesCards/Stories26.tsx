import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Иногда ответственное
					<br /> потребление — это <br /> привычка вовремя
					<br /> задавать себе вопросы
				</StoriesTitle>
				<StoriesText>
					<p>
						Действительно ли
						<br /> мне это нужно?
					</p>
					<p>
						Как я могу сократить
						<br /> свое негативное
						<br /> воздействие на
						<br /> окружающую среду?
					</p>
					<p>
						Что и как я могу
						<br /> сдать в переработку?
					</p>
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories26.png" alt="" />
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
	top: 16%;
	left: 7%;
	text-align: left;
`

const StoriesTitle = styled.div`
	color: #fff;
	font-size: 15px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 51px;
`
const StoriesText = styled.div`
	color: #000;
	font-size: 11px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.26px;
	text-transform: uppercase;

	p {
		margin-left: 10px;
		margin-bottom: 48px;
	}

	p:nth-child(2) {
		margin-left: 87px;
	}
`

export default StoriesSlider
