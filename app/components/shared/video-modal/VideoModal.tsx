import YouTube from "react-youtube";
import Box from "@/components/Box";
import React, {FC, useEffect, useRef, useState} from "react";
import useWindowSize from "@/hooks/useWindowSize";
import {useMediaQuery} from "react-responsive";
import {API} from "@/api";
import {EventsEnum} from "@/api/tracker";
import useClickOutside from "@/hooks/useClickOutside";

import styles from './VideoModal.module.scss'

interface IAcademyModal {
    close: any
    videoId: string
    trackerId?: EventsEnum
    trackerProgressId?: EventsEnum
    download?: boolean
}

const AcademyModal: FC<IAcademyModal> = (
    {
        close,
        videoId = '',
        trackerId = '' as EventsEnum,
        trackerProgressId = '' as EventsEnum,
        download = false
    }
) => {
    const [_, height] = useWindowSize()
    const isMobile = useMediaQuery({query: '(max-width: 767.98px)'})
    const isLandscape = useMediaQuery({query: '(orientation: landscape) and (max-height: 400px)'})

    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)
    // const [progress, setProgress] = useState(0)
    const [lastStatsSent, setLastStatsSent] = useState<null | number>(null)

    const playerRef = useRef<any>(null)
    const timeRef = useRef({
        seconds: 0
    })

    useClickOutside(close)

    const startStats = () => setIsActive(true)
    const stopStats = () => setIsActive(false)

    const sendStatistics = (progress: number, force = false) => {
        if (!trackerProgressId || progress <= 0) return
        if (force || !lastStatsSent || (lastStatsSent < (Date.now() - 60000))) {
            setLastStatsSent(Date.now())
            API.tracker.sendEvent(trackerProgressId, `params[progress]=${Math.round(progress)}`)
        }
    }

    useEffect(() => {
        let interval: any = null
        if (isActive) {
            interval = setInterval(async () => {
                // update stats progress
                setSeconds(seconds => seconds + 1)

            }, 1000)
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, seconds])

    useEffect(() => {
        timeRef.current.seconds = seconds
        // send statistics
        sendStatistics(seconds)
    }, [seconds])

    const sendStatisticsBeforeUnload = () => {
        sendStatistics(timeRef.current.seconds, true)
    }

    useEffect(() => {

        window.addEventListener('beforeunload', sendStatisticsBeforeUnload, false)

        if (trackerId) {
            API.tracker.sendEvent(trackerId)
        }

        return () => {
            sendStatisticsBeforeUnload()
            window.removeEventListener('beforeunload', sendStatisticsBeforeUnload, false)
        }
    }, [])
    return (
        <div className={styles.academy}>
            <div className={styles.header}>
                <div className={styles.close} onClick={close}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                            fill="white"/>
                    </svg>
                </div>
            </div>
            <div className={styles.wrapper}>
                <YouTube
                    ref={playerRef}
                    className={styles.videoPlayer}
                    opts={{
                        width: '100%',
                        height: '100%',
                    }}
                    videoId={videoId}
                    onPlay={startStats}
                    onPause={stopStats}
                />


                {download && !isLandscape && (
                    <Box $flex $justifyContent="center">
                        <a href="assets/acd_congress.pdf" className={styles.download} download target="_blank">
                            скачать научную программу
                        </a>
                    </Box>
                )}

            </div>
        </div>
    )
}

export default AcademyModal