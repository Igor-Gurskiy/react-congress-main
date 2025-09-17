import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import useWindowSize from '@/hooks/useWindowSize'
import VichyPoints from '@/components/screens/green/modals/ecological/vichy/VichyPoints'

import PlanetCareSlider from './PlanetCareSlider'
import ScrollbarsBody from '@/components/ScollbarsBody'

const BodyWrapper = styled.div`
	width: 100%;
`

const VichyModal = () => {
	const [width] = useWindowSize()
	const isMobile = width < 769

	const Scrollbars = ScrollbarsBody

	return (
		<Wrapper>
			<Scrollbars noRadius>
				<Content>
					<Header>
						<div>
							<img
								src="/assets/images/green/modals/ecological/vichy.svg"
								alt="vichy logo"
							/>
						</div>
						<Title>
							Бренд Vichy взял на себя обязательства по внесению серьезного
							вклада в решение экологических проблем в мире. Со стороны компании
							Vichy уже предпринят ряд мер, направленных на выполнение этих
							обязательств:
						</Title>
					</Header>

					<Body>
						<VichyPoints />

						<WhiteBgBlock>
							<PlanetCareWrapper>
								<PlanetCareHeader>
									<PlanetCareTitle>
										ЗАБОТА О ПЛАНЕТЕ И&nbsp;
										<span>СОЦИАЛЬНО-ОТВЕТСТВЕННАЯ КРАСОТА</span>
									</PlanetCareTitle>
									{/*<img*/}
									{/*	src="/assets/images/green/modals/ecological/scroll__arrow.svg"*/}
									{/*	alt="scroll__arrow"*/}
									{/*/>*/}
								</PlanetCareHeader>
								<PlanetCareSlider />
							</PlanetCareWrapper>
						</WhiteBgBlock>
					</Body>
				</Content>
				<div style={{ height: 24 }} />
			</Scrollbars>
		</Wrapper>
	)
}

export default VichyModal

const Content = styled.div`
	display: flex;
	flex-shrink: 0;
	width: 100%;
	flex-direction: column;
`
const PlanetCareWrapper = styled.div``
const WhiteBgBlock = styled.div`
	position: relative;
	width: 100%;
	max-width: 660px;
	margin: 0 auto;
	margin-top: -30%;
	padding: 0 20px;
`

const PlanetCareHeader = styled.div`
	position: relative;
	margin-bottom: 16px;

	img {
		position: absolute;
		top: 0;
		right: 0;
		cursor: pointer;
		${media.tablet`
			display: none;
		`}
	}
`
const PlanetCareTitle = styled.div`
	color: #fff;
	text-align: center;
	text-shadow: 0px -2px 10px #003d00;
	font-size: 24px;
	font-weight: 300;
	line-height: 111%;
	letter-spacing: 1.2px;
	text-transform: uppercase;

	span {
		font-weight: 600;
	}

	${media.sm`
	font-size: 18px;
  `}
`

const Wrapper = styled.div`
	width: 100%;
	//height: 100%;
	background-color: #fff;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 60px;
	transition: all 0.3s ease-out;
	min-height: 0;
`

const Header = styled.div`
	width: 100%;
	padding: 0 16px 16px 16px;
	min-height: 72px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Body = styled.div`
	width: 100%;
`

const Title = styled.div`
	font-weight: 600;
	font-size: 20px;
	line-height: 110%;
	text-align: center;
	text-transform: uppercase;
	margin: 20px 0;

	color: #000000;

	span {
		color: #369615;
	}

	${media.sm`
    font-size: 16px;
  `}
`
