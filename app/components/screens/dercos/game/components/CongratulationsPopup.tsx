import React, { useEffect } from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

import GradientButton, { ShowCorrectAnswersButton } from './GradientButton'
import Link from 'next/link'
import { PercentageLineHider } from '@/components/screens/dercos/game/components/PercentageScale'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import { useDercosGameStore } from '@/components/screens/dercos/game/stores/dercos-game-store'

const CongratulationsPopup = ({ result, setResult }) => {
	const startGuide = useDercosGameStore((state) => state.startGuide)
	useEffect(() => {
		API.tracker.sendEvent(
			EventsEnum.dercosGameResult,
			`params[score]=${result}`,
		)
	}, [])

	const handleCorrectAnswers = () => {
		setResult(false)
		startGuide()
	}

	return (
		<>
			<CongratulationsPopupWrapper>
				<ScaleTopContent>
					<PercentageValue>{result * 20}%</PercentageValue>
					<PercentageLine>
						<PercentageLineHider
							style={{
								width: `${100 - result * 20}%`,
							}}
						/>
					</PercentageLine>
				</ScaleTopContent>
				<CongratulationBottomContent>
					<CongratulationBottomTitle>Поздравляем!</CongratulationBottomTitle>
					<CongratulationBottomSubtitle>
						Вы правильно соединили
					</CongratulationBottomSubtitle>
					<CongratulationBottomResult>
						{result} <span>из 5 средств</span>
					</CongratulationBottomResult>
					<CongratulationBottomText>
						и&nbsp;стали участником розыгрыша. По&nbsp;завершении
						онлайн-конгресса L'Oreal Dermatological Beauty искусственный
						интеллект выберет 500&nbsp;победителей, с&nbsp;которыми
						мы&nbsp;свяжемся после завершения конгресса.
					</CongratulationBottomText>
					<Controls>
						<Link
							href="/dercos"
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<GradientButton button>вернуться в комнату</GradientButton>
						</Link>
						<div>
							<ShowCorrectAnswersButton button onClick={handleCorrectAnswers}>
								Показать правильные ответы
							</ShowCorrectAnswersButton>
						</div>
					</Controls>
				</CongratulationBottomContent>
			</CongratulationsPopupWrapper>
		</>
	)
}

export default CongratulationsPopup

const Controls = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const CongratulationsPopupWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 57%;
	transform: translate(-50%, -50%);
	max-width: 600px;

	width: 33%;
	text-align: center;
	flex-grow: 1;
	z-index: 10;
	${media.xl`
		left: 50%;
			width: 100%;
		background: linear-gradient(90deg, #FFF 8.92%, rgba(255, 255, 255, 0.64) 93.83%);
		border-top-left-radius: 11px; 
  	border-top-right-radius: 11px;
  `}
	${media.lg`
		width: 100%;
			top: unset;
			bottom: 0;
				transform: translate(-50%, 0%);
	`}

  ${media.sm`
		transform: translate(0%, 0%);
		width: calc(100% - 32px);
		top: auto;
		bottom: 0px;
		right: 16px;
		left: 16px;
		box-shadow: -6px 1px 7px rgba(0,0,0,0.1)
	`}
`
const ScaleTopContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 14px;
	border-radius: 11.171px;
	background: linear-gradient(180deg, #fff 0%, #f5f5f5 100%);
	box-shadow: 0px 5.58537px 11.17073px 0px rgba(0, 0, 0, 0.08);
	margin-bottom: 16px;
`

const PercentageValue = styled.div`
	color: #000;
	font-size: 24px;
	font-weight: 800;
	line-height: 120%;
	letter-spacing: 0.96px;
	margin-top: 4px;
	margin-right: 4px;
	flex-grow: 1;
	text-align: center;
	${media.lg`
	font-size: 16px;
`}
`
const PercentageLine = styled.div`
	position: relative;
	width: 90%;
	height: 12px;
	background: linear-gradient(90deg, #de0311 0%, #00964a 100%);
	border-radius: 8px;
	overflow: hidden;
	display: flex;
	align-items: flex-end;
`

const CongratulationBottomContent = styled.div`
	${media.xxl`
	padding: 0 16px 40px 16px;
`}
`
const CongratulationBottomTitle = styled.div`
	color: #000;
	font-size: 32px;
	font-weight: 300;
	line-height: 120%;
	letter-spacing: 1.6px;
	margin-bottom: 8px;
	${media.lg`
	font-size: 24px;
`}
`

const CongratulationBottomSubtitle = styled.div`
	color: #565656;
	font-size: 20px;
	font-weight: 300;
	line-height: 120%;
	margin-bottom: 8px;
	${media.lg`
	font-size: 16px;
`}
`
const CongratulationBottomResult = styled.div`
	color: #565656;
	font-size: 48px;
	font-weight: 800;
	line-height: 120%;
	letter-spacing: 2.4px;
	text-transform: uppercase;
	margin-bottom: 8px;

	${media.lg`
	font-size: 32px;
`}
	span {
		font-size: 24px;
		letter-spacing: 0.96px;
		${media.lg`
	font-size: 20px;
`}
	}
`
const CongratulationBottomText = styled.div`
	max-width: 604px;
	color: #565656;
	font-size: 20px;
	font-weight: 300;
	line-height: 120%;
	margin: 0 auto;
	margin-bottom: 16px;
	${media.lg`
	font-size: 16px;
`}
`
