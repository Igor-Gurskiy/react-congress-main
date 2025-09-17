import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Тем не менее, некоторые
					<br /> средства с SPF- <br /> фильтрами могут быть <br /> небезопасны
					для
					<br />
					экологии.
				</StoriesTitle>
				<StoriesText>
					Дело в том, что определенные
					<br /> вещества, входящие в состав
					<br />
					солнцезащитных кремов, могут
					<br /> оказывать воздействие на морских
					<br /> обитателей.
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories17.png" alt="" />
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
	line-height: 130%;
	letter-spacing: 1.26px;
	text-transform: uppercase;
`

export default StoriesSlider
