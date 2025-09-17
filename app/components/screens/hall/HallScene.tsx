import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import React from 'react'
import styled, { css } from 'styled-components'
import Close from './Close'
import ConferenceRoomLight from './lights/ConferenceRoomLight'
import GameLight from './lights/GameLight'
import CounterLight from './lights/CounterLight'
import TVLight from './lights/TVLight'
import GreenRoomLight from '@/components/screens/hall/lights/GreenRoomLight'
import VichyRoomLight from '@/components/screens/hall/lights/VichyRoomLight'
import DercosRoomLight from '@/components/screens/hall/lights/DercosRoomLight'
import LRPRoomLight from '@/components/screens/hall/lights/LRPRoomLight'

const HallScene: React.FC<{ children?: JSX.Element }> = ({ children }) => {
	const specialization =
		useUIStore((state) => state.specialization) || 'dermatology'
	const tour = useTourStore((state) => state.tour)

	return (
		<>
			<picture>
				<img
					src="assets/images/hall/scene/hall-scene.jpg"
					alt="main hall background"
				/>
			</picture>

			<GreenRoomLight />
			<LRPRoomLight />
			<VichyRoomLight />
			<DercosRoomLight />

			<ConferenceRoomLight />
			<TVLight />

			{/*{['therapy', 'oncology', 'allerg', 'pediatrics'].includes(specialization) && <Close.SkinCeuticals $top={530} $left={52} />}*/}
			{['therapy', 'allerg', 'oncology', 'pediatrics'].includes(
				specialization,
			) && <Close.Vichy $top={594} $left={1267} />}
			{['therapy', 'allerg', 'oncology', 'pediatrics'].includes(
				specialization,
			) && <Close.Dercos $top={575} $left={1883} />}
			{/*{['therapy'].includes(specialization) && <Close.LRP $top={598} $left={708}/>}*/}

			{/*<GirlImage $tour={tour} src="assets/images/hall/girl.png" />*/}

			<CounterLight />
			<GameLight />
			{/*<BrochureLight />*/}

			{/* <HelloButton
                onClick={() => {
                    ModalService.open(TestModal)
                }}
            >Привет</HelloButton>*/}

			{children}
		</>
	)
}

export default HallScene

const GirlImage = styled.img<{ $tour?: string | null }>`
	position: absolute;
	z-index: 10;
	top: 882px;
	left: 1765px;
	user-select: none;

	${({ $tour }) =>
		$tour &&
		css`
			z-index: 20;
		`}
`

const HelloButton = styled.div`
	padding: 16px;
	background: #313131;
	font-size: 24px;
	color: #fff;
	position: absolute;

	cursor: pointer;

	top: 500px;
	left: 1000px;
`
