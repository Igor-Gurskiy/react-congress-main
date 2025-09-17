import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import LipikarProducts from '@/components/screens/green/modals/products/lipikar/LipikarProducts'
import media from '@/utils/media'
import styled from 'styled-components'

const LipikarModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.greenPopup2Visit)
		setLike(likes.includes(LikesEnum.greenPopup2Like))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.greenPopup2Like)
		addLike(LikesEnum.greenPopup2Like)
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
				<div>
					<ProductModal.Content>
						<LipikarProducts />
					</ProductModal.Content>
					<Ad>Реклама skin.ru ERID: 2SDnjer7pUg</Ad>
				</div>
			</ProductModal.Body>
		</ProductModal>
	)
}

export default LipikarModal

const Ad = styled.div`
	margin-top: 15px;
	color: #141414;
	text-align: center;
	font-size: 14px;
	font-weight: 300;
	line-height: 120%;
	${media.sm`
	font-size: 12px;
  `}
`
