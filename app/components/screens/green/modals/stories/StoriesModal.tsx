import React, { useState } from 'react'
import styled from 'styled-components'
import FormulaBack from '@/components/screens/dercos/formula/shared/FormulaBack'
import StoriesSlider from '@/components/screens/green/modals/stories/StoriesSlider'

const StoriesModal = ({ close }) => {
	const [startY, setStartY] = useState(0)

	const handleTouchStart = (e) => {
		setStartY(e.touches[0].clientY)
	}

	//вертикальный свайп
	const handleTouchMove = (e) => {
		const deltaY = e.touches[0].clientY - startY

		if (Math.abs(deltaY) > 50) {
			close()
		}
	}

	return (
		<Wrapper>
			<Content onClick={close}>
				<FormulaBack backTitleColor="#fff" link="/green" />
				<SliderContainer>
					<StoriesSlider close={close} />
				</SliderContainer>
			</Content>
		</Wrapper>
	)
}

export default StoriesModal

const SliderContainer = styled.div`
	flex-grow: 0;
	position: relative;
	justify-content: flex-start;
	align-self: auto;
	flex-direction: row;
	flex-shrink: 0;
	align-items: center;
	display: flex;
	overflow-x: visible;
	overflow-y: visible;
	height: 100%;
`

const Wrapper = styled.div`
	height: 100vh;
	position: fixed;
	width: 100%;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
`

const Content = styled.div`
	align-items: stretch;
	align-self: center;
	border: 0;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	font: inherit;
	font-size: 100%;
	height: 100%;
	margin: 0;
	overflow: hidden;
	padding: 0;
	position: relative;
	vertical-align: baseline;
	width: 100%;
`

const BodyWrapper = styled.div`
	width: 100%;
	height: 100%;
`
