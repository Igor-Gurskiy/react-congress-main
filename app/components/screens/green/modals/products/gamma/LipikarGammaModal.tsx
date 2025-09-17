import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GammaLine from '@/components/screens/green/modals/products/gamma/GammaLine'
import media from '@/utils/media'

const LipikarGammaModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.greenPopup1Visit)
		setLike(likes.includes(LikesEnum.greenPopup1Like))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.greenPopup1Like)
		addLike(LikesEnum.greenPopup1Like)
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
				<ProductModal.Content>
					<GammaLine />
					<Ad>Реклама skin.ru ERID: 2SDnjcbeugL</Ad>
				</ProductModal.Content>
			</ProductModal.Body>
		</ProductModal>
	)
}

export default LipikarGammaModal

const Text = styled.div`
	font-weight: 400;
	font-size: 24px;
	line-height: 30px;
	letter-spacing: 1px;
	color: #1f1f1f;
`

const Brand = styled(Text)`
	font-weight: 800;

	span {
		font-size: 38px;
		line-height: 30px;
		font-weight: 400;
	}
`
const Ad = styled.div`
	margin-top: 50px;
	color: #141414;
	text-align: center;
	font-size: 14px;
	font-weight: 300;
	line-height: 120%;
	${media.sm`
	font-size: 12px;
  `}
`
