import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					один флакон бальзама <br /> lipikar 400 мл заменит <br /> более пяти
					тюбиков <br /> по 75 мл —
				</StoriesTitle>
				<StoriesText>
					это означает, что когда <br /> средство закончится, вы <br />
					выбросите (или, надеемся, <br /> сдадите на переработку) <br /> на
					четыре упаковки меньше
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories6.png" alt="" />
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
	font-size: 17px;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 50px;
`
const StoriesText = styled.div`
	color: #fff;
	font-size: 11px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.26px;
	text-transform: uppercase;
`

export default StoriesSlider
