import { motion, MotionValue, useSpring, useTransform } from 'framer-motion'
import { Fragment, useEffect } from 'react'

const fontSize = 42
const padding = 0
const height = fontSize + padding

function getDecimals(number: number): number[] {
	const decimals: number[] = []
	let place: number = 1

	while (number >= place) {
		decimals.unshift(place)
		place *= 10
	}

	return decimals
}

function insertSeparator(arr: number[]): (string | number)[] {
	let separatorInserted = false

	return arr.reduce((acc, element) => {
		if (element === 1000 && !separatorInserted) {
			separatorInserted = true
			return [...acc, element, 'separator']
		} else {
			return [...acc, element]
		}
	}, [] as (string | number)[])
}

function getDecimalsWithSeparator(number: number): (number | string)[] {
	return insertSeparator(getDecimals(number))
}

function Counter({ value }: { value: number }) {
	return (
		<div
			style={{
				fontSize,
			}}
			className="flex -space-x-1 overflow-hidden leading-none text-gray-900 select-none"
		>
			{getDecimalsWithSeparator(value).map((place, index) => (
				<Fragment key={index}>
					{place === 'separator' ? (
						<div style={{ width: '16px' }} />
					) : (
						<Digit place={place as number} value={value} />
					)}
				</Fragment>
			))}
		</div>
	)
}

function Digit({ place, value }: { place: number; value: number }) {
	let valueRoundedToPlace = Math.floor(value / place)
	let animatedValue = useSpring(valueRoundedToPlace)

	useEffect(() => {
		animatedValue.set(valueRoundedToPlace)
	}, [animatedValue, valueRoundedToPlace])

	return (
		<div
			style={{ height }}
			className="relative w-[1ch] font-semibold text-[#565656] tabular-nums"
		>
			{[...Array(10).keys()].map((i) => (
				<Number key={i} mv={animatedValue} number={i} />
			))}
		</div>
	)
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
	let y = useTransform(mv, (latest) => {
		let placeValue = latest % 10
		let offset = (10 + number - placeValue) % 10

		let memo = offset * height

		if (offset > 5) {
			memo -= 10 * height
		}

		return memo
	})

	return (
		<motion.span
			style={{ y }}
			className="absolute inset-0 flex items-center justify-center"
		>
			{number}
		</motion.span>
	)
}

export default Counter
