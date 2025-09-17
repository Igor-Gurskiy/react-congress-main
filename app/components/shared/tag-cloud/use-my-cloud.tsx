import {
	UseCloudOptions,
	UseCloudPoint,
} from '@alesmenzel/cloud-react/dist/types/use-cloud'
import { useCloud } from '@alesmenzel/cloud-react'
import { useEffect, useRef } from 'react'

export type Word = { text: string; count: number; added?: boolean }
type UseMyCloudProps = {
	options: UseCloudOptions<Word>
	width: number
	height: number
}

export type MyCloutPoint = UseCloudPoint<Word> & {
	lastX: number
	lastY: number
	visible: boolean
	rendered: boolean
}

const useMyCloud = ({ options, width, height }: UseMyCloudProps) => {
	const { points } = useCloud<Word>({
		width,
		height,
		...options,
	})

	const pointsRef = useRef<MyCloutPoint[]>([])

	const updateCloudItems = (items) => {
		const currPoints = pointsRef.current

		currPoints.forEach((point) => {
			const foundElement = items.find((p) => p.item.text === point.item.text)

			if (foundElement) {
				// Если элемент найден, обновляем координаты
				point.item = {
					...foundElement.item,
					added: false,
				}
				point.lastX = foundElement.lastX
				point.lastY = foundElement.lastY
				point.x = foundElement.x
				point.y = foundElement.y
				point.visible = foundElement.visible
				point.rendered = foundElement.rendered
			} else {
				point.item = {
					...point.item,
					added: false,
				}
			}
		})

		pointsRef.current = currPoints
	}

	useEffect(() => {
		const prevPoints = pointsRef.current

		points.forEach((point) => {
			const foundIndex = prevPoints.findIndex(
				(p) => p.item.text === point.item.text,
			)

			if (foundIndex !== -1) {
				// Если элемент найден, обновляем координаты
				prevPoints[foundIndex].item = point.item
				prevPoints[foundIndex].lastX = prevPoints[foundIndex].x
				prevPoints[foundIndex].lastY = prevPoints[foundIndex].y
				prevPoints[foundIndex].x = point.x
				prevPoints[foundIndex].y = point.y
				prevPoints[foundIndex].visible = true
				prevPoints[foundIndex].rendered = true
			} else {
				// Если элемент не найден, добавляем его с visible = true
				prevPoints.push({
					...point,
					x: point.x,
					y: point.y,
					lastX: width / 2,
					lastY: height / 2,
					visible: true,
					rendered: false,
				})
			}
		})

		// Устанавливаем visible в false для элементов, которых нет в новом массиве
		prevPoints.forEach((point) => {
			const foundIndex = points.findIndex(
				(p) => p.item.text === point.item.text,
			)

			if (foundIndex === -1) {
				point.visible = false
				point.rendered = false
			}
		})

		// Обновляем ref и устанавливаем changed
		pointsRef.current = prevPoints
	}, [points])

	return { points: pointsRef.current, updateCloudItems }
}

export default useMyCloud
