import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

import GradientButton from './GradientButton'
import instructionIcon from '/public/assets/images/dercos/linegame/instruction__two-icon.png'

const InstructionTwo = ({ closeInstructionTwo }) => {
	return (
		<InstructionTwoWrapper>
			<InstructionTwoContent>
				<img
					style={{ marginBottom: '16px' }}
					className="instruction-icon"
					src={instructionIcon.src}
					alt=""
				/>
				<InstructionTwoText>
					Кликните на иконку продукта и тяните к фотографиям клинических случаев
				</InstructionTwoText>
				<div
					style={{
						margin: '0 auto',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<GradientButton button={true} onClick={closeInstructionTwo}>
						понятно
					</GradientButton>
				</div>
				<ArrowBlock />
			</InstructionTwoContent>
		</InstructionTwoWrapper>
	)
}

export default InstructionTwo

const InstructionTwoWrapper = styled.div`
	position: absolute;
	bottom: 50%;
	left: 110%;
	z-index: 22;
	background-color: #fff;
	text-align: center;
	padding: 32px 51px;
	transform: translate(0%, 50%);
	border-radius: 11px;
	${media.md`	
	padding: 32px;
		`}
	${media.sm`	
	bottom: 0px;
	left: 0px;
	right: 0px;
	transform: translate(0%,0%);

		`}
`
const InstructionTwoContent = styled.div`
	position: relative;

	img {
		margin-bottom: 16px;
		width: 257px;
	}
`
const ArrowBlock = styled.div`
	position: absolute;
	top: 40%;
	left: -50px;
	width: 30px;
	height: 30px;
	background-color: #fff;
	transform: rotate(45deg);
	transform-origin: top left;
	${media.md`	
	left: -30px;
		`}
	${media.sm`	
		top: -23%;
		left: 20%;
		`}
`
const InstructionTwoText = styled.div`
	color: #565656;
	text-align: center;
	font-size: 20px;
	font-weight: 300;
	line-height: 120%;
	margin: 0 auto;
	margin-bottom: 16px;
	width: 388px;
	${media.md`	
	font-size: 18px;
		`}
	${media.sm`	
		width: 296px;
		font-size: 16px;
		`}
  ${media.phone`	
		width: 100%;
		`}
`
