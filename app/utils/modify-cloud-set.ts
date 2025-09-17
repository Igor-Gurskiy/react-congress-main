import { Word } from '@/components/shared/tag-cloud/use-my-cloud'
import { insertElement } from '@/utils/array.helpers'

export const modifyCloudSetWithWord = (arr: any[], word: Word) => {
	const resetPrev = arr.map((p) => ({ ...p, added: false }))
	const foundIndex = resetPrev.findIndex((p) => p.text === word.text)
	const min = Math.min(...arr.slice(0, 10).map((p) => p.count))

	if (foundIndex !== -1) {
		let newCount = resetPrev[foundIndex].count + 1
		resetPrev[foundIndex].count = newCount < min ? min + 1 : newCount
		resetPrev[foundIndex].added = !!word.added

		const copiedElement = { ...resetPrev[foundIndex] }
		const filtered = resetPrev.filter((r) => r.text != copiedElement.text)

		return insertElement(filtered, copiedElement).sort(
			(a, b) => b.count - a.count,
		)
	}

	return insertElement(resetPrev, { ...word, count: min + 1 }).sort(
		(a, b) => b.count - a.count,
	)
}
