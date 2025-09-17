import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<p>5</p>
				<span>
					Выбирайте
					<br /> солнцезащитные
					<br /> средства
					<br /> правильно
				</span>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories15.png" alt="" />
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
	left: 5%;
	display: flex;
	text-transform: uppercase;
	color: #fff;

	p {
		font-size: 90px;
		font-weight: 600;
		line-height: 120%;
		letter-spacing: -20.129px;
		margin-right: 37px;
	}

	span {
		font-size: 16px;
		font-weight: 400;
		line-height: 120%; /* 74.4px */
		letter-spacing: 1.86px;
		text-align: left;
	}
`
export default StoriesSlider
