import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					многослойная упаковка
					<br /> отлично сохраняет
					<br /> свежесть продуктов,
					<br /> однако{' '}
					<b>
						упаковка
						<br /> из мономатериала <br />
						предпочтительней,
					</b>
				</StoriesTitle>
				<StoriesText>так как ее проще перерабатывать</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories29.png" alt="" />
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
	top: 10%;
	left: 8%;
	text-align: left;
`

const StoriesTitle = styled.div`
	color: #fff;
	font-size: 15px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 18px;
`
const StoriesText = styled.div`
	color: #fff;
	font-size: 10px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.26px;
	text-transform: uppercase;
`

export default StoriesSlider
