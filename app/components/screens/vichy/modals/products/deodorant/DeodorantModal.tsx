import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import DeodorantLine from '@/components/screens/vichy/modals/products/deodorant/DeodorantLine'
import styled from 'styled-components'
import DeodorantBasicComponents from '@/components/screens/vichy/modals/products/deodorant/DeodorantBasicComponents'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const position = {
	bottom: '-2%',
	right: '-2%',
}

const mobilePos = {
	top: '20%',
	left: '14%',
}

const DeodorantModal = ({ close }) => {
	const { isMobile } = useResponsive()
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.vichyDeodorantVisit)
		setLike(likes.includes(LikesEnum.vichyDeodorantLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.vichyDeodorantLike)
		addLike(LikesEnum.vichyDeodorantLike)
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
					<ProductModal.BrandContainer $color="linear-gradient(98deg, #C0D1D7 10.39%, #EBF4F8 43.92%, #F3FBFE 54.7%, #87AAB9 111.7%)">
						<Text>дезодоранты</Text>
						<Brand>VICHY</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.MobileVisible visible={false}>
							<DeodorantLine />
						</ProductModal.MobileVisible>
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<DeodorantBasicComponents />
						<Molecule
							type="vichy"
							id="vichy-deodorant"
							position={isMobile ? mobilePos : position}
							direction="left"
							translate={{ x: '-50%' }}
						/>
					</ProductModal.RightContainer>
				</ProductModal.Column>

				<ProductModal.MobileVisible visible={true}>
					<DeodorantLine />
				</ProductModal.MobileVisible>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/vichy/modals/deodorant/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.vichyDeodorantLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default DeodorantModal

const Text = styled.div`
	font-weight: 400;
	font-size: 24px;
	line-height: 30px;
	letter-spacing: 1px;
	color: #2c435f;
`

const Brand = styled(Text)`
	font-weight: 800;
`
