import {ColumnStateType, useConferenceStore} from '@/stores/conferenceStore'
import {useUIStore} from '@/stores/uiStore'
import schedule from '@/utils/schedule/schedule'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {fetchCurrentColumnState} from "@/components/screens/сonference/stands/adults/AdultScreen";
import WatchRecord from "@/components/screens/сonference/stands/WatchRecord";
import WatchNow from "@/components/screens/сonference/stands/WatchNow";

const daySchedule = schedule.get('2022-11-12')

const ToxityScreen = () => {

    const [state, setState] = useState<ColumnStateType>('calendar')
    const setTeen = useConferenceStore(state => state.setTeen)
    const live = useUIStore(state => state.live)

    useEffect(() => {
        fetchCurrentColumnState({setState, eventDay: 12, daySchedule})
    }, [])

    useEffect(() => {
        fetchCurrentColumnState({setState, eventDay: 12, daySchedule})
    }, [live])

    useEffect(() => {
        setTeen(state)
    }, [state])

    return (
        <ScreenWrapper>
            {state === 'record' && <RecordSVG>Смотреть<br/>записи вебинаров</RecordSVG>}
            {state === 'live' && <LiveSVG/>}
            {state === 'calendar' && <RecordSVG>Добавить<br/>в календарь</RecordSVG>}
            {state === 'live-ended' && <RecordSVG>Трансляция<br/>завершена</RecordSVG>}
        </ScreenWrapper>
    )
}

export default ToxityScreen

const RecordSVG = ({children}) => {
    return (
        <>
            <svg width="214" height="110" viewBox="0 0 214 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 2.08571C0 0.948094 0.947624 0.0395805 2.08423 0.0874938L211.584 8.91888C212.655 8.96402 213.5 9.84529 213.5 10.9171V107.938C213.5 109.066 212.567 109.971 211.439 109.937L1.93914 103.559C0.858767 103.526 0 102.64 0 101.56V2.08571Z"
                    fill="url(#paint0_linear_1581_39455)" fillOpacity="0.9"/>
                <defs>
                    <linearGradient id="paint0_linear_1581_39455" x1="5.16977e-06" y1="16.9295" x2="214.769"
                                    y2="107.391" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="#EEEEEE"/>
                    </linearGradient>
                </defs>
            </svg>
            <WatchRecord rotate={2.07} width={214} height={110}>{children}</WatchRecord>
        </>
    )
}

const LiveSVG = () => {
    return (
        <>
            <svg width="215" height="110" viewBox="0 0 215 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 2.08531C0 0.947848 0.947377 0.0393839 2.08384 0.0870677L212.584 8.91924C213.655 8.96417 214.5 9.84552 214.5 10.9175V107.938C214.5 109.066 213.567 109.971 212.439 109.937L1.93941 103.558C0.858926 103.526 0 102.64 0 101.559V2.08531Z"
                    fill="url(#paint0_linear_2911_81096)"/>
                <path
                    d="M2 2.08589C2 0.948114 2.94787 0.0395348 4.08463 0.0876799L212.585 8.91827C213.655 8.96362 214.5 9.84482 214.5 10.9165V107.937C214.5 109.066 213.567 109.971 212.439 109.936L3.93885 103.559C2.85859 103.526 2 102.64 2 101.56V2.08589Z"
                    fill="url(#paint1_linear_2911_81096)"/>
                <defs>
                    <linearGradient id="paint0_linear_2911_81096" x1="99.5001" y1="-14.0004" x2="110.727" y2="99.6936"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#01A5BB"/>
                        <stop offset="1" stopColor="#048DA0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2911_81096" x1="98.5001" y1="15.9994" x2="108.257" y2="99.8644"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00A3B7"/>
                        <stop offset="1" stopColor="#00BBCE"/>
                    </linearGradient>
                </defs>
            </svg>

            <WatchNow rotate={2.23} width={215} height={110}/>
        </>
    )
}

const ScreenWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translate(687px, 250px); */
  will-change: transform;
  z-index: 10;
`