import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import EffaclarPedsLine from '@/components/screens/lrp/modals/products/effackar-peds/EffaclarPedsLine'
import EffaclarPedsComponents from '@/components/screens/lrp/modals/products/effackar-peds/EffaclarPedsComponents'
import EffaclarPedsComponentsRight from '@/components/screens/lrp/modals/products/effackar-peds/EffaclarPedsComponentsRight'

const EffaclarPedsModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const spec = useUIStore((state) => state.specialization)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpEffaclarPedsVisit)
		setLike(likes.includes(LikesEnum.lrpEffaclarPedsLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.lrpEffaclarPedsLike)
		addLike(LikesEnum.lrpEffaclarPedsLike)
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
						<Brand>EFFACLAR</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Индивидуальный подход к уходу за кожей пациентов с легкой степенью
							тяжести акне и в период ремиссии
						</ProductModal.Typography>

						{/* <ProductModal.MobileVisible visible={false}>
							<EffaclarPedsLine />
						</ProductModal.MobileVisible> */}
						<EffaclarPedsComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<EffaclarPedsComponentsRight />
					</ProductModal.RightContainer>
				</ProductModal.Column>

				{/* <ProductModal.MobileVisible visible={true}>
					<EffaclarPedsLine />
				</ProductModal.MobileVisible> */}
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/effaclar-peds/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.lrpEffaclarPedsLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default EffaclarPedsModal

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
