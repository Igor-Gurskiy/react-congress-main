import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Удобно и то, что,
					<br /> как правило,{' '}
					<b>
						сдавать
						<br /> на переработку нужно
						<br /> не очень объемные вещи,
						<br /> например:
					</b>
				</StoriesTitle>
				<StoriesText>
					<p>
						зубные щетки, пластиковые карты
						<br /> или упаковку из-под косметики.
					</p>
					<p>
						Так что принять участие в акции
						<br /> можно без лишних хлопот
					</p>
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories24.png" alt="" />
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
	color: #fff;
	font-size: 15px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 35px;
`
const StoriesText = styled.div`
	color: #fff;
	font-size: 10px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.26px;
	text-transform: uppercase;

	p {
		margin-bottom: 15px;
	}
`

export default StoriesSlider
