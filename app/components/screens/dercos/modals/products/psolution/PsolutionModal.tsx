import { API } from '@/api'
import { EventsEnum, LikesEnum } from '@/api/tracker'
import ProductModal from '@/components/shared/product-modal/ProductModal'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PsolutionLine from '@/components/screens/dercos/modals/products/psolution/PsolutionLine'
import PsolutionComponents from '@/components/screens/dercos/modals/products/psolution/PsolutionComponents'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const positionBody = {
	bottom: '20%',
	right: '1%',
}

const mobilePosBody = {
	bottom: '38%',
	right: '1%',
}

const position = {
	top: '12%',
	left: '40%',
}

const mobilePos = {
	top: '8%',
	right: '5%',
}

const PsolutionModal = ({ close }) => {
	const likes = useUIStore((state) => state.likes)
	const addLike = useUIStore((state) => state.addLike)
	const { isMobile } = useResponsive()

	const [like, setLike] = useState(false)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.dercosPSOVisit)
		setLike(likes.includes(LikesEnum.dercosPSOLike))
	}, [])

	const handleLike = () => {
		if (like) return
		API.tracker.sendLike(LikesEnum.dercosPSOLike)
		addLike(LikesEnum.dercosPSOLike)
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
					<ProductModal.BrandContainer $color="linear-gradient(90.16deg, #00683B 1.31%, #005A2D 50.49%, #006337 79.57%, #006437 99.86%)">
						<Text>Dercos</Text>
						<Brand>PSOLUTION</Brand>
					</ProductModal.BrandContainer>

					<ProductModal.LeftContainer>
						<ProductModal.Typography $description>
							Кераторегулирующий шампунь для кожи головы, склонной к псориазу
						</ProductModal.Typography>

						<ProductModal.MobileVisible visible={false}>
							<PsolutionLine />
						</ProductModal.MobileVisible>
					</ProductModal.LeftContainer>
				</ProductModal.Column>

				<ProductModal.Column>
					<ProductModal.RightContainer>
						<PsolutionComponents />
					</ProductModal.RightContainer>
				</ProductModal.Column>

				<ProductModal.MobileVisible visible={true}>
					<PsolutionLine />
				</ProductModal.MobileVisible>
				<Molecule
					type="dercos"
					id="dercos-psolution"
					position={isMobile ? mobilePosBody : positionBody}
					direction="left"
					translate={{ x: '-50%' }}
				/>

				<Molecule
					type="dercos"
					id="dercos-psolution-header"
					position={isMobile ? mobilePos : position}
					direction="left"
					translate={{ x: '-50%' }}
				/>
			</ProductModal.Body>
			<ProductModal.Footer
				$justifyContent="flex-end"
				background="assets/images/dercos/modals/psolution/bg.png"
			>
				<ProductModal.Recommendation
					$flex
					$alignItems="center"
					like={like}
					onClick={handleLike}
					likeId={LikesEnum.dercosPSOLike}
				/>
				<Molecule
					type="dercos"
					id="dercos-psolution-footer"
					position={{
						bottom: '3%',
						left: '10%',
					}}
					direction="right"
					translate={{ x: '-50%' }}
				/>
			</ProductModal.Footer>
		</ProductModal>
	)
}

export default PsolutionModal

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
