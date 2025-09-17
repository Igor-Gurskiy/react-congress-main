import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import { useRouter } from 'next/router'
import React from 'react'
import { useUIStore } from '../../../stores/uiStore'
import Help from '../../Help/Help'
import ModalService from '@/components/shared/modal/ModalService'
import SerumModal from '@/components/screens/dercos/modals/serum/SerumModal'

const VichyHelpOverlay = ({ zoom, ...otherProps }) => {
	const setHelpOverlay = useUIStore((state) => state.setHelpOverlay)

	const closeOverlay = () => {
		setHelpOverlay(false)
	}

	// return <VichyTips zoom={zoom} closeOverlay={closeOverlay} />

	return (
		<Help {...otherProps}>
			<Help.Controls />
			{/* <Help.TurnPhone /> */}

			<VichyTips zoom={zoom} closeOverlay={closeOverlay} />

			<Help.Support />

			<Help.Bottom onClick={closeOverlay} room="vichy" />
		</Help>
	)
}

export default VichyHelpOverlay

export const VichyTips = ({ zoom, closeOverlay }) => {
	const router = useRouter()

	return (
		<>
			<Help.Tip
				left="650px"
				top="375px"
				plus
				onClick={() => {
					router.push('/vichy/cloud')
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
				left="650px"
				top="875px"
				plus
				onClick={() => {
					API.tracker.sendEvent(EventsEnum.vichyBanner)
					ModalService.open(SerumModal)
				}}
			>
				<Help.TipText $top="-120%">
					узнать
					<br />
					об экспозом-
					<br />
					факторах
				</Help.TipText>
			</Help.Tip>

			<Help.Tip
				left="1410px"
				top="230px"
				plus
				onClick={() => {
					closeOverlay()
					API.tracker.sendEvent(EventsEnum.vichyProductsVisit)
					zoom()
				}}
			>
				<Help.TipText $top="120%">
					ОЗНАКОМИТЬСЯ <br />С ПРОДУКЦИЕЙ
				</Help.TipText>
			</Help.Tip>

			<Help.Tip
				left="1965px"
				top="570px"
				plus
				onClick={() => {
					closeOverlay()
					router.push('/vichy/game')
				}}
			>
				<Help.TipText $top="120%">
					играть в игру по
					<br />
					протоколам Vichy
				</Help.TipText>
			</Help.Tip>
		</>
	)
}
