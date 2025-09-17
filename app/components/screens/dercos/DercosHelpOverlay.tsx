import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import Help from '@/components/Help/Help'
import { useUIStore } from '@/stores/uiStore'
import { useRouter } from 'next/router'
import React from 'react'
import ModalService from '@/components/shared/modal/ModalService'
import MissionModal from '@/components/screens/dercos/modals/mission/MissionModal'

const DercosHelpOverlay = ({ zoom, ...otherProps }) => {
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

	return (
		<Help {...otherProps}>
			<Help.Controls />
			{/* <Help.TurnPhone /> */}

			<Help.Tip
				left="685px"
				top="530px"
				plus
				onClick={() => {
					API.tracker.sendEvent(EventsEnum.dercosCloud)
					router.push('/dercos/cloud')
				}}
			>
				<Help.TipText $top="120%">
					добавить свою
					<br />
					ассоциацию с<br />
					брендом в<br />
					облако слов
				</Help.TipText>
			</Help.Tip>

			<Help.Tip
				left="685px"
				top="885px"
				plus
				onClick={() => {
					API.tracker.sendEvent(EventsEnum.dercosBanner)
					ModalService.open(MissionModal)
				}}
			>
				<Help.TipText $top="-140%">
					узнать <br />
					о Dercos aminexil
					<br />
					intensive 5
				</Help.TipText>
			</Help.Tip>

			<Help.Tip
				left="1460px"
				top="260px"
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

			<Help.Tip
				left="1925px"
				top="580px"
				plus
				onClick={() => {
					closeOverlay()
					router.push('/dercos/game')
				}}
			>
				<Help.TipText $top="120%">
					играть в игру
					<br />
					по протоколам
					<br />
					Dercos
				</Help.TipText>
			</Help.Tip>

			<Help.Support />

			<Help.Bottom onClick={closeOverlay} room="lrp" />
		</Help>
	)
}

export default DercosHelpOverlay
