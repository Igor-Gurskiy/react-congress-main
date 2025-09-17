import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

const ModalControls = ({ close }) => {
	return (
		<ControlsWrapper>
			<MobileControls>
				<Back onClick={close}>
					<Control />
					<BackText>Назад</BackText>
				</Back>
			</MobileControls>
		</ControlsWrapper>
	)
}

export default ModalControls

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
