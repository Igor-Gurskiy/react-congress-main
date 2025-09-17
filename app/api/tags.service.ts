import { api } from '@/api'
import { ApiResponseType } from './types'
import { RoomNameEnum } from '@/api/use-tags'

export class TagsService {
	public static async getTags(room: RoomNameEnum, limit?: number) {
		const limitStr = limit ? '&limit=' + limit : ''
		const response = await api.get<GetTagsResponseType>(
			'/API?action=tagsOnly' + `&categoryId=${room}` + limitStr,
		)

		return response.data
	}

	public static async sendTag(tagId: number | string) {
		const data = new FormData()

		const isNumTagId = parseInt(String(tagId)) > 0
		if (!isNumTagId) return null
		data.append('tagId', String(tagId))

		const response = await api.post('/API?action=sendTag', data)

		return response.data
	}
}

export interface GetTagsResponseType extends ApiResponseType {
	tags: TagGroup[]
}

type TagGroup = {
	id: number
	name: string
	tags: Tag[]
	category: string | number
}
export type Tag = {
	score: number
	id: number
	name: string
	sort: number
	category: number
}
