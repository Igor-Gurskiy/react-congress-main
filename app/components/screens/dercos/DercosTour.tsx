import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Tour from '../../Tour/Tour'

const DercosTour = () => {
	const isLoading = useUIStore((state) => state.isLoading)
	const preloader = useUIStore((state) => state.preloader)
	const tour = useTourStore((state) => state.tour)
	const step = useTourStore((state) => state.step)
	const setStep = useTourStore((state) => state.setStep)
	const setTour = useTourStore((state) => state.setTour)
	const setHelpTour = useTourStore((state) => state.setTourHelp)
	const setMove = useTourStore((state) => state.setMove)
	const isMobile = useMediaQuery({
		query: '(orientation: portrait) and (max-width: 767.98px)',
	})

	const maxStep = 3

	useEffect(() => {
		if (!isLoading && !preloader && tour === 'dercos') {
			setStep(1)
			setHelpTour(false)
		}
		return
	}, [isLoading, preloader, tour])

	useEffect(() => {
		let showTimer = setTimeout(nextStep, 15000)
		return () => clearTimeout(showTimer)
	}, [step])

	const skip = () => {
		setTour(null)
		localStorage.setItem('room_tour', 'true')
	}

	const nextStep = () => {
		const next = step + 1
		if (next > maxStep) {
			setTour(null)
			localStorage.setItem('room_tour', 'true')
		} else {
			if (isMobile) {
				if (next == 2) {
					setMove(-450)
				}
				if (next == 4) {
					setMove(-1420)
				}
				if (next == 5) {
					setMove(-1850)
				}
			}
			setStep(next)
		}
	}

	return (
		<Tour open={tour === 'dercos'}>
			{!isMobile && (
				<>
					<Tour.Step
						open={step === 1}
						currentStep={step}
						maxSteps={maxStep}
						text="Нажмите на полку, чтобы ознакомиться с продуктами и новинками марки "
						$top={700}
						maxWidth={770}
						$left={1491}
						nextStep={nextStep}
						skip={skip}
					/>
					<Tour.Step
						open={step === 2}
						currentStep={step}
						maxSteps={maxStep}
						text="Нажмите на облако слов, чтобы добавить в него свою ассоциацию с брендом"
						$top={700}
						maxWidth={800}
						$left={1491}
						nextStep={nextStep}
						skip={skip}
					/>

					<Tour.Step
						open={step === 3}
						currentStep={step}
						maxSteps={maxStep}
						text="Нажмите на игру, чтобы попробовать угадать, какие продукты dercos были назначены вашими коллегами"
						$top={700}
						maxWidth={800}
						$left={1491}
						nextStep={nextStep}
						skip={skip}
					/>
					<Tour.Arrow
						open={step === 1}
						left={738}
						top={493}
						rotate={isMobile ? 210 : 90}
					/>
					<Tour.Arrow open={step === 2} left={850} top={280} rotate={270} />
					<Tour.Arrow open={step === 3} left={1600} top={220} rotate={90} />
				</>
			)}

			{isMobile && (
				<>
					<Tour.Arrow open={step === 1} left={1330} top={140} rotate={210} />
					<Tour.Arrow open={step === 2} left={370} top={-80} rotate={180} />
					<Tour.Arrow open={step === 3} left={1980} top={-80} rotate={180} />
				</>
			)}
			<Tour.Light
				src="assets/images/dercos/light/shelf.png"
				open={step === 1}
				top={167}
				left={908}
			/>

			<Tour.Light
				src="assets/images/dercos/light/cloud.png"
				open={step === 2}
				top={241}
				left={184}
			/>

			<Tour.Light
				src="assets/images/dercos/light/game.png"
				open={step === 3}
				top={165}
				left={1874}
			/>
		</Tour>
	)
}

export default DercosTour
