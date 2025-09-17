import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

import { useSpring, animated } from 'react-spring'
import useWindowSize from '@/hooks/useWindowSize'

const ArrowDown = styled.div`
	position: absolute;
	bottom: 50px;
	right: 0px;
	z-index: 100;
	img {
		width: 80px;
		height: 80px;
	}
`

const LRPPointsChanges = () => {
	const [showArrow, setShowArrow] = useState(false)
	const [width] = useWindowSize()

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowArrow(true)
		}, 5000)

		return () => clearTimeout(timer)
	}, [])

	const arrowAnimation = useSpring({
		loop: { reverse: true },
		from: { transform: 'translateY(40px)' },
		to: { transform: 'translateY(0px)' },
		onRest: () => {
			setTimeout(() => {
				setShowArrow(false)
			}, 4000)
		},
	})

	return (
		<PointsWrapper>
			<PointItem>
				<HeadWrapper>
					<BackgroundTwoItemOne>
						<img
							src="/assets/images/green/modals/ecological/changes-popup/bg2-item1.png"
							alt="product-box"
						/>
					</BackgroundTwoItemOne>
					<TextWrapper>
						<SubTitle>
							ЗА ВРЕМЯ ПРОЕКТА
							<br /> МЫ СОБРАЛИ УЖЕ БОЛЕЕ
						</SubTitle>
						<Title>1 тонны</Title>
						<Text>
							Сдавайте упаковки <br />
							от косметики – <br /> <span>получайте подарки</span>
						</Text>
					</TextWrapper>
					<BackgroundTwoItemTwo>
						<img
							src="/assets/images/green/modals/ecological/changes-popup/bg2-item2.png"
							alt="eco-bag"
						/>
					</BackgroundTwoItemTwo>
				</HeadWrapper>
			</PointItem>
			<PointItem style={{ marginBottom: '14px' }}>
				<ListBlockWrapper>
					<ListBlockTitle>
						МЫ ПРИНИМАЕМ УПАКОВКУ ОТ КОСМЕТИКИ <br />
						<span>БЕЗ ОСТАТКОВ СРЕДСТВ</span>
					</ListBlockTitle>
					<ListBlockSubtitle>
						Любого цвета, формы и производителя с маркировками:
					</ListBlockSubtitle>
					<ListBlockItems>
						<ListBlockItem>
							<img
								src="/assets/images/green/modals/ecological/changes-popup/item1.png"
								alt="1/pet/pete/пэт/
                пэтф"
							/>
							<ListBlockItemTitle>1/pet/pete/пэт/ пэтф</ListBlockItemTitle>
							<ListBlockItemText>
								<p>Отличительный признак - </p>выпуклая точка на дне
							</ListBlockItemText>
						</ListBlockItem>
						<ListBlockItem>
							<img
								src="/assets/images/green/modals/ecological/changes-popup/item2.png"
								alt="1/pet/pete/пэт/
              	    пэтф"
							/>
							<ListBlockItemTitle>2/HDPE/PE HD/ПНД</ListBlockItemTitle>
							<ListBlockItemText>
								<p>Отличительный признак - </p>на дне характерный шов от
								спаивания
							</ListBlockItemText>
						</ListBlockItem>
						<ListBlockItem>
							<img
								src="/assets/images/green/modals/ecological/changes-popup/item3.png"
								alt="мягкая упаковка
                от рефилов"
							/>
							<ListBlockItemTitle>
								мягкая упаковка от рефилов
							</ListBlockItemTitle>
							<ListBlockItemText>
								С любой маркировкой без металлического слоя. Перед сдачей
								разрезать упаковку вдоль
							</ListBlockItemText>
						</ListBlockItem>
						<ListBlockItem>
							<img
								src="/assets/images/green/modals/ecological/changes-popup/item4.png"
								alt=""
							/>
							<ListBlockItemTitle>АЛЮМИНИЕВЫЕ БАЛЛОНЧИКИ</ListBlockItemTitle>
							<ListBlockItemText>
								Баллончики можно проткнуть и сжать <p />
								(не обязательно)
							</ListBlockItemText>
						</ListBlockItem>
						<ListBlockItem>
							<img
								src="/assets/images/green/modals/ecological/changes-popup/item5.png"
								alt=""
							/>
							<ListBlockItemTitle>5/pp/ПП</ListBlockItemTitle>
						</ListBlockItem>
						<ListBlockItem>
							<img
								src="/assets/images/green/modals/ecological/changes-popup/item6.png"
								alt=""
							/>
							<ListBlockItemTitle>
								Стеклянные баночки, флаконы
							</ListBlockItemTitle>
							<ListBlockItemText>
								Только полностью прозрачные или матовые баночки
								<span> (кроме баночек из цветного стекла)</span>
							</ListBlockItemText>
						</ListBlockItem>
						<ListBlockItem>
							<img
								src="/assets/images/green/modals/ecological/changes-popup/item7.png"
								alt=""
							/>
							<ListBlockItemTitle>Роликовые дезодоранты</ListBlockItemTitle>
							<ListBlockItemText>
								Только с маркировкой 5 ПП/РР. Вытаскивать шарик из упаковки
								необязательно
							</ListBlockItemText>
						</ListBlockItem>
					</ListBlockItems>
				</ListBlockWrapper>
			</PointItem>
			<DesktopBottomBlockWrapper>
				<BottomBlockTitle>зачем нужен проект?</BottomBlockTitle>
				<BottomBlockItems>
					<BottomBlockItemOne>
						<BottomBlockItemTitle>
							Каждая упаковка будет переработана
						</BottomBlockItemTitle>
						<BottomBlockItemText>
							Маленькие упаковки от косметики могут <p />
							не попасть на переработку из городских контейнеров для вторсырья
							из-за размера. Из наших пунктов сбора все тюбики попадают на
							завод и перерабатываются
						</BottomBlockItemText>
					</BottomBlockItemOne>
					<BottomBlockItemTwo>
						<BottomBlockItemTwoContent>
							<BottomBlockItemTitle>
								Маленькие упаковки –<br /> большая польза
							</BottomBlockItemTitle>
							<BottomBlockItemText>
								Из переработанных косметических упаковок можно сделать футболки,
								наполнитель для зимних курток, ковровые покрытия, трубы для
								водопровода <p />и газопровода и продукция <p />
								для хозяйственных нужд
							</BottomBlockItemText>
						</BottomBlockItemTwoContent>
					</BottomBlockItemTwo>
				</BottomBlockItems>
				<Ad>Реклама skin.ru ERID: 2SDnjbrcv8p</Ad>
			</DesktopBottomBlockWrapper>

			<MobileBottomBlockWrapper>
				<BottomBlockTitle>зачем нужен проект?</BottomBlockTitle>
				<BottomBlockItems>
					<BottomBlockItemOne>
						<BottomBlockItemTitle>
							Каждая упаковка будет переработана
						</BottomBlockItemTitle>
						<BottomBlockItemText>
							Маленькие упаковки от косметики могут не попасть на переработку из
							городских контейнеров для вторсырья из-за размера. Из наших
							пунктов сбора все тюбики попадают на завод и перерабатываются
						</BottomBlockItemText>
					</BottomBlockItemOne>
					<BottomBlockItemTwo>
						<BottomBlockItemTwoContent>
							<BottomBlockItemTitle>
								Маленькие упаковки –<br /> большая польза
							</BottomBlockItemTitle>
							<BottomBlockItemText>
								Из переработанных косметических упаковок можно сделать футболки,
								наполнитель для зимних курток, ковровые покрытия, трубы для
								водопровода и газопровода и продукция для хозяйственных нужд
							</BottomBlockItemText>
						</BottomBlockItemTwoContent>
					</BottomBlockItemTwo>
				</BottomBlockItems>
				<Ad>Реклама skin.ru ERID: 2SDnjbrcv8p</Ad>
			</MobileBottomBlockWrapper>
			{showArrow && width > 575 && (
				<AnimatedArrowDown
					style={{ transform: arrowAnimation.transform as any }}
				>
					<img
						src="/assets/images/green/modals/ecological/arrow-down-blue.svg"
						alt="arrow-down"
					/>
				</AnimatedArrowDown>
			)}
		</PointsWrapper>
	)
}

