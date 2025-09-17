import React from 'react'
import styled from 'styled-components'

const StoriesSlider = () => {
	return (
		<StoriesContainer>
			<StoriesContent>
				<StoriesTitle>
					чем меньше упаковка <br /> любого продукта, <br /> тем она, как
					правило, <br /> менее экологична
				</StoriesTitle>
			</StoriesContent>
			<img src="/assets/images/green/modals/stories/stories5.png" alt="" />
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
	left: 9%;
	text-align: left;
`

const StoriesTitle = styled.div`
	color: #fff;
	font-size: 17px;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 1.86px;
	text-transform: uppercase;
	margin-bottom: 60px;
`

export default StoriesSlider
