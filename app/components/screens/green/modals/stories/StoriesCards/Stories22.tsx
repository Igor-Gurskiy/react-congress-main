import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					<b>
						Сейчас многие бренды
						<br /> регулярно проводят
						<br /> специальные акции
					</b>
					<br />
					для тех, кому
					<br /> небезразлична судьба
					<br /> нашей планеты
				</StoriesTitle>
				<StoriesText>
					Подобные мероприятия — отличный
					<br /> способ перейти на «зеленую»
					<br /> сторону, поддержав любимого
					<br /> производителя
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories22.png" alt="" />
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
	top: 17%;
	left: 8%;
	text-align: left;
`

const StoriesTitle = styled.div`
	color: #000;
	font-size: 15px;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 45px;
`
const StoriesText = styled.div`
	color: #000;
	font-size: 10px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.26px;
	text-transform: uppercase;
`

export default StoriesSlider
