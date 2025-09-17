import React, {
	forwardRef,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import styled from 'styled-components'
import { useSortGameStore } from '@/components/screens/green/game/stores/sort-game.store'

import { motion, useAnimate } from 'framer-motion'
import { useWindowSize } from 'react-use'
import ModalService from '@/components/shared/modal/ModalService'
import ResultsModal from '@/components/screens/green/game/components/modals/Results/ResultsModal'
import { getRandomTubeNumber } from '@/components/screens/green/game/utils/get-random-tube-number'

const rotations = [-50, -15, 0, 15, 50]

function calculateInitialWidth(currentWidth, angle) {
	// Преобразование угла из градусов в радианы
	const angleInRadians = (angle * Math.PI) / 180

	// Вычисление исходной ширины
	return currentWidth * Math.cos(angleInRadians)
}

const calculateAnimationPath = (tubeId, productRef) => {
	const rotation = rotations.at(tubeId - 1) ?? 0
	const el = document.getElementById('sort-tube' + tubeId)

	if (!el || !productRef.current) return { y: [], x: [] }

	const rect = el.getBoundingClientRect()
	const productRect = productRef.current.getBoundingClientRect()

	let posX = rect.left
	let posY = rect.top
	let width = rect.width
	let height = rect.height

	const offsetProduct = productRect.width / 2

	const topCenterX = posX + width / 2 - offsetProduct
	const topCenterY = posY + height / 2 - offsetProduct

	const bottomCenterX = posX + width / 2 - offsetProduct
	const bottomCenterY = posY + height + offsetProduct

	// Поворачиваем точки относительно верхнего центра
	const rotatedTop = rotatePoint(
		topCenterX,
		topCenterY,
		topCenterX,
		topCenterY,
		rotation,
	)
	const rotatedBottom = rotatePoint(
		bottomCenterX,
		bottomCenterY,
		topCenterX,
		topCenterY,
		rotation,
	)

	const x = [rotatedTop.x, rotatedBottom.x]
	const y = [rotatedTop.y, rotatedBottom.y]

	return { y, x, rotation }
}

// Функция для поворота точки относительно определенной точки
function rotatePoint(x, y, cx, cy, angle) {
	const radians = (Math.PI / 180) * angle
	const cos = Math.cos(radians)
	const sin = Math.sin(radians)
	const nx = cos * (x - cx) - sin * (y - cy) + cx
	const ny = cos * (y - cy) + sin * (x - cx) + cy
	return { x: nx, y: ny }
}

function calculateDistance(x1, y1, x2, y2) {
	const deltaX = x2 - x1
	const deltaY = y2 - y1

	return Math.sqrt(deltaX ** 2 + deltaY ** 2)
}

const Product = forwardRef<HTMLImageElement, { checkCollisions?: any }>(
	({ checkCollisions }, ref) => {
		const isStarted = useSortGameStore((state) => state.isStarted)
		const stopGame = useSortGameStore((state) => state.stopGame)
		const queue = useSortGameStore((state) => state.queue)
		const [scope, animate] = useAnimate()
		const { height } = useWindowSize()
		const product = useMemo(() => queue.find(Boolean), [queue])
		const wrapperRef = useRef<HTMLDivElement | null>(null)
		const [isActive, setIsActive] = useState(true)

		const handleVisibilityChange = useCallback(() => {
			setIsActive(document.visibilityState === 'visible')
		}, [])

		useEffect(() => {
			document.addEventListener('visibilitychange', handleVisibilityChange)

			return () => {
				document.removeEventListener('visibilitychange', handleVisibilityChange)
			}
		}, [handleVisibilityChange])

		useEffect(() => {
			if (isActive) {
				scope.animations.map((anim) => {
					if (anim.time >= anim.duration) return
					anim.time = 0
					anim.play()
				})
			} else {
				scope.animations.map((anim) => anim.pause())
			}
		}, [isActive])

		useEffect(() => {
			if (!isStarted) return

			const tubeId = getRandomTubeNumber()
			const animationPath = calculateAnimationPath(tubeId, wrapperRef)

			animateMove(animationPath)
		}, [isStarted, product])

		const animateMove = async (animationPath) => {
			const [x1, x2] = animationPath.x
			const [y1, y2] = animationPath.y
			const dist1 = calculateDistance(x1, y1, x2, y2)
			const dist2 = calculateDistance(x2, y2, x2, height + 100)

			const t1Ratio = dist1 / (dist1 + dist2)
			const t2Ratio = dist2 / (dist1 + dist2)

			const TIMING = 5
			const timing1 = TIMING * t1Ratio
			const timing2 = TIMING * t2Ratio

			const rotatedFinalPoint = rotatePoint(
				animationPath.x.at(-1),
				height + 100,
				animationPath.x.at(-1),
				animationPath.y.at(-1),
				animationPath.rotation * 0.01 * 10,
			)

			try {
				await animate(
					scope.current,
					{
						x: animationPath.x,
						y: animationPath.y,
						rotate: [animationPath.rotation, animationPath.rotation / 3],
					},
					{
						duration: timing1,
						delay: 0,
						ease: 'linear',
					},
				)

				await animate(
					scope.current,
					{
						x: rotatedFinalPoint.x,
						y: [animationPath.y.at(-1), rotatedFinalPoint.y],
						rotate: [animationPath.rotation / 3, 0],
					},
					{
						duration: timing2,
						ease: 'linear',
					},
				)
			} catch (e) {
				console.error('product removed')
			}
		}

		useEffect(() => {
			if (isStarted && !queue.length) {
				ModalService.open(ResultsModal)
				stopGame()
			}
		}, [queue, isStarted])

		// useEffect(() => {
		// 	setTimeout(() => setCurrentProduct(currentProduct), 100)
		// }, [product])

		return (
			<ProductWrapper
				ref={scope}
				key={'item' + product?.src}
				initial={{ y: -100, x: 0, rotate: 0 }}
				onUpdate={() => {
					checkCollisions(product)
				}}
			>
				<div ref={wrapperRef}>
					{product && isStarted && (
						<ProductImage id="sort-product" ref={ref} src={product.src} />
					)}
				</div>
			</ProductWrapper>
		)
	},
)

export default Product

const ProductWrapper = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	transform: translateX(-50%);
	width: 100%;
	height: 100%;
	max-width: calc(6 * var(--size));
	max-height: calc(6 * var(--size));
`

const ProductImage = styled(motion.img)`
	max-width: 100%;
	max-height: 100%;
	height: 100%;
	width: 100%;
`
