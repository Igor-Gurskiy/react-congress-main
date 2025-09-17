import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Например, дозаторы
					<br /> от гелей Effaclar <br /> и Lipikar подходят
					<br /> для Мицеллярной воды
					<br /> La Roche-Posay <br /> в объеме 400 мл.
				</StoriesTitle>
				<StoriesText>
					Чем не возможность <br /> усовершенствовать флакон <br /> любимого
					средства для снятия <br /> макияжа?
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories3.png" alt="" />
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
	left: 5%;
	text-align: left;
`

const StoriesTitle = styled.div`
	color: #fff;
	font-size: 17px;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 40px;
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
