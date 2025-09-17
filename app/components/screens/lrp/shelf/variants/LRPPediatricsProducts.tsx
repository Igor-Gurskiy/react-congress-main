import ShelfItem, { Shelves } from '@/components/ShelfItem'
import { useLRPStore } from '@/stores/lrpStore'
import { useUIStore } from '@/stores/uiStore'
import React from 'react'
import ModalService from '@/components/shared/modal/ModalService'
import EffaclarPedsModal from '@/components/screens/lrp/modals/products/effackar-peds/EffaclarPedsModal'
import CicaplastBaumePedsModal from '@/components/screens/lrp/modals/products/cicaplastbaume-peds/CicaplastBaumePedsModal'
import CicaplastPedsModal from '@/components/screens/lrp/modals/products/cicaplast-peds/CicaplastPedsModal'
import KidsModal from '@/components/screens/lrp/modals/products/kids/KidsModal'
import LaitModal from '@/components/screens/lrp/modals/products/lait/LaitModal'
import LipikarPedsModal from '@/components/screens/lrp/modals/products/lipikar-peds/LipikarPedsModal'

const LRPPediatricsProducts = () => {
	const newbie = useLRPStore((state) => state.newbie)
	const locked = useUIStore((state) => state.locked)
	const animated = useLRPStore((state) => state.animated)
	const setAnimated = useLRPStore((state) => state.setAnimated)
	const isAnimated = newbie && locked && animated
	const closeAllExcept = useLRPStore((state) => state.closeAllExcept)

	return (
		<>
			<Shelves
				source="assets/images/lrp/shelf/peds/shelves.png"
				top={165}
				left={322}
				scale={0.5}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/peds/effaclar.png"
				alt="effaclar"
				animated={isAnimated}
				top={126}
				left={382}
				width={224}
				height={87}
				onClick={ModalService.open.bind(null, EffaclarPedsModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/basic/lipikarap.png"
				alt="lipikar"
				animated={isAnimated}
				top={210}
				left={360}
				width={178}
				height={133}
				onClick={ModalService.open.bind(null, LipikarPedsModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/basic/lipikar.png"
				alt="lipikar"
				animated={isAnimated}
				top={210}
				left={480}
				width={111}
				height={133}
				onClick={ModalService.open.bind(null, LaitModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/peds/baume.png"
				alt="cicaplast"
				animated={isAnimated}
				top={355}
				left={400}
				width={40}
				height={84}
				onClick={ModalService.open.bind(null, CicaplastBaumePedsModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/peds/cicaplast.png"
				alt="cicaplast"
				animated={isAnimated}
				top={355}
				left={450}
				width={95}
				height={84}
				onClick={ModalService.open.bind(null, CicaplastPedsModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/peds/anthelios.png"
				alt="anthelios"
				animated={isAnimated}
				top={442}
				left={374}
				width={246}
				height={119}
				onClick={ModalService.open.bind(null, KidsModal)}
				scale={0.5}
				glow={2}
			/>
		</>
	)
}

export default LRPPediatricsProducts
