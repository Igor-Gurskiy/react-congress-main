import React, { useMemo } from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import PulseButton from '@/components/Help/PulsingButton'
import { useDercosGameStore } from '@/components/screens/dercos/game/stores/dercos-game-store'
import { useRouter } from 'next/router'

const PercentageScale = ({ openResultPopup }) => {
	const isGuide = useDercosGameStore((state) => state.isGuide)
	const arrows = useDercosGameStore((state) => state.arrows)

	const percentage = useMemo(() => arrows.length * 20, [arrows])
	const router = useRouter()
	const handleBack = () => {
		router.push('/dercos')
	}

	const handleNext = () => {
		let correct = 0
		const correctAminexil = arrows.filter(
			(arr) =>
				arr.start == 'source1' && ['target4', 'target5'].includes(arr.end),
		).length
		const correctDandruff = arrows.filter(
			(arr) =>
				arr.start == 'source2' && ['target1', 'target3'].includes(arr.end),
		).length

		const correctPsolution = arrows.filter(
			(arr) => arr.start == 'source3' && ['target2'].includes(arr.end),
		).length

		correct = correctDandruff + correctAminexil + correctPsolution

		openResultPopup(correct)
	}

	return (
		<Container>
			<ScaleWrapper>
				<ScaleTopContent>
					<PercentageValue>{percentage}%</PercentageValue>
					<PercentageLine>
						<PercentageLineHider
							style={{
								width: `${100 - percentage}%`,
							}}
						/>
					</PercentageLine>
				</ScaleTopContent>
				{percentage === 100 && (
					<ScaleBottomContent>
						{!isGuide && (
							<ScaleText>
								Чтобы Узнать результат <br /> нажмите кнопку «далее»
							</ScaleText>
						)}

						<div style={{ padding: '0 16px' }}>
							<SubmitButton
								button={true}
								onClick={isGuide ? handleBack : handleNext}
							>
								{isGuide ? 'Ок, понятно' : 'Далее'}
							</SubmitButton>
						</div>
					</ScaleBottomContent>
				)}
			</ScaleWrapper>
		</Container>
	)
}

export default PercentageScale

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	position: absolute;
	top: 40px;
	right: 32px;
	left: 120px;
	align-items: flex-end;

	${media.lg`
	top: 10px;
	right: 16px;
`}
`

const SubmitButton = styled(PulseButton)`
	background: #000000;
	border-color: #000000;
	border-radius: 3px;
	padding: 4px;
	margin: 0 12px 4px 0;
	flex-shrink: 0;

	max-width: 200px;
	width: 100%;

	.pulse-text {
		color: #fff;
		text-align: center;
		font-size: 18px;
		font-weight: 600;
	}
`

const ScaleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	/* width: 686px; */
	width: 100%;
	max-width: 644px;
	padding: 6px 12px 8px 12px;
	border-radius: 11.171px;
	background: linear-gradient(180deg, #fff 0%, #f5f5f5 100%);
	box-shadow: 0px 5.58537px 11.17073px 0px rgba(0, 0, 0, 0.08);
	z-index: 3;
	${media.giant`
		padding: 6px 12px 8px 12px;
`}

	${media.md`
	padding: 6px 8px 8px 8px;
`}
`
const ScaleTopContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const ScaleBottomContent = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${media.md`
	/* justify-content: center;
	flex-direction: column; */
	display: block;

`}
`
const ScaleText = styled.div`
	color: #1f1f1f;
	font-size: 14px;
	font-weight: 300;
	line-height: 120%;
	letter-spacing: 0.56px;
	text-transform: uppercase;
	${media.md`
	margin-bottom: 10px;
`}
`

const PercentageValue = styled.div`
	color: #000;
	font-size: 24px;
	font-weight: 800;
	line-height: 120%;
	letter-spacing: 0.96px;
	margin-top: 4px;
	margin-right: 4px;
	flex-grow: 1;
	text-align: center;
	${media.md`
	font-size: 16px;
`}
`
export const PercentageLine = styled.div`
	position: relative;
	width: 90%;
	height: 12px;
	overflow: hidden;
	background: linear-gradient(90deg, #de0311 0%, #00964a 100%);
	border-radius: 8px;
	display: flex;
	align-items: flex-end;
`
export const PercentageLineHider = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 12px;
	background: #e7e7e7;
	transition: all 0.3s;
`
