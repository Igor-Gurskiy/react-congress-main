import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Составляя свой
					<br /> виш-лист заранее,
					<br />{' '}
					<b>
						вы избежите спонтанных <br /> и импульсивных <br /> покупок,
					</b>
				</StoriesTitle>
				<StoriesText>
					а значит <b>сократите</b> потребление,
					<br /> <b>что благотворно скажется</b>
					<br /> не только на вашем кошельке,
					<br /> но и <b>на экологии!</b>
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories34.png" alt="" />
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
	top: 14%;
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
	margin-bottom: 45px;
`
const StoriesText = styled.div`
	color: #fff;
	font-size: 10px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.26px;
	text-transform: uppercase;

	p {
		margin-bottom: 28px;
	}
`

export default StoriesSlider
