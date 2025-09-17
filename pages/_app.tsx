import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import { ResultCodesEnum } from '@/api/types'
import '@/assets/styles/globals.scss'
import OnAir from '@/components/OnAir'
import PhotoCabin from '@/components/PhotoCabin/PhotoCabin'
import MainPreloader from '@/components/Preloader/MainPreloader'
import Preloader from '@/components/Preloader/Preloader'
import transliterateProfession from '@/components/screens/hall/utils/transliterateProfession'
import ModalRoot from '@/components/shared/modal/ModalRoot'
import useWindowSize from '@/hooks/useWindowSize'
import { useUIStore } from '@/stores/uiStore'
import '@/utils/fonts.css'
import * as ga from '@/utils/ga'
import GlobalStyles from '@/utils/globalStyles'
import { NextComponentType, NextPageContext } from 'next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import 'overlayscrollbars/overlayscrollbars.css'
import React, { useEffect, useState } from 'react'
import { Transition, animated } from 'react-spring'
import styled from 'styled-components'

import useSchedule from '@/api/hooks/use-schedule'
import { RoomNameEnum, useTagsPreview } from '@/api/use-tags'
import { dispatchCloseModals } from '@/components/shared/modal/modal-utils'
import ReserveModalRoot from '@/components/shared/reserve-modal/ReserveModalRoot'
import { queryClient } from '@/utils/query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { fixTimeoutTransition } from '../utils/fixTimeoutTransition'

type PageItemsProps = {
	id: string
	Component: NextComponentType<NextPageContext, any, {}>
	pageProps: any
}

// Фиксим проблему css-модулей
fixTimeoutTransition(1000)

const App: React.FC<AppProps> = ({ Component, router, ...pageProps }) => {
	const [width, height] = useWindowSize()
	const user = useUIStore((state) => state.user)
	const scaleRatio = useUIStore((state) => state.scaleRatio)
	const setUser = useUIStore((state) => state.setUser)
	const setLikes = useUIStore((state) => state.setLikes)
	const setLikeList = useUIStore((state) => state.setLikeList)
	const setCabinBackgrounds = useUIStore((state) => state.setCabinBackgrounds)
	const resetState = useUIStore((state) => state.resetState)
	const setCabin = useUIStore((state) => state.setCabin)
	const setSpecialization = useUIStore((state) => state.setSpecialization)
	const specialization = useUIStore((state) => state.specialization)

	const fetchMetadata = async () => {
		const response = await API.me.metadata()

		if (response && response.status === ResultCodesEnum.Success) {
			const { whatilike, whoami, allowed_like_list } = response
			const { profession_id, profession_title } = whoami

			const likes = whatilike.map((like) => like.like)

			setUser(response.whoami)
			setCabinBackgrounds(response.cabin_background_list)
			setLikes(likes)
			setLikeList(allowed_like_list)

			if (profession_title) {
				const profession = transliterateProfession(profession_title)
				if (profession) {
					setSpecialization(profession)
				}
			}
		} else {
			console.error('Не удалось загрузить данные')
		}
	}

	useEffect(() => {
		if (document) {
			let vh = window.innerHeight * 0.01
			// Then we set the value in the --vh custom property to the root of the document
			document.documentElement.style.setProperty('--vh', `${vh}px`)
			document.documentElement.style.setProperty('--app-height', `${height}px`)
			document.documentElement.style.setProperty('--app-width', `${width}px`)
			document.documentElement.style.setProperty(
				'--tour-width',
				`${(width - 40) / scaleRatio}px`,
			)
		}
	}, [width, height, scaleRatio])

	useEffect(() => {
		fetchMetadata()

		// setSpecialization('oncology')
		// setSpecialization('pediatrics')

		return () => resetState()
	}, [])

	useEffect(() => {
		setCabin(null)
	}, [router.route])

	useEffect(() => {
		if (user) {
			ga.event({
				action: 'gaSessionId',
				params: {
					userId: user.loreal_id,
				},
			})
		}
	}, [user])

	const items: PageItemsProps[] = [
		{
			id: router.route,
			Component,
			pageProps,
		},
	]

	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStyles />
			<Transition
				items={items}
				keys={(item: PageItemsProps) => item.id}
				initial={{ opacity: 0 }}
				from={{ opacity: 0 }}
				enter={{ opacity: 1, delay: 300 }}
				leave={{ opacity: 0 }}
				delay={500}
			>
				{(styles, { pageProps, Component, id }) => (
					<AbsoluteWrapper style={{ ...styles, width: '100vw', height }}>
						<PageWrapper route={id}>
							<Component {...pageProps} />
						</PageWrapper>
					</AbsoluteWrapper>
				)}
			</Transition>

			<ModalRoot />
			<ReserveModalRoot />

			{/* <Cabin /> */}
			<PhotoCabin />
			{/*<DaySchedule />*/}
			<OnAir />
			<Preloader route={router.route} />
			<MainPreloader />
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}

