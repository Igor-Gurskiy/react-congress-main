import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Внедряйте осознанные
					<br /> покупки в свою жизнь!
				</StoriesTitle>
				<StoriesText>
					<p>
						планирование ваших походов
						<br /> в магазин — однозначно полезная
						<br /> привычка!
					</p>
					<p>
						Список покупок поможет вам,
						<br /> во-первых, <b>не забыть ничего нужного</b>
					</p>
					<p>
						и, во-вторых,{' '}
						<b>
							не купить ничего <br /> лишнего
						</b>
					</p>
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories32.png" alt="" />
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
	top: 16%;
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
		margin-bottom: 12px;
	}
`

export default StoriesSlider
