import ShelfItem, { Shelves } from '@/components/ShelfItem'
import { useLRPStore } from '@/stores/lrpStore'
import { useUIStore } from '@/stores/uiStore'
import React from 'react'
import ModalService from '@/components/shared/modal/ModalService'
import EffaclarModal from '@/components/screens/lrp/modals/products/effaclar/EffaclarModal'
import LipikarModal from '@/components/screens/lrp/modals/products/lipikar/LipikarModal'

import TolerianeModal from '@/components/screens/lrp/modals/products/toleriane/TolerianeModal'

import AntheliosModal from '@/components/screens/lrp/modals/products/anthelios/AntheliosModal'
import CicaplastModal from '@/components/screens/lrp/modals/products/cicaplast/CicaplastModal'
import AntiageModal from '@/components/screens/lrp/modals/products/antiage/AntiageModal'
import TolerianeRosaliacModal from '@/components/screens/lrp/modals/products/toleriane-rosaliac/TolerianeRosaliacModal'
import LipikarModalTwo from '@/components/screens/lrp/modals/products/lipikar/LipikarModalTwo'

const LRPBasicProducts = () => {
	const newbie = useLRPStore((state) => state.newbie)
	const locked = useUIStore((state) => state.locked)
	const animated = useLRPStore((state) => state.animated)
	const setAnimated = useLRPStore((state) => state.setAnimated)
	const isAnimated = newbie && locked && animated
	const closeAllExcept = useLRPStore((state) => state.closeAllExcept)

	return (
		<>
			<Shelves
				source="assets/images/lrp/shelf/basic/shelves.png"
				top={135}
				left={322}
				scale={0.5}
			/>
			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/basic/effaclar.png"
				alt="effaclar"
				animated={isAnimated}
				top={65}
				left={354}
				width={145}
				height={77}
				onClick={ModalService.open.bind(null, EffaclarModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/basic/antiage.png"
				alt="antiage"
				animated={isAnimated}
				top={187}
				left={387}
				width={112}
				height={31}
				onClick={ModalService.open.bind(null, AntiageModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/basic/lipikarap.png"
				alt="lipikar"
				animated={isAnimated}
				top={243}
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
				top={243}
				left={485}
				width={128}
				height={150}
				onClick={ModalService.open.bind(null, LipikarModalTwo)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/basic/toleriane.png"
				alt="toleriane"
				animated={isAnimated}
				top={339}
				left={473}
				width={90}
				height={69}
				onClick={ModalService.open.bind(null, TolerianeModal)}
				// onClick={ModalService.open.bind(null, TolerianeRosaliacModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/basic/rosalic.png"
				alt="rosalic"
				animated={isAnimated}
				top={341}
				left={363}
				width={70}
				height={67}
				onClick={ModalService.open.bind(null, TolerianeRosaliacModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/basic/cicaplast.png"
				alt="cicaplast"
				animated={isAnimated}
				top={432}
				left={361}
				width={158}
				height={60}
				onClick={ModalService.open.bind(null, CicaplastModal)}
				scale={0.5}
				glow={2}
			/>

			<ShelfItem
				onChange={setAnimated}
				source="assets/images/lrp/shelf/basic/anthelios.png"
				alt="anthelios"
				animated={isAnimated}
				top={512}
				left={354}
				width={125}
				height={53}
				onClick={ModalService.open.bind(null, AntheliosModal)}
				scale={0.5}
				glow={2}
			/>
		</>
	)
}

export default LRPBasicProducts
