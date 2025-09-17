import { ScheduleSectionType } from '@/components/Schedule/ScheduleSection'
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'

interface FileData {
	// Определите тип данных, которые вы ожидаете от каждого файла
}

const fetchSchedulesData = async (urls: string[]) => {
	try {
		const responses = await axios.all(
			urls.map((url) =>
				axios.get<FileData>(url + `?v=${Date.now()}`).catch((error) => {
					// Обработка ошибки для конкретного запроса
					console.error(`Ошибка при загрузке файла ${url}:`, error)
					return null // Возвращаем null, чтобы продолжить выполнение других запросов
				}),
			),
		)

		// Фильтруем успешные ответы (без ошибок)
		const successfulResponses = responses.filter(
			(
				response: AxiosResponse<FileData> | null,
			): response is AxiosResponse<FileData> => response !== null,
		)

		// Извлекаем данные из успешных ответов
		const fileData = successfulResponses.map(
			(response: AxiosResponse<FileData>) => response.data,
		)

		return fileData
	} catch (error) {
		console.error('Ошибка при выполнении запросов:', error)
		return null
	}
}

const urls = [
	'/assets/schedule/2023/nov30.json',
	'/assets/schedule/2023/dec01.json',
	'/assets/schedule/2023/dec02.json',
	'/assets/schedule/2023/dec03.json',
	'/assets/schedule/2023/dec04.json',
	'/assets/schedule/2023/dec05.json',
]

const useSchedule = (): UseQueryResult<
	Map<string | number, ScheduleSectionType[]>,
	Error
> => {
	return useQuery({
		queryKey: ['schedule'],
		queryFn: () => fetchSchedulesData(urls),
		refetchInterval: 5 * 60 * 1000,
		select: prepareScheduleData,
	})
}

export default useSchedule

const prepareScheduleData = (data) => {
	const schedule = new Map<number | string, ScheduleSectionType[]>()
	if (!data || !data.length) return schedule

	data?.forEach((scheduleJSON) => {
		schedule.set(scheduleJSON.date, scheduleJSON.data)
	})

	return schedule
}
