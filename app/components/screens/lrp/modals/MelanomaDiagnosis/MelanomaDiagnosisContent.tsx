import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import ScrollbarsBody from '@/components/ScollbarsBody'
import useWindowSize from '@/hooks/useWindowSize'
import Box from '@/components/Box'
import ProductBackButton from '@/components/shared/product-modal/ProductBackButton'
import Molecule from '@/components/ui/molecule/Molecule'

const BodyWrapper = styled.div`
	width: 100%;
`

const MelanomaDiagnosisContent = ({ close }) => {
	const [width] = useWindowSize()

	return (
		<Wrapper>
			<ScrollbarsBody factor={-50}>
				<TopContent>
					<Header>
						<BackBox>
							<ProductBackButton onClick={close} />
						</BackBox>
						<Title>ДЕНЬ ДИАГНОСТИКИ МЕЛАНОМЫ</Title>
						<Subtitle>
							Ежегодная кампания, направленная на&nbsp;
							<span>раннюю диагностику заболевания</span>
						</Subtitle>
					</Header>
					<Description>
						В&nbsp;мае 2023&nbsp;года акция прошла в&nbsp;России в&nbsp;
						<span>16-й раз</span>
					</Description>
					<Molecule
						id="lrp-melanome-day"
						position={{ bottom: '45px', left: width < 408 ? '210px' : width < 521 ? '320px' : '210px' }}
						direction="right"
					/>
				</TopContent>
				<BottomContent>
					<ItemList>
						<ItemListContent>
							<Item>
								137 <br /> <p>городов</p>
							</Item>
							<Item>
								13 750
								<br /> <p>пациентов</p>
							</Item>
						</ItemListContent>
						<ItemListContent>
							<Item>
								1 533
								<br /> <p>дерматолога</p>
							</Item>
							<Item>
								201
								<br />
								<p>
									подозрение <br />
									на меланому
								</p>
							</Item>
						</ItemListContent>
					</ItemList>
					<PhotoContainer>
						<PhotoContent>
							<img
								src="/assets/images/lrp/modals/melanoma/item1.png"
								alt="item1"
							/>
							<img
								src="/assets/images/lrp/modals/melanoma/item2.png"
								alt="item2"
							/>
						</PhotoContent>
						<PhotoContent>
							<img
								src="/assets/images/lrp/modals/melanoma/item3.png"
								alt="item3"
							/>
							<img
								src="/assets/images/lrp/modals/melanoma/item4.png"
								alt="item4"
							/>
						</PhotoContent>
					</PhotoContainer>
				</BottomContent>
			</ScrollbarsBody>
		</Wrapper>
	)
}

export default MelanomaDiagnosisContent

const BackBox = styled(Box)`
	margin-bottom: 32px;

	${media.md`
    padding: 16px;
    margin-bottom: 8px;
  `}
`

const TopContent = styled.div`
	background-image: url('/assets/images/lrp/modals/melanoma/melanoma__bg.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	position: relative;
	${media.sm`
	background-image: none;
	background: #F4852C;
  `}
`

const Header = styled.div`
	padding: 32px 30px 47px 30px;
	${media.sm`
	background-image: url('/assets/images/lrp/modals/melanoma/melanoma__bg.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position:center;
		padding: 16px 16px 24px 16px;
  `}
	${media.phone`
	background-position: right;
  `}
`

const Title = styled.div`
	color: #fff;
	font-size: 40px;
	font-weight: 800;
	line-height: 120%;
	letter-spacing: 2px;
	text-transform: uppercase;
	margin-bottom: 16px;
	${media.md`
	font-size: 32px;
  `}
`
const Subtitle = styled.div`
	color: #fff;
	font-size: 24px;
	font-weight: 300;
	line-height: 120%;
	letter-spacing: 0.96px;
	max-width: 550px;

	span {
		font-weight: 800;
	}

	${media.md`
	font-size: 20px;
  `}
`

const Description = styled.div`
	color: #fff;
	font-size: 24px;
	font-weight: 300;
	line-height: 110%;
	letter-spacing: 0.48px;
	text-transform: uppercase;
	padding: 46px 10px 46px 30px;
	border-top: 1px solid #fff;
	border-bottom: 1px solid #fff;

	span {
		font-size: 36px;
		line-height: 48px;
		font-weight: 800;
		letter-spacing: 0.72px;
		white-space: nowrap;
	}

	${media.md`
	font-size: 20px;
  `}
`

const BottomContent = styled.div``

const ItemList = styled.div`
	display: flex;
	width: 100%;
	border-bottom: 1px solid #fff;
	${media.md`
  flex-direction: column;
  `}
`
const ItemListContent = styled.div`
	display: flex;
	width: 50%;

	${media.md`
	width: 100%;
  `}
	&:nth-child(1) {
		${media.md`
	border-bottom: 1px solid #fff;
  `}
	}
`
const Item = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 150px;
	align-items: center;
	color: #f4852c;
	text-align: center;
	font-size: 48px;
	font-weight: 800;
	line-height: 48px;
	background: #fff;
	width: 50%;

	p {
		font-size: 16px;
		line-height: 16px;
	}

	&:nth-child(2n) {
		color: #fff;
		background: #f4852c;
	}

	${media.md`
	font-size: 40px;
  `}
`

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	transition: all 0.3s ease-out;
`

const PhotoContainer = styled.div`
	display: flex;
	width: 100%;
`
const PhotoContent = styled.div`
	display: flex;
	width: 50%;

	${media.phone`
	flex-direction: column;
			width: 100%;
  `}
	&:nth-child(1) {
		border-right: 1px solid #fff;
	}

	img {
		width: 50%;
		max-height: 249px;

		&:not(:last-child) {
			border-right: 1px solid #fff;
		}

		${media.phone`
			width: 100%;
			max-height: 260px;
  `}
	}
`
