import {API} from "@/api"
import {EventsEnum} from "@/api/tracker"
import {useLRPStore} from "@/stores/lrpStore"
import React, {useEffect} from "react"
import VideoModal from "../../VideoModal"

const LRPVideoModal = () => {
    const video = useLRPStore(state => state.video)
    const setVideo = useLRPStore(state => state.setVideo)

    const onClose = () => setVideo(false)

    useEffect(() => {
        if (video) {
            API.tracker.sendEvent(EventsEnum.lrpVideoVisit)
        }
    }, [video])

    return (
        <VideoModal open={video} close={onClose} link="https://www.youtube.com/embed/GHFFJqqMjqM"/>
    )
}

export default LRPVideoModal