import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Tour from '../../Tour/Tour'

const GreenTour = () => {
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
		if (!isLoading && !preloader && tour === 'green') {
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
					setMove(-1050)
				}
				if (next == 3) {
					setMove(-1850)
				}
			}
			setStep(next)
		}
	}

	return (
		<Tour open={tour === 'green'}>
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
						text="Нажмите на любой из экранов, чтобы узнать об экологических проектах марок"
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
						text="Нажмите на игру, чтобы поучаствовать в тренинге по спасению планеты от отходов"
						$top={700}
						maxWidth={800}
						$left={1491}
						nextStep={nextStep}
						skip={skip}
					/>
					<Tour.Arrow open={step === 1} left={1550} top={340} rotate={270} />
					<Tour.Arrow open={step === 2} left={850} top={480} rotate={270} />
					<Tour.Arrow open={step === 3} left={1450} top={420} rotate={90} />
				</>
			)}

			{isMobile && (
				<>
					<Tour.Arrow open={step === 1} left={1130} top={10} rotate={180} />
					<Tour.Arrow open={step === 2} left={50} top={250} rotate={120} />
					<Tour.Arrow open={step === 3} left={1910} top={20} rotate={180} />
				</>
			)}

			<Tour.Light
				src="assets/images/green/light/shelf-light.png"
				open={step === 1}
				top={370}
				left={1000}
			/>

			<Tour.Light
				src="assets/images/green/light/lrp-light.png"
				open={step === 2}
				top={370}
				left={360}
			/>
			<Tour.Light
				src="assets/images/green/light/vichy-light.png"
				open={step === 2}
				top={570}
				left={65}
			/>
			<Tour.Light
				src="assets/images/green/light/eco-light.png"
				open={step === 2}
				top={645}
				left={455}
			/>

			<Tour.Light
				src="assets/images/green/light/game.png"
				open={step === 3}
				top={390}
				left={1760}
			/>
		</Tour>
	)
}

export default GreenTour
