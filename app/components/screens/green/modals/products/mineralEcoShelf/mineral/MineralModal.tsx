import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import GreenProduct from '@/components/screens/green/modals/products/GreenProduct'
import media from '@/utils/media'
import ScrollbarsBody from '@/components/ScollbarsBody'

const MineralModal = ({ step }) => {
	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.greenPopup3Visit)
	}, [])

	return (
		<Wrapper $step={`${100 - 100 * step}%`}>
			<ScrollbarsBody>
				<ProductModal.Content>
					<GreenProduct
						title={
							<Title>
								<b>Mineral</b> 89
							</Title>
						}
						src="/assets/images/green/modals/mineral.png"
						srcHeight={230}
						container={Container}
						content={
							<Body>
								<p>
									В 2021 году мы отказались от пластиковой капсулы в
									геле-сыворотке Mineral 89 — это позволило{' '}
									<span>сократить использование 18 тонн пластика.</span>
								</p>
								<p>
									Натуральная высокомолекулярная гиалуроновая кислота в составе
									средств VICHY получена{' '}
									<span>
										из растительного сырья путем <b>биоферментации.</b>
									</span>
								</p>
							</Body>
						}
					/>
					<Ad>Реклама skin.ru ERID: 2SDnjdmZDA8</Ad>
				</ProductModal.Content>
			</ScrollbarsBody>
		</Wrapper>
	)
}

export default MineralModal

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

const Title = styled.div`
	font-weight: 300;
	font-size: 20px;
	line-height: 120%;
	letter-spacing: 0.07em;
	text-transform: uppercase;
	color: #122c4f;

	margin-bottom: 12px;

	b {
		font-weight: 600;
	}
`

const Container = styled.div`
	width: 60%;

	${media.md`
		width: 100%;
  `}
`

const Body = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-content: center;

	${media.md`
		margin-top: 24px;
	`}
	p {
		font-weight: 300;
		font-size: 16px;
		line-height: 125%;
		color: #1f1f1f;

		span {
			color: #0290af;
			font-weight: 600;
		}

		b {
			text-transform: uppercase;
			font-weight: 800;
		}

		&:not(:last-child) {
			margin-bottom: 18px;
		}
	}
`

const Ad = styled.div`
	margin-top: 15px;
	color: #141414;
	text-align: center;
	font-size: 14px;
	font-weight: 300;
	line-height: 120%;
	${media.sm`
	font-size: 12px;
  `}
`
