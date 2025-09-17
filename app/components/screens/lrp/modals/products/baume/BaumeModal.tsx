import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'
import BaumeLine from '@/components/screens/lrp/modals/products/baume/BaumeLine'
import BaumeBenefites from '@/components/screens/lrp/modals/products/baume/BaumeBenefites'
import BaumeBenefitesRight from '@/components/screens/lrp/modals/products/baume/BaumeBenefitesRight'

import media from '@/utils/media'

const trackerIds = {
	oncology: EventsEnum.lrpBaumeOncoVisit,
	pediatrics: EventsEnum.lrpBaumePedsVisit,
}

const likesIds = {
	oncology: LikesEnum.lrpBaumeOncoLike,
	pediatrics: LikesEnum.lrpBaumePedsLike,
}

const BaumeModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const spec = useUIStore((state) => state.specialization) || ''

	const [like, setLike] = useState(false)

	const trackerId = trackerIds[spec] || EventsEnum.lrpBaumeVisit
	const likeId = likesIds[spec] || LikesEnum.lrpBaumeLike

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
					<ProductModal.BrandContainer
						$color="url(/assets/images/lrp/modals/cicaplastbaume-peds/badge.png)"
						style={{ padding: '10px 32px' }}
					>
						<Box $flex></Box>
						<Text>бальзам</Text>
						<Brand>
							CICAPLAST <br />
							BAUME B5+
						</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<HeaderExpertDescription>
							<img
								src="assets/images/lrp/modals/anthelios-onco/header-descr.svg"
								alt=""
							/>
							<ExpertDescriptionText>
								<b>
									протестировано на коже
									<br /> пациентов, проходящих лечение
									<br /> от онкологических заболеваний <br />
								</b>
								повышает комфорт кожи
							</ExpertDescriptionText>
						</HeaderExpertDescription>
						<ProductModal.Typography $description>
							Восстанавливающий успокаивающий бальзам
						</ProductModal.Typography>
						<BaumeBenefites />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<BaumeBenefitesRight />
					</ProductModal.RightContainer>
				</ProductModal.Column>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/baume/bg.png"
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

export default BaumeModal

const HeaderExpertDescription = styled.div`
	display: flex;
	margin-bottom: 17px;
	img {
		width: 33px;
		height: 41px;
		margin-right: 6px;
	}
`
const ExpertDescriptionText = styled.div`
	color: #122c4f;
	font-family: Gilroy;
	font-size: 11px;
	font-style: normal;
	font-weight: 400;
	line-height: 11px;
	letter-spacing: 0.715px;
	text-transform: uppercase;
	b {
		font-weight: 600;
	}
	${media.phone`
	font-size: 10px;
  `}
`

const Text = styled.div`
	font-weight: 300;
	font-size: 20px;
	line-height: 26px;
`

const Brand = styled(Text)`
	margin-top: 4px;
	font-weight: 800;
	font-size: 24px;
	line-height: 26px;
	letter-spacing: 1px;

	span {
		font-weight: 400;
	}
`

const NewSticker = styled.div`
	padding: 5px 9px 6px;
	gap: 10px;
	height: 24px;
	background: #36b0fc;
	border-radius: 2px;

	font-weight: 600;
	font-size: 12px;
	line-height: 13px;

	display: flex;
	align-items: center;
	text-align: center;
	text-transform: lowercase;
	color: #ffffff;
`
