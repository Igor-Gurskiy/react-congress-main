import media from '@/utils/media'
import Link from 'next/link'
import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { GameButtonResult } from '@/components/screens/lrp/game/components/GameButton'

import tabletLeftBg from '/public/assets/images/lrp/game/result-left-person-tablet.png'
import phoneLeftBg from '/public/assets/images/lrp/game/result-left-person-phone.png'
import tabletRightBg from '/public/assets/images/lrp/game/result-right-person-tablet.png'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import { useLRPGameStore } from '@/components/screens/lrp/game/stores/LRPGameStore'
import { motion } from 'framer-motion'

const ResultGame: React.FC = () => {
	const correct = useLRPGameStore((state) => state.correct)
	const maxScore = useLRPGameStore((state) => state.maxScore)

	const percentage = useMemo(
		() => Number(((correct / maxScore) * 100).toFixed(0)),
		[correct, maxScore],
	)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpGameResult, `params[score]=${correct}`)
	}, [])

	return (
		<MainContainer>
			<LeftPerson>
				<img className="one-tablet" src={tabletLeftBg.src} alt="" />
				<img className="one-phone" src={phoneLeftBg.src} alt="" />
			</LeftPerson>
			<RightPerson>
				<img className="two-tablet" src={tabletRightBg.src} alt="" />
				{/* <img className="two-phone" src={phoneRightBg.src} alt="" /> */}
			</RightPerson>
			<Wrapper
				initial={{ translateY: '100%', opacity: 0 }}
				animate={{ translateY: 0, opacity: 1 }}
				exit={{ translateY: '100%', opacity: 0 }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
				}}
				key="result"
			>
				<ResultPopupContainer>
					<ResultPopupContent>
						<Progress>
							<ProgressValue>{percentage}%</ProgressValue>
							<ProgressBg>
								<ProgressBar width={percentage} />
							</ProgressBg>
						</Progress>
						<ResultTitle>Поздравляем!</ResultTitle>
						<SubtitleOne>
							Вы правильно расставили средства и стали участником розыгрыша. По
							завершении Онлайн-конгресса
							L'Oreal&nbsp;Dermatological&nbsp;Beauty искусственный интеллект
							выберет 1000 победителей, с которыми мы свяжемся после завершения
							конгресса.
						</SubtitleOne>
						<Controls>
							<Link href="/lrp">
								<ReturnButton button>Вернуться в комнату</ReturnButton>
							</Link>
						</Controls>
					</ResultPopupContent>
				</ResultPopupContainer>
			</Wrapper>
		</MainContainer>
	)
}

export default ResultGame
const MainContainer = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
`
const Wrapper = styled(motion.div)`
	position: absolute;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
const ResultPopupContainer = styled.div`
	background: url(/assets/images/molecules/popup__bg.png) center/contain
		no-repeat;
	${media.sm`	
	background: url(/assets/images/molecules/popup__bg.png) center/cover no-repeat;
	width: 80vh;
	height: 80vh;
		`} @media screen and(max-width: 450 px) {
		width: 70vh;
		height: 70vh;
	}
`
const ResultPopupContent = styled.div`
	padding: 22vmin 20vmin 34vmin 20vmin;
	${media.sm`	
  padding: 22vmin 11vmin 21vmin 11vmin;
  display: flex;
  flex-direction: column;
	justify-content: center;
  height: 80vh;
	align-items:center;
		`} @media screen and(max-width: 450 px) {
		height: 63vh;
	}
`
const ResultTitle = styled.div`
	color: #000;
	text-align: center;
	font-size: 4.5vmin;
	font-weight: 300;
	line-height: 110%;
	letter-spacing: 0.19vmin;
	margin-bottom: 1.92vmin;
	${media.md`	
	font-size: 4.84vmin;
		`}
	${media.sm`	
		  font-size: 5.54vh;
			letter-spacing: 0.19vh;
			margin-bottom: 1.92vh;
		`}
  ${media.phone_m`	
		  font-size: 4.8vh;
		`}
  ${media.phone`	
		  font-size: 3.5vh;
		`}
`
const SubtitleOne = styled.div`
	color: #565656;
	text-align: center;
	font-size: 1.92vmin;
	font-style: normal;
	font-weight: 300;
	line-height: 120%;
	margin: 0 auto;
	margin-bottom: 1.5vmin;
	max-width: 53vmin;

	b {
		font-weight: 600;
	}

	${media.md`	
	font-size: 2.4vmin;
	max-width: 60vmin;
		`}
	${media.sm`	
		  font-size: 2.1vh;
				max-width: 50vh;
				margin-bottom: 1.5vh;
		`}
  ${media.phone_m`	
		  font-size: 1.85vh;
				max-width: 47vh;
		`}
`

export const ReturnButton = styled(GameButtonResult)`
	.pulse-text {
		font-size: 2.25vmin;
		${media.sm`	
		font-size: 3.25vmin;

		`}
	}
`

const Controls = styled.div`
	width: 64vmin;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 4vmin;
`

const Progress = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 4px;
	border-radius: 12px;
	background: linear-gradient(180deg, #fff 0%, #f5f5f5 100%);
	box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.08);
	padding: 1.2vmin 1.6vmin 1.2vmin 1.6vmin;
	margin-bottom: 2vmin;
	${media.sm`	
	padding: 2.2vmin 2.6vmin 2.2vmin 2.6vmin;
		`}
`

const ProgressValue = styled.div`
	color: #000;
	font-size: 2.2vmin;
	font-weight: 800;
	line-height: 120%;
	letter-spacing: 0.96px;
	${media.sm`	
	font-size: 3.2vmin;
		`}
`

const ProgressBg = styled.div`
	background: #e7e7e7;
	height: 1.2vmin;
	width: 100%;
	border-radius: 28px;
	${media.sm`	
	height: 1.7vmin;
		`}
`
const ProgressBar = styled.div<{ width: number }>`
	background: #36b0fc;
	height: 1.2vmin;
	width: ${({ width }) => width + '%'};
	border-radius: 28px;
	${media.sm`	
	height: 1.7vmin;
		`}
`
const LeftPerson = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	.one-tablet {
		display: none;
		@media screen and (max-width: 1024px) {
			display: block;
			max-height: 50vmin;
		}
		@media screen and (max-width: 576px) {
			display: none;
		}
	}

	.one-phone {
		display: none;
		@media screen and (max-width: 576px) {
			display: block;
			width: 360px;
		}
	}
`
const RightPerson = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;

	.two-tablet {
		display: none;
		@media screen and (max-width: 1024px) {
			display: block;
			max-height: 50vmin;
		}
		@media screen and (max-width: 576px) {
			max-height: 100%;
			width: 265px;
		}
	}
`
