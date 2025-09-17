import AppLayout from '@/layouts/AppLayout'
import { RoomNameEnum, useRoomTags, useTagsPreview } from '@/api/use-tags'
import DercosTagCloud from '@/components/screens/dercos/tag-cloud/DercosTagCloud'
import { useEffect } from 'react'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const DercosCloudPage = () => {
	const preview = useTagsPreview(RoomNameEnum.Dercos, 300)
	const cloud = useRoomTags(RoomNameEnum.Dercos)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.dercosCloudVisit)
	}, [])

	return (
		<AppLayout
			title="Облако тегов Dercos"
			style={{
				background: '#fff',
				overflow: 'hidden',
			}}
		>
			<DercosTagCloud cloud={cloud} preview={preview} />
		</AppLayout>
	)
}

export default DercosCloudPage
