import { CabinBackground } from '@/api/cabin'
import { UserType } from '@/api/types'
import { AllowedLike } from '@/api/user'
import create from 'zustand'
import { combine } from 'zustand/middleware'

export const useUIStore = create(
	combine<UIStorePropsType, UIStoreActionsType>(
		{
			isLoading: true,
			prevented: false,
			preloader: false,
			helpOverlay: false,
			specialization: undefined,
			// specialization: 'dermatology',

			specSelector: false,
			doNotShow: false,
			scaleRatio: 1,
			locked: false,
			zoomProducts: false,
			connection: 2,
			cabin: null,
			vichy: false,
			user: null,
			likes: [],
			likeList: [],
			cabinBackgrounds: [],
			schedule: 'program',
			video: false,
			offset: 0,
			inactive: false,
			brochure: false,
			live: false,
			scheduleDay: null,
			pageEntered: null,
		},
		(set) => ({
			setIsLoading: (isLoading) => set({ isLoading }),
			setPrevented: (prevented) => set({ prevented }),
			setPreloader: (preloader) => set({ preloader }),
			setVideo: (video) => set({ video }),
			setInactive: (inactive) => set({ inactive }),
			setBrochure: (brochure) => set({ brochure }),
			setHelpOverlay: (helpOverlay) => set({ helpOverlay }),
			setDoNotShow: (doNotShow) => set({ doNotShow }),
			setSpecialization: (specialization) => set({ specialization }),
			setSpecSelector: (specSelector) => set({ specSelector }),
			setScaleRatio: (scaleRatio) => set({ scaleRatio }),
			setLocked: (locked) => set({ locked }),
			setZoomProducts: (zoomProducts) => set({ zoomProducts }),
			setCabin: (cabin) => set({ cabin }),
			setConnection: (connection) => set({ connection }),
			setVichy: (vichy) => set({ vichy }),
			setUser: (user) => set({ user }),
			setLikes: (likes) => set({ likes }),
			setLikeList: (likeList) => set({ likeList }),
			addLike: (like) => set((state) => ({ likes: [...state.likes, like] })),
			setCabinBackgrounds: (cabinBackgrounds) => set({ cabinBackgrounds }),
			setSchedule: (schedule) => set({ schedule }),
			setOffset: (offset) => set({ offset }),
			setLive: (live) => set({ live }),
			setScheduleDay: (day) => set({ scheduleDay: day }),
			setPageEntered: (pageEntered) => set({ pageEntered }),
			resetState: () =>
				set({
					isLoading: true,
					preloader: false,
					helpOverlay: false,
					specialization: undefined,
					// specialization: 'dermatology',
					specSelector: false,
					doNotShow: false,
					scaleRatio: 1,
					locked: false,
					zoomProducts: false,
					connection: 2,
					cabin: null,
					vichy: false,
					user: null,
					likes: [],
					likeList: [],
					cabinBackgrounds: [],
					schedule: null,
					video: false,
					offset: 0,
					inactive: false,
					brochure: false,
					live: false,
					scheduleDay: null,
				}),
		}),
	),
)

type UIStorePropsType = {
	isLoading: boolean
	prevented: boolean
	preloader: boolean
	video: boolean
	helpOverlay: boolean
	specialization: SpecType
	specSelector: boolean
	doNotShow: boolean
	scaleRatio: number
	locked: boolean
	zoomProducts: boolean
	connection: number
	cabin: 'sc' | 'vichy' | 'lrp' | 'cerave' | 'conference' | 'green' | null
	vichy: boolean
	user: UserType | null
	likes: string[]
	likeList: AllowedLike[]
	cabinBackgrounds: CabinBackground[]
	schedule: ScheduleType
	offset: number
	inactive: boolean
	brochure: boolean
	live: boolean
	scheduleDay: string | null
	pageEntered: number | null
}

type ScheduleType =
	| 'program'
	| 'ped'
	| 'teen'
	| 'adult'
	| 'cosm'
	| null
	| undefined
type TourType = null | 'hall'

export type SpecType =
	| undefined
	| 'dermatology'
	| 'pediatrics'
	| 'oncology'
	| 'allerg'
	| 'therapy'
	| 'pharmacy'

type UIStoreActionsType = {
	setIsLoading: (isLoading: boolean) => void
	setPrevented: (prevented: boolean) => void
	setPreloader: (preloader: boolean) => void
	setVideo: (video: boolean) => void
	setInactive: (inactive: boolean) => void
	setBrochure: (brochure: boolean) => void
	setHelpOverlay: (helpOverlay: boolean) => void
	setDoNotShow: (doNotShow: boolean) => void
	setSpecialization: (specialization: SpecType) => void
	setSpecSelector: (specSelector: boolean) => void
	setScaleRatio: (scaleRatio: number) => void
	setLocked: (locked: boolean) => void
	setZoomProducts: (zoomProducts: boolean) => void
	setCabin: (
		cabin: 'sc' | 'vichy' | 'lrp' | 'cerave' | 'conference' | 'green' | null,
	) => void
	setConnection: (connection: number) => void
	setVichy: (vichy: boolean) => void
	setUser: (user: UserType) => void
	setLikes: (likes: string[]) => void
	setLikeList: (likeList: AllowedLike[]) => void
	addLike: (likes: string) => void
	setCabinBackgrounds: (cabinBackgrounds: CabinBackground[]) => void
	setSchedule: (schedule: ScheduleType) => void
	setOffset: (offset: number) => void
	setLive: (live: boolean) => void
	setScheduleDay: (day: string) => void
	resetState: () => void
	setPageEntered: (timestamp: number | null) => void
}
