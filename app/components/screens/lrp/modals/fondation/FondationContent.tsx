import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import ScrollbarsBody from '@/components/ScollbarsBody'
import useWindowSize from '@/hooks/useWindowSize'
import Box from '@/components/Box'
import ProductBackButton from '@/components/shared/product-modal/ProductBackButton'
import Molecule from '@/components/ui/molecule/Molecule'

const position = {
	bottom: '22%',
	right: '26%',
}

const mobilePos = {
	bottom: '16%',
	left: '31%',
}

const FondationContent = ({ close }) => {
	const [width] = useWindowSize()
	const isMobile = width < 768

	return (
		<Wrapper>
			<ScrollbarsBody factor={-50}>
				<Content>
					<BackBox>
						<ProductBackButton onClick={close} />
					</BackBox>
					<Title>
						La Fondation
						<br />
						La Roche-Posay
					</Title>
					<Body>
						<Desc>
							Обеспечить семьям, в&nbsp;которых дети больны онкологическими
							заболеваниями, <b>психологическую поддержку,</b> предоставить
							доступ к&nbsp;максимально{' '}
							<b>полезной и&nbsp;актуальной информации</b> по&nbsp;вопросам
							улучшения качества жизни.
						</Desc>

						<Fact>
							БОЛЕЕ <span>8K</span> ДЕТЕЙ И&nbsp;СЕМЕЙ СТАЛИ БЕНЕФИЦИАРАМИ
							социального проекта В&nbsp;2022&nbsp;ГОДУ ВО&nbsp;МНОГИХ
							РОССИЙСКИХ РЕГИОНАХ
							<Fact className="hrf"></Fact>
						</Fact>

						{isMobile ? (
							<>
								<MobileImage
									className="mobile__boy"
									src="/assets/images/lrp/modals/fondation/mobile.png"
									alt="mobile"
								/>
								<img
									className="mobile__fond"
									src="/assets/images/lrp/modals/fondation/fond.png"
									alt="fondation"
								/>
							</>
						) : (
							<img
								className="desktop__fond"
								src="/assets/images/lrp/modals/fondation/fond.png"
								alt="fondation"
							/>
						)}
					</Body>
					<LinearGradient />
					<Molecule
						id="lrp-fondation"
						position={isMobile ? mobilePos : position}
						direction="left"
					/>
				</Content>
			</ScrollbarsBody>
		</Wrapper>
	)
}

export default FondationContent

const MobileImage = styled.img`
	/* width: 100%; */
`

const Fact = styled.div`
	border-top: 2px solid #ffffff;

	padding: 16px 0 0;
	font-weight: 600;
	font-size: 20px;
	line-height: 110%;
	text-transform: uppercase;
	color: #ffffff;
	max-width: 336px;
	margin-bottom: 10px;

	.hrf {
		margin-top: 30px;
		max-width: 327px;
		color: #ffffff;
	}

	span {
		font-size: 40px;
		line-height: 36px;
		font-weight: 800;
		letter-spacing: 0.04em;
	}

	${media.md`
		max-width: 100%;
	border-bottom: 2px solid #ffffff;
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 24px;
    padding: 8px 16px 16px;
	.hrf {
		display: none; 
	}
    span {
        font-size: 32px;
  		}  
  `}
`

const Desc = styled.div`
	font-weight: 300;
	font-size: 24px;
	line-height: 120%;
	letter-spacing: 0.04em;
	color: #ffffff;
	margin-bottom: 48px;

	b {
		font-weight: 800;
	}

	${media.md`
    font-size: 20px;
    line-height: 120%;
    padding: 0 16px;
      margin-bottom: 24px;
  `}
`

const BackBox = styled(Box)`
	margin-bottom: 32px;

	${media.md`
    padding: 16px;
    margin-bottom: 8px;
	z-index: 5;
  `}
`

const Content = styled.div`
	position: relative;
	background-image: url('/assets/images/lrp/modals/fondation/bg.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	padding: 32px 32px 24px;

	${media.md`
    padding: 0;
    background-image: none;
  `}

	display: flex;
	flex-shrink: 0;
	width: 100%;
	flex-direction: column;
`
const LinearGradient = styled.div`
	${media.md`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	background: linear-gradient(
			47deg,
			#a3d8f8 -27.92%,
			rgba(112, 183, 228, 0) 18.69%
		),
		linear-gradient(45deg, #a3d8f8 -4.92%, rgba(112, 183, 228, 0) 44.69%);
  `}
`

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	transition: all 0.3s ease-out;
`

const Body = styled.div`
	position: relative;
	width: 100%;
	max-width: 384px;

	${media.md`
	max-width: 100%;

  `}
	.mobile__fond {
		position: absolute;
		bottom: 21px;
		left: 19px;
		width: 223px;
		z-index: 2;
	}

	.desktop__fond {
		max-width: 152px;
	}

	.mobile__boy {
		max-height: 534px;
	}
`

const Title = styled.div`
	font-weight: 800;
	font-size: 40px;
	line-height: 120%;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #ffffff;

	margin-bottom: 24px;

	${media.md`
    font-size: 32px;
    line-height: 120%;
    padding: 0 16px;
  `}
`
