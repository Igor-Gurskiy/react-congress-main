import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AntheliosComponents from '@/components/screens/lrp/modals/products/anthelios/AntheliosComponents'
import AntheliosComponentsRight from '@/components/screens/lrp/modals/products/anthelios/AntheliosComponentsRight'

const AntheliosModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const [like, setLike] = useState(false)

	const spec = useUIStore((state) => state.specialization)
	const trackerId =
		spec === 'allerg'
			? EventsEnum.lrpAntheliosAllergVisit
			: EventsEnum.lrpAntheliosVisit

	const likeId =
		spec === 'allerg'
			? LikesEnum.lrpAntheliosAllergLike
			: LikesEnum.lrpAntheliosLike

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
					<ProductModal.BrandContainer $color="#F7943A">
						<Text>ГАММА</Text>
						<Brand>ANTHELIOS</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Средства с очень высокой защитой <p />
							от UVB- и UVA-лучей, доказанной клинической эффективностью <p />и
							безопасностью
						</ProductModal.Typography>

						<AntheliosComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<AntheliosComponentsRight />
					</ProductModal.RightContainer>
				</ProductModal.Column>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/anthelios/bg.png"
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

export default AntheliosModal

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
		line-height: 38px;
		font-weight: 400;
	}
`
