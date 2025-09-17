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

const VichyPoints = () => {
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
			}, 14000)
		},
	})

	return (
		<PointsWrapper>
			<Points>
				<PointItem>
					<Wrapper>
						<ImageWrapper>
							<img
								src="/assets/images/green/modals/ecological/waterdrop.png"
								alt="waterdrop"
							/>
						</ImageWrapper>
						<div>
							<Text>
								Завод Vichy – образец ответственного современного производства.
								Завод сократил до нуля выбросы углекислого газа в процессе своей
								производственной деятельности
							</Text>
						</div>
					</Wrapper>
				</PointItem>
				<PointItem>
					<Wrapper>
						<ImageWrapper>
							<img
								src="/assets/images/green/modals/ecological/waterdrop.png"
								alt="waterdrop"
							/>
						</ImageWrapper>
						<div>
							<Text>
								Сегодня 47% пластиковой упаковки Vichy пригодны для повторного
								использования или переработки, <p />а к 2025 году 100% упаковки
								станет перерабатываемой или биоразлагаемой
							</Text>
						</div>
					</Wrapper>
				</PointItem>
				<PointItem>
					<Wrapper>
						<ImageWrapper>
							<img
								src="/assets/images/green/modals/ecological/waterdrop.png"
								alt="waterdrop"
							/>
						</ImageWrapper>
						<div>
							<Text>
								Большое внимание бренд уделяет водным ресурсам и особенно —
								источнику вулканической воды Vichy. Бренд ограничивает ее
								добычу, извлекая в среднем менее 4% суточного объема, тем самым
								сохраняя <p />
								ее запас, а также гарантирует ее чистоту с момента добычи до
								использования потребителями
							</Text>
						</div>
					</Wrapper>
				</PointItem>
			</Points>
			{showArrow && width > 575 && (
				<AnimatedArrowDown
					style={{ transform: arrowAnimation.transform as any }}
				>
					<img
						src="/assets/images/green/modals/ecological/arrow-down.svg"
						alt="arrow-down"
					/>
				</AnimatedArrowDown>
			)}
		</PointsWrapper>
	)
}
const AnimatedArrowDown = animated(ArrowDown)

export default VichyPoints

const ImageWrapper = styled.div``

const Text = styled.div`
	font-weight: 300;
	font-size: 20px;
	line-height: 120%;
	color: #000000;

	${media.sm`
     font-size: 16px;
  `}
`

const Wrapper = styled.div`
	display: flex;

	img {
		margin-right: 16px;
		flex-shrink: 0;
	}
`

const PointItem = styled.div`
	display: flex;
	flex-direction: column;

	padding: 0 16px;

	&:not(:last-child) {
		margin-bottom: 18px;
	}

	${media.sm`
      &:not(:last-child) {
        margin-bottom: 32px;
      }
  `}
`

const Points = styled.div`
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
`

const PointsWrapper = styled.div`
	/* position: relative; */

	background-image: url('/assets/images/green/modals/ecological/vichybg.png');
	background-position: bottom center;
	background-repeat: no-repeat;
	margin: 0 auto;
	width: 100%;
	padding: 40px 0 380px 0;
	${media.tablet`
		padding: 40px 0 240px 0;
  `}
`

const Title = styled.div`
	font-weight: 300;
	font-size: 16px;
	line-height: 120%;
	text-transform: uppercase;
	color: #000000;
	margin-bottom: 8px;
`
