import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CicaplastComponents from '@/components/screens/lrp/modals/products/cicaplast/CicaplastComponents'
import CicaplastComponentsRight from '@/components/screens/lrp/modals/products/cicaplast/CicaplastComponentsRight'

const CicaplastModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	const spec = useUIStore((state) => state.specialization)
	const trackerId =
		spec === 'allerg'
			? EventsEnum.lrpCicaplastAllergVisit
			: EventsEnum.lrpCicaplastVisit

	const likeId =
		spec === 'allerg'
			? LikesEnum.lrpCicaplastAllergLike
			: LikesEnum.lrpCicaplastLike

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
						<Brand>CICAPLAST</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Мультивосстанавливающие средства <p />с доказанной эффективностью,
							ускоряющие процессы регенерации кожи
						</ProductModal.Typography>

						<CicaplastComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<CicaplastComponentsRight />
					</ProductModal.RightContainer>
				</ProductModal.Column>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/cicaplast/bg.png"
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

export default CicaplastModal

const Text = styled.div`
	font-weight: 300;
	font-size: 20px;
	line-height: 26px;
	letter-spacing: 1px;
`

const Brand = styled(Text)`
	font-weight: 800;
	font-size: 26px;
	line-height: 26px;

	span {
		font-size: 26px;
		line-height: 26px;
		font-weight: 400;
	}
`
