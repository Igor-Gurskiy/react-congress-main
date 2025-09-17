import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import { mediaMin } from '@/utils/media'

const ScheduleModal = ({ close, children }) => {
	return (
		<ModalContent>
			<CloseCross onClick={close}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
						fill="white"
					/>
				</svg>
			</CloseCross>
			<ModalHeader>
				<Close onClick={close}>
					<img src="assets/images/shared/back.svg" width={26} height={26} />
					Назад
				</Close>
			</ModalHeader>
			<ModalBody>{children}</ModalBody>
		</ModalContent>
	)
}

export default ScheduleModal

const CloseCross = styled.div`
	cursor: pointer;
	transition: all 0.3s;
	padding: 10px;
	margin-right: -10px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: -40px;
	right: -8px;
	z-index: 111;
`

const ModalContent = styled(animated.div)`
	position: relative;
	max-width: 664px;
	width: 100%;
	//overflow: hidden;
	max-height: 100%;
	max-height: calc(100%);
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`

const ModalBody = styled.div`
	font-family: 'Gilroy', sans-serif;
	font-size: 13px;
	line-height: 20px;
	color: #1f1f1f;
	position: relative;
	overflow: auto;
`

const ModalWrapper = styled(animated.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	align-items: center;
	justify-content: center;
	background: rgba(31, 31, 31, 0.8);
	z-index: 10001;
	padding: 16px;
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100%;
	width: 100%;
`

const ModalHeader = styled.div`
	display: block;
	position: absolute;
	top: 8px;
	left: 8px;
	z-index: 9;

	${mediaMin.phone_xl`
		top: 18px;
		left: 24px;
	`}
`

const Close = styled.div`
	display: grid;
	grid-template-columns: 26px auto;
	gap: 8px;
	align-items: center;
	padding: 8px;
	cursor: pointer;
	background: #fff;
	border-radius: 8px;
	color: #1f1f1f;
	font-weight: 300;
	font-size: 14px;
	line-height: 120%;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	transition: all 0.3s;
`
