import create from 'zustand'
import { combine } from 'zustand/middleware'

export const useCeraveStore = create(combine<CeraveStorePropsType, CeraveStoreActionsType>(
    {
        newbie: true,
        animated: true,
        moisturizing: false,
        softening: false,
        cleaning: false,
        video: false,
    },
    (set) => ({
        setNewbie: (newbie) => set({ newbie }),
        setAnimated: (animated) => set({ animated }),
        setMoisturizing: (moisturizing) => set({ moisturizing }),
        setSoftening: (softening) => set({ softening }),
        setCleaning: (cleaning) => set({ cleaning }),
        setVideo: (video) => set({ video }),
        closeAll: () => set({ moisturizing: false, softening: false, cleaning: false, video: false }),
        closeAllExcept: (exception) => set({
            moisturizing: exception === 'moisturizing',
            softening: exception === 'softening',
            cleaning: exception === 'cleaning',
            video: exception === 'video',
        }),
    })
))

type CeraveStorePropsType = {
    newbie: boolean
    animated: boolean
    moisturizing: boolean
    softening: boolean
    cleaning: boolean
    video: boolean
}

type CeraveStoreActionsType = {
    setNewbie: (newbie: boolean) => void
    setAnimated: (animated: boolean) => void
    setMoisturizing: (moisturizing: boolean) => void
    setSoftening: (softening: boolean) => void
    setCleaning: (cleaning: boolean) => void
    setVideo: (video: boolean) => void
    closeAll: () => void
    closeAllExcept: (exception: string) => void
}