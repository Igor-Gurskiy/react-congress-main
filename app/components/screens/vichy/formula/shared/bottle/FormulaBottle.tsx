import React from 'react'
import styled, { css } from 'styled-components'
import PulseButton from '@/components/Help/PulsingButton'
import { animated, useTransition } from 'react-spring'
import media from '@/utils/media'
import Link from 'next/link'
import useWindowSize from '@/hooks/useWindowSize'

const FormulaBottle = ({ state }) => {
	const transitions = useTransition(state.finished, {
		from: { opacity: 0, x: 100 },
		enter: { opacity: 1, x: 0 },
		leave: { opacity: 0, x: 100 },
		config: {
			// easing: easePoly.exponent(2),
			duration: 300,
		},
	})

	const [width, height] = useWindowSize()
	const scale = Math.min(width / 500, height / (340 + 400))
	const scaleBy = scale >= 1 ? 1 : scale

	return (
		<BottleContainer id="vichy-bottle">
			<Bottle
				$visible={state.finished}
				src="/assets/images/vichy/formula/bottle.png"
				alt="Vichy Formula bottle"
			/>
			<BottleReflection
				src="/assets/images/vichy/formula/reflect.png"
				alt="Vichy Formula reflect"
			/>

			<BottleLayers>
				{state.layers.map((layer) => (
					<img key={layer} src={layer} />
				))}
			</BottleLayers>

			<ResultBottle
				$visible={state.finished}
				src="/assets/images/vichy/formula/result.png"
				alt="Vichy Formula result bottle"
			/>

			{transitions((style, item) =>
				item ? (
					<FormulaVictory style={{ ...style, transform: `scale(${scaleBy})` }}>
						<Glass>
							<VictoryText>
								ПОЗДРАВЛЯЕМ!
								<br />
								Вы правильно собрали Liftactive B3 Serum и стали участником
								розыгрыша.
								<br />
								По завершении ACD Конгресса искусственный интеллект выберет 250
								победителей, с которыми мы свяжемся в начале декабря.
							</VictoryText>
							<VictoryDisclaimer>
								*250 победителей будут выбраны случайным образом среди тех, кто
								полностью прошел игру — выбрал все правильные компоненты. Призы
								будут разосланы по окончании конгресса.
							</VictoryDisclaimer>
						</Glass>
					</FormulaVictory>
				) : (
					''
				),
			)}

			{transitions((style, item) =>
				item ? (
					<FormulaResult style={style}>
						<ResultText>
							ваше время:
							<br />
							<b>{state.elapsed} сек</b>
						</ResultText>
						<ButtonWrapper>
							<Link legacyBehavior href="/vichy">
								<LobbyButton button>
									<LobbyButtonText> вернуться в комнату</LobbyButtonText>
								</LobbyButton>
							</Link>
						</ButtonWrapper>
					</FormulaResult>
				) : (
					''
				),
			)}
		</BottleContainer>
	)
}

export default FormulaBottle

const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;

	${media.lg`
    justify-content: center;
   `}
`

const ResultBottle = styled.img<{ $visible?: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 121;
	height: 100%;
	width: 100%;
	opacity: 0;

	${({ $visible }) =>
		$visible &&
		css`
			opacity: 1;
		`}

	transition: all 0.7s;
`

const ResultText = styled.div`
	font-weight: 400;
	font-size: 24px;
	line-height: 1;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #de0311;

	margin-bottom: 32px;

	b {
		font-size: 54px;
		font-weight: 700;
	}

	${media.lg`
    font-size: 20px;
    
    b {
        font-size: 40px;
    }
  `}

	${media.lg`
    font-size: 16px;
    b {
        font-size: 32px;
    }
    
    width: 100%;
    background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%);
    box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.08);
    border-radius: 13px;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}
`

const LobbyButtonText = styled.div`
	font-weight: 500;
	font-size: 26px;
	line-height: 32px;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #ffffff;

	${media.lg`
    font-size: 20px;
    line-height: 24px;
  `}

	${media.md`
    font-size: 16px;
    line-height: 20px;
  `}
`

const LobbyButton = styled(PulseButton)`
	background: #de0311;
	border-radius: 3px;
	padding: 8px 16px;

	flex-shrink: 0;
`

const VictoryText = styled.div`
	font-weight: 600;
	font-size: 24px;
	line-height: 120%;
	letter-spacing: 0.05em;
	color: #de0311;
	margin-bottom: 16px;

	@media only screen and (max-device-width: 768px) and (orientation: landscape) {
		font-size: 14px;
	}
`

const VictoryDisclaimer = styled.div`
	font-weight: 400;
	font-size: 12px;
	line-height: 120%;
	letter-spacing: 0.05em;
	color: #de0311;
	@media only screen and(max-device-width: 768px) and (orientation: landscape) {
		font-size: 10px;
	}
`

const Glass = styled.div`
	padding: 24px;

	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0.8) 0%,
		rgba(245, 245, 245, 0.8) 100%
	);
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
	backdrop-filter: blur(6px);
	border-radius: 8px;
`

const FormulaVictory = styled(animated.div)`
	position: absolute;
	z-index: 125;
	right: 120%;
	//top: 30%;
	bottom: 10%;
	min-width: 350px;
	max-width: 550px;
	width: 100%;

	transform-origin: center;

	${media.lg`
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    
  display: flex;
  justify-content: center;
  align-items: center;
    
    left: 0;
    right: 0;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

  `}
`

const FormulaResult = styled(animated.div)`
	position: absolute;
	z-index: 131;
	left: 150%;
	top: 30%;
	min-width: 400px;

	@media only screen and(max-device-width: 768px) and (orientation: landscape) {
		padding: 24px;
	}

	${media.lg`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 24px;
  `}
`

const BottleLayers = styled.div`
	position: absolute;

	display: flex;
	flex-direction: column-reverse;

	img {
		height: 20%;
		width: 100%;
	}

	left: 4%;
	right: 6%;
	top: 52%;
	bottom: 4%;
	border-radius: 14% 14% 12% 12%;
	overflow: hidden;
	//background: linear-gradient(180deg, #E0201D 0%, #280000 99.71%);
`

const Bottle = styled.img<{ $visible?: boolean }>`
	max-height: 60vh;
	object-fit: contain;

	opacity: 1;
	transition: all 0.7s;

	${({ $visible }) =>
		$visible &&
		css`
			opacity: 0;
		`}

	${media.lg`
    max-height: 55vh;
    max-width: 35vw;
  `}
`

const BottleReflection = styled.img`
	object-fit: cover;
	position: absolute;
	bottom: 0;
	left: 0;
	transform: translateY(60%);
	transform-origin: top center;
	width: 100%;
	z-index: -1;
`

const BottleContainer = styled.div`
	z-index: 1;
	position: absolute;
	bottom: 12%;

	${media.lg`
    bottom: 22%;
  `}
`
