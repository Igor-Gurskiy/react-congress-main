import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LipikarPedsCareComponents from '@/components/screens/lrp/modals/products/lipikar-peds/LipikarPedsCareComponents'
import LipikarPedsCleaningComponents from '@/components/screens/lrp/modals/products/lipikar-peds/LipikarPedsCleaningComponents'

const LipikarPedsModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const spec = useUIStore((state) => state.specialization)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpLipikarPedsVisit)
		setLike(likes.includes(LikesEnum.lrpLipikarPedsLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.lrpLipikarPedsLike)
		addLike(LikesEnum.lrpLipikarPedsLike)
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
							LIPIKAR <span>AP+</span>
						</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Липидовосполняющие средства, которые мгновенно увлажняют,
							успокаивают и нормализуют микробиом склонной к атопии кожи
						</ProductModal.Typography>

						<LipikarPedsCareComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<LipikarPedsCleaningComponents />
					</ProductModal.RightContainer>
				</ProductModal.Column>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/lipikar/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					color="#000"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.lrpLipikarPedsLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default LipikarPedsModal

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
