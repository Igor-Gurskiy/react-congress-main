import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LipikarLine from '@/components/screens/lrp/modals/products/lipikar/LipikarLine'
import LipikarCleaningComponents from '@/components/screens/lrp/modals/products/lipikar/LipikarCleaningComponents'

const LipikarModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	const spec = useUIStore((state) => state.specialization)
	const trackerId =
		spec === 'allerg'
			? EventsEnum.lrpLipikarAllergVisit
			: EventsEnum.lrpLipikarDermVisit

	const likeId =
		spec === 'allerg'
			? LikesEnum.lrpLipikarAllergLike
			: LikesEnum.lrpLipikarDermLike

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
						<Brand>
							LIPIKAR <span>AP+</span>
						</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<HeaderExpertDescription>
							<img
								src="assets/images/lrp/modals/lipikar/expert-icon.png"
								alt=""
							/>
							<ExpertDescriptionText>
								<b>LA ROCHE-POSAY</b>
								<br /> <span>ЭКСПЕРТ</span> в области
								<br /> исследований
								<br /> <span>МИКРОБИОМА КОЖИ</span>
							</ExpertDescriptionText>
						</HeaderExpertDescription>

						<ProductModal.Typography $description>
							Липидовосполняющие средства, которые мгновенно увлажняют,
							успокаивают и нормализуют микробиом склонной к атопии кожи
						</ProductModal.Typography>

						<ProductModal.MobileVisible visible={false}>
							<LipikarLine />
						</ProductModal.MobileVisible>
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.MobileVisible visible={true}>
					<LipikarLine />
				</ProductModal.MobileVisible>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<LipikarCleaningComponents />
						{/* <LipikarCareComponents /> */}
					</ProductModal.RightContainer>
				</ProductModal.Column>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/lipikar/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={likeId}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default LipikarModal

const HeaderExpertDescription = styled.div`
	display: flex;
	margin-bottom: 17px;

	img {
		width: 45px;
		height: 54px;
		margin-right: 10px;
	}
`
const ExpertDescriptionText = styled.div`
	font-size: 12.535px;
	text-transform: uppercase;
	line-height: 14.5px;

	span {
		color: #00a8ff;
		font-weight: 800;
	}
`

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
