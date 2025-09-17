import schedule from '@/utils/schedule/schedule'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { ScheduleSectionType } from '@/components/Schedule/ScheduleSection'
import { ColumnStateType, useConferenceStore } from '@/stores/conferenceStore'
import { useUIStore } from '@/stores/uiStore'
import WatchRecord from '@/components/screens/сonference/stands/WatchRecord'
import WatchNow from '@/components/screens/сonference/stands/WatchNow'
import { isSectionLive } from '@/utils/schedule/schedule.utils'

const daySchedule = schedule.get('2022-11-10')

export const fetchCurrentColumnState = ({
	setState,
	eventDay,
	daySchedule,
}: {
	setState: (state: ColumnStateType) => void
	eventDay: number
	daySchedule: ScheduleSectionType[] | undefined
}) => {
	const now = Date.now()
	const day = format(now, 'dd')
	const currentDay = parseInt(day, 10)

	const isNow = currentDay === eventDay

	if (!isNow) {
		if (currentDay < eventDay) {
			return setState('calendar')
		}
	}

	if (!daySchedule) return

	const start = daySchedule[0].start
	const end = daySchedule[daySchedule.length - 1].end
	const isLive = isSectionLive(start, end)
	const recordExists = daySchedule.filter((s) =>
		s.events?.find((ev) => ev['record'] || ev['preview']),
	)

	if (isLive) {
		return setState('live')
	} else if (end && now >= +end && !recordExists.length) {
		return setState('live-ended')
	} else if (end && now >= +end && recordExists.length) {
		return setState('record')
	}
}

const BannerScreen = () => {
	const [state, setState] = useState<ColumnStateType>('calendar')
	const setProgram = useConferenceStore((state) => state.setProgram)
	const live = useUIStore((state) => state.live)

	useEffect(() => {
		fetchCurrentColumnState({ setState, eventDay: 8, daySchedule })
	}, [])

	useEffect(() => {
		fetchCurrentColumnState({ setState, eventDay: 8, daySchedule })
	}, [live])

	useEffect(() => {
		setProgram(state)
	}, [state])

	return (
		<ScreenWrapper>
			{state === 'record' && (
				<RecordSVG>
					Смотреть
					<br />
					записи вебинаров
				</RecordSVG>
			)}
			{state === 'live' && <LiveSVG />}
			{state === 'calendar' && (
				<RecordSVG>
					Добавить
					<br />в календарь
				</RecordSVG>
			)}
			{state === 'live-ended' && (
				<RecordSVG>
					Трансляция
					<br />
					завершена
				</RecordSVG>
			)}
		</ScreenWrapper>
	)
}

export default BannerScreen

const RecordSVG = ({ children }) => {
	return (
		<>
			<svg
				width="252"
				height="141"
				viewBox="0 0 252 141"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.500003 2.22181C0.500002 1.03432 1.52863 0.108384 2.70958 0.232818L250.202 26.3105C251.223 26.4181 251.997 27.2815 251.992 28.3082L251.51 138.818C251.505 139.991 250.496 140.908 249.327 140.801L2.31768 118.167C1.28814 118.073 0.500171 117.209 0.500169 116.175L0.500003 2.22181Z"
					fill="url(#paint0_linear_1599_41379)"
					fillOpacity="0.9"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1599_41379"
						x1="-0.222304"
						y1="20.3007"
						x2="253.235"
						y2="137.701"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="#EEEEEE" />
					</linearGradient>
				</defs>
			</svg>

			<WatchRecord rotate={4.62} width={252} height={141}>
				{children}
			</WatchRecord>
		</>
	)
}

const LiveSVG = () => {
	return (
		<>
			<svg
				width="260"
				height="142"
				viewBox="0 0 260 142"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M3.99967 2.22184C3.99967 1.03452 5.02802 0.108625 6.20883 0.232793L254.209 26.3113C255.227 26.4184 256 27.2768 256 28.3004L256 138.809C256 139.985 254.989 140.907 253.818 140.801L5.81806 118.166C4.78821 118.072 3.99985 117.208 3.99984 116.174L3.99967 2.22184Z"
					fill="url(#paint0_linear_2911_81160)"
				/>
				<path
					d="M6.9906 2.70975C6.99563 1.52659 8.02107 0.606403 9.19787 0.729033L254.707 26.3128C255.726 26.419 256.5 27.2777 256.5 28.3021L256.5 138.807C256.5 139.984 255.489 140.907 254.317 140.799L8.32456 118.168C7.29207 118.073 6.50338 117.205 6.5078 116.168L6.9906 2.70975Z"
					fill="url(#paint1_linear_2911_81160)"
				/>
				<path
					d="M6.9906 2.70975C6.99563 1.52659 8.02107 0.606403 9.19787 0.729033L254.707 26.3128C255.726 26.419 256.5 27.2777 256.5 28.3021L256.5 138.807C256.5 139.984 255.489 140.907 254.317 140.799L8.32456 118.168C7.29207 118.073 6.50338 117.205 6.5078 116.168L6.9906 2.70975Z"
					fill="url(#paint2_linear_2911_81160)"
					fillOpacity="0.3"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_2911_81160"
						x1="127.026"
						y1="4.89051"
						x2="135.317"
						y2="118.836"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#01A5BB" />
						<stop offset="1" stopColor="#048DA0" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_2911_81160"
						x1="260"
						y1="92"
						x2="3.86019"
						y2="90.7983"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#008A9A" />
						<stop offset="0.477684" stopColor="#11B9CA" />
						<stop offset="1" stopColor="#00B8C7" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_2911_81160"
						x1="242.5"
						y1="49"
						x2="196"
						y2="130"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#00B5C6" />
						<stop offset="1" stopColor="#05CADD" />
					</linearGradient>
				</defs>
			</svg>
			<WatchNow rotate={4.5} width={260} height={142} />
		</>
	)
}

const ScreenWrapper = styled.div`
	position: absolute;
	top: -130px;
	left: 70px;
	/* transform: translate(971px, 263px); */
	will-change: transform;
	z-index: 10;
`
