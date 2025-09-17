import create from 'zustand'
import { combine } from 'zustand/middleware'

const resetStore = (): DercosStorePropsType => ({
	score: 0,
	isStarted: false,
	isGuide: false,
	arrows: [],
})

export const dercosCorrectAnswers = {
	target1: 'source2',
	target2: 'source3',
	target3: 'source2',
	target4: 'source1',
	target5: 'source1',
}

const initialState = resetStore()

const getArrowColor = (id: string) =>
	id == 'source1' ? '#DE0311' : id == 'source2' ? '#00964A' : '#6D6D6D'

const correctAnswers = Object.entries(dercosCorrectAnswers).map(
	([end, start]) => ({ start, end, color: getArrowColor(start) }),
)

export const useDercosGameStore = create(
	combine<DercosStorePropsType, DercosStoreActionsType>(
		initialState,
		(set) => ({
			setGameState: (state) => set({ isStarted: state }),
			setGuide: (state) => set({ isGuide: state }),
			startGuide: () => set({ isGuide: true, arrows: correctAnswers }),
			addArrow: (arrow: Omit<DercosConnectionArrow, 'color'>) =>
				set((state) => ({
					arrows: [
						...state.arrows,
						{
							start: arrow.start,
							end: arrow.end,
							color: getArrowColor(arrow.start),
						},
					],
				})),
			resetGame: () => set(resetStore),
			removeArrow: (targetId, type) =>
				set((state) => {
					let factor = type === 'target' ? 'end' : 'start'
					return {
						arrows: [...state.arrows.filter((arr) => arr[factor] !== targetId)],
					}
				}),
		}),
	),
)

type DercosStorePropsType = {
	score: number
	isStarted: boolean
	isGuide: boolean
	arrows: DercosConnectionArrow[]
}

type DercosConnectionArrow = { start: string; end: string; color: string }

type DercosStoreActionsType = {
	setGameState: (state: boolean) => void
	setGuide: (state: boolean) => void
	startGuide: () => void
	addArrow: (arrow: Omit<DercosConnectionArrow, 'color'>) => void
	removeArrow: (targetId: string, type: 'target' | 'source') => void
	resetGame: () => void
}
