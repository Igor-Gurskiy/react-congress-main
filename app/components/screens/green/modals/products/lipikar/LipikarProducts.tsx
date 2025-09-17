import styled from 'styled-components'
import media from '@/utils/media'
import { FC } from 'react'
import useWindowSize from '@/hooks/useWindowSize'

const LipikarProducts: FC = () => {
	return (
		<GammaWrapper>
			<Header>
				<IconWrapper>750 мл</IconWrapper>
			</Header>
			<Wrapper>
				<ImageWrapper>
					<Product
						src="/assets/images/green/modals/lipikar/lavant.png"
						srcHeight={198}
						mSrc={160}
						name="Lipikar Gel Lavant"
					/>
					<Product
						src="/assets/images/green/modals/lipikar/oil.png"
						srcHeight={198}
						mSrc={160}
						name="Lipikar Масло AP+"
					/>
					<Product
						src="/assets/images/green/modals/lipikar/water.png"
						srcHeight={198}
						mSrc={160}
						name="Мицеллярная вода ULTRA"
					/>
				</ImageWrapper>

				<Content>
					Новый формат позволяет <br />использовать <b>меньше пластика</b>, <br />чем
					требуется для производства трех флаконов по 200 мл. Если Вы часто
					пользуетесь данными средствами, <br />то{' '}
					<b>750 мл – Ваш экологичный выбор</b>.
				</Content>
			</Wrapper>
		</GammaWrapper>
	)
}

export default LipikarProducts

const Product = ({ src, mSrc, srcHeight, name }) => {
	const [width] = useWindowSize()
	const isMobile = width < 768

	return (
		<ProductWrapper>
			<ProductImage
				src={src}
				height={isMobile ? mSrc : srcHeight}
				alt="product image"
			/>
			<ProductName>{name}</ProductName>
		</ProductWrapper>
	)
}

const ProductName = styled.div`
	font-weight: 600;
	font-size: 12px;
	line-height: 120%;
	text-align: center;
	text-transform: uppercase;
	max-width: 250px;

	color: #122c4f;

	${media.md`
		font-size: 10px;
	`}
`

const ProductImage = styled.img`
	display: block;
	margin-bottom: 8px;
`

const ProductWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	flex-basis: 33.3333%;
	width: 33.3333%;

	img {
		object-fit: contain;
	}

	&:not(:last-child) {
		margin-right: 4px;
	}
`

const GammaWrapper = styled.div`
	background: #f6f6f6;
	border-radius: 8px;
	padding: 24px;
	width: 100%;
	position: relative;

	&:not(:last-child) {
		margin-bottom: 24px;
	}
`

const Header = styled.div`
	${media.md`
		margin-bottom: 24px;
	  `}
`

const IconWrapper = styled.div`
	position: absolute;
	top: 20px;
	right: 24px;
	height: 38px;
	background: #36b0fc;

	font-weight: 800;
	font-size: 20px;
	line-height: 20px;
	text-align: center;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border-radius: 4px;

	${media.md`
		display: none;
	`}
`

const Wrapper = styled.div`
	display: flex;

	${media.md`
		flex-direction: column;
	  `}
`
const Content = styled.div`
	padding-top: 64px;
	font-weight: 300;
	font-size: 16px;
	line-height: 20px;
	color: #1f1f1f;

	${media.md`
		padding-top: 24px;
		font-size: 14px;
  `}
`
const ImageWrapper = styled.div`
	margin-right: 24px;
	display: flex;

	${media.md`
		margin-right: 0px;
		text-align: center;
  	`}
`
