import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Help from '../../Help/Help'
import Tour from '../../Tour/Tour'
import styled from 'styled-components'

const HallTour = () => {
	const isLoading = useUIStore((state) => state.isLoading)
	const preloader = useUIStore((state) => state.preloader)
	const tour = useTourStore((state) => state.tour)
	const step = useTourStore((state) => state.step)
	const setStep = useTourStore((state) => state.setStep)
	const setHallTour = useTourStore((state) => state.setTour)
	const setHelpTour = useTourStore((state) => state.setTourHelp)
	const isMobile = useMediaQuery({
		query: '(orientation: portrait) and (max-width: 767.98px)',
	})

	const specialization = useUIStore((state) => state.specialization)

	const maxStep = 3

	useEffect(() => {
		if (!isLoading && !preloader && tour === 'hall') {
			setStep(0)
			setHelpTour(false)
			let showTimer = setTimeout(() => setStep(1), 1500)

			return () => clearTimeout(showTimer)
		}
		return
	}, [isLoading, preloader, tour])

	useEffect(() => {
		let showTimer = setTimeout(nextStep, 15000)
		return () => clearTimeout(showTimer)
	}, [step])

	const skip = () => {
		setHallTour(null)
		setHelpTour(false)
		localStorage.setItem('hall_tour', 'true')
	}

	const nextStep = () => {
		const next = step + 1
		if (next > maxStep) {
			setHallTour(null)
			setHelpTour(false)
			localStorage.setItem('hall_tour', 'true')
		} else {
			if (next === maxStep) {
				setHelpTour(true)
			}
			setStep(next)
		}
	}

	return (
		<Tour open={tour === 'hall'}>
			{!isMobile && (
				<>
					<Tour.Welcome open={step === 0}>
						Добро пожаловать
						<br />
						<b>на ОНЛАЙН-КОНГРЕСС L'ORÉAL DERMATOLOGICAL BEAUTY</b>
					</Tour.Welcome>
					<Tour.Step
						open={step === 1}
						currentStep={step}
						maxSteps={maxStep}
						text="Нажмите на второй этаж, чтобы подключиться к научной программе"
						$top={650}
						$left={1555}
						nextStep={nextStep}
						skip={skip}
					/>
					<Tour.Step
						open={step === 2}
						currentStep={step}
						maxSteps={maxStep}
						text="Нажмите на комнаты, чтобы ознакомиться с экспертизой марки"
						maxWidth={720}
						$top={650}
						$left={1555}
						nextStep={nextStep}
						skip={skip}
					/>
					<Tour.Step
						open={step === 3}
						currentStep={step}
						maxSteps={maxStep}
						text={
							specialization === 'pharmacy' ? (
								<>
									В каждом зале есть подсказки. Нажмите на знак вопроса, чтобы
									их посмотреть. При возникновении технических вопросов пишите
									support@proexpertme.ru
								</>
							) : (
								<>
									В каждом зале есть подсказки. Нажмите на знак вопроса, чтобы
									их посмотреть. При возникновении технических вопросов звоните
									8-800-511-43-87, пишите
									support@dermatologicalbeauty.loreal.com.ru
								</>
							)
						}
						$top={520}
						$left={1555}
						nextStep={nextStep}
						skip={skip}
					/>
					<Tour.Arrow open={step === 3} left={2236} top={703} rotate={180} />

					<Tour.Arrow open={step === 1} left={436} top={538} rotate={null} />
					<Tour.Arrow open={step === 1} left={1842} top={517} rotate={null} />

					{step === 3 && <Help.Support />}
				</>
			)}

			<Tour.Light
				src="assets/images/hall/confzal_light.png"
				open={step === 1}
				top={null}
				left={null}
			/>

			<Tour.Light
				src="assets/images/hall/onboard/green.png"
				open={step === 2}
				top={365}
				left={null}
			/>
			<Tour.Light
				src="assets/images/hall/onboard/lrp.png"
				open={step === 2}
				top={540}
				left={550}
			/>
			<Tour.Light
				src="assets/images/hall/onboard/vichy.png"
				open={step === 2}
				top={540}
				left={1215}
			/>
			<Tour.Light
				src="assets/images/hall/onboard/dercos.png"
				open={step === 2}
				top={520}
				left={1830}
			/>
			<Tour.Arrow open={step === 2} left={152} top={267} rotate={180} />
			<Tour.Arrow open={step === 2} left={777} top={310} rotate={180} />
			<Tour.Arrow open={step === 2} left={1359} top={310} rotate={180} />
			<Tour.Arrow open={step === 2} left={2033} top={267} rotate={180} />

			{/*<Counter src="/assets/images/hall/counter.png" />*/}
			{/* <Tour.Arrow
                open={step === 3}
                left={2236}
                top={116}
                rotate={null}
            /> */}
		</Tour>
	)
}

export default HallTour

const Counter = styled.img`
	position: absolute;
	top: 913px;
	left: 1555px;
	z-index: 222;
`
