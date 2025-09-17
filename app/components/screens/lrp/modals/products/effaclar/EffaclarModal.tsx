import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import Box from '@/components/Box'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import ProductPrice from '@/components/shared/product-modal/ProductPrice'
import { useUIStore } from '@/stores/uiStore'
import media from '@/utils/media'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import EffaclarLine from '@/components/screens/lrp/modals/products/effaclar/EffaclarLine'
import EffaclarBasicComponents from '@/components/screens/lrp/modals/products/effaclar/EffaclarBasicComponents'
import EffaclarCleaningComponents from '@/components/screens/lrp/modals/products/effaclar/EffaclarCleaningComponents'
import EffaclarAcneSkinComponents from '@/components/screens/lrp/modals/products/effaclar/EffaclarAcneSkinComponents'

EffaclarAcneSkinComponents

const InvisibleLine = () => {
	return (
		<div>
			<ProductModal.Typography $subtitle $mb={8}>
				Объёмы средств
			</ProductModal.Typography>
			<ProductModal.Line text="*цена на сайте laroche-posay.ru">
				<Box $flex $direction="column" $flexGrow={1} $p="14px 16px">
					<Box $flex $justifyContent="center">
						<Box
							$flex
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img src="assets/images/lrp/invis.png" />
							<ProductPrice
								price="1 571 ₽*"
								volume="50 мл"
								$mt={-50}
								$ml={60}
							/>
						</Box>
					</Box>
				</Box>
			</ProductModal.Line>
		</div>
	)
}

const ColumnBody = styled(Box)`
	${media.md`
        flex-direction: column;
    `}
`

const EffaclarModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpEffaclarVisit)
		setLike(likes.includes(LikesEnum.lrpEffaclarLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.lrpEffaclarLike)
		addLike(LikesEnum.lrpEffaclarLike)
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
					<ProductModal.BrandContainer $color="#009D86">
						<Text>ГАММА</Text>
						<Brand>EFFACLAR</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Индивидуальный подход к уходу за кожей пациентов с акне
						</ProductModal.Typography>

						<EffaclarBasicComponents />
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<EffaclarCleaningComponents />
						<EffaclarAcneSkinComponents />
					</ProductModal.RightContainer>
				</ProductModal.Column>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/lrp/modals/effaclar/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.lrpEffaclarLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default EffaclarModal

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
`
