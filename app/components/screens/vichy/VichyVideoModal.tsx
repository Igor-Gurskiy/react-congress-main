import {API} from "@/api"
import {EventsEnum} from "@/api/tracker"
import {useVichyModalStore} from "@/stores/vichyModalStore"
import React, {useEffect} from "react"
import VideoModal from "../../VideoModal"

const VichyVideoModal = () => {
    const video = useVichyModalStore(state => state.video)
    const setVideo = useVichyModalStore(state => state.setVideo)

    const onClose = () => setVideo(false)

    useEffect(() => {
        if (video) {
            API.tracker.sendEvent(EventsEnum.vichyVideoVisit)
        }
    }, [video])

    return (
        <VideoModal open={video} close={onClose} videoId="8K4hdYsgNc"/>
    )
}

export default VichyVideoModal