import {ColumnStateType, useConferenceStore} from '@/stores/conferenceStore'
import {useUIStore} from '@/stores/uiStore'
import schedule from '@/utils/schedule/schedule'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import WatchRecord from "@/components/screens/сonference/stands/WatchRecord";
import {fetchCurrentColumnState} from "@/components/screens/сonference/stands/adults/AdultScreen";
import WatchNow from "@/components/screens/сonference/stands/WatchNow";

const daySchedule = schedule.get('2022-11-11')

const KidsScreen = () => {
    const [state, setState] = useState<ColumnStateType>(
        'calendar'
    )
    const setPed = useConferenceStore((state) => state.setPed)
    const live = useUIStore((state) => state.live)

    useEffect(() => {
        fetchCurrentColumnState({setState, eventDay: 11, daySchedule})
    }, [])

    useEffect(() => {
        fetchCurrentColumnState({setState, eventDay: 11, daySchedule})
    }, [live])

    useEffect(() => {
        setPed(state)
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

export default KidsScreen

const RecordSVG = ({children}) => {
    return (
        <>
            <svg width="218" height="124" viewBox="0 0 218 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 2.67236C0 1.50273 0.999312 0.582702 2.16495 0.679169L215.665 18.3481C216.702 18.434 217.5 19.3007 217.5 20.3413V121.362C217.5 122.519 216.521 123.435 215.367 123.358L1.86696 109.124C0.816364 109.054 0 108.182 0 107.129V2.67236Z"
                    fill="url(#paint0_linear_1599_41364)" fillOpacity="0.9"/>
                <defs>
                    <linearGradient id="paint0_linear_1599_41364" x1="5.26663e-06" y1="19.4306" x2="224.543"
                                    y2="105.597" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="#EEEEEE"/>
                    </linearGradient>
                </defs>
            </svg>
            <WatchRecord rotate={4.62} width={218} height={124}>{children}</WatchRecord>
        </>
    )
}

const LiveSVG = () => {
    return (
        <>
            <svg width="218" height="124" viewBox="0 0 218 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 2.67217C0 1.50257 0.999276 0.582549 2.1649 0.678983L215.737 18.3481C216.774 18.4339 217.572 19.3006 217.572 20.3412V121.362C217.572 122.519 216.593 123.435 215.439 123.358L1.86702 109.124C0.816404 109.054 0 108.182 0 107.129V2.67217Z"
                    fill="url(#paint0_linear_2911_81107)"/>
                <path
                    d="M3.49 3.15997C3.49539 1.99483 4.49165 1.08094 5.65293 1.17588L215.735 18.3497C216.773 18.4346 217.572 19.3017 217.572 20.3431V121.36C217.572 122.518 216.592 123.434 215.437 123.356L4.87382 109.127C3.82043 109.055 3.00381 108.178 3.00869 107.122L3.49 3.15997Z"
                    fill="url(#paint1_linear_2911_81107)"/>
                <defs>
                    <linearGradient id="paint0_linear_2911_81107" x1="102.572" y1="-4.50013" x2="113.799" y2="109.194"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#01A5BB"/>
                        <stop offset="1" stopColor="#048DA0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2911_81107" x1="121.5" y1="43.9999" x2="109.471" y2="111.899"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00A3B7"/>
                        <stop offset="1" stopColor="#00BBCE"/>
                    </linearGradient>
                </defs>
            </svg>
            <WatchNow rotate={4.62} width={218} height={124}/>
        </>
    )
}

const ScreenWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translate(387px, 226px); */
  will-change: transform;
  z-index: 10;
`