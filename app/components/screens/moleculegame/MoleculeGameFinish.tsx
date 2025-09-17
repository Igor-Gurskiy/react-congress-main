import media from '@/utils/media'
import React from 'react'
import styled from 'styled-components'
import PulseButton from '@/components/Help/PulsingButton'
import useWindowSize from '@/hooks/useWindowSize'

import popupBg from '/public/assets/images/molecules/popup__bg.png'
import bottleFinish from '/public/assets/images/molecules/bottle-finish.png'

interface MoleculePopupContainer {
	background: string
}

const MoleculeGameFinish = ({ close }) => {
	const [width] = useWindowSize()

	return (
		<MoleculePopupContainer background={popupBg.src}>
			<MoleculePopupContent>
				<MoleculeTitle>
					<b>Поздравляем!</b>
					<br /> вы нашли все 30 молекул
				</MoleculeTitle>
				<Content>
					<LeftContent>
						<img src={bottleFinish.src} alt="" />
					</LeftContent>
					<RightContent>
						<SubtitleTwo>
							Вы прошли игру и стали участником розыгрыша*. По завершении
							Онлайн-конгресса L'Oreal Dermatological Beauty искусственный
							интеллект выберет победителей, с которыми мы свяжемся после
							завершения конгресса.
						</SubtitleTwo>
						<Description>
							* 1000 победителей будут выбраны случайным образом среди нашедших
							все 30 молекул. Призы будут разосланы по окончании конгресса
						</Description>
					</RightContent>
				</Content>
				<ButtonWrapper>
					<WelcomeButton button onClick={close}>
						ок, спасибо
					</WelcomeButton>
				</ButtonWrapper>

				<PromoText>Реклама skin.ru ERID: 2SDnjdpoeF2</PromoText>
			</MoleculePopupContent>
		</MoleculePopupContainer>
	)
}

export default MoleculeGameFinish

const PromoText = styled.div`
	color: #242424;
	text-align: center;
	font-size: 1.12vmin;
	font-weight: 300;
	line-height: 120%;
	margin-top: 3vmin;
	${media.sm`	
	margin-top: 6vmin;
	font-size: 2vmin;
		`}
`

const MoleculePopupContainer = styled.div<MoleculePopupContainer>`
	background: url(${(props) => props.background}) center/contain no-repeat;
	${media.sm`	
	background: url(${(props) => props.background}) center/cover no-repeat;
	width: 80vh;
	height: 80vh;
		`}
`
const MoleculePopupContent = styled.div`
	padding: 16vmin 12.96vmin 10vmin 12.96vmin;
	${media.sm`	
  padding: 11vh 1vh 10vh 1vh;
  display: flex;
  flex-direction: column;
	justify-content: center;
  height: 80vh;
		`}
`
const MoleculeTitle = styled.div`
	text-transform: uppercase;
	color: #000;
	text-align: center;
	font-size: 1.9vmin;
	font-weight: 300;
	line-height: 140%;
	letter-spacing: 0.19vmin;
	margin-bottom: 1.8vmin;
	b {
		font-size: 3.2vmin;
		${media.sm`	
		font-size: 5.84vmin;
		line-height: 120%;
		`}
		${media.phone_m`	
		  font-size: 3.8vh;
		`}
	}
	${media.md`	
	font-size: 2.24vmin;
		`}
	${media.sm`	
		  font-size: 2vh;
			letter-spacing: 0.19vh;
			margin-bottom: 1.92vh;
		`}
  ${media.phone_m`	
		  font-size: 2.3vh;
		`}
  ${media.phone`	
		  font-size: 2.5vh;
		`}
`

const Content = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 2vmin;
	${media.sm`	
	flex-direction: column;
	align-items: center;
	margin-bottom: 4vmin;
		`}
`
const LeftContent = styled.div`
	${media.sm`	
		display: flex;
		align-items: center;
		`}

	img {
		height: 28vmin;
		margin: 0px 4vh 0 6vh;
		${media.md`	
	height: 35vmin;
		margin: 0 3vh 0 4vh;
		`}
		${media.sm`	
		height: 35vmin;
 		margin: 0vh 2vh;
		`}
		${media.phone`	
		height: 56vmin;
		margin: 0vh 2vh 0vh 0vh;
		`}
	}
`
const RightContent = styled.div`
	margin-top: 1vmin;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const SubtitleTwo = styled.div`
	color: #565656;
	font-size: 1.62vmin;
	font-weight: 400;
	margin-bottom: 0.84vmin;
	max-width: 31vmin;
	line-height: 120%;

	b {
		font-weight: 600;
	}

	${media.md`	
	font-size: 1.8vmin;
	max-width: 32vmin;
		`}
	${media.sm`	
		font-size: 1.75vh;
		text-align: center;
		max-width: 58vh;
		margin: 0 auto;
		margin-bottom: 0.84vh;
		`}
  ${media.phone_m`	
		  font-size: 1.45vh;
				max-width: 46vh;
		`}
`
const Description = styled.div`
	color: #565656;
	font-size: 1.12vmin;
	font-weight: 300;
	line-height: 120%;
	margin-bottom: 0.7vmin;
	max-width: 29vmin;
	${media.md`	
	font-size: 1.32vmin;
	max-width: 34vmin;
		`}
	${media.sm`	
	font-size: 1.22vh;
	text-align: center;
	max-width: 52vh;
	margin: 0 auto;
	margin-bottom: 0.3vh;
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
