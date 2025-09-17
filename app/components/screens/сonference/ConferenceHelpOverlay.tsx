import React from 'react'
import Help from '@/components/Help/Help'
import { useUIStore } from '@/stores/uiStore'
import ModalService from '@/components/shared/modal/ModalService'
import DayOneSchedule from '@/components/screens/сonference/schedule/DayOneSchedule'
import DaySixSchedule from '@/components/screens/сonference/schedule/DaySixSchedule'
import DayFiveSchedule from '@/components/screens/сonference/schedule/DayFiveSchedule'
import DayFourSchedule from '@/components/screens/сonference/schedule/DayFourSchedule'
import DayThreeSchedule from '@/components/screens/сonference/schedule/DayThreeSchedule'
import DayTwoSchedule from '@/components/screens/сonference/schedule/DayTwoSchedule'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import { useBannerEvents } from '@/components/screens/сonference/recommendations-banner/RecommendationsBanner'
import {
	IProgramStatusEnum,
	useScheduleCurrentState,
} from '@/utils/schedule/schedule.utils'

const ConferenceHelpOverlay = ({ ...otherProps }) => {
	const setHelpOverlay = useUIStore((state) => state.setHelpOverlay)

	const closeOverlay = () => {
		setHelpOverlay(false)
	}

	return (
		<Help {...otherProps}>
			<Help.Controls />
			{/* <Help.TurnPhone /> */}

			<ConferenceTips closeOverlay={closeOverlay} />

			<Help.Support />

			<Help.Bottom onClick={closeOverlay} room="cerave" />
		</Help>
	)
}

export default ConferenceHelpOverlay

const ConferenceTips = ({ closeOverlay }) => {
	const { handleBanner, available } = useBannerEvents()
	const { getScheduleCurrentState } = useScheduleCurrentState()

	return (
		<>
			{available && (
				<Help.Tip
					left="1870px"
					top="745px"
					plus
					onClick={() => {
						closeOverlay()
						handleBanner()
					}}
				>
					<Help.TipText $top="120%">
						присоединиться
						<br />к онлайн-просмотру
						<br />
						секции
					</Help.TipText>
				</Help.Tip>
			)}

			{getScheduleCurrentState('2023-11-30') !==
				IProgramStatusEnum.Finished && (
				<Help.Tip
					left="1440px"
					top="260px"
					plus
					onClick={() => {
						closeOverlay()
						ModalService.open(DayOneSchedule)
					}}
				>
					<Help.TipText $top="110%">
						Ознакомиться
						<br />с вебинарами
						<br />
						первого дня
					</Help.TipText>
				</Help.Tip>
			)}

			{getScheduleCurrentState('2023-12-01') !==
				IProgramStatusEnum.Finished && (
				<Help.Tip
					left="1440px"
					top="370px"
					plus
					onClick={() => {
						closeOverlay()
						ModalService.open(DayTwoSchedule)
					}}
				>
					<Help.TipText $top="110%">
						Ознакомиться
						<br />с вебинарами
						<br />
						второго дня
					</Help.TipText>
				</Help.Tip>
			)}

			{getScheduleCurrentState('2023-12-02') !==
				IProgramStatusEnum.Finished && (
				<Help.Tip
					left="1440px"
					top="480px"
					plus
					onClick={() => {
						closeOverlay()
						ModalService.open(DayThreeSchedule)
					}}
				>
					<Help.TipText $top="110%">
						Ознакомиться
						<br />с вебинарами
						<br />
						третьего дня
					</Help.TipText>
				</Help.Tip>
			)}

			{getScheduleCurrentState('2023-12-03') !==
				IProgramStatusEnum.Finished && (
				<Help.Tip
					left="1440px"
					top="590px"
					plus
					onClick={() => {
						closeOverlay()
						ModalService.open(DayFourSchedule)
					}}
				>
					<Help.TipText $top="110%">
						Ознакомиться
						<br />с вебинарами
						<br />
						четвертого дня
					</Help.TipText>
				</Help.Tip>
			)}

			{getScheduleCurrentState('2023-12-04') !==
				IProgramStatusEnum.Finished && (
				<Help.Tip
					left="1440px"
					top="700px"
					plus
					onClick={() => {
						closeOverlay()
						ModalService.open(DayFiveSchedule)
					}}
				>
					<Help.TipText $top="110%">
						Ознакомиться
						<br />с вебинарами
						<br />
						пятого дня
					</Help.TipText>
				</Help.Tip>
			)}

			{getScheduleCurrentState('2023-12-05') !==
				IProgramStatusEnum.Finished && (
				<Help.Tip
					left="1440px"
					top="810px"
					plus
					onClick={() => {
						closeOverlay()
						ModalService.open(DaySixSchedule)
					}}
				>
					<Help.TipText $top="110%">
						Ознакомиться
						<br />с вебинарами
						<br />
						шестого дня
					</Help.TipText>
				</Help.Tip>
			)}

			<a
				href="/assets/Congress_2023.pdf"
				download
				target="_blank"
				onClick={() => {
					API.tracker.sendEvent(EventsEnum.confBrochure)
				}}
			>
				<Help.Tip
					left="660px"
					top="780px"
					plus
					onClick={() => {
						closeOverlay()
					}}
				>
					<Help.TipText $top="-120%">
						скачать
						<br />
						научную
						<br />
						программу
					</Help.TipText>
				</Help.Tip>
			</a>
		</>
	)
}
