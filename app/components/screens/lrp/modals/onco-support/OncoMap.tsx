import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import useWindowSize from '@/hooks/useWindowSize'
import Box from '@/components/Box'
import ProductBackButton from '@/components/shared/product-modal/ProductBackButton'
import Molecule from '@/components/ui/molecule/Molecule'
import { animated } from 'react-spring'
import ScrollbarsBody from '@/components/ScollbarsBody'

const ScrollBodyWrapper = styled.div`
	width: 100%;
	${media.md`
    overflow-y: auto;
     height: 100%;
  `}
`
const OncoMap = ({ style, close }) => {
	const [width, height] = useWindowSize()
	const isMobile = width < 769

	const Scrollbars = ScrollbarsBody
	return (
		<ContentWrapper
			style={style}
			// style={{...style, height: height}}
		>
			<Scrollbars factor={-50}>
				<Container>
					<BodyContent>
						<LogoImage
							src="/assets/images/lrp/modals/onco/logo.png"
							alt="map"
						/>

						<Main>
							<Box $mb={16}>
								<ProductBackButton onClick={close} />
							</Box>
							<Caption>Новый проект La Roche-Posay</Caption>
							<Title>
								Поможем Онкологическим
								<br />
								пациентам вместе
							</Title>
						</Main>

						<StepBox>
							<Step>
								<span>81%</span> ПАЦИЕНТОВ СТАЛКИВАЕТСЯ
								<b>
									&nbsp;С ПРОЯВЛЕНИЯМИ КОЖНОЙ ТОКСИЧНОСТИ при&nbsp;терапии
									онкологических заболеваний
								</b>
							</Step>
							<StepArrow>
								<img
									src="/assets/images/lrp/modals/onco/arrow.svg"
									alt="arrow"
								/>
							</StepArrow>
							<Step>
								<b>
									ПАЦИЕНТЫ РЕДКО ОБРАЩАЮТСЯ ЗА&nbsp;ПОМОЩЬЮ К&nbsp;ДЕРМАТОЛОГАМ
								</b>
							</Step>
							<StepArrow>
								<img
									src="/assets/images/lrp/modals/onco/arrow.svg"
									alt="arrow"
								/>
							</StepArrow>
							<Step>
								<b>
									LA ROCHE-POSAY ПОСТАВИЛ СВОЕЙ ЦЕЛЬЮ СОЗДАНИЕ ПРОЧНОЙ СВЯЗИ
									МЕЖДУ ОНКОЛОГАМИ И&nbsp;ДЕРМАТОЛОГАМИ
								</b>
							</Step>
						</StepBox>

						<Map>
							<img src="/assets/images/lrp/modals/onco/big-map.svg" alt="map" />
						</Map>

						<StepWrapper>
							<StepBox>
								<Step>
									<b>
										СОЗДАТЬ ИНТЕРАКТИВНУЮ КАРТУ С&nbsp;ОБОЗНАЧЕНИЕМ МЕСТА РАБОТЫ
										ВРАЧЕЙ ДЕРМАТОЛОГОВ, ПРИНИМАЮЩИХ ПАЦИЕНТОВ
										<br />С КОЖНОЙ ТОКСИЧНОСТЬЮ
									</b>
								</Step>
								<StepArrow>
									<img
										src="/assets/images/lrp/modals/onco/arrow.svg"
										alt="arrow"
									/>
								</StepArrow>
								<Step>
									<b>
										ОБЕСПЕЧИТЬ ДОСТУП К&nbsp;КАРТЕ ВРАЧЕЙ ДЛЯ ВРАЧЕБНОГО
										И&nbsp;ПАЦИЕНТСКОГО СООБЩЕСТВА
									</b>
								</Step>
								<StepArrow>
									<img
										src="/assets/images/lrp/modals/onco/arrow.svg"
										alt="arrow"
									/>
								</StepArrow>
								<Step>
									<b>
										ПАЦИЕНТЫ СМОГУТ ОБРАТИТЬСЯ ЗА&nbsp;ПОМОЩЬЮ
										К&nbsp;КВАЛИФИЦИРОВАННЫМ СПЕЦИАЛИСТАМ
									</b>
								</Step>
							</StepBox>
							<WomanImage
								src="/assets/images/lrp/modals/onco/woman.png"
								alt="map"
							/>
						</StepWrapper>
						<Molecule
							id="lrp-onco"
							position={{ bottom: '7%', right: '30%' }}
							direction="left"
						/>
					</BodyContent>
				</Container>
			</Scrollbars>
		</ContentWrapper>
	)
}

export default OncoMap

const Step = styled.div`
	max-width: 480px;
	font-size: 14px;
	line-height: 120%;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #ffffff;

	span {
		font-size: 32px;
		font-weight: 800;
		line-height: 1;
	}

	b {
		font-weight: 800;
	}

	${media.md`
        font-size: 12px;
        
        span {
            font-size: 24px;
        }
  `}
`

const StepWrapper = styled.div`
	position: relative;
	padding-bottom: 24px;

	${media.md`
    padding-bottom: 100px;
  `}
	${Step} {
		&:nth-last-child(1) {
			${media.md`
			max-width: 300px;
  	`}
			${media.sm`
			max-width: 215px;
  	`}
      ${media.phone`
			max-width: 175px;
  	`}
		}
	}
`

const LogoImage = styled.img`
	position: absolute;
	top: 0;
	right: 40px;
	${media.sm`
		max-width: 92px;
  `}
`
const WomanImage = styled.img`
	position: absolute;
	right: 0;
	bottom: 0;
	max-width: 100%;
	${media.sm`
		/* right: -30px; */
    max-height: 220px;
    bottom: 0;
    max-width: 100%;
  `}
	${media.phone`
	right: -30px;
  `}
`

const Map = styled.div`
	padding: 16px 32px;

	img {
		max-width: 100%;
	}
`

const StepArrow = styled.div`
	img {
		margin-left: 30%;
	}
`

const StepBox = styled.div`
	background: rgba(168, 198, 245, 0.51);
	backdrop-filter: blur(12px);
	padding: 16px 32px;
`

const Caption = styled.div`
	font-weight: 800;
	font-size: 24px;
	line-height: 120%;
	letter-spacing: 0.04em;
	color: #ffffff;
	margin-bottom: 8px;

	${media.md`
    font-size: 14px;
  `}
`

const ContentWrapper = styled(animated.div)`
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	background: #84aae6;

	z-index: 11;

	transition: all 0.3s ease-out;
`

const BodyContent = styled.div`
	display: flex;
	flex-shrink: 0;
	width: 100%;
	flex-direction: column;

	position: relative;
`

const Container = styled.div`
	width: 100%;
	height: 100%;
	background: #84aae5;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	overflow: hidden;
	position: relative;

	transition: all 0.3s ease-out;
`

const Main = styled.div`
	padding: 40px 40px 12px 40px;
	z-index: 11;

	${media.md`
        padding: 16px 16px 24px 16px;
  `}
`

const Title = styled.div`
	font-weight: 800;
	font-size: 32px;
	line-height: 120%;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #ffffff;

	${media.md`
        font-size: 16px;
    `}
`
