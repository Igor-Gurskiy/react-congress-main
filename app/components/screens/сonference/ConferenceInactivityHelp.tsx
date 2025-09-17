import { useUIStore } from '@/stores/uiStore'
import { easePoly } from 'd3-ease'
import React, { useEffect } from 'react'
import { useSpring } from 'react-spring'
import Help from '@/components/Help/Help'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import {
	IProgramStatusEnum,
	useScheduleCurrentState,
} from '@/utils/schedule/schedule.utils'
import { useBannerEvents } from '@/components/screens/сonference/recommendations-banner/RecommendationsBanner'

let timer: NodeJS.Timeout

const ConferenceInactivityHelp = () => {
	const inactive = useUIStore((state) => state.inactive)
	const brochure = useUIStore((state) => state.brochure)
	const helpOverlay = useUIStore((state) => state.helpOverlay)
	const preloader = useUIStore((state) => state.preloader)
	const cabin = useUIStore((state) => state.cabin)
	const locked = useUIStore((state) => state.locked)
	const schedule = useUIStore((state) => state.schedule)
	const setInactive = useUIStore((state) => state.setInactive)
	const setBrochure = useUIStore((state) => state.setBrochure)

	useEffect(() => {
		return () => {
			setInactive(false)
			setBrochure(false)
		}
	}, [])

	useEffect(() => {
		if (!preloader) {
			timer = setTimeout(() => setInactive(true), 10000)
		}
		return () => {
			clearTimeout(timer)
			setInactive(false)
		}
	}, [preloader])

	// Prevent inactive help, because of active user
	useEffect(() => {
		if (locked || cabin || schedule || brochure || helpOverlay) {
			clearTimeout(timer)
		}
	}, [locked, cabin, schedule, brochure, helpOverlay])

	useEffect(() => {
		if (helpOverlay) {
			setInactive(false)
		}
	}, [helpOverlay])

	// if (helpOverlay || !inactive || locked) return null

	return <ConferenceInactivityTips />
}

export default ConferenceInactivityHelp

const ConferenceInactivityTips = () => {
	const { getScheduleCurrentState } = useScheduleCurrentState()
	const { handleBanner, available } = useBannerEvents()

	const animation = useSpring({
		from: { opacity: 0, transform: 'scale(0.6)' },
		to: { opacity: 1, transform: 'scale(1)' },
		config: { duration: 700, easing: easePoly.exponent(2) },
	})

	return (
		<>
			{getScheduleCurrentState('2023-11-30') !==
				IProgramStatusEnum.Finished && (
				<Help.Tip
					style={{ ...animation, pointerEvents: 'none' }}
					left="1440px"
					top="260px"
					plus
				/>
			)}

			{getScheduleCurrentState('2023-12-01') !==
				IProgramStatusEnum.Finished && (
				<Help.Tip
					style={{ ...animation, pointerEvents: 'none' }}
					left="1440px"
					top="370px"
					plus
				/>
			)}

			{getScheduleCurrentState('2023-12-02') !==
				IProgramStatusEnum.Finished && (
				<Help.Tip
					style={{ ...animation, pointerEvents: 'none' }}
					left="1440px"
					top="480px"
					plus
				/>
			)}

			{getScheduleCurrentState('2023-12-03') !==
				IProgramStatusEnum.Finished && (
				<Help.Tip
					style={{ ...animation, pointerEvents: 'none' }}
					left="1440px"
					top="590px"
					plus
				/>
			)}

			{getScheduleCurrentState('2023-12-04') !==
				IProgramStatusEnum.Finished && (
				<Help.Tip
					style={{ ...animation, pointerEvents: 'none' }}
					left="1440px"
					top="700px"
					plus
				/>
			)}

			{getScheduleCurrentState('2023-12-05') !==
				IProgramStatusEnum.Finished && (
				<Help.Tip
					style={{ ...animation, pointerEvents: 'none' }}
					left="1440px"
					top="810px"
					plus
				/>
			)}

			{available && (
				<Help.Tip
					style={{ ...animation, pointerEvents: 'none' }}
					left="1870px"
					top="745px"
					plus
				/>
			)}

			<a
				href="assets/Congress_2023.pdf"
				onClick={() => {
					API.tracker.sendEvent(EventsEnum.confBrochure)
				}}
				download
				target="_blank"
			>
				<Help.Tip left="660px" top="780px" style={animation} plus />
			</a>
		</>
	)
}
