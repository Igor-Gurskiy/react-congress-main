import Stories1 from '@/components/screens/green/modals/stories/StoriesCards/Stories1'
import Stories2 from '@/components/screens/green/modals/stories/StoriesCards/Stories2'
import Stories3 from '@/components/screens/green/modals/stories/StoriesCards/Stories3'
import Stories4 from '@/components/screens/green/modals/stories/StoriesCards/Stories4'
import Stories5 from '@/components/screens/green/modals/stories/StoriesCards/Stories5'
import Stories6 from '@/components/screens/green/modals/stories/StoriesCards/Stories6'
import Stories7 from '@/components/screens/green/modals/stories/StoriesCards/Stories7'
import Stories8 from '@/components/screens/green/modals/stories/StoriesCards/Stories8'
import Stories9 from '@/components/screens/green/modals/stories/StoriesCards/Stories9'
import Stories10 from '@/components/screens/green/modals/stories/StoriesCards/Stories10'
import Stories11 from '@/components/screens/green/modals/stories/StoriesCards/Stories11'
import Stories12 from '@/components/screens/green/modals/stories/StoriesCards/Stories12'
import Stories13 from '@/components/screens/green/modals/stories/StoriesCards/Stories13'
import Stories14 from '@/components/screens/green/modals/stories/StoriesCards/Stories14'
import Stories15 from '@/components/screens/green/modals/stories/StoriesCards/Stories15'
import Stories16 from '@/components/screens/green/modals/stories/StoriesCards/Stories16'
import Stories17 from '@/components/screens/green/modals/stories/StoriesCards/Stories17'
import Stories18 from '@/components/screens/green/modals/stories/StoriesCards/Stories18'
import Stories19 from '@/components/screens/green/modals/stories/StoriesCards/Stories19'
import Stories20 from '@/components/screens/green/modals/stories/StoriesCards/Stories20'
import Stories21 from '@/components/screens/green/modals/stories/StoriesCards/Stories21'
import Stories22 from '@/components/screens/green/modals/stories/StoriesCards/Stories22'
import Stories23 from '@/components/screens/green/modals/stories/StoriesCards/Stories23'
import Stories24 from '@/components/screens/green/modals/stories/StoriesCards/Stories24'
import Stories25 from '@/components/screens/green/modals/stories/StoriesCards/Stories25'
import Stories26 from '@/components/screens/green/modals/stories/StoriesCards/Stories26'
import Stories27 from '@/components/screens/green/modals/stories/StoriesCards/Stories27'
import Stories28 from '@/components/screens/green/modals/stories/StoriesCards/Stories28'
import Stories29 from '@/components/screens/green/modals/stories/StoriesCards/Stories29'
import Stories30 from '@/components/screens/green/modals/stories/StoriesCards/Stories30'
import Stories31 from '@/components/screens/green/modals/stories/StoriesCards/Stories31'
import Stories32 from '@/components/screens/green/modals/stories/StoriesCards/Stories32'
import Stories33 from '@/components/screens/green/modals/stories/StoriesCards/Stories33'
import Stories34 from '@/components/screens/green/modals/stories/StoriesCards/Stories34'
import { ComponentType } from 'react'
import { EventsEnum } from '@/api/tracker'

export interface IStoryAdvertisement {
	erId: string
	advertiser: string
}

export interface IStoryEvents {
	visit: EventsEnum
	duration: EventsEnum
}

export interface IStoryItem {
	component: ComponentType
	ad: IStoryAdvertisement | null
	events: IStoryEvents
}

export type IStorySection = IStoryItem[]

const section1: IStorySection = [
	{
		component: Stories1,
		events: {
			visit: EventsEnum.greenStory1Visit,
			duration: EventsEnum.greenStory1Duration,
		},
		ad: null,
	},
	{
		component: Stories2,
		events: {
			visit: EventsEnum.greenStory2Visit,
			duration: EventsEnum.greenStory2Duration,
		},
		ad: {
			erId: '2SDnje8P4t8',
			advertiser: 'skin.ru',
		},
	},
	{
		component: Stories3,
		events: {
			visit: EventsEnum.greenStory3Visit,
			duration: EventsEnum.greenStory3Duration,
		},
		ad: {
			erId: '2SDnjcyfxgY',
			advertiser: 'skin.ru',
		},
	},
]

const section2: IStorySection = [
	{
		component: Stories4,
		events: {
			visit: EventsEnum.greenStory4Visit,
			duration: EventsEnum.greenStory4Duration,
		},
		ad: {
			erId: '2SDnjeb5BSG',
			advertiser: 'skin.ru',
		},
	},
	{
		component: Stories5,
		events: {
			visit: EventsEnum.greenStory5Visit,
			duration: EventsEnum.greenStory5Duration,
		},
		ad: {
			erId: '2SDnjbxNntg',
			advertiser: 'skin.ru',
		},
	},
	{
		component: Stories6,
		events: {
			visit: EventsEnum.greenStory6Visit,
			duration: EventsEnum.greenStory6Duration,
		},
		ad: {
			erId: '2SDnjcbSUwJ',
			advertiser: 'skin.ru',
		},
	},
	{
		component: Stories7,
		events: {
			visit: EventsEnum.greenStory7Visit,
			duration: EventsEnum.greenStory7Duration,
		},
		ad: null,
	},
]

