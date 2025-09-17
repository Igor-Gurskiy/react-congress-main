import React from 'react'
import styled, { css } from 'styled-components'
import ProductTypography from './ProductTypography'
import media from '@/utils/media'

type ProductLinePropsType = {
	text?: string
	filter?: boolean
}

const ProductLine: React.FC<ProductLinePropsType> = ({
	children,
	text = '',
	filter = false,
}) => {
	return (
		<Legend>
			<LegendImageWrapper $filter={filter}>{children}</LegendImageWrapper>
			{text && (
				<LineText $ml={8} $mt={16} $mb={8}>
					{text}
				</LineText>
			)}
		</Legend>
	)
}

export default ProductLine

export const ProductVolume = styled.div`
	font-weight: 400;
	font-size: 11px;
	line-height: 12px;
	text-align: center;
	color: #122c4f;
	margin-top: 16px;
`

export const ProductLineContainer = styled.div`
	margin-top: 16px;
	position: relative;

	${media.md`
    margin-top: 16px;
    padding: 0 16px;
  `}
`

const LineText = styled(ProductTypography)`
	font-size: 12px;
`

export const Volume = styled.div`
	font-weight: 500;
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
	font-weight: 500;
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
	background: #f6f6f6;
	border-radius: 8px;
	padding: 14px;
	position: relative;
	margin: 8px 0;
`
export const LegendImageWrapper = styled.div<{ $filter?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	flex-direction: column;

	img {
		z-index: 1;
		position: relative;

		${({ $filter }) =>
			$filter &&
			css`
				filter: drop-shadow(8px 4px 2px rgba(45, 45, 45, 0.25))
					drop-shadow(3px 4px 4px rgba(45, 45, 45, 0.25));
			`}/* max-width: 100%; */ /* image-rendering: -webkit-optimize-contrast;
		image-rendering: pixelated; */
	}
`
