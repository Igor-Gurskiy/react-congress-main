import useWindowSize from '@/hooks/useWindowSize'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { useTransition } from 'react-spring'
import CabinDislikeStep from './CabinDislikeStep'
import CabinModal from "./CabinModal"
import CabinPreviewStep from './CabinPreviewStep'
import CabinSentStep from './CabinSentStep'
import CabinUploadStep from './CabinUploadStep'
import FinishedStep from './FinishedStep'

const PhotoCabin = () => {
    const cabin = useUIStore(state => state.cabin)
    const setCabin = useUIStore(state => state.setCabin)
    const user = useUIStore(state => state.user)
    const cabinScrollRef = useRef(null)

    const [result, setResult] = React.useState<string | null>(null)
    const [file, setFile] = React.useState<string | null>(null)
    const [step, setStep] = React.useState<'upload' | 'result' | 'dislike' | 'sent'>('upload')
    const [taskId, setTaskId] = React.useState<number | null>(null)

    const screens = useTransition(step, {
        from: { opacity: 0, transform: "scale(0.9)" },
        enter: { opacity: 1, transform: "scale(1)" },
    })

    const colorKey = cabin || 'lrp'

    const [_, height] = useWindowSize()

    useEffect(() => {
        if (cabin) {
            setStep('upload')
            setFile(null)
            setTaskId(null)
            setResult(null)
        }
    }, [cabin])

    useEffect(() => {
        if (cabinScrollRef.current) {
            try {
                // @ts-ignore
                cabinScrollRef.current.scrollToTop(0)
            } catch (e) {
                console.log(e)
            }
        }
    }, [step])

    const finished = Date.now() > 1635109200000 // 25 oct 2021
    // console.log(finished)

    const onClose = function () {
        setCabin(null)
    }

    return (
        <CabinModal open={cabin} onClose={onClose} finished={finished}>
            {finished && <FinishedStep onClose={onClose} />}
            {!finished && <Scrollbars
                ref={cabinScrollRef}
                style={{ width: '100%', height: '100%', borderRadius: 4 }}
                autoHeight
                autoHeightMin={200}
                autoHeightMax={height - 70}
                autoHide={false}
                renderView={props => <div {...props} style={{ ...props.style, overflow: 'hidden', overflowY: 'auto' }} />}
            >
                {screens((style, show) => {
                    switch (show) {
                        case 'upload': {
                            return <CabinUploadStep style={style} color={colorScheme[colorKey]} setTaskId={setTaskId} file={file} setFile={setFile} setResult={setResult} setStep={setStep} />
                        }
                        case 'result': {
                            return <CabinPreviewStep style={style} color={colorScheme[colorKey]} result={result} taskId={taskId} setStep={setStep} />
                        }
                        case 'dislike': {
                            return <CabinDislikeStep style={style} color={colorScheme[colorKey]} taskId={taskId} user={user} result={result} setStep={setStep} />
                        }
                        case 'sent': {
                            return <CabinSentStep style={style} color={colorScheme[colorKey]} />
                        }
                        default: {
                            return <CabinUploadStep style={style} color={colorScheme[colorKey]} setTaskId={setTaskId} file={file} setFile={setFile} setResult={setResult} setStep={setStep} />
                        }
                    }
                })}
            </Scrollbars>}
        </CabinModal>
    )
}

export default PhotoCabin

export const colorScheme = {
    lrp: {
        primary: '#00AEEF',
    },
    sc: {
        primary: '#413933',
    },
    vichy: {
        primary: '#000000',
    },
    cerave: {
        primary: '#0072BB',
    },
    conference: {
        primary: '#01C0D3',
    },
}