import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CicaplastBaumePedsComponents from '@/components/screens/lrp/modals/products/cicaplastbaume-peds/CicaplastBaumePedsComponents'
import CicaplastBaumePedsComponentsRight from '@/components/screens/lrp/modals/products/cicaplastbaume-peds/CicaplastBaumePedsComponentsRight'

const CicaplastBaumePedsModal = ({ close }) => {
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
						$color="url(/assets/images/lrp/modals/cicaplastbaume-peds/badge.png)"
						style={{ padding: '10px 32px' }}
					>
						<Text>бальзам</Text>
						<Brand>
							CICAPLAST <br />
							BAUME B5+
						</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Восстанавливающий успокаивающий бальзам
						</ProductModal.Typography>

						<CicaplastBaumePedsComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<CicaplastBaumePedsComponentsRight />
					</ProductModal.RightContainer>
				</ProductModal.Column>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/cicaplastbaume-peds/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.lrpCicaplastPedsLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default CicaplastBaumePedsModal

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
