import React, { useState } from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

interface SliderContentProps {
	currentIndex: number
}

const PlanetCareSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = () => {
		const newIndex = (currentIndex - 1 + 3) % 3
		setCurrentIndex(newIndex)
	}

	const nextSlide = () => {
		const newIndex = (currentIndex + 1) % 3
		setCurrentIndex(newIndex)
	}

	const handleDotClick = (index) => {
		setCurrentIndex(index)
	}

	return (
		<div>
			<SliderWrapper>
				<SliderContent currentIndex={currentIndex}>
					<Slide>
						<SlideOneWrapper>
							<img
								className="pipette"
								src="/assets/images/green/modals/ecological/pipette.png"
								alt="pipette"
							/>
							<SlideOneContent>
								<SlideTitle>
									ГИПОАЛЛЕРГЕННЫЕ ФОРМУЛЫ
									<br />
									<span>С&nbsp;УЛУЧШЕННЫМ ЭКОЛОГИЧЕСКИМ ПРОФИЛЕМ</span>
								</SlideTitle>
								<SlideOneList>
									<SlideOneLeftSide>
										<SlideOneItem>
											<SlideOneItemTitle>95%</SlideOneItemTitle>
											<SlideOneItemText>
												НАШЕГО СЫРЬЯ БУДЕТ <br /> НА БИО– ИЛИ&nbsp;МИНЕРАЛЬНОЙ
												ОСНОВЕ К&nbsp;2025
											</SlideOneItemText>
											<img
												className="one__hundred-percent"
												src="/assets/images/green/modals/ecological/one__hundred-percent.svg"
												alt="one__hundred-percent"
											/>
										</SlideOneItem>
										<SlideOneItem>
											<SlideOneItemTitle>100%</SlideOneItemTitle>
											<SlideOneItemText>
												УСТОЙЧИВЫЕ И&nbsp;ВОССТАНАВЛИВАЮЩИЕСЯ ИСТОЧНИКИ
												К&nbsp;2030
											</SlideOneItemText>
										</SlideOneItem>
									</SlideOneLeftSide>
									<SlideOneRightSide>
										<SlideOneItem>
											<SlideOneItemTitle>80%</SlideOneItemTitle>
											<SlideOneItemText>
												ПРОДУКТОВ БУДУТ БИОРАЗЛАГАЕМЫМИ К&nbsp;2025
											</SlideOneItemText>
										</SlideOneItem>
										<SlideOneItem>
											<div style={{ display: 'flex' }}>
												<img
													className="fish-icon"
													src="/assets/images/green/modals/ecological/fish-icon.png"
													alt="one__hundred-percent"
												/>
												<SlideOneItemText>
													БЕРЕЖНОЕ <br /> ОТНОШЕНИЕ <br /> К&nbsp;МОРСКОЙ ФЛОРЕ
													<br />
													И&nbsp;ФАУНЕ
												</SlideOneItemText>
											</div>
										</SlideOneItem>
									</SlideOneRightSide>
								</SlideOneList>
							</SlideOneContent>
						</SlideOneWrapper>
					</Slide>
					<Slide>
						<SlideTwoWrapper>
							<SlideTwoContent>
								<SlideTitle>
									<span>ЭКОЛОГИЧНАЯ УПАКОВКА</span>
								</SlideTitle>
								<SlideOneLeftSide>
									<SlideOneItem>
										<SlideOneItemTitle>95%</SlideOneItemTitle>
										<SlideOneItemText>
											СОКРАЩЕНИЕ <br /> ИСПОЛЬЗОВАНИЯ УПАКОВКИ
										</SlideOneItemText>
									</SlideOneItem>
									<SlideOneItem>
										<SlideOneItemTitle>100%</SlideOneItemTitle>
										<SlideOneItemText>
											НАШЕЙ ПЛАСТИКОВОЙ <br /> УПАКОВКИ СТАНЕТ <br />
											ПЕРЕРАБАТЫВАЕМОЙ <br /> ИЛИ&nbsp;БИОРАЗЛАГАЕМОЙ
											К&nbsp;2030
										</SlideOneItemText>
									</SlideOneItem>
								</SlideOneLeftSide>
							</SlideTwoContent>
							<SlideTwoBg />
						</SlideTwoWrapper>
					</Slide>
					<Slide>
						<SlideThreeWrapper>
							<SlideThreeContent>
								<SlideTitle>
									ЗАВОД VICHY – <span>ОБРАЗЕЦ СОВРЕМЕННОГО ПРОИЗВОДСТВА, </span>
									СОХРАНЯЮЩЕГО БИОРАЗНООБРАЗИЕ, КЛИМАТ И&nbsp;ПРЕСНУЮ ВОДУ
								</SlideTitle>
								<SlideOneLeftSide>
									<SlideOneItem>
										<SlideOneItemTitle>0%</SlideOneItemTitle>
										<SlideOneItemText>
											ВЫБРОСЫ УГЛЕКИСЛОГО ГАЗА С&nbsp;2018
										</SlideOneItemText>
									</SlideOneItem>
									<SlideOneItem>
										<SlideOneItemTitle>50%</SlideOneItemTitle>
										<SlideOneItemText>
											ЭЛЕКТРОЭНЕРГИИ ОТ&nbsp;СОЛНЕЧНЫХ ПАНЕЛЕЙ К&nbsp;2030
										</SlideOneItemText>
									</SlideOneItem>
								</SlideOneLeftSide>
							</SlideThreeContent>
							<SlideThreeBg />
						</SlideThreeWrapper>
					</Slide>
				</SliderContent>
			</SliderWrapper>

			<NavigationWrapper>
				<SliderButtonPrev onClick={prevSlide}>
					<img
						src="/assets/images/green/modals/ecological/slider__nav-arrow.svg"
						alt="slider__nav-arrow"
					/>
				</SliderButtonPrev>
				<Pagination>
					{[0, 1, 2].map((index) => (
						<Dot
							key={index}
							active={currentIndex === index}
							onClick={() => handleDotClick(index)}
						/>
					))}
				</Pagination>
				<SliderButtonNext onClick={nextSlide}>
					<img
						src="/assets/images/green/modals/ecological/slider__nav-arrow.svg"
						alt="slider__nav-arrow"
					/>
				</SliderButtonNext>
			</NavigationWrapper>
		</div>
	)
}

