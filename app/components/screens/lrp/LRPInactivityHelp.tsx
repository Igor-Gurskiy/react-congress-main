import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import { useLRPStore } from '@/stores/lrpStore'
import { useTourStore } from '@/stores/tourStore'
import { easePoly } from 'd3-ease'
import React, { useEffect } from 'react'
import { useSpring } from 'react-spring'
import { useUIStore } from '../../../stores/uiStore'
import Help from '../../Help/Help'
import ModalService from '@/components/shared/modal/ModalService'
import { useRouter } from 'next/router'
import OncoSupportModal from '@/components/screens/lrp/modals/onco-support/OncoSupportModal'
import FondationModal from '@/components/screens/lrp/modals/fondation/FondationModal'
import MelanomaDiagnosisModal from '@/components/screens/lrp/modals/MelanomaDiagnosis/MelanomaDiagnosisModal'
import VideoModal from '@/components/shared/video-modal/VideoModal'

let timer: NodeJS.Timeout

const LRPInactivityHelp = ({ zoom }) => {
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
			timer = setTimeout(() => setInactive(true), 15000)
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

export default LRPInactivityHelp

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
				left="1100px"
				top="830px"
				onClick={() => {
					ModalService.open(VideoModal, {
						videoId: 'GHFFJqqMjqM',
						trackerId: EventsEnum.lrpVideoVisit,
						trackerProgressId: EventsEnum.lrpVideoProgress,
					})
				}}
				plus
			/>
			<Help.Tip
				style={animation}
				left="710px"
				top="375px"
				plus
				onClick={() => {
					router.push('/lrp/cloud')
				}}
			/>
			<Help.Tip
				style={animation}
				left="680px"
				top="640px"
				plus
				onClick={() => {
					ModalService.open(OncoSupportModal)
				}}
			/>
			<Help.Tip
				style={animation}
				left="680px"
				top="770px"
				plus
				onClick={() => {
					ModalService.open(FondationModal)
				}}
			/>

			<Help.Tip
				style={animation}
				left="680px"
				top="900px"
				plus
				onClick={() => {
					ModalService.open(MelanomaDiagnosisModal)
				}}
			/>

			<a
				href="assets/La-Roche-Posay-Brochure.pdf"
				onClick={() => {
					setBrochure(true)
					API.tracker.sendEvent(EventsEnum.lrpBrochure)
				}}
				download
				target="_blank"
			>
				<Help.Tip style={animation} left="1470px" top="990px" plus />
			</a>

			<Help.Tip
				style={animation}
				left="1580px"
				top="635px"
				plus
				onClick={() => {
					API.tracker.sendEvent(EventsEnum.lrpProductsVisit)
					zoom()
				}}
			/>

			<Help.Tip
				style={animation}
				left="1845px"
				top="620px"
				plus
				onClick={() => {
					router.push('/lrp/game')
				}}
			/>
		</>
	)
}
