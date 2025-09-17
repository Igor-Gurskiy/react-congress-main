import useSchedule from '@/api/hooks/use-schedule'
import { ScheduleSectionType } from '@/components/Schedule/ScheduleSection'
import schedule from '@/utils/schedule/schedule'

export function useScheduleSelector(
	selector: string,
): ScheduleSectionType[] | undefined {
	// const queryClient = useQueryClient()
	// const settings = queryClient.getQueryData<ISettings>('settings')
	// TODO: try to make observable getQueryData
	const { data, isLoading } = useSchedule()
	const scheduleLib = schedule.get(selector) || []
	if (!data || isLoading) return scheduleLib

	try {
		const result = data.get(selector)
		if (result === undefined) {
			return scheduleLib
		}
		return result
	} catch (error) {
		console.error('Invalid selector:', error)
		return scheduleLib
	}
}
