import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesText>
					переход на упаковку
					<br /> большого объема <br /> может стать вашим <br /> первым шагом
					<br /> на пути минимизации <br /> отходов
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories7.png" alt="" />
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
	top: 43%;
	left: 8%;
	text-align: left;
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
