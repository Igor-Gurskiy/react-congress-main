import create from 'zustand'
import { combine } from 'zustand/middleware'
import {
	ISortGameItem,
	sortGameItems,
} from '@/components/screens/green/game/utils/sort-game-items'
import { shuffleArray } from '@/utils/array.helpers'

const resetStore = (): SortGameStorePropsType => ({
	score: 0,
	isStarted: false,
	queue: shuffleArray(sortGameItems),
})

const initialState = resetStore()

export const useSortGameStore = create(
	combine<SortGameStorePropsType, SortGameStoreActionsType>(
		initialState,
		(set) => ({
			setGameState: (state) => set({ isStarted: state }),
			addScore: () => set(({ score }) => ({ score: score + 10 })),
			stopGame: () => set({ isStarted: false }),
			startGame: () => set({ isStarted: true }),
			resetGame: () => set(resetStore),
			nextProduct: () =>
				set(({ queue }) => {
					if (!queue.length)
						return { isStarted: false, queue: [] as ISortGameItem[] }
					const queueCopy = queue.concat()
					// remove current element
					queueCopy.shift()

					// stop game if no elements left
					if (!queueCopy.length)
						return { isStarted: true, queue: [] as ISortGameItem[] }
					return { isStarted: true, queue: queueCopy }
				}),
		}),
	),
)

type SortGameStorePropsType = {
	score: number
	isStarted: boolean
	queue: ISortGameItem[]
}

type SortGameStoreActionsType = {
	setGameState: (state: boolean) => void
	addScore: () => void
	stopGame: () => void
	startGame: () => void
	nextProduct: () => void
	resetGame: () => void
}
