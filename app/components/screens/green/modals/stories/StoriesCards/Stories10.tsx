import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					отказаться
					<br /> от одноразовых приборов
					<br /> проще, чем сдавать
					<br /> их в пункт приема
				</StoriesTitle>
				<StoriesText>
					<p>
						Не нужно полностью отказываться
						<br /> от трубочек для напитков.
					</p>
					<p>
						Достаточно взять с собой
						<br /> многоразовую трубочку
					</p>
				</StoriesText>
				<StoriesText>
					<p>
						попробуйте носить с собой <br /> многоразовые столовые приборы.
					</p>
					<p>
						подберите для них чехол, который
						<br /> будет радовать вас
					</p>
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories10.png" alt="" />
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
	left: 7%;
	text-align: left;
`

const StoriesTitle = styled.div`
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 35px;
`
const StoriesText = styled.div`
	color: #fff;
	font-size: 11px;
	font-weight: 400;
	line-height: 125%;
	letter-spacing: 1.26px;
	text-transform: uppercase;
	margin-bottom: 34px;

	p {
		margin-bottom: 20px;
	}
`

export default StoriesSlider
