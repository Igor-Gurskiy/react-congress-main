import create from 'zustand'
import { combine } from 'zustand/middleware'
import React from 'react'

const initialState = {
	isStarted: false,
	score: 0,
	correct: 0,
	maxScore: 17,
	step: 1,
	selection: false,
	showSelectTip: false,
	results: [],
	slots1: [
		{
			id: 1,
			section: (
				<>
					Коррекция <br /> поствоспалительной <br /> гиперпигментации при акне
				</>
			),
			correct: ['serum'],
			slots: [{ id: 1, product: null }],
		},
		{
			id: 2,
			correct: ['cream-gel'],
			section: (
				<>
					Профилактика и коррекция <br /> ретенционного и воспалительного акне
				</>
			),
			slots: [{ id: 2, product: null }],
		},
		{
			id: 3,
			correct: ['cleansing-cream-gel'],
			section: (
				<>
					Очищение для кожи, <br /> пересушенной в результате <br /> лечения
					акне
				</>
			),
			slots: [{ id: 3, product: null }],
		},
		{
			id: 4,
			correct: ['restorative-bond'],
			section: (
				<>
					Уход для кожи, <br /> пересушенной в результате <br /> лечения акне
				</>
			),
			slots: [{ id: 4, product: null }],
		},
	],
	slots2: [
		{
			id: 1,
			section: (
				<>
					Содержит <br />
					10% пантенол
				</>
			),
			correct: ['revitalizing-serum'],
			slots: [{ id: 1, product: null }],
		},
		{
			id: 2,
			correct: ['soothing-balm'],
			section: (
				<>
					Мультивосстанавли- <br /> вающий бальзам
					<br /> для младенцев, детей
					<br />и взрослых
				</>
			),
			slots: [{ id: 2, product: null }],
		},
		{
			id: 3,
			correct: ['multi-repair-spray'],
			section: (
				<>
					Подходит
					<br /> для бесконтактного
					<br /> нанесения
					<br /> на раздраженную кожу
				</>
			),
			slots: [{ id: 3, product: null }],
		},
		{
			id: 4,
			correct: ['cleansing-gel'],
			section: (
				<>
					Подходит <br />
					для деликатного очищения
					<br /> сверхчувствительной кожи
				</>
			),
			slots: [{ id: 4, product: null }],
		},
	],
	slots3: [
		{
			id: 1,
			section: (
				<>
					Содержит 20% <br /> липидовосполняющий
					<br /> комплекс: масло
					<br /> карите+глицерин
				</>
			),
			correct: ['cream-gel'],
			slots: [{ id: 1, product: null }],
		},
		{
			id: 2,
			correct: ['Lipid-balm'],
			section: (
				<>
					Липидовосполняющий
					<br /> бальзам, нормализует
					<br /> микробиом кожи
				</>
			),
			slots: [{ id: 2, product: null }],
		},
		{
			id: 3,
			correct: ['skin-milk'],
			section: (
				<>
					Уход <br /> для сухой кожи
					<br /> с колд-кремом
				</>
			),
			slots: [{ id: 3, product: null }],
		},
		{
			id: 4,
			correct: ['emollient-oil'],
			section: (
				<>
					Липидовосполняющее
					<br /> смягчающее масло
					<br /> для ванны и душа
				</>
			),
			slots: [{ id: 4, product: null }],
		},
	],
	slots4: [
		{
			id: 1,
			section: (
				<>
					Интенсивный уход
					<br /> для склонной к розацеа
					<br /> кожи
				</>
			),
			correct: ['intensive-corrective-care'],
			slots: [{ id: 1, product: null }],
		},
		{
			id: 2,
			correct: ['night-intensive-soothing-care'],
			section: (
				<>
					Уход для чувствительной
					<br /> и склонной к аллергии
					<br /> кожи, нормализует
					<br />
					функцию микробиома
				</>
			),
			slots: [{ id: 2, product: null }],
		},
		{
			id: 3,
			correct: ['moisturizing-spf-care'],
			section: (
				<>
					Увлажняющий уход
					<br /> для склонной к розацеа
					<br /> кожи с защитой от солнца
				</>
			),
			slots: [{ id: 3, product: null }],
		},
		{
			id: 4,
			correct: ['softening serum'],
			section: (
				<>
					Сыворотка, активирующая
					<br /> защитную функцию
					<br /> сверхчувствительной
					<br /> и склонной к аллергии
					<br /> кожи
				</>
			),
			slots: [{ id: 4, product: null }],
		},
	],
	slots5: [
		{
			id: 1,
			section: (
				<>
					Против всех видов
					<br /> пигментации
				</>
			),
			correct: ['hyaluronic-serum'],
			slots: [{ id: 1, product: null }],
		},
		{
			id: 2,
			correct: ['concentrated-serum'],
			section: (
				<>
					Повышает тонус
					<br /> и эластичность кожи
				</>
			),
			slots: [{ id: 2, product: null }],
		},
		{
			id: 3,
			correct: ['retinol-serum'],
			section: (
				<>
					Корректирует признаки
					<br /> фотостарения
				</>
			),
			slots: [{ id: 3, product: null }],
		},
		{
			id: 4,
			correct: ['antioxidant-serum'],
			section: (
				<>
					Возвращает коже сияние,
					<br /> выравнивает рельеф
					<br /> и тон
				</>
			),
			slots: [{ id: 4, product: null }],
		},
	],
	slots6: [
		{
			id: 1,
			section: (
				<>
					Солнцезащитное средство
					<br /> с очень легкой, невидимой
					<br /> на коже текстурой
				</>
			),
			correct: ['face-eyes-skin'],
			slots: [{ id: 1, product: null }],
		},
		{
			id: 2,
			correct: ['allergy-prone-skin'],
			section: (
				<>
					Солнцезащитное молочко <br /> для лица и тела в эко- <br /> упаковке
				</>
			),
			slots: [{ id: 2, product: null }],
		},
		{
			id: 3,
			correct: ['face-skin'],
			section: (
				<>
					Cолнцезащитное средство
					<br /> для профилактики
					<br />
					и коррекции признаков
					<br /> преждевременного старения
				</>
			),
			slots: [{ id: 3, product: null }],
		},
		{
			id: 4,
			correct: ['oily-problematic-skin'],
			section: (
				<>
					Cолнцезащитное средство
					<br /> для кожи, склонной к акне
				</>
			),
			slots: [{ id: 4, product: null }],
		},
	],
	slots7: [
		{
			id: 1,
			section: (
				<>
					мягкое очищающее
					<br /> средство
				</>
			),
			correct: ['lipid-cream-gel'],
			slots: [{ id: 1, product: null }],
		},
		{
			id: 2,
			correct: ['revitalizing-soothing-balm'],
			section: (
				<>
					заживляющий бальзам,
					<br /> уменьшает субъективные
					<br /> (стянутость, жжение, зуд,
					<br />
					болезненность) и<br /> объективные (эритема,
					<br /> шелушение) симптомы
				</>
			),
			slots: [{ id: 2, product: null }],
		},
		{
			id: 3,
			correct: ['lipid-balm'],
			section: (
				<>
					Липидовосполняющий
					<br /> бальзам, моментально
					<br /> успокаивает кожу, снижает
					<br />
					интенсивность зуда
					<br /> и оказывает
					<br /> противовоспалительное
					<br /> действие
				</>
			),
			slots: [{ id: 3, product: null }],
		},
		{
			id: 4,
			correct: ['hypersensitive-allergy-prone-skin'],
			section: (
				<>
					уход при проявлениях
					<br /> кожной токсичности на
					<br /> лице. эффективно купирует
					<br /> зуд, покраснение,
					<br /> успокаивает и уменьшает
					<br /> раздражение кожи
				</>
			),
			slots: [{ id: 4, product: null }],
		},
		{
			id: 5,
			correct: ['sunscreen'],
			section: (
				<>
					Солнцезащитный уход
					<br /> для предотвращения
					<br /> фототоксических
					<br /> и фотоаллергических
					<br /> реакций
				</>
			),
			slots: [{ id: 5, product: null }],
		},
	],
	selected: [],
	activeSlot: {
		groupId: 1,
		slotId: 1,
	},
}

