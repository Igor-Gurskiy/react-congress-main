import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AntiageComponents from '@/components/screens/lrp/modals/products/antiage/AntiageComponents'
import AntiageComponentsRight from '@/components/screens/lrp/modals/products/antiage/AntiageComponentsRight'

const AntiageModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpSerumVisit)
		setLike(likes.includes(LikesEnum.lrpSerumLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.lrpSerumLike)
		addLike(LikesEnum.lrpSerumLike)
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
					<ProductModal.BrandContainer $color="linear-gradient(92.71deg, #D9D9D9 16.98%, #F2F2F2 49.79%, #D0D0D0 95.72%)">
						<Brand>Антивозрастные</Brand>
						<Text>Сыворотки</Text>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Эффективное и безопасное решение <p />для борьбы с возрастными
							изменениями кожи
						</ProductModal.Typography>

						<AntiageComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<AntiageComponentsRight />
					</ProductModal.RightContainer>
				</ProductModal.Column>

				{/* <ProductModal.MobileVisible visible={true}>
					<AntiageLine />
				</ProductModal.MobileVisible> */}
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/antiage/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.lrpSerumLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default AntiageModal

const Text = styled.div`
	font-weight: 300;
	font-size: 20px;
	line-height: 26px;
	letter-spacing: 1px;
	color: #1f1f1f;
`

const Brand = styled(Text)`
	font-weight: 800;
	font-size: 20px;
	line-height: 26px;

	span {
		font-size: 38px;
		line-height: 38px;
		font-weight: 400;
	}
`
