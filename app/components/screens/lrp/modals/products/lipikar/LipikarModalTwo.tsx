import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LipikarLineTwo from '@/components/screens/lrp/modals/products/lipikar/LipikarLineTwo'
import LipikarCleaningComponentsTwo from '@/components/screens/lrp/modals/products/lipikar/LipikarCleaningComponentsTwo'
import Molecule from '@/components/ui/molecule/Molecule'

const LipikarModalTwo = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const [like, setLike] = useState(false)

	const spec = useUIStore((state) => state.specialization)
	const trackerId =
		spec === 'allerg' ? EventsEnum.lrpLaitAllergVisit : EventsEnum.lrpLaitVisit

	const likeId =
		spec === 'allerg' ? LikesEnum.lrpLaitAllergLike : LikesEnum.lrpLaitLike

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
						<Brand>LIPIKAR</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Эффективный уход для комфорта чувствительной кожи,
							восстанавливающий кожный барьер и повышающий защитные функции кожи
						</ProductModal.Typography>

						<ProductModal.MobileVisible visible={false}>
							<LipikarLineTwo />
						</ProductModal.MobileVisible>
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.MobileVisible visible={true}>
					<LipikarLineTwo />
				</ProductModal.MobileVisible>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<LipikarCleaningComponentsTwo />
						{/* <LipikarCareComponents /> */}
					</ProductModal.RightContainer>
				</ProductModal.Column>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/lipikar/lipical-bg-two.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={likeId}
				/>
				<Molecule
					id={spec === 'allerg' ? 'lrp-molecule-7' : 'lrp-molecule-6'}
					position={{
						bottom: '15%',
						left: '15%',
					}}
					direction="left"
					translate={{ x: '-50%' }}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default LipikarModalTwo

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
		font-style: normal;
		font-weight: 300;
		line-height: 26px;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
`
