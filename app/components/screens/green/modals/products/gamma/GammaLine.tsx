import React from 'react'
import GreenProduct from '@/components/screens/green/modals/products/GreenProduct'
import styled from 'styled-components'
import media from '@/utils/media'

const GammaLine = () => {
	return (
		<div>
			<GreenProduct
				title="LIPIKAR"
				icon="/assets/images/green/modals/eco.png"
				src="/assets/images/green/modals/gamma/baume.png"
				srcHeight={195}
				content={
					<>
						<Body>
							НОВОЕ ПОКОЛЕНИЕ УПАКОВКИ
							<br />
							<b>нА 60% МЕНЬШЕ ПЛАСТИКА*</b>
						</Body>
						<Tip>
							*По сравнению с пластиковой упаковкой Lipikar Baume AP+
							<span>M</span> 200ml
						</Tip>
					</>
				}
			/>

			<GreenProduct
				title="ANTHELIOS"
				icon="/assets/images/green/modals/eco.png"
				src="/assets/images/green/modals/gamma/dermo.png"
				srcHeight={252}
				content={
					<>
						<Body>
							НОВОЕ ПОКОЛЕНИЕ УПАКОВКИ
							<br />
							<b>нА 75% МЕНЬШЕ ПЛАСТИКА*</b>
						</Body>
						<Tip>
							*По сравнению с аналогичными пластиковыми упаковками Anthelios
							200ml
						</Tip>
					</>
				}
			/>

			<GreenProduct
				title="LIPIKAR AP+M"
				icon="/assets/images/green/modals/recycle.png"
				src="/assets/images/green/modals/gamma/baumeapm.png"
				srcHeight={295}
				content={
					<>
						<Content>
							Флакон{' '}
							<b>
								Lipikar Бальзам AP+<small>M</small>
							</b>
							, 400 мл производится из
							<br />
							<span>100% переработанного пластика,</span>
							подлежащего повторной переработке
						</Content>
					</>
				}
			/>
		</div>
	)
}

export default GammaLine

const Body = styled.div`
	font-weight: 300;
	font-size: 18px;
	line-height: 110%;
	text-transform: uppercase;
	color: #1f1f1f;

	margin-bottom: 24px;

	${media.md`
			font-size: 16px;
	`}
	b {
		font-weight: 800;
		font-size: 32px;
		line-height: 110%;
		text-transform: uppercase;
		color: #00a8ff;

		${media.md`
			font-size: 26px;
		  `}
	}
`

const Content = styled.div`
	font-weight: 300;
	font-size: 16px;
	line-height: 125%;
	text-transform: none;

	color: #1f1f1f;
	margin-bottom: 24px;

	b {
		text-transform: uppercase;
	}

	span {
		font-weight: 800;
		font-size: 24px;
		line-height: 26px;
		text-transform: uppercase;
		color: #00a8ff;
		margin: 8px 0;
		display: block;

		${media.md`
			font-size: 20px;
		  `}
	}
`

const Tip = styled.div`
	font-weight: 300;
	font-size: 12px;
	line-height: 133%;
	color: #1f1f1f;
	span {
		font-size: 10px;
	}
`
