import React from 'react'
import styled from 'styled-components'
import ScheduleAddToCalendar from './ScheduleAddToCalendar'
import media, { mediaMin } from '@/utils/media'

const Schedule = ({ children }) => {
	return <ScheduleWrapper>{children}</ScheduleWrapper>
}

export default Schedule

const ScheduleWrapper = styled.div`
	background: #ffffff;
	border-radius: 8px;
	position: relative;

	${media.md``}
`

const ScheduleContent = styled.article``

const ScheduleBox = styled.div`
	padding: 16px 0;

	${mediaMin.phone_xl`
		padding: 24px;
	`}
`

const ScheduleHeader = styled.header`
	position: relative;
	overflow: hidden;

	.text {
		position: absolute;
		z-index: 2;
		top: 59px;
		left: 24px;
	}

	.heading {
		margin-bottom: 8px;
		color: #5294e5;
		font-weight: 800;
		text-transform: uppercase;
	}

	.heading__title {
		font-size: 16px;
		line-height: 110%;
		letter-spacing: 0.32px;
	}

	.heading__caption {
		font-size: 12px;
		font-weight: 800;
		line-height: 110%;
		letter-spacing: 0.24px;
		text-transform: uppercase;
		max-width: 90%;
	}

	.date {
		display: block;
		margin-bottom: 2px;
		font-weight: 600;
		font-size: 14px;
		line-height: 110%;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		color: #413933;
	}

	.title2 {
		display: block;
		font-weight: 300;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		color: #413933;
	}

	${mediaMin.phone_xl`
		.text {
			bottom: 27px;
			left: 56px;
			top: unset;
		}
		.heading__title {
			font-size: 32px;
			line-height: 100%;
			letter-spacing: 0.64px;
		}
		.heading__caption {
			font-size: 16px;
			max-width: 100%;
		}
		.date {
			font-size: 24px;
		}
		.title2 {
			font-size: 20px;
			line-height: 24px;
		}
	`}
`
const ScheduleHeaderImage = styled.figure`
	display: grid;
	justify-content: end;

	img {
		display: block;
	}

	.decor {
		position: absolute;
		bottom: 0;
		left: 0;
	}

	${media.md`
		grid-template-columns: 1fr;
		img {
		    width: 100%;
		}
	`}

	${mediaMin.phone_xl`
		justify-content: end;

		.decor {
			display: none;
		}
	`}
`

const LiveIcon = ({ ...otherProps }) => {
	return (
		<Live {...otherProps}>
			<Round />
			<LiveText>LIVE</LiveText>
		</Live>
	)
}

const Live = styled.div`
	background: #c61b18;
	border: 2px solid #ffffff;
	box-sizing: border-box;
	border-radius: 8px;
	padding: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
`

const Round = styled.div`
	width: 10px;
	height: 10px;
	background: #ffffff;
	border-radius: 50%;
	margin-right: 6px;
	pointer-events: none;

	${media.md`
		width: 7px;
		height: 7px;
		margin-right: 4px;
	`}
`

const LiveText = styled.div`
	font-weight: 800;
	font-size: 18px;
	line-height: 22px;
	color: #ffffff;
	text-transform: uppercase;
	pointer-events: none;

	${media.md`
		font-size: 12px;
		line-height: 15px;
	`}
`

Schedule.Content = ScheduleContent
Schedule.Box = ScheduleBox
Schedule.Header = ScheduleHeader
Schedule.HeaderImage = ScheduleHeaderImage
Schedule.Live = LiveIcon
Schedule.AddToCalendar = ScheduleAddToCalendar
