import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import Help from '@/components/Help/Help'
import { useLRPStore } from '@/stores/lrpStore'
import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import { easePoly } from 'd3-ease'
import React, { useEffect } from 'react'
import { useSpring } from 'react-spring'
import { useRouter } from 'next/router'
import ModalService from '@/components/shared/modal/ModalService'
import MissionModal from '@/components/screens/dercos/modals/mission/MissionModal'

let timer: NodeJS.Timeout

const DercosInactivityHelp = ({ zoom }) => {
	const inactive = useUIStore((state) => state.inactive)
	const video = useLRPStore((state) => state.video)
	const missionOne = useLRPStore((state) => state.missionOne)
	const missionTwo = useLRPStore((state) => state.missionTwo)
	const missionThree = useLRPStore((state) => state.missionThree)
	const brochure = useUIStore((state) => state.brochure)
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
			video ||
			brochure ||
			helpOverlay ||
			missionOne ||
			missionTwo ||
			missionThree
		) {
			clearTimeout(timer)
		}
	}, [
		locked,
		cabin,
		video,
		missionOne,
		missionTwo,
		missionThree,
		brochure,
		helpOverlay,
	])

	useEffect(() => {
		if (helpOverlay) {
			setInactive(false)
		}
	}, [helpOverlay])

	if (helpOverlay || !inactive || locked) return null

	return <LRPTips zoom={zoom} />
}

export default DercosInactivityHelp

const LRPTips = ({ zoom }) => {
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
				left="685px"
				top="530px"
				plus
				onClick={() => {
					API.tracker.sendEvent(EventsEnum.dercosCloud)
					router.push('/dercos/cloud')
				}}
			/>

			<Help.Tip
				style={animation}
				left="685px"
				top="885px"
				plus
				onClick={() => {
					API.tracker.sendEvent(EventsEnum.dercosBanner)
					ModalService.open(MissionModal)
				}}
			/>

			<Help.Tip
				style={animation}
				left="1460px"
				top="260px"
				plus
				onClick={() => {
					API.tracker.sendEvent(EventsEnum.dercosProductsVisit)
					zoom()
				}}
			/>

			<Help.Tip
				style={animation}
				left="1925px"
				top="580px"
				plus
				onClick={() => {
					router.push('/dercos/game')
				}}
			/>
		</>
	)
}
