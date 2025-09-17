import useHover from '@/hooks/useHover'
import { useUIStore } from '@/stores/uiStore'
import { easePoly } from 'd3-ease'
import React, { useEffect, useRef, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import Counter from '@/components/screens/hall/counter/Counter'
import { addHours, format, setMinutes } from 'date-fns'
import { getVisitValue } from '@/components/screens/hall/counter/stats'
import { getTimeAtZeroMeridian } from '@/utils/get-time-at-zero-meridian'

const CounterLight = () => {
	const ref = useRef(null)
	const active = useHover(ref)
	const setSpecSelector = useUIStore((state) => state.setSpecSelector)

	const transitions = useTransition(active, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			easing: easePoly.exponent(2),
			duration: 300,
		},
	})

	return (
		<Wrapper
			ref={ref}
			onClick={setSpecSelector.bind(null, true)}
		>
			{transitions((style, item) =>
				item ? (
					<Light style={style} src="assets/images/hall/light/counter.png" />
				) : (
					''
				),
			)}
			{/*{TODO: вставить счетчик}*/}

			<CounterImage src="/assets/images/hall/counter.png" />
			<Component />
		</Wrapper>
	)
}

const getPositiveOrNegative = () => (Math.random() < 0.5 ? -1 : 1)

const getRandomVisitValue = (
	current: number,
	next: number,
	percentage: number,
) => {
	const diff = next - current
	const randomPercentage = (Math.random() * 20 - 10) / 100

	const scaledDiff =
		Math.floor(diff * percentage) +
		40 * getPositiveOrNegative() * randomPercentage

	const newNumber = scaledDiff * (1 + randomPercentage)

	return current + Math.round(newNumber)
}

function randomChangeNumber(initialNumber, percentage) {
	// Генерируем случайное число в пределах от -процент до +процент
	let randomPercentage = Math.random() * (percentage * 2) - percentage

	// Вычисляем новое значение
	let newNumber = initialNumber * (1 + randomPercentage / 100)

	// Убеждаемся, что новое значение не меньше 0
	if (newNumber < 0) {
		newNumber = 0
	}

	// Проверяем, если новое число больше или меньше чем на 50,
	if (newNumber - initialNumber > 50) {
		return initialNumber + Math.floor(Math.random() * 51)
	} else if (newNumber - initialNumber < -50) {
		return initialNumber - Math.floor(Math.random() * 51)
	}

	return Math.round(newNumber)
}

function Component() {
	let [count, setCount] = useState(0)

	const updateStats = () => {
		const zeroTime = getTimeAtZeroMeridian()
		const currentTime = format(setMinutes(addHours(zeroTime, 3), 0), 'HH')
		const currentDay = format(setMinutes(addHours(zeroTime, 3), 0), 'dd.MM')

		const { current } = getVisitValue(currentTime, currentDay)
		setCount(current)
	}

	useEffect(() => {
		updateStats()
	}, [])

	useEffect(() => {
		const eventCheckTimer: NodeJS.Timeout = setInterval(updateStats, 15000)
		return () => clearInterval(eventCheckTimer)
	}, [count])

	return (
		<CounterWrapper>
			<Counter value={count} />
		</CounterWrapper>
	)
}

export default CounterLight

const CounterImage = styled.img`
	position: absolute;
	top: -17px;
	left: 5px;
`

const CounterWrapper = styled.div`
	position: absolute;
	top: 120px;
	left: 32px;
	width: 170px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
`

const SpecImage = styled.img`
	position: absolute;
	z-index: 10;
	top: 0px;
	left: 0px;
	user-select: none;
`

const Wrapper = styled.div`
	position: absolute;
	top: 930px;
	left: 1550px;
	width: 230px;
	height: 245px;
	cursor: pointer;
	z-index: 11;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -65px;
	left: -55px;
	pointer-events: none;
	user-select: none;
`
