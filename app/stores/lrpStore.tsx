import create from 'zustand'
import { combine } from 'zustand/middleware'

export const useLRPStore = create(combine<LRPStorePropsType, LRPStoreActionsType>(
    {
        newbie: true,
        animated: true,
        lipikar: false,
        anthelios: false,
        retinol: false,
        serum: false,
        cicaplast: false,
        kids: false,
        oncoCicaplast: false,
        oncoLipikar: false,
        invisible: false,
        toleriane: false,
        missionOne: false,
        missionTwo: false,
        missionThree: false,
        video: false,
    },
    (set) => ({
        setNewbie: (newbie) => set({ newbie }),
        setAnimated: (animated) => set({ animated }),
        setLipikar: (lipikar) => set({ lipikar }),
        setAnthelios: (anthelios) => set({ anthelios }),
        setRetinol: (retinol) => set({ retinol }),
        setSerum: (serum) => set({ serum }),
        setCicaplast: (cicaplast) => set({ cicaplast }),
        setKids: (kids) => set({ kids }),
        setOncoCicaplast: (oncoCicaplast) => set({ oncoCicaplast }),
        setOncoLipikar: (oncoLipikar) => set({ oncoLipikar }),
        setInvisible: (invisible) => set({ invisible }),
        setToleriane: (toleriane) => set({ toleriane }),
        setMissionOne: (missionOne) => set({ missionOne }),
        setMissionTwo: (missionTwo) => set({ missionTwo }),
        setMissionThree: (missionThree) => set({ missionThree }),
        setVideo: (video) => set({ video }),
        closeAll: () => set({
            lipikar: false,
            anthelios: false,
            retinol: false,
            serum: false,
            cicaplast: false,
            kids: false,
            oncoLipikar: false,
            oncoCicaplast: false,
            invisible: false,
            toleriane: false,
            missionOne: false,
            missionTwo: false,
            missionThree: false,
            video: false,
        }),
        closeAllExcept: (exception) => set({
            lipikar: exception === 'lipikar',
            anthelios: exception === 'anthelios',
            retinol: exception === 'retinol',
            serum: exception === 'serum',
            cicaplast: exception === 'cicaplast',
            kids: exception === 'kids',
            oncoCicaplast: exception === 'oncoCicaplast',
            oncoLipikar: exception === 'oncoLipikar',
            invisible: exception === 'invisible',
            toleriane: exception === 'toleriane',
            missionOne: exception === 'missionOne',
            missionTwo: exception === 'missionTwo',
            missionThree: exception === 'missionThree',
            video: exception === 'video',
        }),
    })
))

type LRPStorePropsType = {
    newbie: boolean
    animated: boolean
    lipikar: boolean
    anthelios: boolean
    retinol: boolean
    serum: boolean
    cicaplast: boolean
    kids: boolean
    oncoCicaplast: boolean
    oncoLipikar: boolean
    invisible: boolean
    toleriane: boolean
    missionOne: boolean
    missionTwo: boolean
    missionThree: boolean
    video: boolean
}

type LRPStoreActionsType = {
    setNewbie: (newbie: boolean) => void
    setAnimated: (animated: boolean) => void
    setLipikar: (lipikar: boolean) => void
    setRetinol: (retinol: boolean) => void
    setAnthelios: (anthelios: boolean) => void
    setSerum: (serum: boolean) => void
    setCicaplast: (cicaplast: boolean) => void
    setKids: (kids: boolean) => void
    setOncoCicaplast: (oncoCicaplast: boolean) => void
    setOncoLipikar: (oncoLipikar: boolean) => void
    setInvisible: (invisible: boolean) => void
    setToleriane: (toleriane: boolean) => void
    setMissionOne: (missionOne: boolean) => void
    setMissionTwo: (missionTwo: boolean) => void
    setMissionThree: (missionThree: boolean) => void
    setVideo: (video: boolean) => void
    closeAll: () => void
    closeAllExcept: (exception: string) => void
}