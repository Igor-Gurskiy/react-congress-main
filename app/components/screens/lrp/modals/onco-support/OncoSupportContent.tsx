import React from 'react'
import styled, { css } from 'styled-components'
import media from '@/utils/media'
import Box from '@/components/Box'
import ProductBackButton from '@/components/shared/product-modal/ProductBackButton'
import PulseButton from '@/components/Help/PulsingButton'
import ScrollbarsBody from '@/components/ScollbarsBody'

const ScrollBodyWrapper = styled.div`
	width: 100%;

	${media.md`
    overflow-y: auto;
     height: 100%;
  `}
`

const OncoSupportContent = ({ onOpen, close }) => {
	return (
		<ContentWrapper>
			<ScrollbarsBody factor={-50}>
				<Container>
					<BodyContent>
						<Bow
							width="300"
							height="466"
							viewBox="0 0 310 481"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								opacity="0.3"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M77.267 293.459C52.0044 320.101 25.9262 347.603 0.772217 376.738L55.4641 480.571C55.4641 480.571 101.452 428.889 153.428 364.635C191.348 408.717 229.939 450.28 259.443 480.571L309.964 376.738C308.53 375.235 307.098 373.734 305.668 372.236C275.357 340.468 246.145 309.852 219.021 280.058C262.991 220.284 298.608 163.474 298.608 136.284C294.406 126.552 290.599 117.027 286.921 107.824C262.698 47.2191 244.054 0.571045 154.7 0.571045C62.2994 0.571045 41.8417 57.0983 20.4856 116.108C18.0537 122.828 15.6102 129.579 13.0475 136.284C3.51919 161.21 38.2402 219.198 87.019 283.169C83.7845 286.586 80.5326 290.015 77.267 293.459ZM218.457 111.691C203.792 144.354 181.917 175.622 155.972 206.894C130.133 174.628 107.986 143.051 90.9427 111.691C124.643 85.2769 186.396 86.1883 218.457 111.691Z"
								fill="white"
							/>
						</Bow>
						<Main>
							<Box $mb={25}>
								<ProductBackButton onClick={close} />
							</Box>
							<Title>Наша цель:</Title>
							<Row $flex $justifyContent="space-between">
								<Description>
									Оказываем поддержку <br /> тем, кто столкнулся <br />
									<b>
										с онкологическим <br /> заболеванием
									</b>
								</Description>
								<Image>
									<img
										id="big_logo"
										src="assets/images/lrp/modal/logo.png"
										alt="cancer support by la roche-posay"
									/>
									<img
										id="small_logo"
										src="assets/images/lrp/modal/small_logo.png"
										alt="cancer support by la roche-posay"
									/>
								</Image>
							</Row>
							<Support>
								Мы уже 20 лет поддерживаем <b>врачей-онкологов</b>,&nbsp;
								<b>радиологов</b>, сопровождающих пациентов
							</Support>
						</Main>

						<GoalsWrapper $flex>
							<Goal $first>
								<LinearGradient />
								<GoalNumber>1</GoalNumber>
								<GoalText>
									<b>
										СОЗДАНИЕ СРЕДСТВ, ЭФФЕКТИВНЫХ В&nbsp;СНИЖЕНИИ ДИСКОМФОРТА
										КОЖИ,
									</b>
									&nbsp;ВЫЗВАННОГО ПРОТИВООПУХОЛЕВОЙ ТЕРАПИЕЙ
								</GoalText>
							</Goal>
							<Goal $second>
								<Background>
									<LinearGradient />
									<GoalNumber>2</GoalNumber>
									<GoalText>
										<b>
											ПОВЫШЕНИЕ ЗНАЧИМОСТИ ВОПРОСА СОСТОЯНИЯ КОЖИ
											ПРИ&nbsp;ОНКОЛОГИИ В&nbsp;МЕДИЦИНСКОМ СООБЩЕСТВЕ
										</b>
									</GoalText>
								</Background>
							</Goal>
							<Goal $third>
								<LinearGradient />
								<GoalNumber>3</GoalNumber>
								<GoalText>
									<b>
										ПОВЫШЕНИЕ ОСВЕДОМЛЕННОСТИ И&nbsp;ПРОФИЛАКТИКИ РАКА&nbsp;КОЖИ
									</b>
								</GoalText>
							</Goal>
						</GoalsWrapper>

						<MapContainer>
							<NewProject>
								новый проект
								<br />
								La Roche-Posay
							</NewProject>
							<OurHelp>
								<div className="mr-4">
									ПОМОЖЕМ
									<br />
									ОНКОЛОГИЧЕСКИМ
									<br />
									ПАЦИЕНТАМ ВМЕСТЕ
								</div>
								<div>
									<PulseButton onClick={onOpen} $p="6px 6px">
										<PulseButton.Plus />
									</PulseButton>
								</div>
							</OurHelp>
						</MapContainer>
					</BodyContent>
				</Container>
			</ScrollbarsBody>
		</ContentWrapper>
	)
}

