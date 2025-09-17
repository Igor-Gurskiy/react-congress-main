import React, { useState } from 'react'
import ModalClose, {
	ModalCloseWrapper,
} from '@/components/shared/modal/ModalClose'
import styled, { css } from 'styled-components'
import media from '@/utils/media'
import useWindowSize from '@/hooks/useWindowSize'
import useClickOutside from '@/hooks/useClickOutside'
import ScrollbarsBody from '@/components/ScollbarsBody'

import numberOne from '/public/assets/images/dercos/modals/room-modal/number-one.png'
import dercosLogo from '/public/assets/images/dercos/modals/room-modal/dercos-logo.png'

const AminexilModal = ({ close }) => {
	const [step, setStep] = useState(1)
	const [width, height] = useWindowSize()
	const scale = width > 767.98 ? Math.min(width / 728, (height - 100) / 411) : 1
	const scaleBy = scale >= 1 ? 1 : scale

	const isMobile = width < 769
	const Scrollbars = isMobile ? ScrollbarsBody : BodyWrapper

	const nodeRef = useClickOutside(() => close())

	return (
		<AllWrapper>
			<AllContent style={{ maxHeight: height }} ref={nodeRef}>
				<BodyWrapper $scale={scaleBy}>
					<ModalCloseWrapper>
						<ModalClose close={close} />
					</ModalCloseWrapper>
					<ModalContent>
						<Wrapper $step={`${100 - 100 * step}%`}>
							<Scrollbars noRadius>
								<Content>
									<AmenexilBg />
									<ModalHeader>
										<ModalTitle>aminexil intensive&nbsp;5</ModalTitle>
										<ModalCaption>
											средство против выпадения волос <b>широкого спектра</b>
										</ModalCaption>
										<ModalDescription>
											действует на кожу головы, корень
											<br />
											и волокно волоса, помогая эффективно
											<br />
											бороться с процессом выпадения
										</ModalDescription>
										<Impact>
											5 активных ингредиентов
											<br />
											для комплексного действия
										</Impact>
										<ImageBox>
											<img className="number-one" src={numberOne.src} alt="" />
											<img
												className="dercos-logo"
												src={dercosLogo.src}
												alt=""
											/>
										</ImageBox>
										<Ad>Реклама skin.ru ERID: 2SDnjdDV5NG</Ad>
									</ModalHeader>
								</Content>
							</Scrollbars>
						</Wrapper>
					</ModalContent>
				</BodyWrapper>
			</AllContent>
		</AllWrapper>
	)
}

export default AminexilModal

const Ad = styled.div`
	margin-top: 32px;
	color: #000;
	font-size: 12px;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: 0.5px;
`

const Impact = styled.div`
	font-weight: 300;
	font-size: 14px;
	line-height: 114.5%;
	text-transform: uppercase;
	color: #000000;
	margin-bottom: 46px;

	padding-left: 24px;
	position: relative;

	&::before {
		content: ' ';
		position: absolute;
		top: 0px;
		left: 0px;
		background: #cd001f;
		width: 6px;
		height: 100%;
	}

	${media.md`	
	font-size: 12px;
	`}
`

const ModalDescription = styled.div`
	font-weight: 600;
	font-size: 14px;
	line-height: 114.5%;
	text-transform: uppercase;
	color: #000000;
	margin-bottom: 18px;
	${media.md`	
	font-size: 12px;
	`}
`

const ModalHeader = styled.div`
	max-width: 48%;
	padding: 76px 5px 68px 0;
	${media.md`	
	padding: 46px 5px 38px 0;
	`}
	${media.sm`	
	padding: 36px 15px 28px 15px;
	max-width: 100%;
	`}
`

const ModalTitle = styled.div`
	font-weight: 600;
	font-size: 34px;
	line-height: 114.5%;
	text-transform: uppercase;
	color: #000000;
	${media.md`	
	font-size: 32px;
	`}
`
const ModalCaption = styled.div`
	font-weight: 300;
	font-size: 21px;
	line-height: 114.5%;
	text-transform: uppercase;
	color: #000000;
	margin-bottom: 30px;

	b {
		font-weight: 500;
	}

	${media.md`	
	font-size: 19px;
	`}
`

const Content = styled.div`
	display: flex;
	justify-content: space-between;

	${media.sm`	
	flex-direction:column;
	`}
`

const AmenexilBg = styled.div`
	max-height: 100%;
	width: 52%;

	background-image: url('assets/images/dercos/modals/room-modal/aminexil.png');
	background-repeat: no-repeat;
	background-position: bottom right;
	background-size: cover;
	${media.sm`	
	width: 100%;	
	height: 550px;
	`}
`

const ImageBox = styled.div`
	display: flex;
	justify-content: space-between;
	width: 84%;

	.number-one {
		width: 148px;
		width: 48%;
	}

	.dercos-logo {
		width: 115px;
		height: 8%;
		width: 36%;
	}
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

	transition: all 0.3s ease-out;

	${({ $step }) =>
		$step &&
		css`
			transform: translateX(${$step});
		`}
`

const ModalContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background: #fff;
`

const AllWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`

const AllContent = styled.div`
	width: 100%;
	max-width: 780px;
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
