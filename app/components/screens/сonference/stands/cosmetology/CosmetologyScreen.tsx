import {ColumnStateType, useConferenceStore} from '@/stores/conferenceStore'
import {useUIStore} from '@/stores/uiStore'
import schedule from '@/utils/schedule/schedule'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import WatchRecord from "@/components/screens/сonference/stands/WatchRecord";
import WatchNow from "@/components/screens/сonference/stands/WatchNow";
import {fetchCurrentColumnState} from "@/components/screens/сonference/stands/adults/AdultScreen";

const daySchedule = schedule.get('2022-11-14')

const CosmetologyScreen = () => {
    const [state, setState] = useState<ColumnStateType>(
        'calendar'
    )
    const setCosm = useConferenceStore((state) => state.setCosm)
    const live = useUIStore((state) => state.live)

    useEffect(() => {
        fetchCurrentColumnState({setState, eventDay: 14, daySchedule})
    }, [])

    useEffect(() => {
        fetchCurrentColumnState({setState, eventDay: 14, daySchedule})
    }, [live])

    useEffect(() => {
        setCosm(state)
    }, [state])

    return (
        <ScreenWrapper>
            {state === 'record' && (
                <RecordSVG>
                    Смотреть
                    <br/>
                    записи вебинаров
                </RecordSVG>
            )}
            {state === 'live' && <LiveSVG/>}
            {state === 'calendar' && (
                <RecordSVG>
                    Добавить
                    <br/>в календарь
                </RecordSVG>
            )}
            {state === 'live-ended' && <RecordSVG>Трансляция<br/>завершена</RecordSVG>}
        </ScreenWrapper>
    )
}

export default CosmetologyScreen

const RecordSVG = ({children}) => {
    return (
        <>
            <svg width="211" height="107" viewBox="0 0 211 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 6.9597C0 5.87085 0.871039 4.98207 1.95967 4.96011L208.96 0.784928C210.08 0.762335 211 1.66417 211 2.78452V101.533C211 102.624 210.125 103.514 209.033 103.532L2.03317 106.966C0.915775 106.984 0 106.084 0 104.966V6.9597Z"
                    fill="url(#paint0_linear_1581_39466)" fillOpacity="0.9"/>
                <defs>
                    <linearGradient id="paint0_linear_1581_39466" x1="5.10924e-06" y1="17.0973" x2="210.769"
                                    y2="107.926" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="#EEEEEE"/>
                    </linearGradient>
                </defs>
            </svg>
            <WatchRecord width={211} height={107}>{children}</WatchRecord>
        </>
    )
}

const LiveSVG = () => {
    return (
        <>
            <svg width="211" height="107" viewBox="0 0 211 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M-0.000488281 6.95995C-0.000488281 5.8711 0.870551 4.98231 1.95918 4.96035L208.959 0.785172C210.079 0.762579 211 1.66441 211 2.78477V101.533C211 102.624 210.124 103.514 209.033 103.533L2.03268 106.966C0.915287 106.985 -0.000488281 106.084 -0.000488281 104.966V6.95995Z"
                    fill="url(#paint0_linear_2911_81073)"/>
                <defs>
                    <linearGradient id="paint0_linear_2911_81073" x1="-0.000483172" y1="17.0976" x2="210.768"
                                    y2="107.926" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#01A3B8"/>
                        <stop offset="1" stopColor="#01B6C8"/>
                    </linearGradient>
                </defs>
            </svg>

            <WatchNow rotate={-0.95} width={211} height={107}/>
        </>
    )
}

const ScreenWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translate(1250px, 262px); */
  will-change: transform;
  z-index: 10;
`