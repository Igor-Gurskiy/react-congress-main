import useSchedule from '@/api/hooks/use-schedule'
import useWindowSize from '@/hooks/useWindowSize'
import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import media, { mediaMin } from '@/utils/media'
import { isSectionLive } from '@/utils/schedule/schedule.utils'
import { easeLinear } from 'd3-ease'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import schedule from '../utils/schedule/schedule'
import Box from './Box'
import { ScheduleSectionType } from './Schedule/ScheduleSection'

const skippedEvents: string[] = []

const OnAir = () => {
	const isLoading = useUIStore((state) => state.isLoading)
	const specialization = useUIStore((state) => state.specialization)
	const live = useUIStore((state) => state.live)
	const setLive = useUIStore((state) => state.setLive)
	const tour = useTourStore((state) => state.tour)
	const [open, setOpen] = useState(false)
	const [event, setEvent] = useState<null | ScheduleSectionType>(null)
	const [width] = useWindowSize()

	const { data: jsonSchedule, isLoading: isScheduleLoading } = useSchedule()

	useEffect(() => {
		let timer: NodeJS.Timeout
		if (!isLoading && specialization && !tour && !isScheduleLoading) {
			timer = setTimeout(fetchLive, 2000)

			return () => clearTimeout(timer)
		}

		return
	}, [isLoading, specialization, tour, isScheduleLoading])

	useEffect(() => {
		const eventCheckTimer: NodeJS.Timeout = setInterval(fetchLive, 15000)
		return () => clearInterval(eventCheckTimer)
	}, [event, jsonSchedule])

	const fetchLive = () => {
		const now = Date.now()
		const dayStr = format(now, 'yyyy-MM-dd')
		const daySchedule = jsonSchedule?.get(dayStr) ?? schedule.get(dayStr)

		if (!daySchedule || !daySchedule.length) return
		const liveEvent = daySchedule.find((section) =>
			isSectionLive(section.start, section.end),
		)

		if (!liveEvent || !liveEvent.live) {
			if (live) {
				setLive(false)
			}
			if (event) {
				setOpen(false)
				setEvent(null)
			}
			return
		}

		if (!live) {
			setLive(true)
		}

		if (skippedEvents.includes(liveEvent.slug)) return

		if (event && event.slug === liveEvent.slug) return

		setEvent(liveEvent)
		setOpen(true)
	}

	const onClose = () => {
		if (event) {
			skippedEvents.push(event.slug)
		}

		setOpen(!open)
	}

	const transitions = useTransition(open, {
		from: { opacity: 0, transform: 'translateX(-50%) translateY(-100px)' },
		enter: { opacity: 1, transform: 'translateX(-50%) translateY(0px)' },
		leave: { opacity: 0, transform: 'translateX(-50%) translateY(-100px)' },
		config: {
			duration: 400,
			ease: easeLinear,
		},
	})

	return transitions((style, item) =>
		item ? (
			<Wrapper style={{ ...style, width: width - 100 }} id="onair">
				<Container $flex $alignItems="center" id="onair_container">
					<ContentLink
						id="onair_content_link"
						href="https://events.loreal.com.ru/"
						target="_blank"
					>
						<LiveIcon id="onair_live_icon" style={{ alignSelf: 'center' }} />

						<Content id="onair_content">
							<NowText id="onair_live_text">Сейчас в прямом эфире</NowText>
							<EventTitle
								id="onair_event_name"
								dangerouslySetInnerHTML={{ __html: event?.name }}
							/>
						</Content>
					</ContentLink>

					<Close id="onair_close" onClick={onClose}>
						<svg
							id="onair_close_svg"
							width="32"
							height="33"
							viewBox="0 0 32 33"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="16"
								cy="16.5"
								r="15.619"
								stroke="black"
								strokeWidth="0.761905"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M10.6124 11.1125C10.3148 11.41 10.3148 11.8924 10.6124 12.19L14.9223 16.5L10.6123 20.81C10.3148 21.1075 10.3148 21.5899 10.6123 21.8875C10.9099 22.185 11.3923 22.185 11.6898 21.8875L15.9998 17.5775L20.3098 21.8875C20.6074 22.185 21.0898 22.185 21.3873 21.8875C21.6849 21.5899 21.6849 21.1075 21.3873 20.81L17.0773 16.5L21.3873 12.19C21.6848 11.8925 21.6848 11.4101 21.3873 11.1125C21.0897 10.815 20.6073 10.815 20.3098 11.1125L15.9998 15.4225L11.6899 11.1125C11.3923 10.8149 10.9099 10.8149 10.6124 11.1125Z"
								fill="black"
							/>
						</svg>
					</Close>
				</Container>
			</Wrapper>
		) : (
			''
		),
	)
}

export default OnAir

export const LiveIcon = ({ ...otherProps }) => {
	return (
		<Live {...otherProps}>
			<Round />
			<LiveText>LIVE</LiveText>
		</Live>
	)
}
const ContentLink = styled.a`
	display: flex;
	outline: none;
	text-decoration: none;
	width: 100%;
`

const Container = styled(Box)`
	background: #fff;
	border-radius: 0px 0px 8px 8px;
	padding: 12px 16px;

	${media.five`
        padding: 8px 2px;
    `}
`

const EventTitle = styled.div`
	pointer-events: none;
	color: #5294e5;
	font-size: 18px;
	font-weight: 600;
	line-height: 110%;
	letter-spacing: 0.54px;
	text-transform: uppercase;

	margin-top: 6px;

	${media.md`
        font-size: 10px;
        line-height: 10px;
    `}
`

const NowText = styled.div`
	pointer-events: none;
	color: #444;
	font-size: 14px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;

	${media.md`
        font-size: 9px;
        line-height: 11px;
    `}
`

const Close = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	${mediaMin.md`
        svg {
            width: 30px;
            height: 30px;
        }
    `}

	cursor: pointer;
`
const Content = styled.div`
	flex-grow: 1;
	padding: 0 16px;
	pointer-events: none;
	display: flex;
	flex-direction: column;
	justify-content: center;

	${media.md`
        padding: 0 10px;
    `}
`

const Live = styled.div`
	background: #e41717;
	border: 2px solid #ffffff;
	box-sizing: border-box;
	border-radius: 8px;
	padding: 6px 12px 8px 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
`

const Round = styled.div`
	width: 6px;
	height: 6px;
	background: #ffffff;
	border-radius: 50%;
	margin-right: 6px;
	pointer-events: none;

	animation: breathing 2s ease-out infinite normal;

	${media.md`
        width: 7px;
        height: 7px;
        margin-right: 4px;
    `}
`

const LiveText = styled.div`
	font-weight: 600;
	font-size: 16px;
	line-height: 16px;
	color: #ffffff;
	text-transform: uppercase;
	pointer-events: none;

	${media.md`
        font-size: 12px;
        line-height: 15px;
    `}
`

const Wrapper = styled(animated.div)`
	position: absolute;
	z-index: 30001;
	top: 0;
	left: 50%;
	transform: translateX(-50%);

	max-width: 528px;
	width: 100%;
	//padding: 6px 0px;
`
