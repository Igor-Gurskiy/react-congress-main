import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					Например,
					<br />
					<b>
						если вы выбираете
						<br /> между двумя
						<br /> аналогичными товарами
						<br /> в супермаркете
						<br /> и не знаете, какой взять:
					</b>
				</StoriesTitle>
				<StoriesText>
					<p>
						спросите себя, у какого из них
						<br /> более экологичная упаковка?
					</p>
					<p>
						Знаете ли вы, <br />
						как сдать ее на переработку?
					</p>
				</StoriesText>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories27.png" alt="" />
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
	margin-bottom: 36px;
`
const StoriesText = styled.div`
	color: #fff;
	font-size: 10px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 1.26px;
	text-transform: uppercase;

	p {
		margin-left: 20px;
		margin-bottom: 17px;
	}
`

export default StoriesSlider
