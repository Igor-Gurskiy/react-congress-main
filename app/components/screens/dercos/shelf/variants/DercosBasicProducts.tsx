import ShelfItem from '@/components/ShelfItem'
import { useLRPStore } from '@/stores/lrpStore'
import { useUIStore } from '@/stores/uiStore'
import React from 'react'
import ModalService from '@/components/shared/modal/ModalService'
import AminexilModal from '@/components/screens/dercos/modals/products/aminexil/AminexilModal'
import PsolutionModal from '@/components/screens/dercos/modals/products/psolution/PsolutionModal'
import DendruffModal from '@/components/screens/dercos/modals/products/dendruff/DendruffModal'

const DercosBasicProducts = () => {
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
				source="assets/images/dercos/shelf/basic/aminexil.png"
				alt="aminexil"
				animated={isAnimated}
				top={95}
				left={145}
				width={450}
				height={450}
				center
				onClick={() => ModalService.open(AminexilModal)}
				scale={0.398119122}
				glow={1}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/dercos/shelf/basic/shampoo.png"
				alt="shampoo"
				animated={isAnimated}
				top={249}
				left={300}
				width={450}
				height={450}
				center
				onClick={() => ModalService.open(DendruffModal)}
				scale={0.396875}
				glow={1}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/dercos/shelf/basic/psolution.png"
				alt="psolution"
				animated={isAnimated}
				top={412}
				left={142}
				width={450}
				height={450}
				center
				onClick={() => ModalService.open(PsolutionModal)}
				scale={0.394285714}
				glow={1}
			/>
		</>
	)
}

export default DercosBasicProducts
