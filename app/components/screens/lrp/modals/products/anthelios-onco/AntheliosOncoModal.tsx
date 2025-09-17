import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AntheliosOncoComponents from '@/components/screens/lrp/modals/products/anthelios-onco/AntheliosOncoComponents'
import AntheliosOncoComponentsRight from '@/components/screens/lrp/modals/products/anthelios-onco/AntheliosOncoComponentsRight'

import media from '@/utils/media'

const AntheliosOncoModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const spec = useUIStore((state) => state.specialization)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpAntheliosOncoVisit)
		setLike(likes.includes(LikesEnum.lrpAntheliosOncoLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.lrpAntheliosOncoLike)
		addLike(LikesEnum.lrpAntheliosOncoLike)
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
					<ProductModal.BrandContainer $color="#F7943A">
						<Brand>
							ANTHELIOS
							<br />
							INVISIBLE FLUID
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
							Солнцезащитное средство с доказанной эффективностью, высокой
							защитой и безопасностью
						</ProductModal.Typography>
						<AntheliosOncoComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<AntheliosOncoComponentsRight />
					</ProductModal.RightContainer>
				</ProductModal.Column>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/anthelios-onco/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.lrpAntheliosOncoLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default AntheliosOncoModal

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
	font-size: 24px;
	line-height: 30px;
	letter-spacing: 1px;
`

const Brand = styled(Text)`
	font-weight: 800;
	font-size: 24px;
	line-height: 26px;

	span {
		font-size: 38px;
		line-height: 38px;
		font-weight: 400;
	}
`
