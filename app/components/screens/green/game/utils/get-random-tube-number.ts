import { shuffleByTimes } from '@/utils/array.helpers'

export const getRandomTubeNumber = () => {
	const one = Array.from({ length: 10 }).fill(1)
	const two = Array.from({ length: 15 }).fill(2)
	const three = Array.from({ length: 50 }).fill(3)
	const four = Array.from({ length: 15 }).fill(4)
	const five = Array.from({ length: 10 }).fill(5)

	const probabilityArr = [...one, ...two, ...three, ...four, ...five]

	const shuffledArr = shuffleByTimes(probabilityArr, 20)

	const randomIndex = getRandomInt(0, shuffledArr.length - 1)

	return shuffledArr.at(randomIndex) ?? 3
}

const getRandomInt = (min: number, max: number) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}
