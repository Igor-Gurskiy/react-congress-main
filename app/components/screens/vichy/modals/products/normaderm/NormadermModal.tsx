import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NormadermLine from '@/components/screens/vichy/modals/products/normaderm/NormadermLine'
import NormadermIntensiveComponents from '@/components/screens/vichy/modals/products/normaderm/NormadermIntensiveComponents'
import NormadermBasicComponents from '@/components/screens/vichy/modals/products/normaderm/NormadermBasicComponents'
import NormadermPhotoProtectionComponents from '@/components/screens/vichy/modals/products/normaderm/NormadermPhotoProtectionComponents'

const NormadermModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.vichyNormVisit)
		setLike(likes.includes(LikesEnum.vichyNormLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.vichyNormLike)
		addLike(LikesEnum.vichyNormLike)
		setLike(true)
	}

	const onCloseHandler = () => {
		if (typeof close === 'function') {
			close()
		}
	}

	return (
		<ProductModal open={true} onClose={onCloseHandler}>
			<ProductModal.Body share={true} onClose={onCloseHandler}>
				<ProductModal.Column>
					<ProductModal.BrandContainer $color="#00964A">
						<Text>ГАММА</Text>
						<Brand>NORMADERM</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Эффективный уход за кожей пациентов с&nbsp;акне
						</ProductModal.Typography>

						<ProductModal.MobileVisible visible={false}>
							<NormadermLine />
						</ProductModal.MobileVisible>
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<NormadermIntensiveComponents />
						<NormadermBasicComponents />
						<NormadermPhotoProtectionComponents />
					</ProductModal.RightContainer>
				</ProductModal.Column>

				<ProductModal.MobileVisible visible={true}>
					<NormadermLine />
				</ProductModal.MobileVisible>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/vichy/modals/normaderm/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.vichyNormLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default NormadermModal

const Text = styled.div`
	font-weight: 400;
	font-size: 24px;
	line-height: 30px;
	letter-spacing: 1px;
`

const Brand = styled(Text)`
	font-weight: 800;
`
