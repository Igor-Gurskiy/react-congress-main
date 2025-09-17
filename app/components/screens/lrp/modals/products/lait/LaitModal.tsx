import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LaitComponents from '@/components/screens/lrp/modals/products/lait/LaitComponents'
import LaitComponentsRight from '@/components/screens/lrp/modals/products/lait/LaitComponentsRight'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const position = { bottom: '8%', right: '35%' }
const mobilePos = { bottom: '8%', left: '15%' }

const LaitModal = ({ close }) => {
	const { isMobile } = useResponsive()
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const spec = useUIStore((state) => state.specialization)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpLaitPedsVisit)
		setLike(likes.includes(LikesEnum.lrpLaitPedsLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.lrpLaitPedsLike)
		addLike(LikesEnum.lrpLaitPedsLike)
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
						<Brand>LIPIKAR</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Эффективный уход для комфорта чувствительной кожи младенцев и
							детей, восстанавливающий кожный барьер и повышающий защитные
							функции кожи
						</ProductModal.Typography>
						<LaitComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<LaitComponentsRight />
					</ProductModal.RightContainer>
				</ProductModal.Column>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/lait/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.lrpLaitPedsLike}
				/>
				<Molecule
					id="lrp-molecule-6"
					position={isMobile ? mobilePos : position}
					direction="left"
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default LaitModal

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
