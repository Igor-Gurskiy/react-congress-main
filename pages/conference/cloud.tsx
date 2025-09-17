import AppLayout from '@/layouts/AppLayout'
import { RoomNameEnum, useRoomTags, useTagsPreview } from '@/api/use-tags'
import ConferenceTagCloud from '@/components/screens/сonference/tag-cloud/ConferenceTagCloud'
import { useEffect } from 'react'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const LRPCloudPage = () => {
	const preview = useTagsPreview(RoomNameEnum.Conference, 300)
	const cloud = useRoomTags(RoomNameEnum.Conference)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.confCloudVisit)
	}, [])

	return (
		<AppLayout
			title="Облако тегов Конференц-зал"
			style={{
				background: '#fff',
				overflow: 'hidden',
			}}
		>
			<ConferenceTagCloud cloud={cloud} preview={preview} />
		</AppLayout>
	)
}

export default LRPCloudPage
