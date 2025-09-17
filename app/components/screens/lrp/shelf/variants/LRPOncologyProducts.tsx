import ShelfItem, { Shelves } from '@/components/ShelfItem'
import { useLRPStore } from '@/stores/lrpStore'
import { useUIStore } from '@/stores/uiStore'
import React from 'react'
import ModalService from '@/components/shared/modal/ModalService'
import LipikarOncoModal from '@/components/screens/lrp/modals/products/lipikar-onco/LipikarOncoModal'
import BaumeModal from '@/components/screens/lrp/modals/products/baume/BaumeModal'
import DermallergoModal from '@/components/screens/lrp/modals/products/dermallergo/DermallergoModal'
import AntheliosOncoModal from '@/components/screens/lrp/modals/products/anthelios-onco/AntheliosOncoModal'

const LRPOncologyProducts = () => {
	const newbie = useLRPStore((state) => state.newbie)
	const locked = useUIStore((state) => state.locked)
	const animated = useLRPStore((state) => state.animated)
	const setAnimated = useLRPStore((state) => state.setAnimated)
	const isAnimated = newbie && locked && animated
	const closeAllExcept = useLRPStore((state) => state.closeAllExcept)

	return (
		<>
			<Shelves
				source="assets/images/lrp/shelf/onco/shelves.png"
				top={180}
				left={393}
				scale={0.5}
			/>
			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/onco/lipikar.png"
				alt="effaclar"
				animated={isAnimated}
				top={109}
				left={440}
				width={129}
				height={154}
				onClick={ModalService.open.bind(null, LipikarOncoModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/onco/cicaplast.png"
				alt="antiage"
				animated={isAnimated}
				top={237}
				left={460}
				width={40}
				height={84}
				onClick={ModalService.open.bind(null, BaumeModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/onco/toleriane.png"
				alt="lipikar"
				animated={isAnimated}
				top={322}
				left={465}
				width={24}
				height={100}
				onClick={ModalService.open.bind(null, DermallergoModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/onco/anthelios.png"
				alt="lipikar"
				animated={isAnimated}
				top={432}
				left={468}
				width={34}
				height={74}
				onClick={ModalService.open.bind(null, AntheliosOncoModal)}
				scale={0.5}
				glow={2}
			/>
		</>
	)
}

export default LRPOncologyProducts
