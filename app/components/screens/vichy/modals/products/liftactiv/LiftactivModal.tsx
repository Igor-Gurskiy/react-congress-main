import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import LiftactivBasicComponents from '@/components/screens/vichy/modals/products/liftactiv/LiftactivBasicComponents'
import LiftactivIntensiveComponents from '@/components/screens/vichy/modals/products/liftactiv/LiftactivIntensiveComponents'
import LiftactivPhotoProtectionComponents from '@/components/screens/vichy/modals/products/liftactiv/LiftactivPhotoProtectionComponents'
import LiftactivLine from '@/components/screens/vichy/modals/products/liftactiv/LiftactivLine'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const position = {
	bottom: '15%',
	left: '50%',
}

const mobilePos = {
	bottom: '15%',
	left: '15%',
}

const LiftactivModal = ({ close }) => {
	const { isMobile } = useResponsive()
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.vichyLifVisit)
		setLike(likes.includes(LikesEnum.vichyLifLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.vichyLifLike)
		addLike(LikesEnum.vichyLifLike)
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
					<ProductModal.BrandContainer style={{ position: 'relative' }}>
						<p>СРЕДСТВА</p>
						<ProductModal.BrandTitle>
							АНТИВОЗРАСТНОГО УХОДА
						</ProductModal.BrandTitle>
						<ProductModal.BrandName>VICHY</ProductModal.BrandName>
						<Molecule
							type="vichy"
							id="vichy-serum"
							// position={isMobile ? mobilePos : position}
							position={{
								top: '-20%',
								right: '-10%',
							}}
							direction="left"
							translate={{ x: '-50%' }}
						/>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Эффективное дополнение комплексных протоколов ведения пациентов
						</ProductModal.Typography>

						<ProductModal.MobileVisible visible={false}>
							<LiftactivLine />
						</ProductModal.MobileVisible>
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<LiftactivIntensiveComponents />
						<LiftactivBasicComponents />
						<LiftactivPhotoProtectionComponents />
					</ProductModal.RightContainer>
				</ProductModal.Column>

				<ProductModal.MobileVisible visible={true}>
					<LiftactivLine />
				</ProductModal.MobileVisible>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/vichy/modals/liftactiv/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.vichyLifLike}
				/>
				<Molecule
					type="vichy"
					id="vichy-serum-footer"
					position={isMobile ? mobilePos : position}
					direction="left"
					translate={{ x: '-50%' }}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default LiftactivModal
