import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TolerianeRosaliacComponents from '@/components/screens/lrp/modals/products/toleriane-rosaliac/TolerianeRosaliacComponents'
import TolerianeRosaliacComponentsRight from '@/components/screens/lrp/modals/products/toleriane-rosaliac/TolerianeRosaliacComponentsRight'

const TolerianeRosaliacModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpRosalicVisit)
		setLike(likes.includes(LikesEnum.lrpRosalicLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.lrpRosalicLike)
		addLike(LikesEnum.lrpRosalicLike)
		setLike(true)
	}

	const onCloseHandler = () => {
		if (typeof close === 'function') {
			close()
		}
	}

	return (
		<ProductModal open={true} onClose={onCloseHandler}>
			<ProductModal.Body onClose={onCloseHandler}>
				<ProductModal.Column>
					<ProductModal.BrandContainer $color="#D32A5C">
						<Text>ГАММА</Text>
						<Brand>
							TOLERIANE
							<br />
							Rosaliac
						</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Комплексный уход для пациентов с чувствительной, склонной к
							розацеа кожей
						</ProductModal.Typography>

						{/* <ProductModal.MobileVisible visible={false}>
							<TolerianeLine />
						</ProductModal.MobileVisible> */}
						<TolerianeRosaliacComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<TolerianeRosaliacComponentsRight />
					</ProductModal.RightContainer>
				</ProductModal.Column>

				{/* <ProductModal.MobileVisible visible={true}>
					<TolerianeLine />
				</ProductModal.MobileVisible> */}
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/toleriane-rosaliac/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.lrpTolerianeLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default TolerianeRosaliacModal

const Text = styled.div`
	font-weight: 300;
	font-size: 20px;
	line-height: 24px;
	letter-spacing: 1px;
`

const Brand = styled(Text)`
	font-weight: 800;
	font-size: 24px;
	line-height: 26px;

	span {
		font-size: 24px;
		line-height: 24px;
		font-weight: 300;
	}
`
