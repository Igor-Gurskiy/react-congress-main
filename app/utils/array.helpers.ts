export function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[arr[i], arr[j]] = [arr[j], arr[i]]
	}
	return arr
}

export function shuffleByTimes(arr, num = 1) {
	let newArr = arr

	for (let i = 0; i < num; i++) {
		newArr = shuffleArray(arr)
	}

	return newArr
}

function getArraySlice(sourceArray, percentages) {
	// Проверяем, что сумма процентов не превышает 100
	const totalPercentage = percentages.reduce(
		(sum, percentage) => sum + percentage,
		0,
	)
	if (totalPercentage > 100) {
		console.error(
			'The sum of percentages exceeds 100. Returning an empty array.',
		)
		return []
	}

	// Вычисляем количество элементов для каждой части
	const totalLength = sourceArray.length
	const partLengths = percentages.map((percentage) =>
		Math.floor((totalLength * percentage) / 100),
	)

	// Корректируем длину последней части
	partLengths[partLengths.length - 1] +=
		totalLength - partLengths.reduce((sum, length) => sum + length, 0)

	// Используем метод slice для взятия каждой части
	let index = 0
	return partLengths.map((length) => {
		const part = sourceArray.slice(index, index + length)
		index += length
		return part
	})
}

export function getFourRandomSets(arr) {
	const totalLength = arr.length

	if (totalLength < 30) {
		return getArraySlice(arr, [70, 15, 15, 0])
	}

	if (totalLength >= 30 && totalLength <= 100) {
		return getArraySlice(arr, [60, 15, 15, 10])
	}

	return getArraySlice(arr, [40, 15, 15, 30])
}

export function insertElement(array, element) {
	// Позиция, на которую нужно вставить элемент (в данном случае - на пятое место)
	let insertPosition = 4

	// Если массив короткий, то просто вставляем элемент в конец
	if (array.length <= insertPosition) {
		array.push(element)
	} else {
		// Если массив длиннее, то используем splice для вставки на нужную позицию
		array.splice(insertPosition, 0, element)
	}

	return array
}
