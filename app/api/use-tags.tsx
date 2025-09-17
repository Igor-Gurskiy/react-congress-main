import { useQuery } from '@tanstack/react-query'
import { GetTagsResponseType, TagsService } from './tags.service'
import { mockCloudData } from '@/utils/mockCloud'
import { getFourRandomSets } from '@/utils/array.helpers'
import { useMemo } from 'react'

type RoomNameType = 'lrp' | 'vichy' | 'dercos' | 'conf'

export enum RoomNameEnum {
	LRP = 6,
	Dercos = 5,
	Vichy = 7,
	Conference = 4,
}

interface ICloudData {
	options: CloudTagItem[]
	tags: CloudTagItem[]
	sets: [CloudTagItem[], CloudTagItem[], CloudTagItem[], CloudTagItem[]]
	maxScale: number
	preview: CloudTagItem[]
}

const initCloudData: ICloudData = {
	options: [],
	tags: [],
	sets: [[], [], [], []],
	maxScale: 0,
	preview: [],
}

export const useRoomTags = (room: RoomNameEnum) => {
	const { data, isLoading } = useTags(room)

	return useMemo(() => {
		if (!data) return initCloudData
		const tags = getActualOptions(data, room).sort((a, b) => b.count - a.count)

		const tagsArr = tags
			.filter((t) => t.count)
			.slice(0, 200)
			.map((t) => ({ text: t.label, value: t.count, count: t.count }))
		const sets = getFourRandomSets(tagsArr || [])
		const maxScale = tags.reduce((acc, word) => Math.max(acc, word.count), 0)
		const preview = tagsArr.slice(0, 30)

		return {
			options: tags,
			tags: tagsArr,
			sets,
			maxScale,
			preview,
		}
	}, [data, isLoading])
}

export const useTagsPreviewData = (room: RoomNameEnum, limit = 30) => {
	return useQuery({
		queryKey: ['tags-preview', room, limit],
		queryFn: () => TagsService.getTags(room, limit),
		cacheTime: 15 * 60 * 1000,
	})
}

export const useTagsPreview = (room: RoomNameEnum, limit = 30) => {
	const { data, isLoading } = useTagsPreviewData(room, limit)

	return useMemo(() => {
		// if (!data) return cloudMockData
		if (!data) {
			return {
				maxScale: 30,
				preview: [],
			}
		}

		const tags = getActualOptions(data, room).sort((a, b) => b.count - a.count)
		const preview = tags
			.filter((t) => t.count)
			.map((t) => ({ text: t.label, value: t.count, count: t.count }))
		const maxScale = preview.reduce((acc, word) => Math.max(acc, word.count), 0)

		const sets = getFourRandomSets(preview || [])

		return {
			maxScale,
			preview,
			sets,
		}
	}, [data, isLoading])
}

function useTags(room: RoomNameEnum) {
	return useQuery({
		queryKey: ['tags', room],
		queryFn: () => TagsService.getTags(room),
		cacheTime: 15 * 60 * 1000,
	})
}

export default useTags

type CloudTagItem = {
	label: string
	value: number
	count: number
}
type CloudTag = {
	id: number
	text: string
	value: number
}

const getActualInitData = (selectValue: (tag: any) => any, limit?: number) => {
	let newItems = mockCloudData.concat()
	if (limit) {
		newItems.length = limit
	}

	return newItems.map((tag) => selectValue(tag))
}

const getActualInitOptions = () => {
	return getActualInitData((tag) => ({
		label: tag.name,
		value: tag.id,
		text: tag.name,
		count: Number(tag.score),
	})) as CloudTagItem[]
}

const tags = getActualInitOptions().sort((a, b) => b.count - a.count)
const tagsArr = tags
	.filter((t) => t.count)
	.slice(0, 400)
	.map((t) => ({ text: t.label, value: t.count, count: t.count }))
const sets = getFourRandomSets(tagsArr || [])
const maxScale = tags.reduce((acc, word) => Math.max(acc, word.count), 0)
const preview = tagsArr.slice(0, 30)
export const cloudMockData = {
	options: tags,
	tags: tagsArr,
	sets,
	maxScale,
	preview,
}

const getActualData = (
	data: GetTagsResponseType,
	selectValue: (tag: any) => any,
	room: RoomNameEnum,
	limit?: number,
) => {
	if (!data || !data.tags) return []

	const tagItems = data.tags || []
	let newItems = tagItems.concat()
	if (limit) {
		newItems.length = limit
	}

	return newItems.map((tag) => selectValue(tag))
}

const getActualOptions = (data: GetTagsResponseType, room: RoomNameEnum) => {
	return getActualData(
		data,
		(tag) => ({ label: tag.name, value: tag.id, count: Number(tag.score) }),
		room,
	) as CloudTagItem[]
}