export default App

const PageWrapper = ({ children, route }) => {
	const [pageEntered, setPageEntered] = useState(Date.now())

	const router = useRouter()
	// TODO: fix this temp solution to load all in one query
	useTagsPreview(RoomNameEnum.Vichy)
	useTagsPreview(RoomNameEnum.Dercos)
	useTagsPreview(RoomNameEnum.LRP)
	useTagsPreview(RoomNameEnum.Conference)

	const data = useSchedule()

	// useTags(RoomNameEnum.Vichy)
	// useTags(RoomNameEnum.Dercos)
	// useTags(RoomNameEnum.LRP)
	// useTags(RoomNameEnum.Conference)

	const sendStatistics = () => {
		dispatchCloseModals()

		const events = pathEvent[route]
		const now = Date.now()
		if (events && events.duration && pageEntered) {
			const timeElapsed = Math.round((now - pageEntered) / 1000)
			API.tracker.sendEvent(events.duration, `params[duration]=${timeElapsed}`)
		}
	}
	useEffect(() => {
		setPageEntered(Date.now())

		router.events.on('routeChangeStart', sendStatistics)

		return () => {
			console.log('unmounting component...')
			router.events.off('routeChangeStart', sendStatistics)
		}
	}, [])

	return <>{children}</>
}

const pathEvent = {
	'/': {
		visit: EventsEnum.mainVisit,
		duration: EventsEnum.mainVisitDuration,
	},
	'/conference': {
		visit: EventsEnum.confVisit,
		duration: EventsEnum.confVisitDuration,
	},
	'/conference/cloud': {
		visit: EventsEnum.confCloudVisit,
		duration: EventsEnum.confCloudVisitDuration,
	},
	'/green': {
		visit: EventsEnum.greenVisit,
		duration: EventsEnum.greenVisitDuration,
	},
	'/green/recycle': {
		visit: EventsEnum.greenGame,
		duration: EventsEnum.greenGameDuration,
	},
	'/green/game': {
		visit: EventsEnum.greenSortVisit,
		duration: EventsEnum.greenSortDuration,
	},
	'/vichy': {
		visit: EventsEnum.vichyVisit,
		duration: EventsEnum.vichyVisitDuration,
	},
	'/vichy/game': {
		visit: EventsEnum.vichyGameVisit,
		duration: EventsEnum.vichyGameVisitDuration,
	},
	'/vichy/cloud': {
		visit: EventsEnum.vichyCloudVisit,
		duration: EventsEnum.vichyCloudVisitDuration,
	},
	'/vichy/formula': {
		visit: EventsEnum.vichyGame,
		duration: EventsEnum.vichyGameDuration,
	},
	'/dercos': {
		visit: EventsEnum.dercosVisit,
		duration: EventsEnum.dercosVisitDuration,
	},
	'/dercos/cloud': {
		visit: EventsEnum.dercosCloudVisit,
		duration: EventsEnum.dercosCloudVisitDuration,
	},
	'/dercos/formula': {
		visit: EventsEnum.dercosGame,
		duration: EventsEnum.dercosGameDuration,
	},
	'/dercos/game': {
		visit: EventsEnum.dercosGameVisit,
		duration: EventsEnum.dercosGameVisitDuration,
	},
	'/lrp': {
		visit: EventsEnum.lrpVisit,
		duration: EventsEnum.lrpVisitDuration,
	},
	'/lrp/cloud': {
		visit: EventsEnum.lrpCloudVisit,
		duration: EventsEnum.lrpCloudVisitDuration,
	},
	'/lrp/game': {
		visit: EventsEnum.lrpGameVisit,
		duration: EventsEnum.lrpGameVisitDuration,
	},
	'/game': {
		visit: EventsEnum.gameVisit,
		duration: EventsEnum.gameVisitDuration,
	},
}

const AbsoluteWrapper = styled(animated.div)`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
	will-change: transform, opacity;
	@media (orientation: landscape) and (max-height: 400px) {
		top: auto;
		bottom: 0;
	}
`
