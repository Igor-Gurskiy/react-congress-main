import { mediaMin } from '@/utils/media'
import { format } from 'date-fns'
import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { animated, useTransition } from 'react-spring'
import styled, { css } from 'styled-components'
import Schedule from './Schedule'
import YouTube from 'react-youtube'
import { API } from '@/api'
import clsx from 'clsx'
import {
	IProgramStatusEnum,
	isSectionLive,
} from '@/utils/schedule/schedule.utils'
import { EventsEnum } from '@/api/tracker'

function createDateMoscowTz(timestamp?: string | number | null) {
	const d = timestamp ? new Date(timestamp) : new Date()
	const utc = d.getTime() + d.getTimezoneOffset() * 60000
	return new Date(utc + 3600000 * 3)
}

const formatTime = (
	start: string | number | null,
	end: string | number | null,
	hide = false,
	isMobile = true,
) => {
	const startTime = start && format(createDateMoscowTz(start), 'HH:mm')
	const endTime = end && format(createDateMoscowTz(end), 'HH:mm')
	if (isMobile) return `${startTime}${end && !hide ? ` - ${endTime}` : ''}`
	return (
		<>
			{startTime}
			{end && !hide ? <> - {endTime}</> : ''}
		</>
	)
}

const ScheduleSection: React.FC<{
	section: ScheduleSectionType
	state: IProgramStatusEnum
}> = ({ section, state }) => {
	const [open, setOpen] = useState(false)
	const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' })
	// const [open, setOpen] = useState(false)

	const { events } = section
	const isLive = isSectionLive(section.start, section.end)

	if (state === IProgramStatusEnum.Records) {
		if (!section) return null

		const filteredEvents =
			events?.filter((e) => e['record'] || e['preview']) || []
		if (!filteredEvents.length && !section.record) return null

		return (
			<SectionWrapper style={{ margin: '20px 0' }}>
				{/* <SectionRow>
					<SectionTitle>{section.name}</SectionTitle>
				</SectionRow> */}

				<Section
					onClick={section.record ? () => setOpen(!open) : () => {}}
					className={clsx({
						'section-title': section.events,
						'section-open': section.slug === 'open',
						'section-social': section.slug === 'social',
						'section-medical': section.slug === 'medical',
					})}
				>
					<SectionRow>
						<SectionRowWrapper>
							<SectionTime>
								{!section.record
									? formatTime(
											section.start,
											section.end,
											section.hideEnd,
											isMobile,
									  )
									: section.recordPreview && (
											<img
												src={section.recordPreview || ''}
												alt="section preview"
											/>
									  )}
							</SectionTime>
							<SectionInfo>
								<SectionTitle
									dangerouslySetInnerHTML={{ __html: section.name }}
								/>
							</SectionInfo>
						</SectionRowWrapper>
					</SectionRow>
					{section.record && (
						<TrackableVideo
							open={open}
							src={section.record}
							trackerId={section['trackerId']}
						/>
					)}
				</Section>
				{filteredEvents?.map((event) => (
					<ProgrammItem record key={event.id} event={event} />
				))}
			</SectionWrapper>
		)
	}

	return (
		<SectionWrapper>
			<Section
				onClick={() => setOpen(!open)}
				className={clsx({
					'section-title': section.events,
					'section-open': section.slug === 'open',
					'section-social': section.slug === 'social',
					'section-medical': section.slug === 'medical',
				})}
			>
				<SectionRow>
					{/* <SectionControl active={open} visible={section.visible} /> */}
					<SectionRowWrapper>
						<SectionTime>
							{formatTime(
								section.start,
								section.end,
								section.hideEnd,
								isMobile,
							)}
						</SectionTime>
						<SectionInfo>
							<SectionTitle
								dangerouslySetInnerHTML={{ __html: section.name }}
							/>
							{isLive && <Schedule.Live />}
							<Schedule.AddToCalendar
								googleLink={section.googleLink}
								iosLink={section.iosLink}
							/>
						</SectionInfo>
					</SectionRowWrapper>
				</SectionRow>
			</Section>
			{events && events.length && (
				<Programm $show={open} $maxHeight={1500}>
					{events?.map((event) => (
						<ProgrammItem key={event.id} event={event} />
					))}
				</Programm>
			)}
		</SectionWrapper>
	)
}

export default ScheduleSection

const ProgrammItem: React.FC<{
	event: ScheduleEventType
	record?: boolean
}> = ({ event, record, ...otherProps }) => {
	const [open, setOpen] = useState(false)
	const trackerProgressId = event['trackerId']

	const youtubeLink = String(event.preview || event.record)

	return (
		<>
			<SectionRow
				{...otherProps}
				className={event.specialName ? 'special' : ''}
				style={{ cursor: 'pointer' }}
				onClick={
					event.preview || !!event.record ? () => setOpen(!open) : () => {}
				}
			>
				<SectionTime>
					{event.previewImage && <img src={event.previewImage || ''} />}
					{event.start && !record && formatTime(event.start, event.end)}
				</SectionTime>
				{event.specialName && <SectionTitle>{event.specialName}</SectionTitle>}
				<ProgrammContent>
					<ProgrammTitle dangerouslySetInnerHTML={{ __html: event.name }} />
					{event.author && (
						<ProgrammAuthor
							dangerouslySetInnerHTML={{ __html: event.author }}
						/>
					)}
					{!youtubeLink && event.specialName && (
						<Schedule.AddToCalendar
							googleLink={event.googleLink}
							iosLink={event.iosLink}
						/>
					)}
				</ProgrammContent>
			</SectionRow>
			{(event.preview || event.record) && (
				<TrackableVideo
					open={open}
					src={youtubeLink}
					trackerId={trackerProgressId}
				/>
			)}
		</>
	)
}

