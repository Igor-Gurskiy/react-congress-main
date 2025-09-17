import ShelfItem from '@/components/ShelfItem'
import { useLRPStore } from '@/stores/lrpStore'
import { useUIStore } from '@/stores/uiStore'
import React from 'react'
import ModalService from '@/components/shared/modal/ModalService'
import LipikarGammaModal from '@/components/screens/green/modals/products/gamma/LipikarGammaModal'
import HydraphaseModal from '@/components/screens/green/modals/products/hydraphase/HydraphaseModal'
import MineralModal from '@/components/screens/green/modals/products/mineralEcoShelf/mineral/MineralModal'
import LipikarModal from '@/components/screens/green/modals/products/lipikar/LipikarModal'
import MineralEcoModal from '../../modals/products/mineralEcoShelf/MineralEcoModal'

const GreenBasicProducts = () => {
	const newbie = useLRPStore((state) => state.newbie)
	const locked = useUIStore((state) => state.locked)
	const animated = useLRPStore((state) => state.animated)
	const setAnimated = useLRPStore((state) => state.setAnimated)
	const isAnimated = newbie && locked && animated
	const closeAllExcept = useLRPStore((state) => state.closeAllExcept)

	return (
		<>
			<ShelfItem
				onChange={setAnimated}
				source="assets/images/green/shelf/basic/bottles.png"
				alt="bottles"
				animated={isAnimated}
				top={116}
				left={153}
				width={292}
				height={384}
				onClick={() => ModalService.open(LipikarGammaModal)}
				scale={0.25}
				glow={1}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/green/shelf/basic/bottles2.png"
				alt="bottles2"
				animated={isAnimated}
				top={225}
				left={10}
				width={123}
				height={105}
				onClick={() => ModalService.open(LipikarModal)}
				scale={0.25}
				glow={1}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/green/shelf/basic/mineral.png"
				alt="mineral"
				animated={isAnimated}
				top={227}
				left={254}
				width={350}
				height={406}
				onClick={() => ModalService.open(MineralEcoModal, { currentStep: 1 })}
				scale={0.25}
				glow={1}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/green/shelf/basic/dercos.png"
				alt="dercos"
				animated={isAnimated}
				top={192}
				left={278}
				width={350}
				height={406}
				onClick={() => ModalService.open(MineralEcoModal, { currentStep: 2 })}
				scale={0.25}
				glow={1}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/green/shelf/basic/bottles4.png"
				alt="bottles4"
				animated={isAnimated}
				top={318}
				left={146}
				width={93}
				height={69}
				onClick={() => ModalService.open(HydraphaseModal)}
				scale={0.25}
				glow={1}
			/>
		</>
	)
}

export default GreenBasicProducts
