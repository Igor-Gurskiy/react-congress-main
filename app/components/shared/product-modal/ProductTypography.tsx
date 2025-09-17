import media from '@/utils/media'
import styled, { css } from 'styled-components'
import Box, { BoxPropsType } from '../../Box'

interface ProductTypographyPropsType extends BoxPropsType {
	$description?: boolean
	$title?: boolean
	$subtitle?: boolean
	$list?: boolean
	$special?: boolean
	$textTransform?: string
	$textAlign?: string
	$brand?: boolean
}

const ProductTypography = styled(Box)<ProductTypographyPropsType>`
	font-family: 'Gilroy', sans-serif;

	${({ $title }) =>
		$title &&
		css`
			font-weight: 800;
			font-size: 26px;
			line-height: 32px;
			text-transform: uppercase;
			color: #1f1f1f;
			${media.md`
            font-size: 18px;
            line-height: 24px;
            padding-right: 50px;
        `}
		`}

	${({ $subtitle }) =>
		$subtitle &&
		css`
			font-weight: 600;
			font-size: 12px;
			line-height: 120%;
			letter-spacing: 1px;
			text-transform: uppercase;
			color: #122c4f;
		`}

  ${({ $brand }) =>
		$brand &&
		css`
			font-weight: 600;
			font-size: 13px;
			line-height: 16px;
			color: #122c4f;
		`}

  ${({ $special }) =>
		$special &&
		css`
			font-weight: 800;
			font-size: 16px;
			line-height: 21px;
			text-transform: uppercase;
			color: #009de0;
		`}

  ${({ $list }) =>
		$list &&
		css`
			font-weight: 300;
			font-size: 12px;
			line-height: 16px;
			color: #1f1f1f;
		`}

  ${({ $description }) =>
		$description &&
		css`
			font-weight: 300;
			font-size: 14px;
			line-height: 20px;
			color: #1f1f1f;
		`}

  ${({ $textTransform }) =>
		$textTransform &&
		css`
			text-transform: ${$textTransform};
		`}

  ${({ $textAlign }) =>
		$textAlign &&
		css`
			text-align: ${$textAlign};
		`}
`

export default ProductTypography