export default OncoSupportContent

const NewProject = styled.div`
	font-weight: 300;
	font-size: 18px;
	line-height: 120%;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #ffffff;
	margin-bottom: 16px;
	${media.sm`
	font-size: 16px;
    `}
`
const OurHelp = styled.div`
	font-weight: 800;
	font-size: 18px;
	line-height: 120%;
	letter-spacing: 0.07em;
	text-transform: uppercase;
	color: #ffffff;

	display: flex;
	align-items: center;
	${media.sm`
	font-size: 16px;
    `}
`

const MapContainer = styled.div`
	background-image: url('/assets/images/lrp/modals/onco/map.svg');
	background-position: bottom right;
	background-repeat: no-repeat;
	background-size: contain;

	position: relative;

	padding: 24px 16px;
	margin-bottom: 16px;
	${media.sm`
		background-image: url('/assets/images/lrp/modal/map__sm.png');
		background-size:  100%;
		padding: 248px 69px 15px 20px;	
		background-position: top right;
    `}
	${media.phone`
		background-size:  90%;

    `}
`

const ContentWrapper = styled.div`
	width: 100%;
	//height: 100%;
	background: #84aae6;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	transition: all 0.3s ease-out;
	min-height: 0;
`

const BodyContent = styled.div`
	display: flex;
	flex-shrink: 0;
	width: 100%;
	flex-direction: column;
	overflow: hidden;
`

const Container = styled.div`
	background: #8cb1e2;
	position: relative;

	display: flex;
	flex-shrink: 0;
	width: 100%;
	flex-direction: column;
`

const Content = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1024px;
	overflow: hidden;
`

const BodyWrapper = styled.div<{ $scale?: number }>`
	position: relative;
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transform-origin: top;

	${({ $scale }) =>
		$scale &&
		css`
			transform: scale(${$scale});
		`}
`
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`

const Bow = styled.svg`
	position: absolute;
	top: 32px;
	right: -6%;
	pointer-events: none;
	${media.md`
			top: 5%;
  		right: -10%;
    `}
	${media.sm`
  		right: -18%;
    `}
  ${media.phone`
  		right: -34%;
    `}
`

const Image = styled(Box)`
	z-index: 11;
	position: relative;

	#big_logo {
		position: absolute;
		right: 0;
		top: -30px;
	}

	#small_logo {
	}
`

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: url('/assets/images/lrp/modal/goal2.png'), #81a1d6;
	background-size: cover;
	background-position: -40px 0px;
	background-repeat: no-repeat;
	${media.md`
	background-position:  bottom right;
	background-size: contain;

    `}
	${media.phone`
		background-size: cover;
    `}
