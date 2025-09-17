import ShelfItem, { Shelves } from '@/components/ShelfItem'
import { useLRPStore } from '@/stores/lrpStore'
import { useUIStore } from '@/stores/uiStore'
import React from 'react'
import ModalService from '@/components/shared/modal/ModalService'

import TolerianeModal from '@/components/screens/lrp/modals/products/toleriane/TolerianeModal'

import AntheliosModal from '@/components/screens/lrp/modals/products/anthelios/AntheliosModal'
import LipikarModal from '@/components/screens/lrp/modals/products/lipikar/LipikarModal'
import LipikarModalTwo from '@/components/screens/lrp/modals/products/lipikar/LipikarModalTwo'
import CicaplastModal from '@/components/screens/lrp/modals/products/cicaplast/CicaplastModal'

const LRPAllergProducts = () => {
	const newbie = useLRPStore((state) => state.newbie)
	const locked = useUIStore((state) => state.locked)
	const animated = useLRPStore((state) => state.animated)
	const setAnimated = useLRPStore((state) => state.setAnimated)
	const isAnimated = newbie && locked && animated
	const closeAllExcept = useLRPStore((state) => state.closeAllExcept)

	return (
		<>
			<Shelves
				source="assets/images/lrp/shelf/allerg/shelves.png"
				top={175}
				left={322}
				scale={0.5}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/allerg/toleriane.png"
				alt="effaclar"
				animated={isAnimated}
				top={128}
				left={402}
				width={145}
				height={77}
				onClick={ModalService.open.bind(null, TolerianeModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/basic/lipikarap.png"
				alt="lipikar"
				animated={isAnimated}
				top={208}
				left={360}
				width={205}
				height={155}
				onClick={ModalService.open.bind(null, LipikarModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/basic/lipikar.png"
				alt="lipikar"
				animated={isAnimated}
				top={208}
				left={485}
				width={128}
				height={150}
				onClick={ModalService.open.bind(null, LipikarModalTwo)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/allerg/cicaplast.png"
				alt="toleriane"
				animated={isAnimated}
				top={328}
				left={360}
				width={90}
				height={69}
				onClick={ModalService.open.bind(null, CicaplastModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/allerg/anthelios.png"
				alt="anthelios"
				animated={isAnimated}
				top={435}
				left={368}
				width={125}
				height={53}
				onClick={ModalService.open.bind(null, AntheliosModal)}
				scale={0.5}
				glow={2}
			/>
		</>
	)
}

export default LRPAllergProducts
