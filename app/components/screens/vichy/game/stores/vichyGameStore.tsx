import create from 'zustand'
import { combine } from 'zustand/middleware'
import React from 'react'

const initialState = {
	score: 0,
	step: 1,
	selection: false,
	showSelectTip: false,
	showContinueTip: false,
	showRemoveTip: { groupId: null, slotId: null },
	results: [],
	slots1: [
		{
			id: 1,
			section: (
				<>
					Очищение и<br />
					тонизирование
				</>
			),
			correct: ['phytosolution', 'lotion'],
			slots: [
				{ id: 1, product: null },
				{ id: 2, product: null },
			],
		},
		{
			id: 2,
			correct: ['probio-serum'],
			section: (
				<>
					Интенсивный
					<br />
					уход
				</>
			),
			slots: [{ id: 3, product: null }],
		},
		{
			id: 3,
			correct: ['moisturising-fluide'],
			section: (
				<>
					Базовый
					<br />
					уход
				</>
			),
			slots: [{ id: 4, product: null }],
		},
		{
			id: 4,
			correct: ['soleil'],
			section: 'Фотопротекция',
			slots: [{ id: 5, product: null }],
		},
	],
	slots2: [
		{
			id: 1,
			section: (
				<>
					Очищение и<br />
					тонизирование
				</>
			),
			correct: ['mousse', 'lotion-tonique'],
			slots: [
				{ id: 1, product: null },
				{ id: 2, product: null },
			],
		},
		{
			id: 2,
			correct: ['liftactiv-b3-serum'],
			section: (
				<>
					Интенсивный
					<br />
					уход
				</>
			),
			slots: [{ id: 3, product: null }],
		},
		{
			id: 3,
			correct: ['antidark', 'collagen'],
			section: (
				<>
					Базовый
					<br />
					уход
				</>
			),
			slots: [
				{ id: 4, product: null },
				{ id: 5, product: null },
			],
		},
		{
			id: 4,
			correct: ['soleil'],
			section: 'Фотопротекция',
			slots: [{ id: 6, product: null }],
		},
	],
	slots3: [
		{
			id: 1,
			section: (
				<>
					Очищение и<br />
					тонизирование
				</>
			),
			correct: ['mousse', 'lotion'],
			slots: [
				{ id: 1, product: null },
				{ id: 2, product: null },
			],
		},
		{
			id: 2,
			correct: ['meno'],
			section: (
				<>
					Интенсивный
					<br />
					уход
				</>
			),
			slots: [{ id: 3, product: null }],
		},
		{
			id: 3,
			correct: ['jour', 'nuit'],
			section: (
				<>
					Базовый
					<br />
					уход
				</>
			),
			slots: [
				{ id: 4, product: null },
				{ id: 5, product: null },
			],
		},
		{
			id: 4,
			correct: ['soleil'],
			section: 'Фотопротекция',
			slots: [{ id: 6, product: null }],
		},
	],
	selected: [],
	activeSlot: {
		groupId: 1,
		slotId: 1,
	},
}

