import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DendruffLine from '@/components/screens/dercos/modals/products/dendruff/DendruffLine'
import DendruffComponents from '@/components/screens/dercos/modals/products/dendruff/DendruffComponents'
import Molecule from '@/components/ui/molecule/Molecule'

const DendruffModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.dercosADDVisit)
		setLike(likes.includes(LikesEnum.dercosADDLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.dercosADDLike)
		addLike(LikesEnum.dercosADDLike)
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
					<ProductModal.BrandContainer $color="linear-gradient(96.32deg, #009538 6.03%, #3BC861 57.45%, #008F32 117.1%)">
						<Text>DERCOS</Text>
						<Brand>ANTI-DANDRUFF</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Гамма шапмпуней против перхоти
						</ProductModal.Typography>

						<ProductModal.MobileVisible visible={false}>
							<DendruffLine />
						</ProductModal.MobileVisible>
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<Molecule
					type="dercos"
					id="dercos-dandruff-header"
					position={{
						top: '1%',
						right: '1%',
					}}
					direction="left"
					translate={{ x: '-50%' }}
				/>
				<ProductModal.Column>
					<ProductModal.RightContainer>
						<DendruffComponents />
					</ProductModal.RightContainer>
				</ProductModal.Column>

				<ProductModal.MobileVisible visible={true}>
					<DendruffLine />
				</ProductModal.MobileVisible>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/dercos/modals/dandruff/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.dercosADDLike}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default DendruffModal

const Text = styled.div`
	font-weight: 800;
	font-size: 24px;
	line-height: 30px;
	letter-spacing: 1px;
`

const Brand = styled(Text)`
	font-weight: 300;
	font-size: 20px;
	line-height: 30px;
	letter-spacing: 1px;

	span {
		font-size: 38px;
		line-height: 30px;
		font-weight: 400;
	}
`
