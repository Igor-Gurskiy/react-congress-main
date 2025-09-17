import { addHours, getTime, isBefore, isToday, parse } from 'date-fns'
import { getTimeAtZeroMeridian } from '../get-time-at-zero-meridian'
import scheduleLib from './schedule'
import { ScheduleSectionType } from '@/components/Schedule/ScheduleSection'
import useSchedule from '@/api/hooks/use-schedule'

export enum IProgramStatusEnum {
	Records = 'records',
	Finished = 'finished',
	Live = 'live',
	Future = 'future',
}

export const isSectionLive = (
	start: string | number | null | undefined,
	end: string | number | null | undefined,
) => {
	if (!start || !end) return false

	let startTime = start
	let endTime = end
	if (typeof start === 'string') {
		startTime = parseInt(start)
	}
	if (typeof end === 'string') {
		endTime = parseInt(end)
	}

	const utcTime = Date.now()
	return utcTime < Number(endTime) && utcTime >= Number(startTime)
}

export const getScheduleCurrentState = (
	eventDay: string,
	schedule: Map<string | number, ScheduleSectionType[]> | undefined,
) => {
	const day = parse(eventDay, 'yyyy-MM-dd', new Date())
	const daySchedule = schedule?.get(eventDay) ?? scheduleLib.get(eventDay)

	if (!daySchedule) return IProgramStatusEnum.Finished

	const now = addHours(getTimeAtZeroMeridian(), 3)
	const isNow = isToday(day)

	if (!isNow) {
		if (isBefore(now, day)) {
			return IProgramStatusEnum.Future
		}
	}

	const start = daySchedule.at(0)!.start!
	const end = daySchedule.at(-1)!.end!
	const isLive = isSectionLive(start, end)
	const recordExists = daySchedule.filter((s) =>
		s.events?.find((ev) => ev['record'] || ev['preview']),
	)

	if (isLive) {
		return IProgramStatusEnum.Live
	} else if (end && getTime(now) >= +end && !recordExists.length) {
		return IProgramStatusEnum.Finished
	} else if (end && getTime(now) >= +end && recordExists.length) {
		return IProgramStatusEnum.Records
	}

	return IProgramStatusEnum.Future
}

export const useScheduleCurrentState = () => {
	const { data: schedule } = useSchedule()

	return {
		getScheduleCurrentState: (date: string) =>
			getScheduleCurrentState(date, schedule),
	}
}
