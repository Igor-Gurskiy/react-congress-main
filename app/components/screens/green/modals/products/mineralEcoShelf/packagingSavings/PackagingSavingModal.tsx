import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'

import leftV from '/public/assets/images/green/modals/ecological/left-v.svg'
import rightV from '/public/assets/images/green/modals/ecological/right-v.svg'
import ScrollbarsBody from '@/components/ScollbarsBody'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const PackagingSavingModal = ({ step }) => {
	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.greenPopup5Visit)
	}, [])

	return (
		<Wrapper $step={`${100 - 100 * step}%`}>
			<ScrollbarsBody>
				<Content>
					<Body>
						<LeftV>
							<img src={leftV.src} alt="" />
						</LeftV>
						<RightV>
							<img src={rightV.src} alt="" />
						</RightV>
						<ProductImage>
							<img
								src="assets/images/green/modals/ecological/packaging-saving.png"
								alt=""
								style={{ width: '53.5%', objectFit: 'contain' }}
							/>
						</ProductImage>
						<Title>
							Перелейте содержимое <br /> сменного блока <br />
							<span>в ваш флакон</span>
						</Title>
						<Percent>
							на <b>77</b> <span>%</span>
						</Percent>
						<Subtitle>меньше Пластика</Subtitle>
						<Text>
							<b>
								клинически доказанная
								<br /> эффективность
							</b>
							<br />
							<br />
							протестировано
							<br /> под контролем
							<br /> дерматологов
						</Text>
						<Description>
							*По сравнению с аналогичным продуктом
							<br /> в пластиковом флаконе объёмом 200мл
						</Description>
						<Ad>Реклама skin.ru ERID: 2SDnje7PdzQ</Ad>
					</Body>
				</Content>
			</ScrollbarsBody>
		</Wrapper>
	)
}

export default PackagingSavingModal

const Content = styled.div`
	/* background-image: url('/assets/images/green/modals/ecological/bg.png'); */
	background-position: bottom center;
	background-repeat: no-repeat;

	display: flex;
	flex-shrink: 0;
	width: 100%;
	flex-direction: column;
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
	padding-top: 56px;

	transition: all 0.3s ease-out;

	${({ $step }) =>
		$step &&
		css`
			transform: translateX(${$step});
		`}
`

const Body = styled.div`
	margin-top: 15px;
	position: relative;
	width: 100%;
	height: 100%;
`

const Title = styled.div`
	margin-top: 66px;
	margin-left: 77px;
	margin-bottom: 120px;
	color: #222;
	font-size: 36px;
	font-style: normal;
	font-weight: 800;
	line-height: 40px; /* 111.111% */
	letter-spacing: 0.9px;
	text-transform: uppercase;

	span {
		color: #000;
		font-size: 32px;
		font-weight: 400;
		letter-spacing: 0.8px;
		line-height: 170%;
	}

	@media screen and (max-width: 575.98px) {
		font-size: 15px;
		line-height: normal;
		margin-top: 64px;
		margin-left: 62px;
		margin-bottom: 40px;

		span {
			font-size: 14px;
			line-height: normal;
		}
	}
`

const Percent = styled.div`
	color: #399045;
	margin-left: 76px;
	margin-bottom: 15px;
	font-size: 42.814px;
	font-weight: 800;
	letter-spacing: 0.07px;
	text-transform: uppercase;

	b {
		font-size: 153.862px;
		letter-spacing: 2.847px;
	}

	span {
		font-size: 64.221px;
		letter-spacing: 2.89px;
	}

	@media screen and (max-width: 575.98px) {
		font-size: 16px;
		line-height: normal;
		letter-spacing: 0;
		margin-bottom: 0px;
		b {
			font-size: 60px;
			line-height: 0.8;
			letter-spacing: 0;
		}

		span {
			font-size: 25px;
			line-height: normal;
			letter-spacing: 0;
		}
	}
`
const Subtitle = styled.div`
	margin-left: 76px;
	margin-bottom: 152px;
	color: #151515;
	font-size: 26.759px;
	font-weight: 400;
	letter-spacing: 0.669px;
	text-transform: uppercase;

	@media screen and (max-width: 575.98px) {
		font-size: 10px;
		line-height: normal;
		letter-spacing: 0;

		margin-left: 76px;
		margin-bottom: 82px;
	}
`
const Text = styled.div`
	display: inline-block;
	margin-left: 33px;
	padding: 23px 42px 28px 42px;
	background: #399045;
	color: #fff;
	font-size: 18px;
	font-weight: 400;
	line-height: 130%;
	text-transform: uppercase;
	margin-bottom: 70px;
	width: 100%;
	max-width: 60%;

	@media screen and (max-width: 575.98px) {
		padding: 12px 24px 14px 36px;
		margin-bottom: 20px;
		margin-left: 0px;
		max-width: 60%;
		font-size: 10px;
	}
`
const Description = styled.div`
	color: #000;
	font-size: 10px;
	font-weight: 400;
	letter-spacing: 0.45px;
	margin-bottom: 46px;
	margin-left: 77px;
	line-height: 120%;

	@media screen and (max-width: 575.98px) {
		margin-left: 36px;
		max-width: 40%;
	}
`
const Ad = styled.div`
	margin-left: 77px;
	color: #000;
	font-size: 10px;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: 0.5px;
	margin-bottom: 12px;

	@media screen and (max-width: 575.98px) {
		position: absolute;
		bottom: 40px;
		left: 20px;
		transform: rotate(-90deg) translate(75px, -170px);
	}
`
const LeftV = styled.div`
	position: absolute;
	top: 0;
	left: 28px;

	@media screen and (max-width: 575.98px) {
		left: 16px;
	}
`
const RightV = styled.div`
	position: absolute;
	bottom: 0;
	right: 28px;
	@media screen and (max-width: 575.98px) {
		right: 16px;
	}
`
const ProductImage = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	height: 100%;
	width: 100%;
	user-select: none;
	pointer-events: none;

	img {
		height: 100%;
		position: absolute;
		bottom: 0;
		right: -20px;
	}
`
