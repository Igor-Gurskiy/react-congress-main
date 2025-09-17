import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

import GradientButton from './GradientButton'

import instructionIcon from '/public/assets/images/dercos/linegame/instruction__one-icon.svg'

const InstructionOne = ({ closeInstructionOne }) => {
	return (
		<InstructionOneWrapper>
			<InstructionOneContent>
				<img
					style={{ marginBottom: '16px' }}
					className="instruction-icon"
					src={instructionIcon.src}
					alt=""
				/>
				<InstructionOneText>
					Правильно соедините линией продукты с фотографиями клинических случаев
				</InstructionOneText>
				<div
					style={{
						margin: '0 auto',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<GradientButton button={true} onClick={closeInstructionOne}>
						ок, понятно
					</GradientButton>
				</div>
			</InstructionOneContent>
		</InstructionOneWrapper>
	)
}

export default InstructionOne

const InstructionOneWrapper = styled.div`
	position: absolute;
	bottom: 40px;
	right: 32px;
	z-index: 22;
	background-color: #fff;
	text-align: center;
	padding: 32px 51px;
	border-radius: 11px;

	${media.sm`	
	bottom: 0px;
	left: 0px;
	right: 0px;
		`}
`
const InstructionOneContent = styled.div``
const InstructionOneText = styled.div`
	color: #565656;
	text-align: center;
	font-size: 20px;
	font-weight: 300;
	line-height: 120%;
	margin: 0 auto;
	margin-bottom: 16px;
	max-width: 388px;
	${media.sm`	
	max-width: 304px;
		`}
`
