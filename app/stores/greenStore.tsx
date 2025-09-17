import create from 'zustand'
import {combine} from 'zustand/middleware'

export const useGreenStore = create(combine<GreenStorePropsType, GreenStoreActionsType>(
    {
        newbie: true,
        animated: true,
    },
    (set) => ({
        setNewbie: (newbie) => set({newbie}),
        setAnimated: (animated) => set({animated}),
    })
))

type GreenStorePropsType = {
    newbie: boolean
    animated: boolean
}

type GreenStoreActionsType = {
    setNewbie: (newbie: boolean) => void
    setAnimated: (animated: boolean) => void
}