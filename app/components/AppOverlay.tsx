import useWindowSize from "@/hooks/useWindowSize"
import {useTourStore} from "@/stores/tourStore"
import {useUIStore} from "@/stores/uiStore"
import {useRouter} from "next/router"
import React, {useEffect} from "react"
import {TipText} from "./Help/HelpTip"
import Tour from "./Tour/Tour"
import BackButton from "./ui/BackButton"
import FrameOverlay from "./ui/FrameOverlay"
import HelpButton from "./ui/HelpButton"

type AppOverlayPropsType = {
    children: JSX.Element
    back?: boolean
    roomKey?: string
    setNewbie?: (args?: any) => void
}

const AppOverlay: React.FC<AppOverlayPropsType> = ({children, back = true, roomKey, setNewbie}) => {
    const router = useRouter()
    const helpOverlay = useUIStore(state => state.helpOverlay)
    const scaleRatio = useUIStore(state => state.scaleRatio)
    const locked = useUIStore(state => state.locked)
    const tour = useTourStore(state => state.tour)
    const helpTour = useTourStore(state => state.tourHelp)
    const setLocked = useUIStore(state => state.setLocked)
    const setHelpOverlay = useUIStore(state => state.setHelpOverlay)
    const setDoNotShow = useUIStore(state => state.setDoNotShow)
    //
    // const excludePaths = ['formula', 'recycle', 'game']
    //
    // const ref = useRef<string | null>(null)
    //
    // useEffect(() => {
    //     ref.current = router.asPath
    // }, [router.asPath])

    const onBackButtonClick = (e) => {
        if (locked) {
            setLocked(false)
            if (roomKey && setNewbie) {
                localStorage.setItem(roomKey, 'true')
                setNewbie(false)
            }
        } else {
            router.push('/')
            // const isExcluded = excludePaths.some(path => router.pathname.includes(path))
            // console.log(isExcluded, router.)
            // const isBackRoom = router.pathname === '/green' || router.pathname === '/conference'
            // if (!isExcluded && isBackRoom) {
            //     router.back()
            // } else {
            //     router.push('/')
            // }
        }
    }

    useEffect(() => {
        if (locked && !helpOverlay) {
            setHelpOverlay(false)
        }
    }, [locked, helpOverlay])

    useEffect(() => {
        const doNotShow = localStorage.getItem('doNotShow')
        const help = roomKey ? localStorage.getItem(roomKey + '_help') : null
        const predicate = doNotShow == 'true' || help == 'true'
        setDoNotShow(predicate)

        // if (!predicate) {
        //     setHelpOverlay(true)
        // }
    }, [])

    const [width, height] = useWindowSize()

    const handleOpenHelpOverlay = () => {
        if (!tour) {
            setHelpOverlay(!helpOverlay)
        }
    }

    return (
        <FrameOverlay $scale={scaleRatio} style={{height}}>
            {back && (
                <BackButton onClick={onBackButtonClick}/>
            )}

            {back && helpOverlay && !locked && (
                <TipText
                    $left="3%"
                    $top="8%"
                    style={{zIndex: 1101, transformOrigin: 'left top', transform: `scale(${scaleRatio})`}}
                >
                    Вернуться<br/>в главный зал
                </TipText>
            )}
            {/*
            {(!locked  || helpTour) && (
                <TipText
                    $right={`${100 * scaleRatio}px`}
                    $top="3%"
                    style={{ zIndex: 1101, transformOrigin: 'right top', transform: `scale(${scaleRatio})`, textAlign: "right" }}
                >
                    включить<br />режим подсказки
                </TipText>
            )} */}

            {tour && helpTour && (
                <Tour.Arrow
                    open={helpTour}
                    style={{
                        zIndex: 11,
                        transformOrigin: 'right top',
                        transform: `scale(${scaleRatio})`,
                        top: '10%',
                        right: '3%'
                    }}
                    rotate={null}
                />
            )}

            {!locked && (
                <HelpButton onClick={handleOpenHelpOverlay}/>
            )}
            {children}
        </FrameOverlay>
    )
}

export default AppOverlay