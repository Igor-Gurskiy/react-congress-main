import styled from 'styled-components'

import { handleLorealRedirect } from '@/components/screens/hall/lights/TVLight'
import AdultDermatoses from '@/components/screens/сonference/recommendations-banner/AdultDermatoses'
import Cosmetology from '@/components/screens/сonference/recommendations-banner/Cosmetology'
import KidsAndTeens from '@/components/screens/сonference/recommendations-banner/KidsAndTeens'
import MedOnline from '@/components/screens/сonference/recommendations-banner/MedOnline'
import Oncology from '@/components/screens/сonference/recommendations-banner/Oncology'
import Pharmacy from '@/components/screens/сonference/recommendations-banner/Pharmacy'
import Trihology from '@/components/screens/сonference/recommendations-banner/Trihology'
import SocialProject from '@/components/screens/сonference/recommendations-banner/social-project/SocialProject'
import DayFiveSchedule from '@/components/screens/сonference/schedule/DayFiveSchedule'
import DayFourSchedule from '@/components/screens/сonference/schedule/DayFourSchedule'
import DayOneSchedule from '@/components/screens/сonference/schedule/DayOneSchedule'
import DaySixSchedule from '@/components/screens/сonference/schedule/DaySixSchedule'
import DayThreeSchedule from '@/components/screens/сonference/schedule/DayThreeSchedule'
import DayTwoSchedule from '@/components/screens/сonference/schedule/DayTwoSchedule'
import ModalService from '@/components/shared/modal/ModalService'
import { SpecType, useUIStore } from '@/stores/uiStore'
import { getTimeAtZeroMeridian } from '@/utils/get-time-at-zero-meridian'
import {
	IProgramStatusEnum,
	useScheduleCurrentState,
} from '@/utils/schedule/schedule.utils'
import { format, isAfter, set } from 'date-fns'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'
import {shuffleArray} from "@/utils/array.helpers";

const nov30Banners = [
	{
		banner: SocialProject,
		slug: 'social',
		passed: false,
		modal: DayOneSchedule,
		day: '2023-11-30',
		spec: ['dermatology', 'allerg'],
	},
	{
		banner: MedOnline,
		slug: 'medical',
		passed: false,
		modal: DayOneSchedule,
		day: '2023-11-30',
		spec: ['dermatology', 'allerg'],
	},
]
const dec01Banners = [
	{
		banner: KidsAndTeens,
		slug: 'kids-n-teens',
		passed: false,
		modal: DayTwoSchedule,
		day: '2023-12-01',
		spec: ['pediatrics', 'dermatology', 'allerg'],
	},
]
const dec02Banners = [
	{
		banner: AdultDermatoses,
		slug: 'acne',
		passed: false,
		modal: DayThreeSchedule,
		day: '2023-12-02',
		spec: ['therapy', 'dermatology', 'allerg'],
	},
]
const dec03Banners = [
	{
		banner: Oncology,
		slug: 'onco',
		passed: false,
		modal: DayFourSchedule,
		day: '2023-12-03',
		spec: ['oncology', 'dermatology', 'allerg'],
	},
]
const dec04Banners = [
	{
		banner: Trihology,
		slug: 'trihology',
		passed: false,
		modal: DayFiveSchedule,
		day: '2023-12-04',
		spec: ['dermatology', 'allerg'],
	},
	{
		banner: Cosmetology,
		slug: 'cosmetology',
		passed: false,
		modal: DayFiveSchedule,
		day: '2023-12-04',
		spec: ['dermatology', 'allerg'],
	},
]
const dec05Banners = [
	{
		banner: Pharmacy,
		slug: 'pharmacy',
		passed: false,
		modal: DaySixSchedule,
		day: '2023-12-05',
		spec: ['pharmacy', 'dermatology', 'allerg'],
	},
]
const dayBanners = {
	'2023-11-30': nov30Banners,
	'2023-12-01': dec01Banners,
	'2023-12-02': dec02Banners,
	'2023-12-03': dec03Banners,
	'2023-12-04': dec04Banners,
	'2023-12-05': dec05Banners,
}

const banners = [
	...nov30Banners,
	...dec01Banners,
	...dec02Banners,
	...dec03Banners,
	...dec04Banners,
	...dec05Banners,
]

