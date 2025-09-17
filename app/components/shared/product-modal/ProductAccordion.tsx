import media from '@/utils/media'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import ProductTypography from './ProductTypography'
import ProductModal from '@/components/shared/product-modal/ProductModal'

type ProductAccordionPropsType = {
	src: string
	srcHeight?: number | string
	title: string | JSX.Element
	description?: string | JSX.Element
	content?: string | JSX.Element
	extend?: boolean
	isOpen?: boolean
	stroke?: string
	disc?: string
	filter?: boolean
}

const ProductAccordion: React.FC<ProductAccordionPropsType> = ({
	src,
	srcHeight,
	title,
	content,
	description = undefined,
	extend = true,
	isOpen = true,
	stroke = undefined,
	disc = '#E41315',
	filter = false,
}) => {
	const [open, setOpen] = useState(isOpen !== undefined ? isOpen : true)

	useEffect(() => {
		setOpen(isOpen)
	}, [isOpen])

	let props: any = {}

	if (srcHeight) {
		props.height = srcHeight
	}

	return (
		<AccordionBox active={open || !!description} $stroke={stroke}>
			<AccordionHeader $filter={filter}>
				<ImageWrapper>
					<img {...props} src={src} />
				</ImageWrapper>
				<AccordionView>
					<ProductModal.Typography $brand $mb={8}>
						{title}
					</ProductModal.Typography>
					{description && (
						<DetailsContent active={true} $disc={disc}>
							{typeof content === 'string' ? (
								<ProductTypography>{description}</ProductTypography>
							) : (
								description
							)}
						</DetailsContent>
					)}
					{content && (
						<DetailsContent active={open} $disc={disc}>
							{typeof content === 'string' ? (
								<ProductTypography>{content}</ProductTypography>
							) : (
								content
							)}
						</DetailsContent>
					)}
					{extend && (
						<DetailsLink onClick={() => setOpen(!open)}>
							{!open ? 'Подробнее' : 'Свернуть'}
						</DetailsLink>
					)}
				</AccordionView>
			</AccordionHeader>
		</AccordionBox>
	)
}

export default ProductAccordion

const ImageWrapper = styled.div`
	min-width: 50px;
	display: flex;
	justify-content: center;
`

const AccordionBox = styled.div<{ active?: boolean; $stroke?: string }>`
	width: 280px;
	background: #f2f2f2;
	border-radius: 8px;
	min-height: 70px;
	line-height: 18px;
	padding: 14px;
	transition: all 0.7s;

	${(props) =>
		props.active &&
		css`
			//   border-radius: 24px;
			//
		`}

	${({ $stroke }) =>
		$stroke &&
		css`
			border: ${$stroke};
		`}

  ${media.md`
        width: 100%;
    `}
`
const AccordionHeader = styled.div<{ $filter?: boolean }>`
	display: flex;
	align-items: flex-start;
	gap: 16px;

	${({ $filter }) =>
		$filter &&
		css`
			img {
				filter: drop-shadow(4px 2px 1px rgba(45, 45, 45, 0.15))
					drop-shadow(3px 4px 4px rgba(45, 45, 45, 0.15));
			}
		`}
`

const AccordionView = styled.div`
	margin-left: 8px;
	display: flex;
	flex-direction: column;
	align-self: flex-start;
`

const DetailsContent = styled.div<{ $disc: string; active?: boolean }>`
	max-height: 0;
	opacity: 0;
	transition: all 0.5s;
	margin-left: 0px;
	font-size: 12px;
	line-height: 16px;
	color: #1f1f1f;
	overflow: hidden;
	font-weight: 300;

	&:not(:last-child) {
		margin-bottom: 10px;
	}

	& > ul > li {
		font-size: 12px;
		line-height: 16px;
		color: #1f1f1f;
		list-style-type: none;
		position: relative;
		padding-left: 16px;
		font-weight: 300;

		&:not(:last-child) {
			margin-bottom: 6px;
		}

		&:before {
			content: ' ';
			width: 6px;
			height: 6px;
			border-radius: 50%;
			left: 4px;
			top: 5px;
			position: absolute;
			background: ${(props) => props.$disc};
		}
	}

	${(props) =>
		props.active &&
		css`
			max-height: 999px;
			opacity: 1;
			overflow: initial;
			z-index: 1;
		`}
`

const DetailsLink = styled.div`
	font-family: 'Gilroy';
	font-size: 12px;
	line-height: 16px;
	text-decoration-line: underline;
	text-decoration-skip-ink: none;
	color: #8f9396;
	cursor: pointer;
	align-self: flex-start;
`
