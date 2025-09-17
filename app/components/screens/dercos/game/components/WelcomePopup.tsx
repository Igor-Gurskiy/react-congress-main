import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import PulseButton from '@/components/Help/PulsingButton'

const WelcomePopup = ({ close, onClose }) => {
	return (
		<WelcomeContent>
			<WelcomeTitle>
				Добро пожаловать <br /> в лабораторию DERCOS
			</WelcomeTitle>
			<WelcomeQuestion>
				Как вы думаете какие продукты были назначены?
			</WelcomeQuestion>
			<WelcomeText>
				Соедините линиями продукты <br />
				и фотографии клинических случаев
				<br />
				ваших коллег
			</WelcomeText>
			<div
				style={{
					margin: '0 auto',
					display: 'flex',
					justifyContent: 'center',
				}}
				onClick={() => {
					onClose()
					close()
				}}
			>
				<WelcomeButton button={true}>Играть</WelcomeButton>
			</div>
			<Ad>Реклама skin.ru ERID: 2SDnje2qd28</Ad>
		</WelcomeContent>
	)
}

export default WelcomePopup

const WelcomeButton = styled(PulseButton)`
	background: #000;
	border-color: #000;
	border-radius: 3px;
	padding: 8px 16px;
	flex-shrink: 0;

	min-width: 220px;

	.pulse-text {
		color: #fff;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
	}
`

const WelcomeWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(217, 217, 217, 0.7);
	z-index: 4;
	display: flex;
	align-items: center;
	justify-content: center;
`
const WelcomeContent = styled.div`
	max-width: 640px;
	max-height: 367px;
	background-color: #fff;
	padding: 32px;
	text-align: center;
	flex-grow: 1;
	${media.sm`	
	padding: 32px 10px;

		`}
`
const WelcomeTitle = styled.div`
	color: #000;
	text-align: center;
	font-size: 26px;
	font-weight: 600;
	letter-spacing: 1.3px;
	text-transform: uppercase;
	margin-bottom: 16px;
	${media.sm`	
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 1px;
		`}
`

const WelcomeQuestion = styled.div`
	max-width: 450px;
	margin: 0 auto;
	color: #000;
	text-align: center;
	font-size: 26px;
	font-weight: 300;
	line-height: 120%;
	letter-spacing: 1.3px;
	margin-bottom: 16px;
	${media.sm`	
		max-width: 320px;
	font-size: 20px;
	font-weight: 400;
	letter-spacing: 1px;
		`}
`

const WelcomeText = styled.div`
	color: #565656;
	text-align: center;
	font-size: 20px;
	font-weight: 300;
	line-height: 120%;
	margin-bottom: 25px;
	${media.sm`	
	font-size: 16px;
		`}
`
const Ad = styled.div`
	margin-top: 25px;
	color: #141414;
	text-align: center;
	font-size: 14px;
	font-weight: 300;
	line-height: 120%;
	${media.sm`
	font-size: 12px;
  `}
`
