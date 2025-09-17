import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Солнцезащитные
					<br /> средства — обязательный
					<br /> элемент вашей «летней»
					<br />
					косметички
				</StoriesTitle>
				<StoriesText>
					Они помогают защитить кожу
					<br /> от вредного воздействия УФ-лучей,
					<br /> а значит и снизить риск развития рака.
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories16.png" alt="" />
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
	left: 6%;
	text-align: left;
`

const StoriesTitle = styled.div`
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 45px;
`
const StoriesText = styled.div`
	color: #fff;
	font-size: 10px;
	font-weight: 400;
	line-height: 125%;
	letter-spacing: 1.26px;
	text-transform: uppercase;
`

export default StoriesSlider
