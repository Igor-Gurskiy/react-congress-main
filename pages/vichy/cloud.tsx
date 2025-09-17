import AppLayout from '@/layouts/AppLayout'
import { RoomNameEnum, useRoomTags, useTagsPreview } from '@/api/use-tags'
import VichyTagCloud from '@/components/screens/vichy/tag-cloud/VichyTagCloud'
import { useEffect } from 'react'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const VichyCloudPage = () => {
	const preview = useTagsPreview(RoomNameEnum.Vichy, 300)
	const cloud = useRoomTags(RoomNameEnum.Vichy)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.vichyCloudVisit)
	}, [])

	return (
		<AppLayout
			title="Облако тегов Vichy"
			style={{
				background: '#fff',
				overflow: 'hidden',
			}}
		>
			<VichyTagCloud cloud={cloud} preview={preview} />
			{/*<VichyTagCloud cloud={cloudMockData} />*/}
		</AppLayout>
	)
}

export default VichyCloudPage
