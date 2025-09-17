import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import KidsComponents from '@/components/screens/lrp/modals/products/kids/KidsComponents'
import KidsComponentsRight from '@/components/screens/lrp/modals/products/kids/KidsComponentsRight'

const KidsModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const spec = useUIStore((state) => state.specialization)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpKidsPedsVisit)
		setLike(likes.includes(LikesEnum.lrpKidsPedsLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.lrpKidsLike)
		addLike(LikesEnum.lrpKidsLike)
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
						<Brand>
							ANTHELIOS
							<br />
							для детей
						</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Средства с очень высокой защитой от UVB- и UVA-лучей, доказанной
							клинической эффективностью и безопасностью
						</ProductModal.Typography>
						<KidsComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<KidsComponentsRight />
					</ProductModal.RightContainer>
				</ProductModal.Column>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/kids/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.lrpKidsPedsLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default KidsModal

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
