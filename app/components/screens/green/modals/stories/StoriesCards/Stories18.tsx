import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Попадая в морскую воду, <br /> они могут обесцвечивать
					<br /> кораллы и ВЫЗЫВАТЬ В ИХ
					<br /> ДНК ИЗМЕНЕНИЯ,{' '}
					<b>вследствие которых кораллы перестают размножаться</b>
				</StoriesTitle>
				<StoriesTitle>
					Учитывая роль, которую
					<br /> играют кораллы
					<br /> в функционировании всей
					<br /> морской экосистемы,
					<br /> для поездки на море
					<br /> лучше выбирать средства
					<br />
					<b>
						с пометкой
						<br /> о безопасности
						<br /> для морской среды экологии.
					</b>
				</StoriesTitle>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories18.png" alt="" />
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
	top: 19%;
	left: 5%;
	text-align: left;
`

const StoriesTitle = styled.div`
	color: #fff;
	font-size: 15px;
	font-weight: 400;
	line-height: 122%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 60px;
`

export default StoriesSlider
