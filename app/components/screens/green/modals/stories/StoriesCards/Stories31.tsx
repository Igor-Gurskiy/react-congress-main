import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<p>8</p>
				<span>
					Составляем
					<br /> списки
				</span>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories31.png" alt="" />
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
	top: 23%;
	left: 8%;
	display: flex;
	text-transform: uppercase;
	color: #fff;

	p {
		font-size: 90px;
		font-weight: 600;
		line-height: 30%;
		letter-spacing: -20.129px;
		margin-right: 25px;
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
