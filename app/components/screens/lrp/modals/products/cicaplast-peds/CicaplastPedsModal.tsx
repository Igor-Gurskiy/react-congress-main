import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CicaplastPedsComponents from '@/components/screens/lrp/modals/products/cicaplast-peds/CicaplastPedsComponents'
import CicaplastPedsComponentsRight from '@/components/screens/lrp/modals/products/cicaplast-peds/CicaplastPedsComponentsRight'
import Molecule from '@/components/ui/molecule/Molecule'

const CicaplastPedsModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const spec = useUIStore((state) => state.specialization)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpCicaplastPedsVisit)
		setLike(likes.includes(LikesEnum.lrpCicaplastPedsLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.lrpCicaplastPedsLike)
		addLike(LikesEnum.lrpCicaplastPedsLike)
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
					<ProductModal.BrandContainer
						$color="#36b0fc"
						style={{ padding: '10px 32px' }}
					>
						<Text>Гамма</Text>
						<Brand>CICAPLAST</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Восстанавливающие средства с доказанной эффективностью, ускоряющие
							процессы регенерации кожи
						</ProductModal.Typography>

						{/* <ProductModal.MobileVisible visible={false}>
							<CicaplastPedsLine />
						</ProductModal.MobileVisible> */}
						<CicaplastPedsComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<CicaplastPedsComponentsRight />
					</ProductModal.RightContainer>
				</ProductModal.Column>

				{/* <ProductModal.MobileVisible visible={true}>
					<CicaplastPedsLine />
				</ProductModal.MobileVisible> */}
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/cicaplast-peds/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.lrpCicaplastPedsLike}
				/>
				<Molecule
					id="lrp-molecule-9"
					position={{ bottom: '3%', left: '20%' }}
					direction="left"
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default CicaplastPedsModal

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
