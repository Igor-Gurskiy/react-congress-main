import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GreenProduct from '@/components/screens/green/modals/products/GreenProduct'
import media from '@/utils/media'

const HydraphaseModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.greenPopup4Visit)
		setLike(likes.includes(LikesEnum.greenPopup4Like))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.greenPopup4Like)
		addLike(LikesEnum.greenPopup4Like)
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
					<GreenProduct
						src="/assets/images/green/modals/hydraphase.png"
						srcHeight={281}
						container={Container}
						content={
							<Body>
								<Title>ЗЕЛЕНЫЕ ТЕХНОЛОГИИ</Title>
								<Description>(GREEN TECHNOLOGY)</Description>
								<Content>
									Гиалуроновая кислота в составе{' '}
									<span>средства получена путем</span>&nbsp;
									<br />
									<b>биоферментации растительных сахаров</b> без добавления
									химических вспомогательных компонентов
								</Content>
							</Body>
						}
					/>
					<Ad>Реклама skin.ru ERID: 2SDnjccqmUc</Ad>
				</ProductModal.Content>
			</ProductModal.Body>
		</ProductModal>
	)
}

export default HydraphaseModal

const Container = styled.div`
	width: 60%;

	${media.md`
		width: 100%;
  `}
`

const Body = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-content: center;
`

const Title = styled.div`
	font-weight: 800;
	font-size: 32px;
	line-height: 110%;
	text-transform: uppercase;
	color: #5eceb4;
	margin-bottom: 8px;

	${media.md`
		margin-top: 24px;
		font-size: 26px;
		line-height: 110%;
	`}
`

const Description = styled.div`
	font-weight: 300;
	font-size: 13px;
	line-height: 110%;
	text-transform: uppercase;
	color: #1f1f1f;
	margin-bottom: 24px;

	${media.md`
		font-size: 10px;
		line-height: 14px;
	`}
`

const Content = styled.div`
	font-weight: 300;
	font-size: 16px;
	line-height: 125%;
	color: #262626;

	span {
		white-space: nowrap;
	}

	b {
		font-weight: 800;
		text-transform: uppercase;
	}

	${media.md`
		font-size: 14px;
	`}
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
