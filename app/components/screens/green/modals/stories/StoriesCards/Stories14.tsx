import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesText>
					Пройдите игру
					<br /> «Собери молекулы»
					<br /> и получите шанс выиграть
				</StoriesText>
				<StoriesTitle>
					Экологичную бутылку
					<br /> для воды и горячих
					<br /> напитков
				</StoriesTitle>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories14.png" alt="" />
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
	left: 8%;
	text-align: left;
`

const StoriesTitle = styled.div`
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	line-height: 125%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 60px;
`
const StoriesText = styled.div`
	color: #fff;
	font-size: 11px;
	font-weight: 400;
	line-height: 125%;
	letter-spacing: 1.26px;
	text-transform: uppercase;
	margin-bottom: 45px;
`

export default StoriesSlider
