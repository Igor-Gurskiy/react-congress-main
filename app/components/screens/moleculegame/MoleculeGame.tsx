import media from '@/utils/media'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import PulseButton from '@/components/Help/PulsingButton'
import useWindowSize from '@/hooks/useWindowSize'

import popupBg from '/public/assets/images/molecules/popup__bg.png'
import bottle from '/public/assets/images/molecules/bottle.png'

import Molecule, {
	getMoleculesFromStorage,
} from '@/components/ui/molecule/Molecule'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

interface MoleculePopupContainer {
	background: string
}

const MoleculeGame = ({ close }) => {
	const moleculesCount = getMoleculesFromStorage().length
	const [width] = useWindowSize()

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.moleculeRules)
	}, [])

	return (
		<MoleculePopupContainer background={popupBg.src}>
			<MoleculePopupContent>
				<MoleculeTitle>
					Добро пожаловать в игру
					<br /> <b>«Собери молекулы»</b>
				</MoleculeTitle>
				<SubtitleOne>
					Здесь, в комнатах <b>La Roche-Posay, Vichy и Dercos </b>
					спрятаны
					<b> 30 молекул</b> (по 10 в каждой локации)
				</SubtitleOne>
				<Content>
					<LeftContent>
						<img src={bottle.src} alt="" />
					</LeftContent>
					<RightContent>
						<MoleculesBox>
							<MoleculeExampleItem>
								<Molecule
									id="vichy-rules"
									type="vichy"
									position={{ top: 0, left: 0 }}
									disabled
									size={width < 576 ? '7vh' : '8vh'}
									block
								/>
								<p>VICHY</p>
							</MoleculeExampleItem>
							<MoleculeExampleItem>
								<Molecule
									id="lrp-rules"
									type="lrp"
									position={{ top: 0, left: 0 }}
									disabled
									size={width < 576 ? '7vh' : '8vh'}
									block
								/>
								<p>La roche-posay</p>
							</MoleculeExampleItem>
							<MoleculeExampleItem>
								<Molecule
									id="dercos-rules"
									type="dercos"
									position={{ top: 0, left: 0 }}
									disabled
									size={width < 576 ? '7vh' : '8vh'}
									block
								/>
								<p>DERCOS</p>
							</MoleculeExampleItem>
						</MoleculesBox>
						<SubtitleTwo>
							Найдите их все и получите шанс* выиграть одну из лимитированных
							экологичных бутылок для воды и горячих напитков
						</SubtitleTwo>
						<Description>
							*1000 победителей будут выбраны случайным образом среди нашедших
							все 30 молекул. Призы будут разосланы по окончании конгресса.
						</Description>
						<CounterTitle>Отслеживайте статус поиска здесь:</CounterTitle>
						<CounterBox>
							<Counter>{moleculesCount}</Counter> из 30 молекул
						</CounterBox>
					</RightContent>
				</Content>
				<ButtonWrapper>
					<WelcomeButton button onClick={close}>
						Играть
					</WelcomeButton>
				</ButtonWrapper>

				<PromoText>Реклама skin.ru ERID: 2SDnjdpoeF2</PromoText>
			</MoleculePopupContent>
		</MoleculePopupContainer>
	)
}

export default MoleculeGame

const PromoText = styled.div`
	color: #242424;
	text-align: center;
	font-size: 14px;
	font-weight: 300;
	line-height: 120%;
	margin-top: 24px;
`

const MoleculeExampleItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const MoleculePopupContainer = styled.div<MoleculePopupContainer>`
	background: url(${(props) => props.background}) center/contain no-repeat;
	${media.sm`	
	background: url(${(props) => props.background}) center/cover no-repeat;
	width: 90vh;
	height: 90vh;
		`}
`
const MoleculePopupContent = styled.div`
	padding: 14vmin 12.96vmin 12vmin 12.96vmin;
	${media.sm`	
  padding: 11vh 1vh 10vh 1vh;
  display: flex;
  flex-direction: column;
	justify-content: center;
  height: 88vh;
		`}
`
const MoleculeTitle = styled.div`
	text-transform: uppercase;
	color: #000;
	text-align: center;
	font-size: 2.4vmin;
	font-weight: 300;
	line-height: 140%;
	letter-spacing: 0.19vmin;
	margin-bottom: 1vmin;

	b {
		font-size: 3.84vmin;
		${media.sm`	
		font-size: 6.84vmin;
		line-height: 120%;
		`}
	}

	${media.md`	
	font-size: 2.24vmin;
		`}
	${media.sm`	
		  font-size: 2.24vh;
			letter-spacing: 0.19vh;
			margin-bottom: 1.92vh;
		`}
  ${media.phone_m`	
		  font-size: 2.8vh;
		`}
  ${media.phone`	
		  font-size: 2.5vh;
		`}
`
const SubtitleOne = styled.div`
	color: #565656;
	text-align: center;
	font-size: 2.1vmin;
	font-style: normal;
	font-weight: 300;
	line-height: 120%;
	margin: 0 auto;
	margin-bottom: 2.5vmin;
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

const Content = styled.div`
	display: flex;
	justify-content: center;
