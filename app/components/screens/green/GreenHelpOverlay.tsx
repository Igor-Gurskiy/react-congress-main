import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import Help from '@/components/Help/Help'
import { useUIStore } from '@/stores/uiStore'
import { useRouter } from 'next/router'
import React from 'react'
import EcologicalModal from '@/components/screens/green/modals/ecological/EcologicalModal'
import ModalService from '@/components/shared/modal/ModalService'
import StoriesModal from '@/components/screens/green/modals/stories/StoriesModal'
import VichyGreenModal from '@/components/screens/green/modals/vichy/VichyGreenModal'

const GreenHelpOverlay = ({ zoom, ...otherProps }) => {
	const setHelpOverlay = useUIStore((state) => state.setHelpOverlay)
	const live = useUIStore((state) => state.live)

	const router = useRouter()

	const handleStandClick = (e) => {
		e.preventDefault()
		if (live) {
			if (window) {
				window.open('https://events.loreal.com.ru/', '_blank')?.focus()
			}
		} else {
			router.push('/conference')
		}
	}

	const closeOverlay = () => {
		setHelpOverlay(false)
	}
	const activeTime = 1668081600000 <= Date.now()

	return (
		<Help {...otherProps}>
			<Help.Controls />
			{/* <Help.TurnPhone /> */}

			<Help.Tip
				left="340px"
				top="780px"
				plus
				onClick={() => {
					ModalService.open(VichyGreenModal)
					// TODO: add tracker event
					API.tracker.sendEvent(EventsEnum.greenVichyLabsVisit)
				}}
			>
				<Help.TipText $top="120%">
					узнать
					<br />
					об экологических
					<br />
					проектах марок
				</Help.TipText>
			</Help.Tip>
			<Help.Tip
				left="690px"
				top="840px"
				plus
				onClick={() => {
					ModalService.open(StoriesModal, { padding: 0 })
				}}
			>
				<Help.TipText $top="120%">
					узнать
					<br />
					об экологических
					<br />
					проектах марок
				</Help.TipText>
			</Help.Tip>
			<Help.Tip
				left="610px"
				top="570px"
				plus
				onClick={() => {
					ModalService.open(EcologicalModal)
					API.tracker.sendEvent(EventsEnum.greenLRPLabsVisit)
				}}
			>
				<Help.TipText $top="120%">
					узнать
					<br />
					об экологических
					<br />
					проектах марок
				</Help.TipText>
			</Help.Tip>

			<Help.Tip
				left="1380px"
				top="400px"
				plus
				onClick={() => {
					closeOverlay()
					API.tracker.sendEvent(EventsEnum.greenProductsVisit)
					zoom()
				}}
			>
				<Help.TipText $top="120%">
					ОЗНАКОМИТЬСЯ
					<br />С ПРОДУКЦИЕЙ
				</Help.TipText>
			</Help.Tip>

			<Help.Tip
				left="1810px"
				top="670px"
				plus
				onClick={() => {
					closeOverlay()
					router.push('/green/game')
				}}
			>
				<Help.TipText $top="120%">
					играть в игру
					<br />
					спасения планеты
					<br />
					от отходов
				</Help.TipText>
			</Help.Tip>

			<Help.Support />

			<Help.Bottom onClick={closeOverlay} room="lrp" />
		</Help>
	)
}

export default GreenHelpOverlay
