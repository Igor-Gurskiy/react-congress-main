import { useUIStore } from '@/stores/uiStore'
import { useVichyModalStore } from '@/stores/vichyModalStore'
import { useRouter } from 'next/router'
import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import LiveStand from '../../LiveStand'
import VichyConferenceStandLight from './lights/VichyConferenceStandLight'
import VichyTopStandLight from './lights/VichyTopStandLight'
import VichyScienceStandLight from './lights/VichyScienceStandLight'
import ModalService from '@/components/shared/modal/ModalService'
import VideoModal from '@/components/shared/video-modal/VideoModal'
import Link from 'next/link'
import { EventsEnum } from '@/api/tracker'

const VichyStands = () => {
	const setVideo = useVichyModalStore((state) => state.setVideo)
	const setProject = useVichyModalStore((state) => state.setProject)
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
			<VichyTopStandLight>
				<VideoStand
					onClick={() =>
						ModalService.open(VideoModal, {
							videoId: '8K4hdYsgNcI',
							trackerId: EventsEnum.vichyVideoVisit,
							trackerProgressId: EventsEnum.vichyVideoProgress,
						})
					}
				/>
			</VichyTopStandLight>
			<VichyConferenceStandLight>
				<Stand2 href="/conference" onClick={handleStandClick}>
					<LiveStand top={30} />
				</Stand2>
			</VichyConferenceStandLight>
			<VichyScienceStandLight>
				<Link legacyBehavior href="/green">
					<Stand3 />
				</Link>
			</VichyScienceStandLight>
		</>
	)
}

export default VichyStands

const Box = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	flex-direction: column;
`
const VideoStand = styled(animated.div)`
	/* background-image: url(assets/images/s1.png); */
	user-select: none;
	background-position: 50% 50%;
	position: absolute;
	overflow: hidden;
	z-index: 11;
	left: 8px;
	top: 8px;
	clip-path: url(#clip1);
	height: 201px;
	width: 585px;
	cursor: pointer;
`

const Stand2 = styled.a`
	/* background-image: url(assets/images/s2.png); */
	user-select: none;
	background-position: 50% 50%;
	position: absolute;
	overflow: hidden;
	z-index: 11;

	left: 13px;
	top: 12px;

	clip-path: url(#clip2);
	height: 243px;
	width: 506px;
	cursor: pointer;

	img {
		/* margin-bottom: 40px; */
		user-select: none;
	}

	svg {
		position: absolute;
		height: 246px;
	}

	${Box} {
		height: 246px;
		margin-top: 20px;
	}
`

const Stand3 = styled(animated.div)`
	/* background-image: url(assets/images/s3.png); */
	user-select: none;
	background-position: 50% 50%;
	position: absolute;
	overflow: hidden;
	z-index: 11;
	left: 12px;
	top: 10px;
	clip-path: url(#clip3);
	height: 201px;
	width: 398px;
	cursor: pointer;
`
