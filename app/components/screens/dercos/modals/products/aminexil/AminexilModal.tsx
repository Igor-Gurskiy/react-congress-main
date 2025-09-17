import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AminexilLine from '@/components/screens/dercos/modals/products/aminexil/AminexilLine'
import AminexilComponents from '@/components/screens/dercos/modals/products/aminexil/AminexilComponents'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const position = {
	top: '16%',
	left: '14%',
}

const mobilePos = {
	top: '20%',
	left: '14%',
}

const AminexilModal = ({ close }) => {
	const { isMobile } = useResponsive()
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.dercosAminexilVisit)
		setLike(likes.includes(LikesEnum.dercosAminexilLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.dercosAminexilLike)
		addLike(LikesEnum.dercosAminexilLike)
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
					<ProductModal.BrandContainer $color="#9F0109">
						<Text>ГАММА</Text>
						<Brand>DERCOS AMINEXIL</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Комплексный уход для пациентов с алопецией
						</ProductModal.Typography>

						<ProductModal.MobileVisible visible={false}>
							<AminexilLine />
						</ProductModal.MobileVisible>
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<AminexilComponents />
						<Molecule
							type="dercos"
							id="dercos-aminexil"
							position={isMobile ? mobilePos : position}
							direction="left"
							translate={{ x: '-50%' }}
						/>

						<Molecule
							type="dercos"
							id="dercos-aminexil-water"
							position={{
								bottom: '5%',
								left: '14%',
							}}
							direction="left"
							translate={{ x: '-50%' }}
						/>
					</ProductModal.RightContainer>
				</ProductModal.Column>

				<ProductModal.MobileVisible visible={true}>
					<AminexilLine />
				</ProductModal.MobileVisible>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/dercos/modals/aminexil/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.dercosAminexilLike}
				/>
				<Molecule
					type="dercos"
					id="dercos-aminexil-footer"
					position={{
						bottom: '17%',
						left: '10%',
					}}
					direction="right"
					translate={{ x: '-50%' }}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default AminexilModal

const Text = styled.div`
	font-weight: 400;
	font-size: 24px;
	line-height: 30px;
	letter-spacing: 1px;
`

const Brand = styled(Text)`
	font-weight: 800;

	span {
		font-size: 38px;
		line-height: 30px;
		font-weight: 400;
	}
`
