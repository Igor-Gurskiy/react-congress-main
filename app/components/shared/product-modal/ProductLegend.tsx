import media from '@/utils/media'
import React from 'react'
import styled from 'styled-components'
import ProductTypography from './ProductTypography'

type ProductLegendPropsType = {
	src: string
	price?: string
	volume?: string
	scale?: number
}

const ProductLegend: React.FC<ProductLegendPropsType> = ({
	src,
	price,
	volume,
	scale = 1,
}) => {
	return (
		<Legend>
			<LegendImageWrapper>
				<img src={src} style={{ transform: `scale(${scale})` }} alt="" />
				{price && (
					<LegendPrice>
						<div>{price}</div>
						<Volume>{volume}</Volume>
					</LegendPrice>
				)}
			</LegendImageWrapper>
			<ProductTypography $ml={8} $mt={16} $mb={8}>
				*цена на официальном сайте Vichy
			</ProductTypography>
		</Legend>
	)
}

export default ProductLegend

export const Volume = styled.div`
	font-weight: 800;
	font-size: 11px;
	line-height: 12px;
	color: #1f1f1f;
	opacity: 0.5;
`

export const LegendPrice = styled.div`
	width: 56px;
	height: 56px;
	position: absolute;
	top: 16px;
	right: 16px;
	font-weight: 800;
	font-size: 13px;
	line-height: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 50%;
	background: #d7e5ed;
`

export const Legend = styled.div`
	background: #f2f2f2;
	border-radius: 8px;
	padding: 8px;
	position: relative;
`
export const LegendImageWrapper = styled.div`
	height: 256px;
	background: #ffffff;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		/* max-height: 90%;
        max-width: 90%; */
	}
	${media.md`
        /* height: 160px; */
    `}
`