export default PlanetCareSlider

const SliderWrapper = styled.div`
	width: 100%;
	height: 368px;
	overflow: hidden;
	position: relative;
	margin-bottom: 8px;
	${media.tablet`
		height: 538px;
  `}
`

const SliderContent = styled.div<SliderContentProps>`
	width: 100%;
	height: 100%;
	display: flex;
	transition: transform 0.3s ease;
	transform: ${({ currentIndex }) =>
		`translateX(calc(-${currentIndex} * 100%))`};
`

const Slide = styled.div`
	flex: 0 0 100%;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`
const SlideOneWrapper = styled.div`
	position: relative;
	background: #eefffc;
	width: 100%;
	height: 100%;

	.pipette {
		position: absolute;
		top: 0;
		right: 0;
		max-height: 292px;
		${media.sm`
		max-height: 172px;
  `}
	}
`
const SlideOneContent = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 32px;
	${media.tablet`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  `}
	${media.sm`
	padding: 0 20px;
  `}
`

const SlideTitle = styled.div`
	color: #000;
	font-size: 18px;
	font-weight: 300;
	line-height: 120%;
	letter-spacing: 0.54px;
	margin-top: 24px;
	margin-bottom: 48px;
	margin-right: 50px;

	span {
		font-weight: 600;
	}
	${media.tablet`
	margin-bottom: 5px;
  `}
	${media.phone`
	font-size: 16px;	
	margin-top: 20px;
	margin-bottom: 36px;
  `}
`

const SlideOneList = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 516px;
	${media.tablet`
	flex-direction: column;
	align-items: flex-start;
  `}
`
const SlideOneLeftSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 261px;
	margin-right: 31px;
	${media.sm`
	width: 220px;
  `}
`
const SlideOneRightSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 30px;
	${media.tablet`
	width: 261px;
  `}
	${media.sm`
	width: 220px;
  `}
`

