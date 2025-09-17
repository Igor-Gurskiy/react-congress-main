// @ts-nocheck
import schedule from '@/utils/schedule/schedule'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {format, setDate, setMonth} from 'date-fns'
import {isSectionLive, ScheduleSectionType} from '@/components/Schedule/ScheduleSection';
import {ColumnStateType, useConferenceStore} from '@/stores/conferenceStore'
import {useUIStore} from '@/stores/uiStore'
import WatchRecord from "@/components/screens/сonference/stands/WatchRecord";
import WatchNow from "@/components/screens/сonference/stands/WatchNow";

const daySchedule = schedule.get('2022-11-13')

export const fetchCurrentColumnState = ({
                                            setState,
                                            eventDay,
                                            daySchedule
                                        }: {
    setState: (state: ColumnStateType) => void,
    eventDay: number,
    daySchedule: ScheduleSectionType[] | undefined
}) => {
    const now = setMonth(setDate(Date.now(), 10), 11)
    const day = format(now, 'dd')
    const currentDay = parseInt(day, 10)

    const isNow = currentDay === eventDay

    if (!isNow) {
        if (currentDay < eventDay) {
            return setState('calendar')
        }
    }

    if (!daySchedule) return

    const start = daySchedule[0].start
    const end = daySchedule[daySchedule.length - 1].end
    const isLive = isSectionLive(start, end)
    const recordExists = daySchedule.filter(s => s.events?.find(ev => ev['record'] || ev['preview']))

    if (isLive) {
        return setState('live')
    } else if (end && now >= +end && !recordExists.length) {
        return setState('live-ended')
    } else if (end && now >= +end && recordExists.length) {
        return setState('record')
    }
}

const AdultScreen = () => {
    const [state, setState] = useState<ColumnStateType>('calendar')
    const setAdult = useConferenceStore(state => state.setAdult)
    const live = useUIStore(state => state.live)

    useEffect(() => {
        fetchCurrentColumnState({setState, eventDay: 13, daySchedule})
    }, [])

    useEffect(() => {
        fetchCurrentColumnState({setState, eventDay: 13, daySchedule})
    }, [live])

    useEffect(() => {
        setAdult(state)
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

export default AdultScreen

const RecordSVG = ({children}) => {
    return (
        <>
            <svg width="212" height="104" viewBox="0 0 212 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.5 2.01869C0.5 0.906707 1.40703 0.0082312 2.51896 0.0187708L209.519 1.98086C210.616 1.99126 211.5 2.88359 211.5 3.98077V101.485C211.5 102.595 210.596 103.493 209.486 103.485L2.48579 102.014C1.3868 102.006 0.5 101.113 0.5 100.014V2.01869Z"
                    fill="url(#paint0_linear_1581_39460)" fillOpacity="0.9"/>
                <defs>
                    <linearGradient id="paint0_linear_1581_39460" x1="0.500005" y1="15.9291" x2="209.502" y2="108.394"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="#EEEEEE"/>
                    </linearGradient>
                </defs>
            </svg>
            <WatchRecord rotate={0.5} width={212} height={104}>{children}</WatchRecord>
        </>
    )
}

const LiveSVG = () => {
    return (
        <>
            <svg width="212" height="104" viewBox="0 0 212 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.5 2.01916C0.5 0.907186 1.40702 0.00871652 2.51895 0.0192525L209.591 1.98135C210.688 1.99175 211.572 2.88408 211.572 3.98126V101.486C211.572 102.596 210.668 103.494 209.558 103.486L2.48579 102.014C1.38679 102.006 0.5 101.113 0.5 100.014V2.01916Z"
                    fill="url(#paint0_linear_2911_81084)"/>
                <path
                    d="M0.5 2.01891C0.5 0.906938 1.40702 0.00847025 2.51895 0.0190037L209.591 1.98062C210.688 1.99102 211.572 2.88336 211.572 3.98053V101.486C211.572 102.596 210.668 103.493 209.558 103.486L2.48579 102.014C1.38679 102.006 0.5 101.113 0.5 100.014V2.01891Z"
                    fill="url(#paint1_linear_2911_81084)"/>
                <defs>
                    <linearGradient id="paint0_linear_2911_81084" x1="96.5719" y1="-21.0004" x2="107.799" y2="92.6936"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#01A5BB"/>
                        <stop offset="1" stopColor="#048DA0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2911_81084" x1="95.5719" y1="8.99939" x2="105.328" y2="92.8644"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00A3B7"/>
                        <stop offset="1" stopColor="#00B5C8"/>
                    </linearGradient>
                </defs>
            </svg>

            <WatchNow rotate={1} width={212} height={104}/>
        </>
    )
}

const ScreenWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translate(971px, 263px); */
  will-change: transform;
  z-index: 10;
`