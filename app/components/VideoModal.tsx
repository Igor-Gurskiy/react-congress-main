import useWindowSize from '@/hooks/useWindowSize';
import media from '@/utils/media';
import React, {useEffect, useRef, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import Box from './Box';
import Modal from './Modal';
import ScrollbarsBody from './ScollbarsBody';
import {API} from "@/api";
import {EventsEnum} from "@/api/tracker";

const VideoModal = ({
                        open,
                        close,
                        videoId = '',
                        trackerId = '' as EventsEnum,
                        link = '',
                        download = false
                    }) => {

    const [_, height] = useWindowSize()
    const isMobile = useMediaQuery({query: '(max-width: 767.98px)'})
    const isLandscape = useMediaQuery({query: '(orientation: landscape) and (max-height: 400px)'})

    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [progress, setProgress] = useState(0)
    const [lastStatsSent, setLastStatsSent] = useState<null | number>(null)

    const playerRef = useRef<any>(null)

    const startStats = () => setIsActive(true)
    const stopStats = () => setIsActive(false)

    const sendStatistics = (progress: number, force = false) => {
        if (!trackerId || progress <= 0) return
        if (force || !lastStatsSent || (lastStatsSent < (Date.now() - 60000))) {
            setLastStatsSent(Date.now())
            API.tracker.sendEvent(trackerId, `params[progress]=${Math.round(progress)}`)
        }
    }

    useEffect(() => {
        let interval: any = null
        if (isActive) {
            interval = setInterval(async () => {
                const player = playerRef.current

                if (!player) return

                const ytplayer = player.getInternalPlayer()
                const duration = await ytplayer.getDuration()
                const currentTime = await ytplayer.getCurrentTime()
                const videoProgress = Number((currentTime / duration) * 100).toFixed(2)

                // send statistics
                sendStatistics(seconds)

                // update stats progress
                setProgress(Number(videoProgress))
                setSeconds(seconds => seconds + 1)

            }, 1000)
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, seconds])

    useEffect(() => {
        if (!open) {
            sendStatistics(seconds, true)
        } else {
            setSeconds(0)
            setLastStatsSent(null)
        }
    }, [open])

    useEffect(() => {
        const sendStatisticsBeforeUnload = () => {
            sendStatistics(seconds, true)
        }
        window.addEventListener('beforeunload', sendStatisticsBeforeUnload, false)

        return () => window.removeEventListener('beforeunload', sendStatisticsBeforeUnload, false)
    }, [])

    return (
        <Modal open={true} onClose={close} maxWidth={1280} center={!isLandscape}>
            <ScrollbarsBody>
                <ProgressWrapper><small>Прогресс просмотра видео:</small> <b>{progress} %</b></ProgressWrapper>
                <VideoWrapper>
                    <YouTube
                        ref={playerRef}
                        style={{maxHeight: '100%', borderRadius: 8}}
                        opts={{
                            width: '100%',
                            height: '100%',
                            // origin: window?.location.origin,
                        }}

                        videoId={videoId}
                        onPlay={startStats}
                        onPause={stopStats}
                    />
                </VideoWrapper>

                {download && !isLandscape && (
                    <Box $flex $justifyContent="center">
                        <VideoDownloadButton href="assets/acd_congress.pdf" download target="_blank">скачать научную
                            программу</VideoDownloadButton>
                    </Box>
                )}
            </ScrollbarsBody>
        </Modal>
    )
}

export default VideoModal

const ProgressWrapper = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  font-size: 24px;
  margin-bottom: 16px;
`

const VideoWrapper = styled.div`
  padding-top: 56.25%;
  position: relative;

  @media (orientation: landscape) and (max-height: 700px) {
    padding-top: 33.25%;
  }

  iframe {
    position: absolute;
    top: 0px;
    left: 0px;
  }
`

const VideoDownloadButton = styled.a`
  border: none;
  outline: none;
  text-decoration: none;
  background: #00ACC2;
  border-radius: 5px;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.008em;
  text-transform: uppercase;
  color: #FFFFFF;
  max-width: 508px;
  width: 100%;
  padding: 15px;
  margin: 10px 0;

  ${media.md`
        font-size: 14px;
        line-height: 18px;
    `}
`