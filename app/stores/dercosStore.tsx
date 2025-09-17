import create from 'zustand'
import {combine} from 'zustand/middleware'

export const useDercosStore = create(combine<DercosStorePropsType, DercosStoreActionsType>(
    {
        newbie: true,
        animated: true,
    },
    (set) => ({
        setNewbie: (newbie) => set({newbie}),
        setAnimated: (animated) => set({animated}),
    })
))

type DercosStorePropsType = {
    newbie: boolean
    animated: boolean
}

type DercosStoreActionsType = {
    setNewbie: (newbie: boolean) => void
    setAnimated: (animated: boolean) => void
}