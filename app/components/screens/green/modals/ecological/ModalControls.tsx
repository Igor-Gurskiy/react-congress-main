// import React from 'react'
// import styled, { css } from 'styled-components'
// import media from '@/utils/media'

// const ModalControls = ({ handlePrev, handleNext, step, close }) => {
// 	return (
// 		<ControlsWrapper>
// 			<MobileControls>
// 				<Back onClick={close}>
// 					<Control />
// 					<BackText>Назад</BackText>
// 				</Back>

// 				{/* <ControlsContainer>
// 					<ArrowLeft onClick={handlePrev}>
// 						<Arrow />
// 					</ArrowLeft>

// 					<IndicatorsWrapper>
// 						<Circle $active={step === 1} />
// 						<Circle $active={step === 2} />
// 					</IndicatorsWrapper>

// 					<ArrowRight onClick={handleNext}>
// 						<Arrow />
// 					</ArrowRight>
// 				</ControlsContainer> */}
// 			</MobileControls>
// 		</ControlsWrapper>
// 	)
// }

// export default ModalControls

// const ControlsContainer = styled.div`
// 	display: flex;
// `

// const Circle = styled.div<{ $active?: boolean }>`
// 	width: 4px;
// 	height: 4px;
// 	background: #b9c9d7;
// 	border-radius: 50%;
// 	margin: 2px;

// 	${({ $active }) =>
// 		$active &&
// 		css`
// 			background: #003056;
// 			border: 1px solid #b8c9d7;
// 			width: 6px;
// 			height: 6px;
// 		`}
// `

// const IndicatorsWrapper = styled.div`
// 	display: flex;
// 	align-items: center;
// `

// const Arrow = () => {
// 	return (
// 		<svg
// 			width="7"
// 			height="13"
// 			viewBox="0 0 7 13"
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 		>
// 			<path
// 				d="M6.33093 12.1054L0.75 6.69355L6.33093 1.28174"
// 				stroke="#003056"
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 			/>
// 		</svg>
// 	)
// }

// const MobileControls = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	width: 100%;
// `

// const BackText = styled.div`
// 	margin-left: 8px;
// 	font-size: 14px;
// 	line-height: 17px;
// 	letter-spacing: 0.04em;
// 	text-transform: uppercase;
// 	color: #1f1f1f;
// `

// const Back = styled.div`
// 	display: flex;
// 	align-items: center;
// 	cursor: pointer;
// 	padding: 10px;
// `

// const ControlsWrapper = styled.div`
// 	position: absolute;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	z-index: 1111;
// 	top: 0;
// 	left: 0;
// 	right: 0;
// 	//background: #fff;
// 	height: 72px;
// 	padding: 0 16px;

// 	${media.lg`

//   `}
// `

// const ArrowLeft = styled.div`
// 	display: flex;
// 	flex-shrink: 0;
// 	cursor: pointer;
// 	padding: 12px;
// `

// const ArrowRight = styled.div`
// 	display: flex;
// 	flex-shrink: 0;
// 	transform: rotate(180deg);
// 	cursor: pointer;
// 	padding: 12px;
// `

// const Control = () => {
// 	return (
// 		<svg
// 			width="24"
// 			height="24"
// 			viewBox="0 0 24 24"
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 		>
// 			<path
// 				d="M14.3309 17.1054L8.75 11.6936L14.3309 6.28174"
// 				stroke="#2C435F"
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 			/>
// 			<rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#2C435F" />
// 		</svg>
// 	)
// }

import React from 'react'
import styled, { css } from 'styled-components'
import media from '@/utils/media'

const ModalControls = ({ handlePrev, handleNext, step, close }) => {
	return (
		<ControlsWrapper>
			<MobileControls>
				<Back onClick={close}>
					<Control />
					<BackText>Назад</BackText>
				</Back>

				<ControlsContainer>
					<ArrowLeft onClick={handlePrev}>
						<Arrow />
					</ArrowLeft>

					<IndicatorsWrapper>
						<Circle $active={step === 1} />
						<Circle $active={step === 2} />
					</IndicatorsWrapper>

					<ArrowRight onClick={handleNext}>
						<Arrow />
					</ArrowRight>
				</ControlsContainer>
			</MobileControls>
		</ControlsWrapper>
	)
}

export default ModalControls

const ControlsContainer = styled.div`
	display: flex;
`

const Circle = styled.div<{ $active?: boolean }>`
	width: 4px;
	height: 4px;
	background: #b9c9d7;
	border-radius: 50%;
	margin: 2px;

	${({ $active }) =>
		$active &&
		css`
			background: #003056;
			border: 1px solid #b8c9d7;
			width: 6px;
			height: 6px;
		`}
`

const IndicatorsWrapper = styled.div`
	display: flex;
	align-items: center;
`

const Arrow = () => {
	return (
		<svg
			width="7"
			height="13"
			viewBox="0 0 7 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.33093 12.1054L0.75 6.69355L6.33093 1.28174"
				stroke="#003056"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

const MobileControls = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`

const BackText = styled.div`
	margin-left: 8px;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #1f1f1f;
`

const Back = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 10px;
`

const ControlsWrapper = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 1111;
	top: 0;
	left: 0;
	right: 0;
	//background: #fff;
	height: 72px;
	padding: 0 16px;

	${media.lg`
  
  `}
`

const ArrowLeft = styled.div`
	display: flex;
	flex-shrink: 0;
	cursor: pointer;
	padding: 12px;
`

const ArrowRight = styled.div`
	display: flex;
	flex-shrink: 0;
	transform: rotate(180deg);
	cursor: pointer;
	padding: 12px;
`

const Control = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.3309 17.1054L8.75 11.6936L14.3309 6.28174"
				stroke="#2C435F"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#2C435F" />
		</svg>
	)
}
