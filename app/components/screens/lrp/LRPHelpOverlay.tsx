import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import { useLRPStore } from '@/stores/lrpStore'
import { useUIStore } from '@/stores/uiStore'
import { useRouter } from 'next/router'
import React from 'react'
import Help from '../../Help/Help'
import ModalService from '@/components/shared/modal/ModalService'
import OncoSupportModal from '@/components/screens/lrp/modals/onco-support/OncoSupportModal'
import FondationModal from '@/components/screens/lrp/modals/fondation/FondationModal'
import MelanomaDiagnosisModal from '@/components/screens/lrp/modals/MelanomaDiagnosis/MelanomaDiagnosisModal'
import VideoModal from '@/components/shared/video-modal/VideoModal'

const LRPHelpOverlay = ({ zoom, ...otherProps }) => {
	const setHelpOverlay = useUIStore((state) => state.setHelpOverlay)
	const setCabin = useUIStore((state) => state.setCabin)
	const setMissionOne = useLRPStore((state) => state.setMissionOne)
	const setMissionTwo = useLRPStore((state) => state.setMissionTwo)
	const setMissionThree = useLRPStore((state) => state.setMissionThree)
	const setVideo = useLRPStore((state) => state.setVideo)
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

	return (
		<Help {...otherProps}>
			<Help.Controls />
			{/* <Help.TurnPhone /> */}
			<Help.Tip
				left="1100px"
				top="830px"
				onClick={() => {
					closeOverlay()
					ModalService.open(VideoModal, {
						videoId: 'GHFFJqqMjqM',
						trackerId: EventsEnum.lrpVideoVisit,
						trackerProgressId: EventsEnum.lrpVideoProgress,
					})
				}}
				plus
			>
				<Help.TipText $top="120%">
					УЗНАТЬ ПОДРОБНЕЕ
					<br />О МИКРОБИОМЕ
				</Help.TipText>
			</Help.Tip>
			<br />О МИКРОБИОМЕ
			<Help.Tip
				left="710px"
				top="375px"
				plus
				onClick={() => {
					router.push('/lrp/cloud')
				}}
			>
				<Help.TipText $top="120%">
					добавить свою
					<br />
					ассоциацию
					<br />с брендом
					<br />в облако слов
				</Help.TipText>
			</Help.Tip>
			<Help.Tip
				left="680px"
				top="640px"
				plus
				onClick={() => {
					closeOverlay()
					ModalService.open(OncoSupportModal)
				}}
			>
				<Help.TipText $top="120%">
					узнать
					<br />о социальных
					<br />
					проектах марки
				</Help.TipText>
			</Help.Tip>
			<Help.Tip
				left="680px"
				top="770px"
				plus
				onClick={() => {
					closeOverlay()
					ModalService.open(FondationModal)
				}}
			>
				<Help.TipText $top="120%">
					узнать
					<br />о социальных
					<br />
					проектах марки
				</Help.TipText>
			</Help.Tip>
			<Help.Tip
				left="680px"
				top="900px"
				plus
				onClick={() => {
					closeOverlay()
					ModalService.open(MelanomaDiagnosisModal)
				}}
			>
				<Help.TipText $top="120%">
					узнать
					<br />о социальных
					<br />
					проектах марки
				</Help.TipText>
			</Help.Tip>
			<Help.Tip
				left="1580px"
				top="635px"
				plus
				onClick={() => {
					closeOverlay()
					API.tracker.sendEvent(EventsEnum.lrpProductsVisit)
					zoom()
				}}
			>
				<Help.TipText $top="120%">
					ОЗНАКОМИТЬСЯ
					<br />С ПРОДУКЦИЕЙ
				</Help.TipText>
			</Help.Tip>
			<a
				href="assets/La-Roche-Posay-Brochure.pdf"
				onClick={() => {
					API.tracker.sendEvent(EventsEnum.lrpScheme)
				}}
				download
				target="_blank"
			>
				<Help.Tip left="1470px" top="990px" onClick={closeOverlay} plus>
					<Help.TipText $top="120%">
						СКАЧАТЬ
						<br />
						брошюру
						<br />
						по продуктам
					</Help.TipText>
				</Help.Tip>
			</a>
			<Help.Tip
				left="1845px"
				top="620px"
				plus
				onClick={() => {
					closeOverlay()
					router.push('/lrp/game')
				}}
			>
				<Help.TipText $top="120%">Игра</Help.TipText>
			</Help.Tip>
			<Help.Support />
			<Help.Bottom onClick={closeOverlay} room="lrp" />
		</Help>
	)
}

export default LRPHelpOverlay
