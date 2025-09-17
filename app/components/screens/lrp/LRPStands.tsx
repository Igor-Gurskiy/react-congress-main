import { useLRPStore } from '@/stores/lrpStore'
import { useUIStore } from '@/stores/uiStore'
import { useRouter } from 'next/router'
import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import LiveStand from '../../LiveStand'
import LRPConferenceStandLight from './light/LRPConferenceStandLight'
import LRPGreenStandLight from './light/LRPGreenStandLight'
import LRPMicrobiomeStandLight from './light/LRPMicrobiomeStandLight'
import Link from 'next/link'
import ModalService from '@/components/shared/modal/ModalService'
import VideoModal from '@/components/shared/video-modal/VideoModal'
import { EventsEnum } from '@/api/tracker'

const LRPStands = () => {
	const setMissionThree = useLRPStore((state) => state.setMissionThree)
	const setVideo = useLRPStore((state) => state.setVideo)
	const live = useUIStore((state) => state.live)

	const router = useRouter()

	const handleStandClick = (e) => {
		e.preventDefault()
		if (live) {
			if (window) {
				window.open('https://events.loreal.com.ru/', '_blank')?.focus()
			}
		} else {
			router.push('/conference')
		}
	}

	return (
		<>
			<LRPMicrobiomeStandLight>
				<VideoStand
					onClick={() => {
						ModalService.open(VideoModal, {
							videoId: 'F0dWgfVQ-0A',
							trackerId: EventsEnum.lrpVideoVisit,
							trackerProgressId: EventsEnum.lrpVideoProgress,
						})
					}}
				/>
			</LRPMicrobiomeStandLight>
			<LRPConferenceStandLight>
				<Stand href="/conference" onClick={handleStandClick}>
					<LiveStand top={30} />
				</Stand>
			</LRPConferenceStandLight>
			<LRPGreenStandLight>
				<Link legacyBehavior href="/green">
					<StandMission />
				</Link>
			</LRPGreenStandLight>
		</>
	)
}

export default LRPStands

const VideoStand = styled.div`
	user-select: none;
	overflow: hidden;
	z-index: 11;
	position: absolute;
	width: 265px;
	height: 220px;
	left: 0px;
	top: 0px;
`

const Stand = styled.a`
	user-select: none;
	background-position: 50% 50%;
	position: absolute;
	overflow: hidden;
	z-index: 11;
	position: absolute;
	width: 510px;
	height: 275px;
	left: 0px;
	top: 0px;
`

const StandMission = styled(animated.div)`
	user-select: none;
	background-position: 50% 50%;
	position: absolute;
	overflow: hidden;
	z-index: 11;
	position: absolute;
	width: 265px;
	height: 200px;
	left: 0;
	top: 0;
`