const AnimatedArrowDown = animated(ArrowDown)

export default LRPPointsChanges

const ListBlockWrapper = styled.div`
	position: relative;

	margin: 69px 10px 0 10px;
	${media.sm`
		margin: 69px 0 0 0;
`};
`

const ListBlockWrapperArrow = styled.div`
	position: absolute;
	bottom: 60px;
	right: 30px;
	cursor: pointer;
	img {
		width: 40px;
		height: 40px;
	}
	${media.sm`
display:none`};
`
const PointItem = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 27px;
	margin-top: -43px;

	${media.sm`
	margin:-31px 17px 0 17px;
  `}
`

const TextWrapper = styled.div`
	margin-top: 31px;
	text-align: center;
	min-width: 194px;
`

const Title = styled.div`
	color: #00a3e0;
	text-align: center;
	font-family: Gilroy;
	font-size: 34px;
	font-style: normal;
	font-weight: 800;
	line-height: 100%;
	margin-bottom: 14px;
`

const SubTitle = styled.div`
	color: #000;
	text-align: center;
	font-size: 12px;
	font-weight: 600;
	line-height: 133.5%;
	margin-bottom: 6px;
`

const Text = styled.div`
	color: #000;
	text-align: center;
	font-size: 14px;
	font-weight: 300;
	line-height: 111%;
	letter-spacing: 1.12px;
	text-transform: uppercase;
	span {
		color: #000;
		font-size: 14px;
		font-weight: 800;
		line-height: 111%;
		letter-spacing: 1.12px;
		text-transform: uppercase;
	}