export const useVichyGameStore = create(
	combine<VichyGameStorePropsType, VichyGameStoreActionsType>(
		initialState,
		(set) => ({
			reset: () => set({ ...initialState }),
			setScore: (score) => set({ score }),
			setSelection: (selection) => set({ selection }),
			nextStep: () =>
				set((state) => ({
					step: getNextStep(state.step + 1),
					selected: [],
					selection: false,
					activeSlot: {
						groupId: 1,
						slotId: 1,
					},
				})),
			addScore: () =>
				set((state) => ({ score: getValidScore(state.step, state.score + 1) })),
			subScore: () => set((state) => ({ score: state.score - 1 })),
			setShowSelectTip: () => {
				const isShown = localStorage.getItem('vichy-select-tip') == 'true'
				if (!isShown) {
					localStorage.setItem('vichy-select-tip', 'true')
					set({ showSelectTip: true })
				} else {
					set({ showSelectTip: false })
				}
			},
			setShowContinueTip: () => {
				const isShown = localStorage.getItem('vichy-continue-tip') == 'true'
				if (!isShown) {
					localStorage.setItem('vichy-continue-tip', 'true')
					set({ showContinueTip: true })
				} else {
					set({ showContinueTip: false })
				}
			},
			setShowRemoveTip: (showRemoveTip) => {
				const isShown = localStorage.getItem('vichy-remove-tip') == 'true'
				if (!isShown) {
					localStorage.setItem('vichy-remove-tip', 'true')
					set({ showRemoveTip })
				} else {
					set({ showRemoveTip: { groupId: null, slotId: null } })
				}
			},
			addResults: (solved) =>
				set((state) => ({ results: [...state.results, solved] })),
			handleProductSelect: (section) => (product) => {
				set((state) => {
					if (state.selected.includes(product) || state.activeSlot === null)
						return state

					const { groupId, slotId } = state.activeSlot
					const updatedSlots = state[section].map((group) => {
						if (group.id === groupId) {
							return {
								...group,
								slots: group.slots.map((slot) => {
									if (slot.id === slotId) {
										return { ...slot, product }
									}
									return slot
								}),
							}
						}
						return group
					})

					let firstEmptySlot: IActiveSlotType = null
					updatedSlots.forEach((group) => {
						group.slots.forEach((slot) => {
							if (slot.product === null && firstEmptySlot === null) {
								firstEmptySlot = { groupId: group.id, slotId: slot.id }
							}
						})
					})

					let showTip: any = { groupId: null, slotId: null }
					try {
						const isShown = localStorage.getItem('vichy-remove-tip') == 'true'
						if (!isShown) {
							localStorage.setItem('vichy-remove-tip', 'true')
							showTip = state.activeSlot
						}
					} catch (e) {
						console.error('cant show remove tip')
					}

					return {
						...state,
						[section]: updatedSlots,
						selected: [...new Set([...state.selected, product])],
						showRemoveTip: showTip,
						activeSlot: firstEmptySlot !== null ? firstEmptySlot : null,
						score: getValidScore(state.step, state.score + 1),
					}
				})
			},
			handleClearSlot: (section) => (product, slot) => {
				set((state) => {
					const { groupId, slotId } = slot
					const updatedSlots = state[section].map((group) => {
						if (group.id === groupId) {
							return {
								...group,
								slots: group.slots.map((s) => {
									if (s.id === slotId) {
										return { ...s, product: null }
									}
									return s
								}),
							}
						}
						return group
					})

					return {
						...state,
						[section]: updatedSlots,
						selected: state.selected.filter((p) => p !== product),
						activeSlot: { groupId, slotId },
						score: state.score - 1,
					}
				})
			},
			setSelected: (selected) => set({ selected }),
			setActiveSlot: (activeSlot) => set({ activeSlot }),
		}),
	),
)

const getValidScore = (step: number, score: number) => {
	if (step == 1) {
		return score < 0 ? 0 : score > 5 ? 5 : score
	} else if (step == 2) {
		return score < 5 ? 5 : score > 11 ? 11 : score
	}
	return score < 11 ? 11 : score > 17 ? 17 : score
}

const getNextStep = (step: number) => {
	return step > 4 ? 4 : step
}

type VichyGameStorePropsType = {
	score: number
	step: number
	selection: boolean
	showSelectTip: boolean
	showContinueTip: boolean
	showRemoveTip: {
		groupId: number | null
		slotId: number | null
	}
	results: Array<boolean[]>
	slots1: IGameSlot[]
	slots2: IGameSlot[]
	slots3: IGameSlot[]
	selected: string[]
	activeSlot: IActiveSlotType
}

type VichyGameStoreActionsType = {
	reset: () => void
	setScore: (score: number) => void
	setSelection: (selection: boolean) => void
	addScore: () => void
	subScore: () => void
	nextStep: () => void
	setShowSelectTip: () => void
	setShowContinueTip: () => void
	setShowRemoveTip: (showRemoveTip: {
		groupId: number | null
		slotId: number | null
	}) => void
	addResults: (arr: boolean[]) => void
	handleProductSelect: (
		section: 'slots1' | 'slots2' | 'slots3',
	) => (slots) => void
	handleClearSlot: (
		section: 'slots1' | 'slots2' | 'slots3',
	) => (product: string, slot: { groupId: number; slotId: number }) => void
	setSelected: (selected: string[]) => void
	setActiveSlot: (activeSlot: IActiveSlotType) => void
}

type IActiveSlotType = { groupId: number; slotId: number } | null

interface IGameSlot {
	id: number
	correct: string[]
	section: JSX.Element | string
	slots: { id: number; product: string | null }[]
}
