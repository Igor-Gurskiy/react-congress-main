import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MineralLine from '@/components/screens/vichy/modals/products/mineral/MineralLine'
import MineralComponents from '@/components/screens/vichy/modals/products/mineral/MineralComponents'
import MineralBasicComponents from '@/components/screens/vichy/modals/products/mineral/MineralBasicComponents'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const MineralModal = ({ close }) => {
	const { isMobile } = useResponsive()
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.vichyMinVisit)
		setLike(likes.includes(LikesEnum.vichyMinLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.vichyMinLike)
		addLike(LikesEnum.vichyMinLike)
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
					<ProductModal.BrandContainer $color="#008DAF">
						<Text>ГАММА</Text>
						<Brand>MINÉRAL 89</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Восстановление барьерной функции стрессированной кожи
						</ProductModal.Typography>

						<ProductModal.MobileVisible visible={false}>
							<MineralLine />
						</ProductModal.MobileVisible>
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<MineralComponents />
						<MineralBasicComponents />
						{isMobile && (
							<Molecule
								type="vichy"
								id="vichy-mineral"
								position={{
									bottom: '0%',
									left: '15%',
								}}
								direction="left"
								translate={{ x: '-50%' }}
							/>
						)}
					</ProductModal.RightContainer>
				</ProductModal.Column>

				<ProductModal.MobileVisible visible={true}>
					<MineralLine />
				</ProductModal.MobileVisible>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/vichy/modals/mineral/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.vichyMinLike}
				/>
				{!isMobile && (
					<Molecule
						type="vichy"
						id="vichy-mineral"
						position={{
							bottom: '2%',
							left: '35%',
						}}
						direction="left"
						translate={{ x: '-50%' }}
					/>
				)}
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default MineralModal

const Text = styled.div`
	font-weight: 400;
	font-size: 24px;
	line-height: 30px;
	letter-spacing: 1px;
`

const Brand = styled(Text)`
	font-weight: 800;
`