`

const HeadWrapper = styled.div`
	display: flex;
	background-color: #edf9ff;
	padding-bottom: 35px;

	${media.sm`
	flex-direction: column;
	text-align:center;
	align-items:center;
  `}
`

const PointsWrapper = styled.div``

const BackgroundTwoItemOne = styled.div`
	max-width: 204px;
	margin: 11px 0 0 18px;

	img {
		max-width: 100%;
		height: auto;
	}
	${media.md`
		margin: 11px 0 0 10px;
	
`}

	${media.sm`
	margin: 0px; `}
`

const BackgroundTwoItemTwo = styled.div`
	max-width: 187px;
	margin-right: 17px;

	img {
		max-width: 100%;
		height: auto;
		display: block;
	}
	${media.md`
		margin-right: 10px;
	
`}
	${media.sm`
	margin: 0px;
  `}
`

const ListBlockTitle = styled.div`
	color: #000;
	font-size: 16px;
	font-weight: 800;
	line-height: 111%;
	letter-spacing: 0.64px;
	margin-bottom: 7px;

	span {
		color: #36b0fc;
		font-size: 16px;
		font-weight: 800;
		line-height: 111%;
		letter-spacing: 0.64px;
	}
`

const ListBlockSubtitle = styled.div`
	color: #000;
	font-size: 11px;
	font-style: normal;
	font-weight: 400;
	line-height: 111%;
	text-transform: uppercase;
	margin-bottom: 23px;
`

const ListBlockItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	${media.md`
	justify-content:center;
`};
	${media.sm`
	justify-content:start;
`};
`

const ListBlockItem = styled.div`
	border: 1px solid #eee;
	width: 140px;
	height: 208px;
	margin-bottom: 12px;

	&:not(:nth-child(4)) {
		margin-right: 10px;
	}
	img {
		width: 100%;
	}
	${media.md`
	margin-right: 10px;  
	`};
	${media.sm`
	width: 123px;
	height: 183px;

`};
	${media.phone`
	margin-right: 10px;  
		&:nth-child(even){
		margin-right: 0px;  
	}
	`};
`

const ListBlockItemTitle = styled.div`
	color: #000;
	text-align: center;
	font-size: 12px;
	font-weight: 600;
	line-height: 111%;
	text-transform: uppercase;
	margin: 0 8px 7px 8px;
	${media.sm`
	font-size: 10px;
`};
`

