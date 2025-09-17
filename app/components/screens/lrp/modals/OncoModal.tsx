import Box from '@/components/Box'
import ProductBackButton from '@/components/shared/product-modal/ProductBackButton'
import media from '@/utils/media'
import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import useWindowSize from '@/hooks/useWindowSize'
import ModalClose, {
	ModalCloseWrapper,
} from '@/components/shared/modal/ModalClose'
import useResponsive from '@/hooks/useResponsive'
import ScrollbarsBody from '@/components/ScollbarsBody'
import Molecule from '@/components/ui/molecule/Molecule'
import useClickOutside from '@/hooks/useClickOutside'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const ScrollBodyWrapper = styled.div`
	width: 100%;
`

const OncoModal = ({ close }) => {
	const [width, height] = useWindowSize()
	const scale =
		width > 767.98 ? Math.min(width / 1024, (height - 140) / 768) : 1
	const scaleBy = scale >= 1 ? 1 : scale
	const { isMobile } = useResponsive()
	const Scrollbars = isMobile ? ScrollbarsBody : ScrollBodyWrapper
	const nodeRef = useClickOutside(() => close())

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpLightbox1)
	}, [])

	return (
		<Wrapper>
			<Content style={{ maxHeight: height / scale }} ref={nodeRef}>
				<BodyWrapper $scale={scaleBy}>
					<ModalCloseWrapper>
						<ModalClose close={close} />
					</ModalCloseWrapper>
					<ModalContent>
						<Scrollbars noRadius>
							<Container>
								<BodyContent>
									<Bow
										width="310"
										height="481"
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
										<Box $mb={16}>
											<ProductBackButton white onClick={close} />
										</Box>
										<Title>Наша цель:</Title>
										<Row $flex $justifyContent="space-between">
											<Description>
												Оказываем поддержку тем, кто столкнулся{' '}
												<b>с онкологическим заболеванием</b>
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
											Мы уже 20 лет поддерживаем <b>врачей-онкологов</b>,{' '}
											<b>радиологов</b>, сопровождающих пациентов
										</Support>
									</Main>

									<GoalsWrapper $flex>
										<Goal $first>
											<GoalNumber>1</GoalNumber>
											<GoalText>
												<b>
													СОЗДАНИЕ СРЕДСТВ, ЭФФЕКТИВНЫХ В СНИЖЕНИИ ДИСКОМФОРТА
													КОЖИ,
												</b>{' '}
												ВЫЗВАННОГО ПРОТИВООПУХОЛЕВОЙ ТЕРАПИЕЙ
											</GoalText>
										</Goal>
										<Goal $second>
											<Background>
												<GoalNumber>2</GoalNumber>
												<GoalText>
													<b>
														ПОВЫШЕНИЕ ЗНАЧИМОСТИ ВОПРОСА СОСТОЯНИЯ КОЖИ ПРИ
														ОНКОЛОГИИ В МЕДИЦИНСКОМ СООБЩЕСТВЕ
													</b>
												</GoalText>
											</Background>
										</Goal>
										<Goal $third>
											<GoalNumber>3</GoalNumber>
											<GoalText>
												<b>
													ПОВЫШЕНИЕ ОСВЕДОМЛЕННОСТИ И ПРОФИЛАКТИКИ РАКА КОЖИ
												</b>
											</GoalText>
										</Goal>
									</GoalsWrapper>
								</BodyContent>
								<Molecule
									id="onco"
									position={{ bottom: '15%', right: '30%' }}
									direction="left"
								/>
							</Container>
						</Scrollbars>
					</ModalContent>
				</BodyWrapper>
			</Content>
		</Wrapper>
	)
}

export default OncoModal

const BodyContent = styled.div`
	display: flex;
	flex-shrink: 0;
	width: 100%;
	flex-direction: column;
`

const ModalContent = styled.div`
	position: relative;
	display: flex;
`

const Container = styled.div`
	width: 100%;
	height: 100%;
	background: #59abdd;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	position: relative;

	transition: all 0.3s ease-out;
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
	top: 30px;
	right: 10%;
	pointer-events: none;

	${media.md`
        right: -10%;
        position: fixed
    `}

	${media.sm`
        right: -30%;
    `}
`

const Image = styled(Box)`
	z-index: 11;
`

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url('/assets/images/lrp/modal/goal2.png');
	background-position: bottom right;
	background-repeat: no-repeat;
`

const GoalNumber = styled.div`
	font-size: 150px;
	line-height: 150px;
	font-weight: 800;
	color: #aec8eb;
	position: absolute;
	top: -22px;
`

const GoalText = styled.div`
	font-family: 'Gilroy', sans-serif;
	font-weight: 300;
	font-size: 15px;
	line-height: 18px;
	letter-spacing: 0.01em;
	text-transform: uppercase;
	color: #ffffff;
	margin: 150px 16px 0px 16px;
	max-width: 180px;

	${media.md`
        margin: 180px 16px 0px 16px;
        max-width: 100%;
    `}
`

const Goal = styled(Box)<{
	$first?: boolean
	$second?: boolean
	$third?: boolean
}>`
	position: relative;
	flex-grow: 1;
	height: 300px;
	max-width: 100%;
	overflow: hidden;
	word-wrap: break-word;
	width: 33.3333333333%;
	background-position: bottom right;
	background-repeat: no-repeat;

	${({ $first }) =>
		$first &&
		css`
			background-image: url('/assets/images/lrp/modal/goal1.png');
			background-color: #8cb1e2;
		`}
	${({ $second }) =>
		$second &&
		css`
			background: linear-gradient(
					180deg,
					rgba(140, 177, 226, 0) 0%,
					rgba(128, 160, 213, 0.4) 100%
				),
				#7d9bd1;
			background-blend-mode: overlay;
		`}
  ${({ $third }) =>
		$third &&
		css`
			background-image: url('/assets/images/lrp/modal/goal3.png');
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
	font-size: 32px;
	line-height: 140%;
	letter-spacing: 0.01em;
	text-transform: uppercase;
	color: #ffffff;

	${media.md`
        font-size: 20px;
        line-height: 140%;
    `}
`

const Row = styled(Box)`
	margin-top: 48px;
	margin-bottom: 48px;

	#small_logo {
		display: none;
	}

	${media.md`
        flex-direction: column-reverse;

        ${Image} {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 24px;
        }

        #big_logo {
            display: none;
        }

        #small_logo {
            display: block;
        }
    `}
`

const Main = styled.div`
	padding: 40px 40px 48px 40px;
	z-index: 11;

	${media.md`
        padding: 16px 16px 24px 16px;
  `}
`

const Title = styled.div`
	font-family: 'Gilroy', sans-serif;
	font-weight: 800;
	font-size: 50px;
	line-height: 115%;
	letter-spacing: 0.03em;
	text-transform: uppercase;
	color: #ffffff;

	${media.md`
        font-size: 32px;
        line-height: 115%;
    `}
`

const Description = styled.div`
	font-family: 'Gilroy', sans-serif;
	font-weight: 300;
	font-size: 32px;
	line-height: 140%;
	letter-spacing: 0.01em;
	color: #ffffff;

	max-width: 60%;

	${media.md`
        font-size: 20px;
        line-height: 140%;
        max-width: 100%;
    `}
`
