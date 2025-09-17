import styled from 'styled-components'
import media from '@/utils/media'
import { FC } from 'react'

interface IGreenProduct {
	title?: any
	icon?: string
	content: any
	src?: string
	srcHeight?: number
	container?: any
}

const GreenProduct: FC<IGreenProduct> = ({
	title,
	icon,
	content,
	src,
	srcHeight,
	container: Container = Content,
}) => {
	return (
		<GammaWrapper>
			<Header>
				{title && <Title>{title}</Title>}
				{icon && (
					<IconWrapper>
						<img src={icon} alt="eco" />
					</IconWrapper>
				)}
			</Header>
			<Wrapper>
				<ImageWrapper>
					<img height={srcHeight} src={src} alt="product image" />
				</ImageWrapper>

				<Container>{content}</Container>
			</Wrapper>
		</GammaWrapper>
	)
}

export default GreenProduct

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

const Title = styled.div`
	font-weight: 600;
	font-size: 22px;
	line-height: 120%;
	letter-spacing: 0.07em;
	text-transform: uppercase;
	color: #122c4f;

	${media.md`
		font-size: 20px;
	`}
`

const IconWrapper = styled.div`
	position: absolute;
	top: 20px;
	right: 24px;

	${media.md`
        img {
            max-width: 48px;
            max-height: 48px;
        }
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
	width: 60%;

	${media.md`
		padding-top: 24px;
		width: 100%;
  `}
`
const ImageWrapper = styled.div`
	margin-right: 24px;
	width: 40%;

	img {
		max-width: 100%;
	}

	${media.md`
		text-align: center;
     	width: 100%;
  `}
`
