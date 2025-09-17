import React from 'react'
import Box from '../../Box'
import Modal from '../../Modal'
import LikeButton from './LikeButton'
import MobileVisible from './MobileVisible'
import ProductAccordion from './ProductAccordion'
import ProductBackButton from './ProductBackButton'
import ProductBody from './ProductBody'
import ProductColumn from './ProductColumn'
import ProductExtendButton from './ProductExtendButton'
import ProductFooter from './ProductFooter'
import ProductHead from './ProductHead'
import ProductKnowMore from './ProductKnowMore'
import ProductLegend from './ProductLegend'
import ProductLine, { ProductLineContainer, ProductVolume } from './ProductLine'
import ProductList, { ProductUList } from './ProductList'
import ProductOtherProducts from './ProductOtherProducts'
import ProductPrice from './ProductPrice'
import ProductRecommendation from './ProductRecommendation'
import ProductTestimony from './ProductTestimony'
import ProductTypography from './ProductTypography'
import {
	ProductLeftContainer,
	ProductRightContainer,
} from '@/components/shared/product-modal/ProductContainer'
import {
	ProductBrandContainer,
	ProductBrandName,
	ProductBrandTitle,
} from '@/components/shared/product-modal/ProductBrand'
import styled from 'styled-components'
import media from '@/utils/media'

const ProductModal = ({ children, open, onClose }) => {
	return (
		<Modal open={open} onClose={onClose}>
			{children}
		</Modal>
	)
}

const ProductModalContent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	padding: 16px 24px 16px 24px;

	${media.md`
        padding: 16px;
	`}
`

ProductModal.LikeButton = LikeButton
ProductModal.MobileVisible = MobileVisible
ProductModal.Body = ProductBody
ProductModal.Footer = ProductFooter
ProductModal.KnowMore = ProductKnowMore
ProductModal.Box = Box
ProductModal.Recommendation = ProductRecommendation
ProductModal.Column = ProductColumn
ProductModal.Typography = ProductTypography
ProductModal.Legend = ProductLegend
ProductModal.Accordion = ProductAccordion
ProductModal.List = ProductList
ProductModal.UList = ProductUList
ProductModal.Testimony = ProductTestimony
ProductModal.OtherProducts = ProductOtherProducts
ProductModal.Head = ProductHead
ProductModal.ExtendButton = ProductExtendButton
ProductModal.Line = ProductLine
ProductModal.LineContainer = ProductLineContainer
ProductModal.Volume = ProductVolume
ProductModal.LeftContainer = ProductLeftContainer
ProductModal.RightContainer = ProductRightContainer
ProductModal.BrandContainer = ProductBrandContainer
ProductModal.BrandTitle = ProductBrandTitle
ProductModal.BrandName = ProductBrandName
ProductModal.Price = ProductPrice
ProductModal.Back = ProductBackButton
ProductModal.Content = ProductModalContent

export default ProductModal
