import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Учитывайте также
					<br /> свои потребности: <br />
					<b>
						зачем вы покупаете
						<br /> тот или иной
						<br /> товар?
					</b>
				</StoriesTitle>
				<StoriesText>
					<p>
						Например, если вы покупаете
						<br /> молоко на длительный срок
					</p>
					<p>
						<b>
							выбирайте герметичную
							<br /> упаковку
						</b>
					</p>
					<p>
						Если же вы планируете выпить
						<br /> молоко за пару дней,
					</p>
					<p>
						<b>
							экологичнее выбрать
							<br /> пластиковую или стеклянную
							<br /> бутылку
						</b>
					</p>
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories28.png" alt="" />
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
	left: 5%;
	text-align: left;
	width: 100%;
`

const StoriesTitle = styled.div`
	color: #fff;
	font-size: 15px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 36px;
	margin-left: 26%;
`
const StoriesText = styled.div`
	color: #fff;
	font-size: 10px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.26px;
	text-transform: uppercase;

	p {
		margin-left: 10px;
		margin-bottom: 7px;
	}

	p:nth-child(2) {
		margin-left: 28px;
		margin-bottom: 30px;
	}

	p:nth-child(4) {
		margin-left: 28px;
	}
`

export default StoriesSlider
