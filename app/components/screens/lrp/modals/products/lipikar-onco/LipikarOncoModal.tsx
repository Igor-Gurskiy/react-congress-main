import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LipikarOncoCareComponents from '@/components/screens/lrp/modals/products/lipikar-onco/LipikarOncoCareComponents'
import LipikarOncoCareComponentsRight from '@/components/screens/lrp/modals/products/lipikar-onco/LipikarOncoCareComponentsRight'
import media from '@/utils/media'
import Molecule from '@/components/ui/molecule/Molecule'

const LipikarOncoModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const spec = useUIStore((state) => state.specialization)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpLipikarOncoVisit)
		setLike(likes.includes(LikesEnum.lrpLipikarOncoLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.lrpLipikarOncoLike)
		addLike(LikesEnum.lrpLipikarOncoLike)
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
						$color="#36B0FC"
						style={{ position: 'relative' }}
					>
						<Text>ГАММА</Text>
						<Brand>
							LIPIKAR <span>AP+</span>
						</Brand>
						<Molecule
							id="lrp-molecule-5"
							position={{
								top: '10%',
								right: '5%',
							}}
							direction="left"
						/>
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
							Липидовосстанавливающие средства, которые мгновенно увлажняют,
							успокаивают и оказывают противозудное действие
						</ProductModal.Typography>

						<LipikarOncoCareComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<LipikarOncoCareComponentsRight />
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
					likeId={LikesEnum.lrpLipikarOncoLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default LipikarOncoModal
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
	letter-spacing: 1px;
`

const Brand = styled(Text)`
	font-weight: 800;
	font-size: 24px;
	line-height: 26px;

	span {
		font-size: 38px;
		line-height: 30px;
		font-weight: 300;
	}
`
