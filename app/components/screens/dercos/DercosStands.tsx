// import { useDercosStore } from '@/stores/DercosStore'
import LiveStand from '@/components/LiveStand'
import {useUIStore} from '@/stores/uiStore'
import {useRouter} from 'next/router'
import React from 'react'
import {animated} from 'react-spring'
import styled from 'styled-components'
import DercosAcademyLight from './lights/DercosAcademyLight'
import DercosConferenceLight from './lights/DercosConferenceLight'
import DercosProjectsLight from './lights/DercosProjectsLight';
import ModalService from "@/components/shared/modal/ModalService";
import VideoModal from "@/components/shared/video-modal/VideoModal";
import OurProjectsModal from "@/components/screens/dercos/modals/our-projects/OurProjectsModal";
import {EventsEnum} from "@/api/tracker";
import {API} from "@/api";


const DercosStands = () => {
    const live = useUIStore(state => state.live)

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
            <DercosAcademyLight>
                <VideoStand onClick={() => ModalService.open(VideoModal, {
                    videoId: 'a13D650rgPc',
                    trackerId: EventsEnum.dercosTrichologyVisit,
                    trackerProgressId: EventsEnum.dercosTrichologyProgress
                })}/>
            </DercosAcademyLight>
            <DercosConferenceLight>
                <Stand href="/conference" onClick={handleStandClick}>
                    <LiveStand top={3}/>
                </Stand>
            </DercosConferenceLight>
            <DercosProjectsLight>
                <StandMission onClick={() => {
                    ModalService.open(OurProjectsModal)
                    API.tracker.sendEvent(EventsEnum.dercosProjectsVisit)
                }}/>
            </DercosProjectsLight>
        </>
    )
}

export default DercosStands

const VideoStand = styled.div`
  user-select: none;
  overflow: hidden;
  z-index: 11;
  position: absolute;
  width: 385px;
  height: 200px;
  left: 0px;
  top: 0px;
`

const Stand = styled.a`
  user-select: none;
  background-position: 50% 50%;
  position: absolute;
  overflow: hidden;
  z-index: 11;
  width: 385px;
  height: 240px;
  left: 0px;
  top: 0px;

`

const StandMission = styled(animated.div)`
  user-select: none;
  background-position: 50% 50%;
  position: absolute;
  overflow: hidden;
  z-index: 11;
  width: 385px;
  height: 205px;
  left: 0;
  top: -4px;
`