const SlideOneItem = styled.div`
	position: relative;
	border-left: 1px solid #000;
	margin-bottom: 24px;
	padding-left: 16px;

	.fish-icon {
		width: 58px;
		height: 63px;
		margin-right: 8px;
	}
	.one__hundred-percent {
		position: absolute;
		width: 55px;
		height: 55px;
		top: 0;
		right: 0;

		${media.tablet`
		top: -10px;
  `}
		${media.phone`
		top: -35px;
  	/* right: 41%; */
		right: 33%;

  `}
	}
`
const SlideOneItemTitle = styled.div`
	color: #000;
	font-size: 48px;
	font-style: normal;
	font-weight: 600;
	line-height: 48px;
	text-transform: uppercase;
	${media.phone`
	font-size: 32px;
	line-height: 32px;
  `}
`
const SlideOneItemText = styled.div`
	color: #000;
	font-size: 14px;
	font-weight: 300;
	line-height: 111%;
	letter-spacing: 0.28px;
	text-transform: uppercase;
	max-width: 186px;
	${media.sm`
	font-size: 13px;
  `}
`

const SlideTwoWrapper = styled.div`
	position: relative;
	background: #eefffc;
	width: 100%;
	height: 100%;
	/* .ecopack-bg {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		height: 100%;
		${media.tablet`
		width: 100%;
		height: auto;
  `}
	} */
`
const SlideTwoContent = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 32px;
	${media.sm`
	padding: 0 20px;
  `}

	${SlideOneLeftSide} {
		${media.sm`
	flex-direction: column;
	width: 250px;
  `}
	}
	${SlideOneItem} {
		${media.tablet`
			max-width: 200px;
  `}
		${media.sm`
			max-width: 250px;
  `}
	}
	${SlideOneItemText} {
		${media.tablet`
			max-width: 100%;
  `}
	}

	${SlideTitle} {
		${media.tablet`
		margin-bottom: 32px;
		margin-right: 20px;
  `}
		${media.phone`
		margin-bottom: 13px;
  `}
	}
	${SlideOneItemTitle} {
		${media.sm`
	font-size: 32px;
	line-height: 32px;
  `}
	}
`
const SlideTwoBg = styled.div`
	background: url('/assets/images/green/modals/ecological/normaderm.png');
	background-repeat: no-repeat;
	background-size: contain;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	height: 100%;
	width: 302px;

	${media.tablet`
	background-size: cover;
	background-position: center;
  `}
	${media.phone_xl`
	width: 240px;

  `}
	${media.sm`
	top: auto;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 272px;
	background-size: cover;
	background-position: center;
  `}
`

const SlideThreeWrapper = styled.div`
	position: relative;
	background: #eefffc;
	width: 100%;
	height: 100%;
	.solar__panel-bg {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		height: 100%;
	}
`
const SlideThreeContent = styled.div`
	width: 100%;
	height: 100%;
	padding-left: 32px;
	${media.sm`
	padding-left: 20px;

  `}
	${SlideTitle} {
		margin-bottom: 16px;
		line-height: 115%;
		max-width: 250px;
		${media.sm`
			max-width: 350px;
			margin-top: 20px;
			margin-right: 15px;
  `}
	}
	${SlideOneItem} {
		margin-bottom: 24px;
	}
	${SlideOneItemTitle} {
		${media.sm`
		font-size: 32px;
	line-height: 32px;
  `}
	}
	${SlideOneItemText} {
		max-width: 235px;
	}
`
const SlideThreeBg = styled.div`
	background: url('/assets/images/green/modals/ecological/solar__panel.png');
	background-repeat: no-repeat;
	background-size: contain;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	height: 100%;
	width: 302px;
	${media.tablet`
	width: 290px;
	background-size: cover;
	background-position: center;
  `}
	${media.phone_xl`
	width: 230px;

  `}
	${media.sm`
	top: auto;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 210px;
	background-size: cover;
	background-position: center;
  `}
`

const NavigationWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`

const SliderButtonPrev = styled.div`
	border: none;
	cursor: pointer;
	width: 24px;
	height: 24px;
	img {
		width: 24px;
		height: 24px;
		cursor: pointer;
	}
`
const SliderButtonNext = styled.div`
	border: none;
	cursor: pointer;
	width: 24px;
	height: 24px;
	img {
		width: 24px;
		height: 24px;
		cursor: pointer;
		transform: rotate(180deg);
	}
`

const Pagination = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const Dot = styled.div<{ active: boolean }>`
	width: ${(props) => (props.active ? '7px' : '4px')};
	height: ${(props) => (props.active ? '7px' : '4px')};
	border-radius: 50%;
	background-color: #b8c9d7;
	margin: 0 5px;
	cursor: pointer;
	position: relative;
	transition: all 0.2s ease;

	&::before {
		content: '';

		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #003056;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: ${(props) => (props.active ? 1 : 0)};
	}
`
