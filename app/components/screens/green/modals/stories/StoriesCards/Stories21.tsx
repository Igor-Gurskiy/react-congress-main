import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					<b>
						Начните участвовать
						<br /> в экологических акциях,
						<br /> которые устраивают
						<br />
						бренды
					</b>
				</StoriesTitle>
				<StoriesText>
					<p>
						Иногда заботиться
						<br /> об экологии —
						<br /> это одновременно
						<br /> приятно и полезно
					</p>
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories21.png" alt="" />
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
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 45px;
`
const StoriesText = styled.div`
	color: #000;
	font-size: 10px;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: 1.26px;
	text-transform: uppercase;

	p {
		margin-bottom: 20px;
	}
`

export default StoriesSlider
