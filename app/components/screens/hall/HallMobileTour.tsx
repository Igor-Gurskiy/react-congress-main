import useWindowSize from '@/hooks/useWindowSize'
import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import React from 'react'
import styled from 'styled-components'
import Help from '../../Help/Help'
import Tour from '../../Tour/Tour'

const HallMobileTour = () => {
	const scaleRatio = useUIStore((state) => state.scaleRatio)
	const tour = useTourStore((state) => state.tour)
	const step = useTourStore((state) => state.step)
	const setStep = useTourStore((state) => state.setStep)
	const setHallTour = useTourStore((state) => state.setTour)
	const setHelpTour = useTourStore((state) => state.setTourHelp)
	const specialization = useUIStore((state) => state.specialization)
	const [width, height] = useWindowSize()

	const skip = () => {
		setHallTour(null)
		setHelpTour(false)
		localStorage.setItem('hall_tour', 'true')
	}

	const nextStep = () => {
		const next = step + 1
		if (next > 3) {
			setHallTour(null)
			setHelpTour(false)
			localStorage.setItem('hall_tour', 'true')
		} else {
			if (next === 3) {
				setHelpTour(true)
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
			<Tour.Welcome open={step === 0}>
				Добро
				<br />
				пожаловать
				<br /> <b>на ОНЛАЙН-КОНГРЕСС L'ORÉAL DERMATOLOGICAL BEAUTY</b>
			</Tour.Welcome>
			<Step>
				<Tour.Step
					open={step === 1}
					currentStep={step}
					maxSteps={3}
					text="Нажмите на второй этаж, чтобы подключиться к научной программе"
					$top={50}
					$left={null}
					nextStep={nextStep}
					skip={skip}
				/>

				<Tour.Arrow open={step === 1} left={40} top={-200} rotate={-38} />
				<Tour.Arrow open={step === 1} right={40} top={-200} rotate={38} />

				<Tour.Step
					open={step === 2}
					currentStep={step}
					maxSteps={3}
					text="Нажмите на комнаты, чтобы ознакомиться с экспертизой марки"
					$top={100}
					$left={null}
					nextStep={nextStep}
					skip={skip}
				/>

				<Tour.Step
					open={step === 3}
					currentStep={step}
					maxSteps={3}
					text={
						specialization === 'pharmacy' ? (
							<>
								В каждом зале есть подсказки. Нажмите на знак вопроса, чтобы их
								посмотреть. При возникновении технических вопросов пишите
								support@proexpertme.ru
							</>
						) : (
							<>
								В каждом зале есть подсказки. Нажмите на знак вопроса, чтобы их
								посмотреть. При возникновении технических вопросов звоните
								8-800-511-43-87, пишите
								support@dermatologicalbeauty.loreal.com.ru
							</>
						)
					}
					$top={-150}
					$left={0}
					nextStep={nextStep}
					skip={skip}
				/>
			</Step>

			{step === 3 && (
				<Help.Support
					style={{ position: 'inherit', right: 'unset', textAlign: 'center' }}
				/>
			)}
		</TourWrapper>
	)
}

export default HallMobileTour

const Step = styled.div`
	width: 100%;
	position: relative;
`

const TourWrapper = styled.div`
	position: absolute;
	width: 100%;
	top: 0px;
	left: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 1250px;
	overflow: hidden;
`
