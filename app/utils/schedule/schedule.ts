import { ScheduleSectionType } from '@/components/Schedule/ScheduleSection'
import dayOneSchedule from './2022-11-10'
import dayTwoSchedule from './2022-11-11'
import dayThreeSchedule from './2022-11-12'
import dayFourSchedule from './2022-11-13'
import dayFiveSchedule from './2022-11-14'

import nov30Schedule from './2023-11-30'
import dec01Schedule from './2023-12-01'
import dec02Schedule from './2023-12-02'
import dec03Schedule from './2023-12-03'
import dec04Schedule from './2023-12-04'
import dec05Schedule from './2023-12-05'
import { endOfDay, getTime, startOfDay } from 'date-fns'

const schedule = new Map<number | string, ScheduleSectionType[]>()

const testSchedule: ScheduleSectionType[] = [
	{
		id: 1,
		slug: 'test',
		name: 'Тестовое событие (до 00.40)',
		start: 1668020400000,
		end: 1668030000000,
		live: false,
		calendar: false,
		visible: false,
	},
]

schedule.set('2022-11-10', dayOneSchedule)
schedule.set('2022-11-11', dayTwoSchedule)
schedule.set('2022-11-12', dayThreeSchedule)
schedule.set('2022-11-13', dayFourSchedule)
schedule.set('2022-11-14', dayFiveSchedule)
schedule.set('2023-11-30', nov30Schedule)
schedule.set('2023-12-01', dec01Schedule)
schedule.set('2023-12-02', dec02Schedule)
schedule.set('2023-12-03', dec03Schedule)
schedule.set('2023-12-04', dec04Schedule)
schedule.set('2023-12-05', dec05Schedule)

export default schedule

const initializeTestSchedule = () => {
	const generateTestSchedule = () => {
		return [
			{
				id: 1,
				slug: 'test',
				name: 'Тестовое событие каждый день до 31 ноября',
				start: getTime(startOfDay(new Date())),
				end: getTime(endOfDay(new Date())),
				live: true,
				calendar: false,
				visible: false,
			},
		]
	}

	// if (isBefore(new Date(), new Date('2023-11-30'))) {
	// 	schedule.set(format(new Date(), 'yyyy-MM-dd'), generateTestSchedule())
	// }
}

initializeTestSchedule()
