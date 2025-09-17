import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Постарайтесь реже
					<br /> покупать продукцию
					<br /> с маркировкой «C/_»
				</StoriesTitle>
				<StoriesText>
					<p>
						она означает, что упаковка
						<br /> сделана сразу из нескольких
						<br /> видов материалов, которые
						<br /> нужно разделять при переработке
					</p>
					<p>
						Такую упаковку иногда и вовсе
						<br /> нельзя переработать
					</p>
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories30.png" alt="" />
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
	margin-bottom: 25px;
`
const StoriesText = styled.div`
	color: #fff;
	font-size: 10px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.26px;
	text-transform: uppercase;

	p {
		margin-bottom: 210px;
	}
`

export default StoriesSlider