`
const LeftContent = styled.div`
	${media.sm`	
		display: flex;
		align-items: center;
		`}
	img {
		height: 33vmin;
		margin: 0px 4vh 0 3vh;
		${media.md`	
	height: 40vmin;
		margin: 0 3vh 0 4vh;
		`}
		${media.sm`	
		height: 56vmin;
  margin: 0vh 1vh;
		`}
    ${media.phone`	
		height: 56vmin;
		margin: 0vh 2vh 0vh 0vh;
		`}
	}
`
const RightContent = styled.div`
	margin-top: 1vmin;
`

const MoleculesBox = styled.div`
	display: flex;
	justify-content: start;
	margin-left: 1vmin;
	margin-bottom: 1.92vmin;
	line-height: 120%;
	gap: 1.3vmin;

	div {
		text-align: center;

		p {
			text-transform: uppercase;
			color: #000;
			text-align: center;
			font-size: 1.28vmin;
			font-weight: 400;
			line-height: 120%;
			margin-top: 1vmin;
			${media.md`	
			font-size: 1.6vmin;
		`};
			${media.sm`	
		  font-size: 1.2vh;	
			margin-bottom: 1.92vh;
		`}
		}
	}

	div:nth-child(2) {
		margin-right: 1.8vmin;
		margin-left: 1.8vmin;
	}
`
const SubtitleTwo = styled.div`
	color: #565656;
	font-size: 1.62vmin;
	font-weight: 400;
	margin-bottom: 0.84vmin;
	max-width: 38vmin;
	line-height: 120%;

	b {
		font-weight: 600;
	}

	${media.md`	
	font-size: 2.4vmin;
	max-width: 60vmin;
		`}
	${media.sm`	
		font-size: 1.55vh;
		max-width: 32vh;
		margin-bottom: 0.84vh;
		`}
  ${media.phone_m`	
		  font-size: 1.45vh;
				max-width: 35vh;
		`}
`
const Description = styled.div`
	color: #565656;
	font-size: 1.12vmin;
	font-weight: 300;
	line-height: 120%;
	margin-bottom: 0.7vmin;
	max-width: 38vmin;
	${media.md`	
	font-size: 1.52vmin;
	max-width: 55vmin;
		`}
	${media.sm`	
	font-size: 1.12vh;
	max-width: 38vh;	
	margin-bottom: 0.7vh;

		`}
`
const CounterTitle = styled.div`
	color: #565656;
	font-size: 1.44vmin;
	font-weight: 400;
	line-height: 120%;
	margin-top: 1.92vmin;
	margin-bottom: 0.7vmin;
	${media.md`	
	font-size: 1.94vmin;
		`}
	${media.sm`	
	font-size: 1.72vh;
	margin-top: 1.92vh;
	margin-bottom: 0.7vh;
		`}
`
const CounterBox = styled.div`
	display: flex;
	align-items: end;
	justify-content: start;
	color: #5294e5;
	font-size: 1.92vmin;
	font-weight: 800;
	line-height: 120%;
	letter-spacing: 0.08vmin;
	text-transform: uppercase;
	margin-bottom: 4.5vmin;
	${media.md`	
	font-size: 2.52vmin;
		`}
	${media.sm`	
	font-size: 2.22vh;
	letter-spacing: 0.08vh;
	margin-bottom: 3.92vh;
		`}
`

const Counter = styled.div`
	color: #5294e5;
	font-size: 3.84vmin;
	font-weight: 800;
	line-height: 90%;
	letter-spacing: 0.19vmin;
	margin-right: 0.6vmin;
	${media.md`	
	font-size: 4.84vmin;
		`}
	${media.sm`	
	font-size: 4.32vh;
		letter-spacing: 0.19vh;
	margin-right: 0.6vh;
		`}
`
const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`

const WelcomeButton = styled(PulseButton)`
	background: #5294e5;
	border-color: #5294e5;
	border-radius: 7px;
	padding: 0.64vmin 1.28vmin;
	flex-shrink: 0;

	min-width: 28vmin;

	.pulse-text {
		color: #fff;
		text-align: center;
		font-size: 1.92vmin;
		font-weight: 600;
		line-height: 120%;
		letter-spacing: 0.08vmin;
		text-transform: uppercase;
		${media.md`	
			font-size: 2.52vmin;
		`}
		${media.sm`	
			font-size: 2.22vh;
			letter-spacing: 0.08vh;
		`}
	}

	${media.md`	
		min-width: 35vmin;
		`}
	${media.sm`	
		min-width: 35vh;
		padding: 0.64vh 1.28vh;
		`}
`
