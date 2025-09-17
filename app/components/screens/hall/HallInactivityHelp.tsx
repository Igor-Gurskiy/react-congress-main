import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import { easePoly } from 'd3-ease'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useSpring } from 'react-spring'
import Help from '../../Help/Help'
import { handleHallTv } from '@/components/screens/hall/lights/TVLight'
import ModalService from '@/components/shared/modal/ModalService'
import MoleculeGame from '@/components/screens/moleculegame/MoleculeGame'

let timer: NodeJS.Timeout

const HallInactivityHelp = () => {
	const inactive = useUIStore((state) => state.inactive)
	const brochure = useUIStore((state) => state.brochure)
	const helpOverlay = useUIStore((state) => state.helpOverlay)
	const isLoading = useUIStore((state) => state.isLoading)
	const preloader = useUIStore((state) => state.preloader)
	const locked = useUIStore((state) => state.locked)
	const tour = useTourStore((state) => state.tour)
	const specSelector = useUIStore((state) => state.specSelector)
	const specialization = useUIStore((state) => state.specialization)
	const setInactive = useUIStore((state) => state.setInactive)
	const setBrochure = useUIStore((state) => state.setBrochure)

	useEffect(() => {
		return () => {
			setInactive(false)
			setBrochure(false)
		}
	}, [])

	useEffect(() => {
		if (!preloader && !tour && !isLoading && specialization) {
			timer = setTimeout(() => setInactive(true), 10000)
		}
		return () => {
			clearTimeout(timer)
			setInactive(false)
		}
	}, [preloader, tour, isLoading, specialization])

	// Prevent inactive help, because of active user
	useEffect(() => {
		if (locked || specSelector || brochure || helpOverlay) {
			clearTimeout(timer)
		}
	}, [locked, specSelector, brochure, helpOverlay])

	useEffect(() => {
		if (helpOverlay) {
			setInactive(false)
		}
	}, [helpOverlay])

	if (helpOverlay || !inactive || locked) return null

	return <HallInactivityTips />
}

export default HallInactivityHelp

const HallInactivityTips = () => {
	const setSpecSelector = useUIStore((state) => state.setSpecSelector)

	const animation = useSpring({
		from: { opacity: 0, transform: 'scale(0.6)' },
		to: { opacity: 1, transform: 'scale(1)' },
		config: { duration: 700, easing: easePoly.exponent(2) },
	})

	const handleMoleculeRulesClick = () => {
		ModalService.open(MoleculeGame, { padding: 0 })
	}

	return (
		<>
			<Link legacyBehavior href="/conference/index">
				<a href="/conference/index.tsx">
					<Help.Tip left="725px" top="280px" style={animation} plus />
				</a>
			</Link>

			<Help.Tip
				left="1440px"
				top="370px"
				plus
				onClick={() => {
					handleHallTv()
				}}
			/>

			<Link legacyBehavior href="/green">
				<a href="/green">
					<Help.Tip left="285px" top="745px" style={animation} plus />
				</a>
			</Link>
			<Link legacyBehavior href="/lrp">
				<a href="/lrp">
					<Help.Tip left="865px" top="745px" style={animation} plus />
				</a>
			</Link>
			<Link legacyBehavior href="/vichy">
				<a href="/vichy">
					<Help.Tip left="1510px" top="745px" style={animation} plus />
				</a>
			</Link>
			<Link legacyBehavior href="/dercos">
				<a href="/dercos">
					<Help.Tip left="2100px" top="745px" style={animation} plus />
				</a>
			</Link>

			<Help.Tip
				left="550px"
				top="1010px"
				style={animation}
				plus
				onClick={handleMoleculeRulesClick}
			/>

			<Help.Tip
				left="1730px"
				top="940px"
				plus
				onClick={() => {
					setSpecSelector(true)
				}}
			/>

			{/*<a*/}
			{/*	href="/assets/files/conference/ACD-Congress-2022.pdf"*/}
			{/*	download*/}
			{/*	target="_blank"*/}
			{/*>*/}
			{/*	<Help.Tip left="1830px" top="990px" style={animation} plus />*/}
			{/*</a>*/}
		</>
	)
}
