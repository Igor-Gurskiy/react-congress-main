import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Собираясь в поездку
					<br /> на море,{' '}
					<b>
						выбирайте
						<br /> средства, предназначенные
						<br /> специально для пляжа:
					</b>
				</StoriesTitle>
				<StoriesText>
					<p>
						например, солнцезащитные
						<br /> средства Anthelios с пометкой
						<br /> «C заботой о морской жизни».
					</p>
					<p>
						Компоненты в составе таких
						<br /> средств не наносят вреда
						<br /> окружающей среде
					</p>
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories19.png" alt="" />
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
	line-height: 120%;
	letter-spacing: 1.26px;
	text-transform: uppercase;

	p {
		margin-bottom: 20px;
	}
`

export default StoriesSlider
