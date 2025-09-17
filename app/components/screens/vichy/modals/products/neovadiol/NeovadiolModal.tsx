import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import Box from '@/components/Box'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import NeovadiolLine from '@/components/screens/vichy/modals/products/neovadiol/NeovadiolLine'
import NeovadiolIntensiveComponents from '@/components/screens/vichy/modals/products/neovadiol/NeovadiolIntensiveComponents'
import NeovadiolBasicComponents from '@/components/screens/vichy/modals/products/neovadiol/NeovadiolBasicComponents'
import NeovadiolPhotoProtectionComponents from '@/components/screens/vichy/modals/products/neovadiol/NeovadiolPhotoProtectionComponents'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const position = {
	top: '-2%',
	right: '0%',
}

const mobilePos = {
	bottom: '-2%',
	right: '-2%',
}

const NeovadiolModal = ({ close }) => {
	const { isMobile } = useResponsive()
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.vichyNeoVisit)
		setLike(likes.includes(LikesEnum.vichyNeoLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.vichyNeoLike)
		addLike(LikesEnum.vichyNeoLike)
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
					<ProductModal.BrandContainer $color="#F1C34D">
						<p>СРЕДСТВА</p>
						<ProductModal.BrandTitle>
							АНТИВОЗРАСТНОГО УХОДА
						</ProductModal.BrandTitle>
						<ProductModal.BrandName>VICHY</ProductModal.BrandName>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Эффективное дополнение комплексных протоколов ведения пациентов в
							период менопаузы
						</ProductModal.Typography>

						<ProductModal.MobileVisible visible={false}>
							<NeovadiolLine />
						</ProductModal.MobileVisible>
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<NeovadiolIntensiveComponents />
						<NeovadiolBasicComponents />
						<NeovadiolPhotoProtectionComponents />

						<Molecule
							type="vichy"
							id="vichy-neovadiol-components"
							position={isMobile ? mobilePos : position}
							direction="left"
							translate={{ x: '-50%' }}
						/>
					</ProductModal.RightContainer>
				</ProductModal.Column>

				<ProductModal.MobileVisible visible={true}>
					<Box $mt={24}>
						<NeovadiolLine />
					</Box>
				</ProductModal.MobileVisible>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/vichy/modals/neovadiol/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.vichyNeoLike}
				/>

				{isMobile && (
					<Molecule
						type="vichy"
						id="vichy-neovadiol"
						position={{
							bottom: '5%',
							left: '15%',
						}}
						direction="left"
						translate={{ x: '-50%' }}
					/>
				)}
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default NeovadiolModal
