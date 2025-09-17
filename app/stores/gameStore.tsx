import create from 'zustand'
import { combine } from 'zustand/middleware'

export const useGameStore = create(combine<GameStorePropsType, GameStoreActionsType>(
    {
        section: 'intro',
        score: 0,
        time: 0,
        currentQuestion: 0,
        overview: false,
        incorrect: []
    },
    (set) => ({
        setSection: (section) => set({ section }),
        setScore: (score) => set({ score }),
        setTime: (time) => set({ time }),
        setCurrentQuestion: (currentQuestion) => set({ currentQuestion }),
        resetGame: (section = 'intro') => set({
            section,
            score: 0,
            time: 0,
            currentQuestion: 0,
            overview: false,
            incorrect: [],
        }),
        setOverview: (overview) => set({ overview }),
        setIncorrect: (incorrect) => set({ incorrect }),
        pushIncorrect: (incorrect) => set(state => ({ ...state, incorrect: [...state.incorrect, incorrect] })),
        pushIncorrectArr: (incorrect) => set(state => ({ ...state, incorrect: [...state.incorrect, ...incorrect] })),
    })
))

type GameStorePropsType = {
    section: 'intro' | 'game' | 'result'
    score: number
    time: number
    currentQuestion: number
    overview: boolean
    incorrect: number[]
}

type GameStoreActionsType = {
    setScore: (score: number) => void
    setSection: (section: 'intro' | 'game' | 'result') => void
    setTime: (time: number) => void
    setCurrentQuestion: (currentQuestion: number) => void
    resetGame: (section?: 'intro' | 'game' | 'result') => void
    setOverview: (overview: boolean) => void
    setIncorrect: (incorrect: number[]) => void
    pushIncorrect: (incorrect: number) => void
    pushIncorrectArr: (incorrect: number[]) => void
}