const section3: IStorySection = [
	{
		component: Stories8,
		events: {
			visit: EventsEnum.greenStory8Visit,
			duration: EventsEnum.greenStory8Duration,
		},
		ad: null,
	},
	{
		component: Stories9,
		events: {
			visit: EventsEnum.greenStory9Visit,
			duration: EventsEnum.greenStory9Duration,
		},
		ad: null,
	},
	{
		component: Stories10,
		events: {
			visit: EventsEnum.greenStory10Visit,
			duration: EventsEnum.greenStory10Duration,
		},
		ad: null,
	},
	{
		component: Stories11,
		events: {
			visit: EventsEnum.greenStory11Visit,
			duration: EventsEnum.greenStory11Duration,
		},
		ad: {
			erId: '2SDnjd1Qj9r',
			advertiser: 'skin.ru',
		},
	},
]

const section4: IStorySection = [
	{
		component: Stories12,
		events: {
			visit: EventsEnum.greenStory12Visit,
			duration: EventsEnum.greenStory12Duration,
		},
		ad: null,
	},
	{
		component: Stories13,
		events: {
			visit: EventsEnum.greenStory13Visit,
			duration: EventsEnum.greenStory13Duration,
		},
		ad: null,
	},
	{
		component: Stories14,
		events: {
			visit: EventsEnum.greenStory14Visit,
			duration: EventsEnum.greenStory14Duration,
		},
		ad: {
			erId: '2SDnjbtBcEc',
			advertiser: 'skin.ru',
		},
	},
]

const section5: IStorySection = [
	{
		component: Stories15,
		events: {
			visit: EventsEnum.greenStory15Visit,
			duration: EventsEnum.greenStory15Duration,
		},
		ad: {
			erId: '2SDnjbw9vHE',
			advertiser: 'skin.ru',
		},
	},
	{
		component: Stories16,
		events: {
			visit: EventsEnum.greenStory16Visit,
			duration: EventsEnum.greenStory16Duration,
		},
		ad: null,
	},
	{
		component: Stories17,
		events: {
			visit: EventsEnum.greenStory17Visit,
			duration: EventsEnum.greenStory17Duration,
		},
		ad: null,
	},
	{
		component: Stories18,
		events: {
			visit: EventsEnum.greenStory18Visit,
			duration: EventsEnum.greenStory18Duration,
		},
		ad: null,
	},
	{
		component: Stories19,
		events: {
			visit: EventsEnum.greenStory19Visit,
			duration: EventsEnum.greenStory19Duration,
		},
		ad: {
			erId: '2SDnjeHYnCx',
			advertiser: 'skin.ru',
		},
	},
]

const section6: IStorySection = [
	{
		component: Stories20,
		events: {
			visit: EventsEnum.greenStory20Visit,
			duration: EventsEnum.greenStory20Duration,
		},
		ad: {
			erId: '2SDnjc92A1v',
			advertiser: 'skin.ru',
		},
	},
	{
		component: Stories21,
		events: {
			visit: EventsEnum.greenStory21Visit,
			duration: EventsEnum.greenStory21Duration,
		},
		ad: null,
	},
	{
		component: Stories22,
		events: {
			visit: EventsEnum.greenStory22Visit,
			duration: EventsEnum.greenStory22Duration,
		},
		ad: null,
	},
	{
		component: Stories23,
		events: {
			visit: EventsEnum.greenStory23Visit,
			duration: EventsEnum.greenStory23Duration,
		},
		ad: {
			erId: '2SDnjd8s1w6',
			advertiser: 'skin.ru',
		},
	},
	{
		component: Stories24,
		events: {
			visit: EventsEnum.greenStory24Visit,
			duration: EventsEnum.greenStory24Duration,
		},
		ad: null,
	},
]

const section7: IStorySection = [
	{
		component: Stories25,
		events: {
			visit: EventsEnum.greenStory25Visit,
			duration: EventsEnum.greenStory25Duration,
		},
		ad: null,
	},
	{
		component: Stories26,
		events: {
			visit: EventsEnum.greenStory26Visit,
			duration: EventsEnum.greenStory26Duration,
		},
		ad: null,
	},
	{
		component: Stories27,
		events: {
			visit: EventsEnum.greenStory27Visit,
			duration: EventsEnum.greenStory27Duration,
		},
		ad: null,
	},
	{
		component: Stories28,
		events: {
			visit: EventsEnum.greenStory28Visit,
			duration: EventsEnum.greenStory28Duration,
		},
		ad: null,
	},
	{
		component: Stories29,
		events: {
			visit: EventsEnum.greenStory29Visit,
			duration: EventsEnum.greenStory29Duration,
		},
		ad: {
			erId: '2SDnjeD8Vma',
			advertiser: 'skin.ru',
		},
	},
	{
		component: Stories30,
		events: {
			visit: EventsEnum.greenStory30Visit,
			duration: EventsEnum.greenStory30Duration,
		},
		ad: null,
	},
]

const section8: IStorySection = [
	{
		component: Stories31,
		events: {
			visit: EventsEnum.greenStory31Visit,
			duration: EventsEnum.greenStory31Duration,
		},
		ad: {
			erId: '2SDnjbz9ujW',
			advertiser: 'skin.ru',
		},
	},
	{
		component: Stories32,
		events: {
			visit: EventsEnum.greenStory32Visit,
			duration: EventsEnum.greenStory32Duration,
		},
		ad: {
			erId: '2SDnjcxVSSc',
			advertiser: 'skin.ru',
		},
	},
	{
		component: Stories33,
		events: {
			visit: EventsEnum.greenStory33Visit,
			duration: EventsEnum.greenStory33Duration,
		},
		ad: null,
	},
	{
		component: Stories34,
		events: {
			visit: EventsEnum.greenStory34Visit,
			duration: EventsEnum.greenStory34Duration,
		},
		ad: null,
	},
]

export const stories = [
	section1,
	section2,
	section3,
	section4,
	section5,
	section6,
	section7,
	section8,
]
