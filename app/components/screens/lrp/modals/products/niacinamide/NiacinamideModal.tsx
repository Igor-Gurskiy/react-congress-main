import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'
import NiacinamideLine from '@/components/screens/lrp/modals/products/niacinamide/NiacinamideLine'
import NiacinamideBenefites from '@/components/screens/lrp/modals/products/niacinamide/NiacinamideBenefites'

const NiacinamideModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const spec = useUIStore((state) => state.specialization)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpNiacinamideVisit)
		setLike(likes.includes(LikesEnum.lrpNiacinamideLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.lrpNiacinamideLike)
		addLike(LikesEnum.lrpNiacinamideLike)
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
					<ProductModal.BrandContainer $color="#861B86">
						<Box $flex>
							<NewSticker>новинка</NewSticker>
						</Box>
						<Brand>
							NIACINAMIDE <span>10</span>
						</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Концентрированная сыворотка против всех видов пигментации
						</ProductModal.Typography>

						<ProductModal.MobileVisible visible={false}>
							<NiacinamideLine />
						</ProductModal.MobileVisible>
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<NiacinamideBenefites />
					</ProductModal.RightContainer>
				</ProductModal.Column>

				<ProductModal.MobileVisible visible={true}>
					<NiacinamideLine />
				</ProductModal.MobileVisible>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/niacinamide/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					color="#fff"
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.lrpNiacinamideLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default NiacinamideModal

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
		font-weight: 400;
	}
`

const NewSticker = styled.div`
	padding: 5px 9px 6px;
	gap: 10px;
	height: 24px;
	background: #ffffff;
	border-radius: 2px;

	font-weight: 600;
	font-size: 12px;
	line-height: 13px;

	display: flex;
	align-items: center;
	text-align: center;
	text-transform: lowercase;
	color: #861b86;
`
