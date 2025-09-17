import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Дозаторы состоят
					<br /> из множества частей,
				</StoriesTitle>
				<StoriesText>
					<p>
						что делает их массовую
						<br /> переработку затруднительной
						<br /> и зачастую нерентабельной.
					</p>
					<p>
						Если у вас есть большой флакон
						<br /> крема или геля с дозатором,
						<br />
						проверьте, возможно,
						<br /> он подойдет для других средств?
					</p>
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories2.png" alt="" />
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
	top: 15%;
	left: 8%;
	text-align: left;
`

const StoriesTitle = styled.div`
	color: #fff;
	font-size: 17px;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 1px;
	text-transform: uppercase;
	margin-bottom: 15%;
`
const StoriesText = styled.div`
	color: #fff;
	font-size: 11px;
	font-weight: 400;
	line-height: 125%;
	letter-spacing: 0.26px;
	text-transform: uppercase;

	p {
		margin-bottom: 10%;
	}
`

export default StoriesSlider