const TrackableVideo = ({ open, src, trackerId }) => {
	const [seconds, setSeconds] = useState(0)
	const [isActive, setIsActive] = useState(false)
	const [lastStatsSent, setLastStatsSent] = useState<null | number>(null)
	const [lastSecondsSent, setLastSecondsSent] = useState<null | number>(null)

	const playerRef = useRef<any>(null)
	const timeRef = useRef({
		seconds: 0,
		lastSecondsSent: 0,
	})

	const startStats = () => setIsActive(true)
	const stopStats = () => setIsActive(false)

	const sendStatistics = (progress: number, force = false) => {
		if (!trackerId || progress <= 0) return
		if (force || !lastStatsSent || lastStatsSent < Date.now() - 60000) {
			if (timeRef.current.lastSecondsSent == progress) return
			setLastStatsSent(Date.now())
			timeRef.current.lastSecondsSent = progress
			setLastSecondsSent(progress)
			API.tracker.sendEvent(
				trackerId,
				`params[progress]=${Math.round(progress)}`,
			)
		}
	}

	useEffect(() => {
		let interval: any = null
		if (isActive) {
			interval = setInterval(async () => {
				// update stats progress
				setSeconds((seconds) => seconds + 1)
			}, 1000)
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [isActive, seconds])

	useEffect(() => {
		timeRef.current.seconds = seconds
		// send statistics
		sendStatistics(seconds)
	}, [seconds])

	const sendStatisticsBeforeUnload = () => {
		sendStatistics(timeRef.current.seconds, true)
	}

	useEffect(() => {
		window.addEventListener('beforeunload', sendStatisticsBeforeUnload, false)

		return () => {
			sendStatisticsBeforeUnload()
			window.removeEventListener(
				'beforeunload',
				sendStatisticsBeforeUnload,
				false,
			)
		}
	}, [])

	useEffect(() => {
		if (!open) {
			sendStatistics(timeRef.current.seconds, true)
			setIsActive(false)
		} else {
			setSeconds(0)
			setLastStatsSent(null)
			setIsActive(false)
		}
	}, [open])

	const transition = useTransition(open, {
		from: { paddingBottom: '0%' },
		enter: { paddingBottom: '56.25%' },
		leave: { paddingBottom: '0%' },
	})

	return transition((style, item) =>
		item ? (
			<VideoRow style={style}>
				<YouTube
					ref={playerRef}
					opts={{
						width: '100%',
						height: '100%',
					}}
					videoId={src}
					onPlay={startStats}
					onPause={stopStats}
				/>
			</VideoRow>
		) : (
			''
		),
	)
}

const VideoRow = styled(animated.div)`
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.25%;

	margin: 20px 0px;

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`

const SectionRowWrapper = styled.div``

const SectionInfo = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const SectionRow = styled.div`
	position: relative;
	margin-top: 8px;
	background: #f9f9f9;
	box-shadow: 0px 6px 7px #e5e5e5;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	&.special {
		padding: 13px 10px 28px 129px;
		background: url('assets/images/schedule/special-decor.jpg') 100% 0 no-repeat;
	}

	${mediaMin.phone_xl`
		background-color: #F9F9F9;
		border-radius: 10px;
		flex-direction: row;

		&.special {
			padding-top: 15px;
			background: url('assets/images/schedule/special-decor-664.jpg') 100% 100% no-repeat;
		}
	`}
`

const SectionWrapper = styled.div`
	/* box-shadow: 0px 6px 7px #e5e5e5; */
	overflow: visible;
`

const ProgrammAuthor = styled.div`
	margin-top: 12px;
	font-weight: 400;
	font-size: 12px;
	line-height: 120%;
	align-items: center;
	letter-spacing: 0.04em;
	color: #444444;

	p.space:not(:last-child) {
		margin-bottom: 0px;
	}

	${mediaMin.phone_xl`
		margin-top: 4px;
		font-size: 14px;
	`}
`

const ProgrammTitle = styled.div`
	font-weight: 600;
	font-size: 14px;
	line-height: 110%;
	letter-spacing: 0.04em;
	color: #444444;

	.break {
		text-transform: uppercase;
		font-weight: 800;
	}

	${mediaMin.phone_xl`
		font-size: 16px;
	`}
`

const ProgrammContent = styled.div`
	padding: 8px 16px 8px 16px;
	background: #ffffff;
	border-radius: 8px;
	margin: 0 8px 16px 8px;
	flex-grow: 1;

	display: flex;
	flex-direction: column;
	justify-content: center;

	.special & {
		padding-bottom: 0;
		background: none;

		a {
			margin-top: 12px;
		}
	}

	${mediaMin.phone_xl`
	margin: 0;
		a {
			margin-left: -16px;
		}
	`}
`

const Programm = styled.div<{ $show?: boolean; $maxHeight: number }>`
	/* background: #f9f9f9; */
	/* padding: 0px 16px; */
	/* max-height: 0px; */
	/* opacity: 0; */
	/* overflow: hidden; */
	transition: all 0.5s ease-in-out;

	${({ $show, $maxHeight }) =>
		$show &&
		css`
			opacity: 1;
			/* padding: 20px 16px; */
			/* max-height: ${$maxHeight}px; */
		`}
`

const SectionTitle = styled.div`
	font-weight: 800;
	font-size: 16px;
	line-height: 120%;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #444444;
	text-shadow: 0px 1px 9px rgba(82, 148, 229, 0.1);

	.special & {
		padding-left: 16px;
		color: #00acc2;
	}

	${mediaMin.phone_xl`
		font-size: 20px;

		.special & {
			padding-left: 0;

			br {
					display: none;
				}
			}
	`}
`

const SectionTime = styled.div`
	padding: 12px 32px 12px 24px;
	font-weight: 600;
	font-size: 16px;
	line-height: 120%;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #444444;

	flex-shrink: 0;

	${mediaMin.phone_xl`
		width: 150px;
		display: flex;
		padding: 12px 12px 12px 24px;
		align-items: center;
		text-align: center;
	`}
`

const Section = styled.div`
	background: #f9f9f9;
	cursor: pointer;

	&.section {
		padding: 16px;
	}

	&.section-title {
		${SectionTime} {
			display: none;
		}

		${SectionTitle} {
			margin-bottom: 8px;
			color: #444444;
		}

		${SectionRow} {
			padding: 16px 24px;
		}
	}

	&.section-open {
		padding-top: 0;

		${SectionRow} {
			background-size: cover !important;
			background: #fff url('assets/images/schedule/day-1/s1.jpg') 100% 100%
				no-repeat;
		}

		${SectionRowWrapper} {
			display: flex;
			width: 100%;
			flex-direction: column;
			padding: 24px;
		}

		${SectionTime} {
			padding: 0;
			margin: 0 0 16px;
			color: #fff;
			font-weight: 400;
		}

		${SectionTitle} {
			margin-bottom: 8px;
			font-weight: 800;
			font-size: 16px;
			line-height: 100%;
			letter-spacing: 0.04em;
			text-transform: uppercase;
			color: #fff;
		}

		${SectionTitle} + ${SectionTitle} {
			margin-bottom: 12px;
			font-weight: 600;
			font-size: 16px;
			line-height: 120%;
			letter-spacing: 0.04em;
			color: #444444;
			text-transform: none;

			br {
				display: none;
			}
		}

		${mediaMin.phone_xl`
			${SectionRow} {
				background-size: cover !important;
				background: #fff url('assets/images/schedule/day-1/s1.jpg') 100% 100%
				no-repeat;
			}
			
			${SectionRowWrapper} {
				flex-direction: row;
				padding: 0;
			}

			${SectionTime}  {
				align-items: start;
				padding: 48px 24px;
				margin-bottom: 0;
				background-size: cover !important;
				background: #fff url('assets/images/schedule/day-1/s1-sub.jpg') 100% 100%
			}
			
			${SectionInfo}  {
				padding: 16px;
			}

			${SectionTitle}  {
				margin-bottom: 10px;
				font-size: 20px;
			}

			${SectionTitle} + ${SectionTitle} {
				display: none;
			}
		`}
	}

	&.section-social {
		${SectionRow} {
			background-color: #7bb6ff;
			background-image: url('assets/images/schedule/day-1/kid.png');
			background-repeat: no-repeat;
			background-position: 90% 0%;
			background-size: contain;
			padding: 24px;
		}

		${SectionTitle} {
			color: #fff;
		}

		${mediaMin.phone_xl`
			${SectionTitle} {
				br {
					display: none;
				}
			}
		`}
	}

	&.section-medical {
		${SectionRow} {
			background-size: cover !important;
			background: #fff url('assets/images/schedule/day-1/s2.jpg') 100% 100%
				no-repeat;
			padding: 24px;
		}

		${SectionTitle} {
			color: #fff;
		}
	}
`
type ScheduleEventType = {
	id: number
	specialName?: string | JSX.Element
	name: any
	author: any | null
	preview?: string | null
	previewImage?: string
	trackerId?: EventsEnum
	start: number | string | null
	end: number | string | null
	record?: string
	iosLink?: string
	googleLink?: string
}

export type ScheduleSectionType = {
	id: number
	name: any
	slug: string
	start: number | string | null
	end: number | string | null
	hideEnd?: boolean
	live: boolean
	calendar: boolean
	visible: boolean
	iosLink?: string
	googleLink?: string
	events?: ScheduleEventType[]
	record?: string
	recordPreview?: string
	trackerId?: EventsEnum
}
