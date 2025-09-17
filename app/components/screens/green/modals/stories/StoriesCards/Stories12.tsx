import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<p>4</p>
				<span>
					Носите с собой <br /> бутылку <br /> или термокружку
				</span>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories12.png" alt="" />
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
	top: 20%;
	left: 5%;
	display: flex;
	text-transform: uppercase;
	color: #fff;

	p {
		font-size: 90px;
		font-weight: 600;
		line-height: 70%;
		letter-spacing: -20.129px;
		margin-right: 27px;
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
