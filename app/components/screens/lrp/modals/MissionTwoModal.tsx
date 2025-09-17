import Box from '@/components/Box'
import ProductBackButton from '@/components/shared/product-modal/ProductBackButton'
import media from '@/utils/media'
import React from 'react'
import styled, { css } from 'styled-components'
import useWindowSize from '@/hooks/useWindowSize'
import ModalClose, {
	ModalCloseWrapper,
} from '@/components/shared/modal/ModalClose'
import useResponsive from '@/hooks/useResponsive'
import ScrollbarsBody from '@/components/ScollbarsBody'
import Molecule from '@/components/ui/molecule/Molecule'
import useClickOutside from '@/hooks/useClickOutside'

const ScrollBodyWrapper = styled.div`
	width: 100%;
`

const MissionTwoModal = ({ close }) => {
	const [width, height] = useWindowSize()
	const scale =
		width > 767.98 ? Math.min(width / 1024, (height - 140) / 780) : 1
	const scaleBy = scale >= 1 ? 1 : scale
	const { isMobile } = useResponsive()
	const Scrollbars = isMobile ? ScrollbarsBody : ScrollBodyWrapper
	const nodeRef = useClickOutside(() => close())

	return (
		<Wrapper>
			<Content style={{ maxHeight: height }} ref={nodeRef}>
				<BodyWrapper $scale={scaleBy}>
					<ModalCloseWrapper>
						<ModalClose close={close} />
					</ModalCloseWrapper>
					<ModalContent>
						<Container>
							<Scrollbars noRadius>
								<Main>
									<BackBox>
										<ProductBackButton white onClick={close} />
									</BackBox>
									<Title>
										ПРОГРАММА ФОНДЕЙШН
										<br />
										ЛЯ РОШ ПОЗЭ В РОССИИ
									</Title>
									<Row $flex $justifyContent="space-between">
										<Description>
											Обеспечить семьям, в которых дети больны онкологическими
											заболеваниями, <b>психологическую поддержку</b>,
											предоставить доступ к максимально <b>полезной</b> и{' '}
											<b>актуальной информации</b> по вопросам улучшения
											качества жизни.
										</Description>
										<Image>
											<img
												height="100%"
												src="assets/images/lrp/modal/modal2.png"
												alt="program la roche-posay"
											/>
											{isMobile && (
												<MobileWrapper>
													<MobileLogo
														src="assets/images/lrp/modal/logo2min.png"
														alt="cancer support by la roche-posay"
													/>
												</MobileWrapper>
											)}
										</Image>
									</Row>
									{!isMobile && (
										<LogoWrapper>
											<img
												src="assets/images/lrp/modal/logo2.png"
												alt="cancer support by la roche-posay"
											/>
										</LogoWrapper>
									)}

									<Molecule
										id="programm"
										position={{ bottom: '20%', right: '40%' }}
										direction="left"
									/>
								</Main>
							</Scrollbars>
						</Container>
					</ModalContent>
				</BodyWrapper>
			</Content>
		</Wrapper>
	)
}

export default MissionTwoModal

const ModalContent = styled.div`
	position: relative;
	display: flex;
`

const Container = styled.div`
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	transition: all 0.3s ease-out;
	background: #59abdd;
	border-radius: 4px;
	max-width: 1024px;
`

const Content = styled.div`
	width: 100%;
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

const BackBox = styled(Box)`
	padding: 40px 40px 0px 40px;

	${media.md`
        padding: 16px 16px 0px 16px;
    `}
`

const MobileWrapper = styled.div`
	background: linear-gradient(46.79deg, #a3d8f8 5%, rgba(112, 183, 228, 0) 60%);
	position: absolute;
	bottom: 0px;
	left: 0px;
	height: 100%;
	width: 100%;
`

const LogoWrapper = styled.div`
	position: absolute;
	bottom: 20px;
	left: 30px;
`

const MobileLogo = styled.img`
	position: absolute;
	bottom: 30px;
	left: 10px;
	max-width: 224px;
`

const Image = styled(Box)`
	z-index: 11;
	position: relative;

	${media.md`
        margin-top: 20px;
    `}
`

const Row = styled(Box)`
	margin-top: 48px;

	#small_logo {
		display: none;
	}

	${media.md`
        flex-direction: column;

        ${Image} {
            display: flex;
            justify-content: center;
            align-items: center;
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
	z-index: 11;
	position: relative;
`

const Title = styled.div`
	font-family: 'Gilroy', sans-serif;
	font-weight: 800;
	font-size: 50px;
	line-height: 115%;
	letter-spacing: 0.03em;
	text-transform: uppercase;
	color: #ffffff;
	padding: 20px 40px 0px 40px;

	${media.md`
        font-size: 32px;
        line-height: 115%;
        padding: 8px 16px 0px 16px;
    `}
`

const Description = styled.div`
	font-family: 'Gilroy', sans-serif;
	font-weight: 300;
	font-size: 28px;
	line-height: 140%;
	letter-spacing: 0.01em;
	color: #ffffff;
	padding: 0px 0px 0px 40px;
	max-width: 60%;

	${media.md`
        font-size: 20px;
        line-height: 140%;
        max-width: 100%;
        padding: 0px 0px 0px 16px;
    `}
`
