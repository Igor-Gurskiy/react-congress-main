import useWindowSize from '@/hooks/useWindowSize'
import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Tour from '../../Tour/Tour'

const VichyMobileTour = () => {
	const scaleRatio = useUIStore((state) => state.scaleRatio)
	const isLoading = useUIStore((state) => state.isLoading)
	const preloader = useUIStore((state) => state.preloader)
	const step = useTourStore((state) => state.step)
	const setStep = useTourStore((state) => state.setStep)
	const setTour = useTourStore((state) => state.setTour)
	const setMove = useTourStore((state) => state.setMove)

	const [width, height] = useWindowSize()
	const maxStep = 3
	const skip = () => {
		setTour(null)
		localStorage.setItem('room_tour', 'true')
	}

	console.log(isLoading, preloader, step)

	useEffect(() => {
		if (!isLoading && !preloader && step == 1) {
			setMove(-1000)
		}
	}, [isLoading, preloader, step])

	const nextStep = () => {
		const next = step + 1
		if (next > maxStep) {
			setTour(null)
			localStorage.setItem('room_tour', 'true')
		} else {
			if (next == 2) {
				setMove(-270)
			}
			if (next == 3) {
				setMove(-1850)
			}
			setStep(next)
		}
	}

	return (
		<TourWrapper
			style={{
				transformOrigin: 'top left',
				transform: `scale(${scaleRatio})`,
				width: width / scaleRatio,
				height: height / scaleRatio,
			}}
		>
			<Step>
				<Tour.Step
					open={step === 1}
					currentStep={step}
					maxSteps={maxStep}
					text="Нажмите на полку, чтобы ознакомиться с продуктами и новинками марки "
					$top={-50}
					$left={null}
					nextStep={nextStep}
					skip={skip}
				/>
				<Tour.Step
					open={step === 2}
					currentStep={step}
					maxSteps={maxStep}
					text="Нажмите на облако слов, чтобы добавить в него свою ассоциацию с брендом"
					$top={100}
					$left={null}
					nextStep={nextStep}
					skip={skip}
				/>
				<Tour.Step
					open={step === 3}
					currentStep={step}
					maxSteps={maxStep}
					text="Нажмите на игру, чтобы попробовать определить, Какие продукты подходят для лечения пациента"
					$top={50}
					$left={0}
					nextStep={nextStep}
					skip={skip}
				/>
			</Step>
		</TourWrapper>
	)
}

export default VichyMobileTour

const Step = styled.div`
	width: 100%;
	position: relative;
`

const TourWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 1250px;
	overflow: hidden;
`
