import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import ScrollbarsBody from '@/components/ScollbarsBody'
import useWindowSize from '@/hooks/useWindowSize'
import LrpPoints from '@/components/screens/green/modals/ecological/lrp/LRPPoints'

const BodyWrapper = styled.div`
	width: 100%;
`

const LaRochePosayModal = ({ step, handleShowChangesModal }) => {
	const [width] = useWindowSize()
	const isMobile = width < 769

	const Scrollbars = ScrollbarsBody
	return (
		<Wrapper $step={`${100 - 100 * step}%`}>
			<Scrollbars noRadius>
				<Content>
					<Header>
						<div>
							<img
								src="/assets/images/green/modals/ecological/logo.svg"
								alt="lrp logo"
							/>
						</div>
						<Title>
							ЧТО МАРКА LA ROCHE-POSAY ДЕЛАЕТ в рамках повестки{' '}
							<span>УСТОЙЧИВОГО РАЗВИТИЯ?</span>
						</Title>
						<Subtitle>
							<b>УСТОЙЧИВОЕ РАЗВИТИЕ</b> — комплекс мер, нацеленных на ПОВЫШЕНИЕ
							КАЧЕСТВА
							<br />
							ЖИЗНИ, УЛУЧШЕНИе ЗДОРОВЬЯ человека И СОХРАНЕНИЕ окружающей среды
							<br />И ресурсов ДЛЯ БУДУЩЕГО ПОКОЛЕНИЯ
						</Subtitle>
					</Header>
					<BackgroundTop></BackgroundTop>

					<Body>
						<LrpPoints handleShowChangesModal={handleShowChangesModal} />
					</Body>
				</Content>
				{/*<div style={{ height: 60 }} />*/}
			</Scrollbars>
		</Wrapper>
	)
}

export default LaRochePosayModal

const Content = styled.div`
	background-image: url('/assets/images/green/modals/ecological/bg.png');
	background-position: bottom center;
	background-size: contain;
	background-repeat: no-repeat;

	display: flex;
	flex-shrink: 0;
	width: 100%;
	flex-direction: column;
	z-index: 1;
	${media.sm`
	background-image: url('/assets/images/green/modals/ecological/bg-mobile.png');
	background-position: bottom center;
	background-size: contain;
	background-repeat: no-repeat;
  `}
`

const Wrapper = styled.div<{ $step: string }>`
	width: 100%;
	//height: 100%;
	background-color: #fff;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 56px;
	z-index: 1;

	transition: all 0.3s ease-out;
`

const Header = styled.div`
	width: 100%;
	padding: 0 16px 16px 16px;
	min-height: 72px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 1;
`

const Body = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	z-index: 1;
`

const Title = styled.div`
	font-weight: 600;
	font-size: 20px;
	line-height: 110%;
	text-align: center;
	text-transform: uppercase;
	margin: 20px 0;
	color: #000000;
	z-index: 1;

	span {
		color: #369615;
	}

	${media.sm`
    font-size: 16px;
  `}
`

const Subtitle = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 130%;
	text-align: center;
	text-transform: uppercase;
	color: #000000;
	z-index: 1;

	b {
		font-weight: 600;
	}

	${media.sm`
    font-size: 16px;
  `}
`

const BackgroundTop = styled.div`
	${media.sm`
	width: 100%;
	height: 500px;
	position: absolute;
	top: 65px;
	background-image: url('/assets/images/green/modals/ecological/bg_top_phone.png');
	background-position: top center;
	background-repeat: no-repeat;
	background-size: contain;
	z-index: 0;
	`}
`
