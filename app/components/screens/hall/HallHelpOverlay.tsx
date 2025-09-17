import Link from 'next/link'
import React from 'react'
import { useUIStore } from '../../../stores/uiStore'
import Help from '../../Help/Help'
import { handleHallTv } from '@/components/screens/hall/lights/TVLight'
import ModalService from '@/components/shared/modal/ModalService'
import MoleculeGame from '@/components/screens/moleculegame/MoleculeGame'

const HallHelpOverlay = ({ ...otherProps }) => {
	const setHelpOverlay = useUIStore((state) => state.setHelpOverlay)
	const setSpecSelector = useUIStore((state) => state.setSpecSelector)

	const closeOverlay = () => {
		setHelpOverlay(false)
	}

	const handleMoleculeRulesClick = () => {
		ModalService.open(MoleculeGame, { padding: 0 })
	}

	return (
		<Help {...otherProps}>
			<Help.Controls />
			{/* <Help.TurnPhone /> */}
			{/* <Help.Brand /> */}

			<Link legacyBehavior href="/conference/index">
				<a href="/conference/index.tsx">
					<Help.Tip left="725px" top="280px" onClick={closeOverlay} plus>
						<Help.TipText $top="-120%">
							перейти
							<br />в конференц-зал
						</Help.TipText>
					</Help.Tip>
				</a>
			</Link>

			<Help.Tip
				left="1440px"
				top="370px"
				onClick={() => {
					handleHallTv()
					closeOverlay()
				}}
				plus
			>
				<Help.TipText $top="120%">
					СМОТРЕТЬ
					<br />
					ДОПОЛНИТЕЛЬНУЮ
					<br />
					ИНФОРМАЦИЮ
				</Help.TipText>
			</Help.Tip>

			<Link legacyBehavior href="/green">
				<a href="/green">
					<Help.Tip left="285px" top="745px" onClick={closeOverlay} plus>
						<Help.TipText $top="115%">
							узнать
							<br />о новостях
							<br />
							бренда
						</Help.TipText>
					</Help.Tip>
				</a>
			</Link>
			<Link legacyBehavior href="/lrp">
				<a href="/lrp">
					<Help.Tip left="865px" top="745px" onClick={closeOverlay} plus>
						<Help.TipText $top="115%">
							узнать
							<br />о новостях
							<br />
							бренда
						</Help.TipText>
					</Help.Tip>
				</a>
			</Link>
			<Link legacyBehavior href="/vichy">
				<a href="/vichy">
					<Help.Tip left="1510px" top="745px" onClick={closeOverlay} plus>
						<Help.TipText $top="115%">
							узнать
							<br />о новостях
							<br />
							бренда
						</Help.TipText>
					</Help.Tip>
				</a>
			</Link>
			<Link legacyBehavior href="/dercos">
				<a href="/dercos">
					<Help.Tip left="2100px" top="745px" onClick={closeOverlay} plus>
						<Help.TipText $top="115%">
							узнать
							<br />о новостях
							<br />
							бренда
						</Help.TipText>
					</Help.Tip>
				</a>
			</Link>

			<Help.Tip
				left="550px"
				top="1010px"
				onClick={() => {
					closeOverlay()
					handleMoleculeRulesClick()
				}}
				plus
			>
				<Help.TipText $top="-100%">
					Ознакомиться
					<br />с правилами игры
				</Help.TipText>
			</Help.Tip>

			<Help.Tip
				left="1730px"
				top="940px"
				plus
				onClick={() => {
					closeOverlay()
					setSpecSelector(true)
				}}
			>
				<Help.TipText $top="-120%">
					Счетчик
					<br />
					посетителей
				</Help.TipText>
			</Help.Tip>

			{/*<a*/}
			{/*	href="/assets/files/conference/ACD-Congress-2022.pdf"*/}
			{/*	download*/}
			{/*	target="_blank"*/}
			{/*>*/}
			{/*	<Help.Tip left="1830px" top="990px" onClick={closeOverlay} plus>*/}
			{/*		<Help.TipText>*/}
			{/*			скачать*/}
			{/*			<br />*/}
			{/*			научную*/}
			{/*			<br />*/}
			{/*			программу*/}
			{/*		</Help.TipText>*/}
			{/*	</Help.Tip>*/}
			{/*</a>*/}

			<Help.Support />

			<Help.Bottom onClick={closeOverlay} room="hall" />
		</Help>
	)
}

export default HallHelpOverlay
