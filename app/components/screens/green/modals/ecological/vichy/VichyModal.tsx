import React from 'react'
import styled, { css } from 'styled-components'
import media from '@/utils/media'
import ScrollbarsBody from '@/components/ScollbarsBody'
import useWindowSize from '@/hooks/useWindowSize'
import VichyPoints from '@/components/screens/green/modals/ecological/vichy/VichyPoints'

import PlanetCareSlider from './PlanetCareSlider'

const BodyWrapper = styled.div`
  width: 100%;
`

const VichyModal = ({ step }) => {
	const [width] = useWindowSize()
	const isMobile = width < 769

	const Scrollbars = isMobile ? ScrollbarsBody : BodyWrapper
	return (
		<Wrapper $step={`${100 - 100 * step}%`}>
			<Scrollbars noRadius>
				<Content>
					{/* <Header>
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
					</Header> */}

					<Body>
						<VichyPoints />
					</Body>
				</Content>
				<WhiteBgBlock>
					<PlanetCareWrapper>
						<PlanetCareHeader>
							<PlanetCareTitle>
								ЗАБОТА О ПЛАНЕТЕ И&nbsp;
								<span>СОЦИАЛЬНО-ОТВЕТСТВЕННАЯ КРАСОТА</span>
							</PlanetCareTitle>
							<img
								src="/assets/images/green/modals/ecological/scroll__arrow.svg"
								alt="scroll__arrow"
							/>
						</PlanetCareHeader>
						<PlanetCareSlider />
					</PlanetCareWrapper>
				</WhiteBgBlock>
			</Scrollbars>
		</Wrapper>
	)
}

export default VichyModal

const Content = styled.div`
  background-image: url('/assets/images/green/modals/ecological/vichybg.png');
  background-position: bottom center;
  background-repeat: no-repeat;
  display: flex;
  flex-shrink: 0;
  width: 100%;
  flex-direction: column;
`
const PlanetCareWrapper = styled.div`
  position: absolute;
  right: 30px;
  left: 30px;
  bottom: 26px;
  ${media.tablet`
	right: 16px;
	left: 16px;
  `}
`
const WhiteBgBlock = styled.div`
  position: relative;
  height: 179px;
  width: 100%;
  ${media.tablet`
	height: 529px;
  `}
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

const Wrapper = styled.div<{ $step: string }>`
  width: 100%;
  height: 100%;
  background-color: #fff;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 60px;
  transition: all 0.3s ease-out;

  ${({ $step }) =>
          $step &&
          css`
			transform: translateX(${$step});
		`}
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

const Subtitle = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 130%;
	text-align: center;
	text-transform: uppercase;
	color: #000000;

	b {
		font-weight: 600;
	}
`