const checkSection = (section) => {
	let count = 0
	section.forEach((item) => {
		const correct = item.slots.filter((slot) =>
			item.correct.includes(slot.product),
		)
		count += correct.length || 0
	})

	return count
}

const getCurrentCorrectCount = (state) => {
	return [
		state.slots1,
		state.slots2,
		state.slots3,
		state.slots4,
		state.slots5,
		state.slots6,
		state.slots7,
		// 'slots1',
		// 'slots2',
		// 'slots3',
		// 'slots4',
		// 'slots5',
		// 'slots6',
		// 'slots7',
	].reduce((acc, sec) => acc + checkSection(sec), 0)
}

export const useLRPGameStore = create(
	combine<LRPGameStorePropsType, LRPGameStoreActionsType>(
		initialState,
		(set) => ({
			setStarted: () => set({ isStarted: true }),
			reset: () => set({ ...initialState }),
			setScore: (score) => set({ score }),
			setSelection: (selection) => set({ selection }),
			setCorrectAnswers: (correct: number) => set({ correct }),
			setMaxScore: (max: number) => set({ maxScore: max }),
			nextStep: () =>
				set((state) => ({
					step: getNextStep(state.step + 1),
					correct: getCurrentCorrectCount({ ...state }),
					selected: [],
					selection: false,
					activeSlot: {
						groupId: 1,
						slotId: 1,
					},
				})),
			addScore: () => set((state) => ({ score: state.score + 1 })),
			subScore: () => set((state) => ({ score: state.score - 1 })),
			setShowSelectTip: () => {
				const isShown = localStorage.getItem('lrp-select-tip') == 'true'
				if (!isShown) {
					localStorage.setItem('lrp-select-tip', 'true')
					set({ showSelectTip: true })
				} else {
					set({ showSelectTip: false })
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

					return {
						...state,
						[section]: updatedSlots,
						selected: [...new Set([...state.selected, product])],
						activeSlot: firstEmptySlot !== null ? firstEmptySlot : null,
						score: state.score + 1,
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

const getNextStep = (step: number) => {
	return step > 8 ? 8 : step
}

type LRPGameStorePropsType = {
	isStarted: boolean
	maxScore: number
	score: number
	correct: number
	step: number
	selection: boolean
	showSelectTip: boolean
	results: Array<boolean[]>
	slots1: IGameSlot[]
	slots2: IGameSlot[]
	slots3: IGameSlot[]
	slots4: IGameSlot[]
	slots5: IGameSlot[]
	slots6: IGameSlot[]
	slots7: IGameSlot[]

	selected: string[]
	activeSlot: IActiveSlotType
}

type LRPGameStoreActionsType = {
	setStarted: () => void
	reset: () => void
	setMaxScore: (max: number) => void
	setCorrectAnswers: (correct: number) => void
	setScore: (score: number) => void
	setSelection: (selection: boolean) => void
	addScore: () => void
	subScore: () => void
	nextStep: () => void
	setShowSelectTip: () => void
	addResults: (arr: boolean[]) => void
	handleProductSelect: (
		section:
			| 'slots1'
			| 'slots2'
			| 'slots3'
			| 'slots4'
			| 'slots5'
			| 'slots6'
			| 'slots7',
	) => (slots) => void
	handleClearSlot: (
		section:
			| 'slots1'
			| 'slots2'
			| 'slots3'
			| 'slots4'
			| 'slots5'
			| 'slots6'
			| 'slots7',
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
