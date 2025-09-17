import AppLayout from '@/layouts/AppLayout'
import { RoomNameEnum, useRoomTags, useTagsPreview } from '@/api/use-tags'
import LRPTagCloud from '@/components/screens/lrp/tag-cloud/LRPTagCloud'
import { useEffect } from 'react'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const LRPCloudPage = () => {
	const preview = useTagsPreview(RoomNameEnum.LRP, 300)
	const cloud = useRoomTags(RoomNameEnum.LRP)

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpCloudVisit)
	}, [])

	return (
		<AppLayout
			title="Облако тегов La Roche Posay"
			style={{
				background: '#fff',
				overflow: 'hidden',
			}}
		>
			<LRPTagCloud cloud={cloud} preview={preview} />
		</AppLayout>
	)
}

export default LRPCloudPage
