import create from 'zustand'
import { combine } from 'zustand/middleware'

export const useSkinCeuticalsStore = create(combine<SkinCeuticalsPropsType, SkinCeuticalsStoreActionsType>(
    {
        newbie: true,
        animated: true,
        correcting: false,
        silymarin: false,
        ferulic: false,
        video: false,
    },
    (set) => ({
        setNewbie: (newbie) => set({ newbie }),
        setAnimated: (animated) => set({ animated }),
        setCorrecting: (correcting) => set({ correcting }),
        setSilymarin: (silymarin) => set({ silymarin }),
        setFerulic: (ferulic) => set({ ferulic }),
        setVideo: (video) => set({ video }),
        closeAll: () => set({ correcting: false, silymarin: false, ferulic: false, video: false }),
        closeAllExcept: (exception) => set({
            correcting: exception === 'correcting',
            silymarin: exception === 'silymarin',
            ferulic: exception === 'ferulic',
            video: exception === 'video',
        }),
    })
))

type SkinCeuticalsPropsType = {
    newbie: boolean
    animated: boolean
    correcting: boolean
    silymarin: boolean
    ferulic: boolean
    video: boolean
}

type SkinCeuticalsStoreActionsType = {
    setNewbie: (newbie: boolean) => void
    setAnimated: (animated: boolean) => void
    setCorrecting: (correcting: boolean) => void
    setSilymarin: (silymarin: boolean) => void
    setFerulic: (ferulic: boolean) => void
    setVideo: (video: boolean) => void
    closeAll: () => void
    closeAllExcept: (exception: string) => void
}