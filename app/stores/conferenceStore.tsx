import create from 'zustand'
import {combine} from 'zustand/middleware'

export const useConferenceStore = create(
    combine<ConferenceStorePropsType, ConferenceStoreActionsType>(
        {
            program: null,
            ped: null,
            teen: null,
            adult: null,
            cosm: null
        },
        (set) => ({
            setProgram: (program) => set({program}),
            setPed: (ped) => set({ped}),
            setTeen: (teen) => set({teen}),
            setAdult: (adult) => set({adult}),
            setCosm: (cosm) => set({cosm}),
            reset: () => set({ped: null, teen: null, adult: null, cosm: null, program: null})
        })
    )
)

type ConferenceStorePropsType = {
    program: ColumnStateType
    ped: ColumnStateType
    teen: ColumnStateType
    adult: ColumnStateType
    cosm: ColumnStateType
}

export type ColumnStateType = 'calendar' | 'live' | 'record' | 'live-ended' | null

type ConferenceStoreActionsType = {
    setProgram: (program: ColumnStateType) => void
    setPed: (ped: ColumnStateType) => void
    setTeen: (teen: ColumnStateType) => void
    setAdult: (adult: ColumnStateType) => void
    setCosm: (cosm: ColumnStateType) => void
    reset: () => void
}