import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TolerianeComponents from '@/components/screens/lrp/modals/products/toleriane/TolerianeComponents'
import TolerianeComponentsRight from '@/components/screens/lrp/modals/products/toleriane/TolerianeComponentsRight'

const TolerianeModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const spec = useUIStore((state) => state.specialization)
	const trackerId =
		spec === 'allerg'
			? EventsEnum.lrpTolerianeAllergVisit
			: EventsEnum.lrpTolerianeVisit

	const likeId =
		spec === 'allerg'
			? LikesEnum.lrpTolerianeAllergLike
			: LikesEnum.lrpTolerianeLike

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(trackerId)
		setLike(likes.includes(likeId))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(likeId)
		addLike(likeId)
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
					<ProductModal.BrandContainer $color="#36B0FC">
						<Text>ГАММА</Text>
						<Brand>
							TOLERIANE
							<br />
							DERMALLERGO
						</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Комплексный уход, мгновенно успокаивающий и значительно снижающий
							все проявления чувствительной и склонной к аллергии кожи
						</ProductModal.Typography>

						{/* <ProductModal.MobileVisible visible={false}>
							<TolerianeLine />
						</ProductModal.MobileVisible> */}
						<TolerianeComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<TolerianeComponentsRight />
					</ProductModal.RightContainer>
				</ProductModal.Column>

				{/* <ProductModal.MobileVisible visible={true}>
					<TolerianeLine />
				</ProductModal.MobileVisible> */}
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/toleriane/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={likeId}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default TolerianeModal

const Text = styled.div`
	font-weight: 300;
	font-size: 20px;
	line-height: 26px;
	letter-spacing: 1px;
`

const Brand = styled(Text)`
	font-weight: 800;
	font-size: 24px;
	line-height: 26px;

	span {
		font-size: 38px;
		line-height: 30px;
		font-weight: 400;
	}
`