const ListBlockItemText = styled.div`
	color: #000;
	text-align: center;
	font-size: 10px;
	font-weight: 300;
	line-height: 110%;
	margin: 0 8px;
	span {
		color: #de2a03;
		font-weight: 700;
	}
	p {
		white-space: nowrap;
	}
	${media.sm`
	font-size: 8px;
`};
`

const BottomBlockWrapper = styled.div`
	height: 259px;
	${media.sm`
    height: 423px;
  `}
`

const DesktopBottomBlockWrapper = styled(BottomBlockWrapper)`
	background: url('../assets/images/green/modals/ecological/changes-popup/bg3.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	${media.sm`
    display: none;
  `};
`

const MobileBottomBlockWrapper = styled(BottomBlockWrapper)`
	display: none;

	${media.sm`
      display: block;
			background-color: #edf9ff;

  `}
`

const BottomBlockTitle = styled.div`
	color: #000;
	text-align: center;
	font-size: 16px;
	font-weight: 800;
	line-height: 115%;
	letter-spacing: 0.32px;
	text-transform: uppercase;
	padding-top: 27px;
	margin-bottom: 14px;
	${media.sm`
	padding-top: 39px;
	margin-bottom: 36px;

  `}
`

const BottomBlockItems = styled.div`
	display: flex;
	justify-content: center;
	${media.sm`
    flex-direction: column;
		align-items:center;

  `}
`
const BottomBlockItemOne = styled.div`
	position: relative; //
	width: 243px;
	padding: 16px 10px 26px 19px;
	border-radius: 12.333px;
	background: #fff;
	box-shadow: 0px 1.82708px 13.70313px 0px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(6.8515625px);
	margin-right: 11px;

	${media.sm`
		margin-right: 0px;
		margin-bottom: 36px;
		padding: 18px 10px 15px 16px;
		width: 208px;
		align-self:flex-start;
		margin-left: 55px;

	&::before {
		content: '';
		position: absolute;
		top: -36px;
		left: -45px;
		width: 67px;
		height: 158px;
		background: url('../assets/images/green/modals/ecological/changes-popup/bottles.png')
			no-repeat center center;
		background-size: cover;
	}
  `}
`
const BottomBlockItemTwo = styled.div`
	position: relative;

	${media.sm`
		margin-bottom: 30px;
		align-self:flex-end;
		margin-right: 55px;
		&::before {
		content: '';
		position: absolute;
		top: -33px;
		right: -16px;
		width: 87px;
		height: 184px;
		background: url('../assets/images/green/modals/ecological/changes-popup/tube1.png')
			no-repeat center center;
		background-size: contain;
	}

	&::after {
		content: '';
		position: absolute;
		top: -44px;
		right: -47px;
		width: 83px;
		height: 176px;
		background: url('../assets/images/green/modals/ecological/changes-popup/tube2.png')
			no-repeat center center;
		background-size: cover;
	}

  `}
`

const BottomBlockItemTwoContent = styled.div`
	width: 243px;
	padding: 16px 10px 26px 19px;
	border-radius: 12.333px;
	background: #fff;
	box-shadow: 0px 1.82708px 13.70313px 0px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(6.8515625px);
	z-index: 2;

	${media.sm`
		padding: 18px 10px 15px 16px;
		width: 208px;
  `}
`
const BottomBlockItemTitle = styled.div`
	color: #000;
	font-size: 12px;
	font-weight: 800;
	line-height: 115%;
	letter-spacing: 0.24px;
	text-transform: uppercase;
	margin-bottom: 6px;

	${media.sm`
		font-size: 10px;
		font-style: normal;
		letter-spacing: 0.2px;
  `}
`
const BottomBlockItemText = styled.div`
	color: #000;
	font-size: 10px;
	font-weight: 300;
	line-height: 130%;
	${media.sm`
	font-size: 8px;
  `}
`
const Ad = styled.div`
	margin-top: 15px;
	margin-bottom: 15px;
	color: #141414;
	text-align: center;
	font-size: 10px;
	font-weight: 300;
	line-height: 120%;
	${media.sm`	
	margin-top: 0px;
	font-size: 14px;
  `}
`
