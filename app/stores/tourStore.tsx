import create from 'zustand'
import {combine} from 'zustand/middleware'

export const useTourStore = create(combine<TourStorePropsType, TourStoreActionsType>(
    {
        tour: null,
        step: 0,
        tourHelp: false,
        move: null,
    },
    (set) => ({
        setTour: (tour) => set({tour}),
        setTourHelp: (tourHelp) => set({tourHelp}),
        setStep: (step) => set({step}),
        setMove: (move) => set({move}),
    })
))

type TourType = null | 'hall' | 'green' | 'lrp' | 'vichy' | 'dercos'

type TourStorePropsType = {
    tour: TourType
    tourHelp: boolean
    step: number
    move: null | number
}

type TourStoreActionsType = {
    setTour: (tour: TourType) => void
    setTourHelp: (tourHelp: boolean) => void
    setStep: (step: number) => void
    setMove: (move: number) => void
}