const getDayBanners = (spec: NonNullable<SpecType>) => {
	const currentDay = format(new Date(), 'yyyy-MM-dd')
	const isAfterCongress = isAfter(
		getTimeAtZeroMeridian(),
		set(new Date(), {
			year: 2023,
			month: 11,
			date: 5,
			hours: 21,
			minutes: 0,
			seconds: 0,
		}),
	)


	if (isAfterCongress) {
		return banners
			.map((b) => ({ ...b, passed: true }))
			.filter((b) => b.spec.includes(spec))
	} else {
		return dayBanners[currentDay] || []
	}
}

const NoModal = () => <div />

export const useBannerEvents = () => {
	const live = useUIStore((state) => state.live)
	const scheduleDay = useUIStore((state) => state.scheduleDay)
	const banner = banners.find((b) => b.slug == scheduleDay)
	const Modal = banner?.modal || NoModal
	const { getScheduleCurrentState } = useScheduleCurrentState()
	const available = banner?.day
		? getScheduleCurrentState(banner.day) !== IProgramStatusEnum.Records
		: true

	const handleClick = () => {
		if (live) {
			handleLorealRedirect()
			return
		}

		ModalService.open(Modal)
	}

	return { handleBanner: handleClick, available }
}

const SliderBanner = ({ banner: Banner, slug, modal: Modal, passed, day }) => {
	const live = useUIStore((state) => state.live)
	const setScheduleDay = useUIStore((state) => state.setScheduleDay)

	const { getScheduleCurrentState } = useScheduleCurrentState()
	const eventPassed =
		getScheduleCurrentState(day) === IProgramStatusEnum.Records || passed

	useEffect(() => {
		setScheduleDay(slug)
	}, [])

	return (
		<BannerWrapper
			key={slug}
			onClick={() => {
				if (live) {
					handleLorealRedirect()
					return
				}
				const status = getScheduleCurrentState(day)

				if (status === IProgramStatusEnum.Finished) return
				if (
					status === IProgramStatusEnum.Future ||
					status === IProgramStatusEnum.Records
				) {
					ModalService.open(Modal)
				}
			}}
		>
			<div
				style={{
					width: 332,
					height: 414,
					borderRadius: 8,
					overflow: 'hidden',
				}}
			>
				<Banner passed={eventPassed} />
			</div>
		</BannerWrapper>
	)
}

const RecommendationsBanner = () => {
	const live = useUIStore((state) => state.live)
	const spec = useUIStore((state) => state.specialization)
	const [banners, setBanners] = useState([])



	useEffect(() => {
		setBanners(shuffleArray(getDayBanners(spec || 'dermatology')))
	}, [spec])

	return (
		<Wrapper>
			<Slider>
				{banners.map(({ banner, slug, modal, passed, day }) => (
					<SliderBanner
						key={slug}
						banner={banner}
						slug={slug}
						modal={modal}
						passed={passed}
						day={day}
					/>
				))}
			</Slider>
		</Wrapper>
	)
}

export default RecommendationsBanner

const BannerWrapper = styled.div`
	height: 100%;
	width: 100%;

	display: flex;
	justify-content: flex-end;
	overflow: hidden;
	border-radius: 8px;
`

const Wrapper = styled.div`
	//width: 332px;
	//height: 414px;
	width: 375px;
	height: 414px;
	position: absolute;
	top: 0;
	right: 0;
	border-radius: 8px;
	//transform: perspective(1000px) rotateY(1deg);
	overflow: hidden;
`

const Slider = ({ children }) => {
	const [currentChild, setCurrentChild] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentChild(
				(prevChild) => (prevChild + 1) % React.Children.count(children),
			)
		}, 10000)

		return () => clearInterval(interval)
	}, [children])

	return (
		<div style={{ position: 'relative', height: 414 }}>
			<AnimatePresence initial={false}>
				{React.Children.map(
					children,
					(child, index) =>
						currentChild === index && (
							<motion.div
								key={index}
								initial={{ opacity: 1, y: 414 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 1, y: -414 }}
								transition={{
									ease: 'easeOut',
									duration: 1.5,
								}}
								style={{
									position: 'absolute',
									width: 375,
									height: 414,
								}}
							>
								{child}
							</motion.div>
						),
				)}
			</AnimatePresence>
		</div>
	)
}
