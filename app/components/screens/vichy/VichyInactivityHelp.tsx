import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import { useTourStore } from '@/stores/tourStore'
import { useVichyModalStore } from '@/stores/vichyModalStore'
import { easePoly } from 'd3-ease'
import React, { useEffect } from 'react'
import { useSpring } from 'react-spring'
import { useUIStore } from '../../../stores/uiStore'
import Help from '../../Help/Help'
import { useRouter } from 'next/router'
import ModalService from '@/components/shared/modal/ModalService'
import SerumModal from '@/components/screens/dercos/modals/serum/SerumModal'

let timer: NodeJS.Timeout

const VichyInactivityHelp = ({ zoom }) => {
	const inactive = useUIStore((state) => state.inactive)
	const liftactivProject = useVichyModalStore((state) => state.liftactivProject)
	const video = useVichyModalStore((state) => state.video)
	const brochure = useUIStore((state) => state.brochure)
	const project = useVichyModalStore((state) => state.project)
	const helpOverlay = useUIStore((state) => state.helpOverlay)
	const preloader = useUIStore((state) => state.preloader)
	const isLoading = useUIStore((state) => state.isLoading)
	const tour = useTourStore((state) => state.tour)
	const cabin = useUIStore((state) => state.cabin)
	const locked = useUIStore((state) => state.locked)
	const setInactive = useUIStore((state) => state.setInactive)
	const setBrochure = useUIStore((state) => state.setBrochure)

	useEffect(() => {
		return () => {
			setInactive(false)
			setBrochure(false)
		}
	}, [])

	useEffect(() => {
		if (!preloader && !tour && !isLoading) {
			timer = setTimeout(() => setInactive(true), 10000)
		}
		return () => {
			clearTimeout(timer)
			setInactive(false)
		}
	}, [preloader, isLoading, tour])

	// Prevent inactive help, because of active user
	useEffect(() => {
		if (
			locked ||
			cabin ||
			liftactivProject ||
			video ||
			project ||
			brochure ||
			helpOverlay
		) {
			clearTimeout(timer)
		}
	}, [locked, cabin, liftactivProject, video, project, brochure, helpOverlay])

	useEffect(() => {
		if (helpOverlay) {
			setInactive(false)
		}
	}, [helpOverlay])

	if (helpOverlay || !inactive || locked) return null

	return <VichyTips zoom={zoom} closeOverlay={() => {}} />
}

export default VichyInactivityHelp

const VichyTips = ({ zoom, closeOverlay }) => {
	const setBrochure = useUIStore((state) => state.setBrochure)
	const router = useRouter()

	const animation = useSpring({
		from: { opacity: 0, transform: 'scale(0.6)' },
		to: { opacity: 1, transform: 'scale(1)' },
		config: { duration: 700, easing: easePoly.exponent(2) },
	})

	return (
		<>
			<Help.Tip
				style={animation}
				left="650px"
				top="375px"
				plus
				onClick={() => {
					router.push('/vichy/cloud')
				}}
			/>

			<Help.Tip
				style={animation}
				left="650px"
				top="875px"
				plus
				onClick={() => {
					API.tracker.sendEvent(EventsEnum.vichyBanner)
					ModalService.open(SerumModal)
				}}
			/>

			<Help.Tip
				style={animation}
				left="1410px"
				top="230px"
				plus
				onClick={() => {
					API.tracker.sendEvent(EventsEnum.vichyProductsVisit)
					zoom()
				}}
			/>

			<Help.Tip
				style={animation}
				left="1965px"
				top="570px"
				plus
				onClick={() => {
					router.push('/vichy/game')
				}}
			/>
		</>
	)
}