`
const LinearGradient = styled.div`
	position: absolute;
	height: 50%;
	width: 100%;
	bottom: 0;
	right: 0;
	left: 0;
	background: linear-gradient(180deg, rgba(140, 177, 226, 0) 0%, #7d9bd1 100%);
`

const GoalNumber = styled.div`
	font-size: 150px;
	line-height: 150px;
	font-weight: 800;
	color: #aec8eb;
	position: absolute;
	top: -8px;
`

const GoalText = styled.div`
	position: absolute;
	font-family: 'Gilroy', sans-serif;
	font-size: 16px;
	font-weight: 800;
	line-height: 120%;
	letter-spacing: 0.64px;
	font-weight: 300;
	text-transform: uppercase;
	color: #ffffff;
	margin: 140px 8px 0px 16px;
	max-width: 200px;
	z-index: 2;

	${media.md`
        margin: 180px 16px 0px 16px;
        max-width: 300px;
    `}
	${media.phone`
        margin: 180px 16px 0px 16px;
        max-width: 240px;
    `}
`

const Goal = styled(Box)<{
	$first?: boolean
	$second?: boolean
	$third?: boolean
}>`
	position: relative;
	flex-grow: 1;
	height: 284px;
	max-width: 100%;
	overflow: hidden;
	word-wrap: break-word;
	width: 33.3333333333%;
	background-repeat: no-repeat;

	${({ $first }) =>
		$first &&
		css`
			${GoalText} {
				margin: 141px 8px 0px 17px;
			}
		`}
	${({ $second }) =>
		$second &&
		css`
			${GoalText} {
				margin: 151.5px 10px 0px 15px;
			}
		`}
  ${({ $third }) =>
		$third &&
		css`
			${GoalText} {
				margin: 173.5px 14px 0px 16px;
			}
		`}

  ${({ $first }) =>
		$first &&
		css`
			background-image: url('/assets/images/lrp/modal/goal1.png');
			background-position: -80px 0px;
			background-size: cover;
			background-blend-mode: overlay;

			${media.md`
						background-size: contain;
				background-position:  bottom right;
    `}
			${media.phone`
		background-size: cover;
    `}
		`}
  ${({ $second }) =>
		$second &&
		css`
			border-right: 1px solid #fff;
			border-left: 1px solid #fff;
			${media.md`
			border-right:none;
			border-left: none;

			border-top: 1px solid #fff;
			border-bottom: 1px solid #fff;
    `}
			background-blend-mode: overlay;
		`}
  ${({ $third }) =>
		$third &&
		css`
			background-image: url('/assets/images/lrp/modal/goal3.png');
			background-position: 5px 0px;
			background-size: cover;
			background-blend-mode: overlay;

			${media.md`
			background-size: contain;
			background-position:  bottom right;
			border-bottom: 1px solid #fff;
    `}
			${media.phone`
		background-size: cover;
    `}
		`}

  ${media.md`
        width: 100%;
    `}
`

const GoalsWrapper = styled(Box)`
	border-top: 1px solid #ffffff;
	flex-wrap: nowrap;
	z-index: 11;
	width: 100%;

	${media.md`
       flex-direction: column;
    `}
`

const Support = styled.div`
	font-family: 'Gilroy', sans-serif;
	font-weight: 300;
	font-size: 24px;
	line-height: 120%;
	letter-spacing: 0.01em;
	text-transform: uppercase;
	color: #ffffff;
	max-width: 480px;

	${media.md`
        font-size: 20px;
        line-height: 140%;
    `}
`

const Row = styled(Box)`
	margin-top: 12px;
	margin-bottom: 37px;

	#small_logo {
		display: none;
	}

	${media.md`
       
        #big_logo {
            display: none;
        }

        #small_logo {
            display: block;
        }
    `}
	${media.sm`
        flex-direction: column-reverse;
				max-width: 250px;

        ${Image} {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 24px;
        }

        
    `}
`

const Main = styled.div`
	padding: 32px 32px 64px 32px;
	z-index: 11;

	${media.md`
        padding: 16px 16px 24px 16px;
  `}
`

const Title = styled.div`
	font-family: 'Gilroy', sans-serif;
	font-weight: 800;
	font-size: 40px;
	line-height: 120%;
	letter-spacing: 0.03em;
	text-transform: uppercase;
	color: #ffffff;
	margin-top: 25px;

	${media.md`
				margin-top: 0px;
        font-size: 32px;
        line-height: 115%;
    `}
`

const Description = styled.div`
	font-family: 'Gilroy', sans-serif;
	font-weight: 300;
	font-size: 24px;
	line-height: 120%;
	letter-spacing: 0.01em;
	color: #ffffff;

	max-width: 60%;

	${media.md`
        font-size: 20px;
        line-height: 140%;
        max-width: 100%;
    `}
`
