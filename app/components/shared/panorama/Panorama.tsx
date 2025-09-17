// @ts-nocheck

import useWindowSize from '@/hooks/useWindowSize'
import { useTourStore } from '@/stores/tourStore'
import { useUIStore } from '@/stores/uiStore'
import { easePoly, easeQuadOut } from 'd3-ease'
import throttle from 'lodash/throttle'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import { isIOS, isMobile as isMobileDevice } from 'react-device-detect'

const settings = {
	cursorThrottle: 1000 / 60,
	gyroscopeThrottle: 1000 / 20,
	resizeThrottle: 500,
}

const FRAME_HEIGHT = 1250

const calculateScale = ({ height, width }) => {
	let ratio = height / FRAME_HEIGHT
	const widthRatio = (ratio * 2500) / width
	if (widthRatio < 1) {
		ratio = ratio / widthRatio
	}

	// console.log(ratio)

	return ratio
}

const Panorama = ({
	children,
	to,
	centerDx = 0,
	fixed = false,
	points = [],
}: any) => {
	// Scale Ratio
	const scaleRatio = useUIStore((state) => state.scaleRatio)
	const setOffset = useUIStore((state) => state.setOffset)
	const setScaleRatio = useUIStore((state) => state.setScaleRatio)
	const setVichy = useUIStore((state) => state.setVichy)
	const locked = useUIStore((state) => state.locked)
	const tour = useTourStore((state) => state.tour)

	const [loaded, setLoaded] = useState(false)
	const [touchX, setTouchX] = useState(0)
	const [centerX, setCenterX] = useState(0)
	const [offset, setOffsetTop] = useState(0)
	const [currentIndex, setCurrentIndex] = useState(
		Math.floor(points.length / 2),
	)

	const panoRef = useRef(null)
	const imageRef = useRef(null)
	const frameRef = useRef(null)
	const [deltaX, setDeltaX] = useState(0)
	const [width, height] = useWindowSize()
	const isMobile = useMediaQuery({
		query: '(orientation: landscape) and (max-height: 400px)',
	})

	useEffect(() => {
		setLoaded(true)
		if (window) {
			const panorama = document.querySelector('.panorama')
			const removeDefaultBehaviour = (e) => {
				e.preventDefault()
			}

			panorama.addEventListener('touchmove', removeDefaultBehaviour, false)

			return () =>
				panorama?.removeEventListener(
					'touchmove',
					removeDefaultBehaviour,
					false,
				)
		}
	}, [])

	// // Build zooming animation
	const [xStyle, xAnimate] = useSpring(() => ({
		x: deltaX,
		config: {
			mass: 1,
			tension: 280,
			friction: 120,
			easing: easeQuadOut,
		},
	}))
	const [pStyle, pAnimate] = useSpring(() => ({
		scale: scaleRatio,
		y: 0,
		config: {
			mass: 1,
			tension: 170,
			friction: 26,
			easing: easeQuadOut,
		},
	}))
	const [zStyle, zAnimate] = useSpring(() => ({
		scale: 1,
		config: {
			mass: 1,
			tension: 170,
			friction: 26,
			easing: easePoly.exponent(2),
		},
	}))

	useEffect(() => {
		if (!to) return
		const { x = 0, y = 0, scale = scaleRatio } = to
		if (x === 0 && y === 0) return
		const imageWidth = document.querySelector('.panorama__image').offsetWidth
		xAnimate({
			x,
			config: {
				duration: tour ? 300 : 2200,
				tension: 280,
				friction: 120,
				easing: easeQuadOut,
			},
		})
		pAnimate({
			y: (imageWidth / scaleRatio) * (y / 100),
			scale: 1,
			config: { duration: tour ? 300 : 2500 },
		})
		zAnimate({ scale, config: { duration: tour ? 300 : 2500 } })
	}, [to, tour])

	useEffect(() => {
		setOffset(deltaX)
	}, [deltaX])

	useEffect(() => {
		if (!locked) {
			const ratio = calculateScale({ width, height })
			setScaleRatio(ratio)
			setVichy(false)
			pAnimate({ scale: ratio, y: 0, config: { duration: 300 } })
			zAnimate({ scale: 1, config: { duration: 300 } })
			xAnimate({ x: centerX, config: { duration: 300 } })
		}
	}, [locked])

	useEffect(() => {
		if (!tour) {
			const ratio = calculateScale({ width, height })
			setScaleRatio(ratio)
			pAnimate({ scale: ratio, y: 0, config: { duration: 300 } })
			zAnimate({ scale: 1, config: { duration: 300 } })
			xAnimate({ x: centerX, config: { duration: 300 } })
		}
	}, [tour])

	useEffect(() => {
		const ratio = calculateScale({ width, height })
		const imageWidth = document.querySelector('.panorama__image').offsetWidth
		const panoWidth = document.querySelector('.panorama').offsetWidth
		const offsetX = (panoWidth + 20 - imageWidth * scaleRatio) / scaleRatio

		if (locked) {
			return
		} else {
			if (ratio > 0) {
				setScaleRatio(ratio)
				pAnimate({ scale: ratio, immediate: true })
				zAnimate({ scale: 1, immediate: true })
				if (fixed) {
					xAnimate({ x: offsetX / 2, immediate: true })
				}
			}
		}

		setCenterX(offsetX / 2)
	}, [height, width])

	useEffect(() => {
		const imageWidth = document.querySelector('.panorama__image').offsetWidth
		const panoWidth = document.querySelector('.panorama').offsetWidth
		const offsetX =
			(panoWidth + centerDx - imageWidth * scaleRatio) / scaleRatio

		setDeltaX(offsetX / 2)
		setCenterX(offsetX / 2)
		xAnimate({ x: offsetX / 2, immediate: true })
	}, [imageRef, panoRef, scaleRatio, loaded])

	useEffect(() => {
		const widthRatio = (pStyle.scale.animation.to * 2500) / width

		if (widthRatio < 1 || (isMobile && !fixed)) {
			const offsetBase = isIOS
				? 1250 * pStyle.scale.animation.to - window.innerHeight
				: 1250 * pStyle.scale.animation.to - window.innerHeight - 10
			const offsetTop = -Math.abs(offsetBase)
			setOffsetTop(offsetTop)
		} else {
			setOffsetTop(0)
		}
	}, [height, width])

	const moveMouse = (e) => {
		if (locked) return false
		// if ('ontouchstart' in document.documentElement) return false
		if (isMobileDevice) return false

		const width = imageRef.current.getBoundingClientRect().width
		const panoWidth = panoRef.current.getBoundingClientRect().width
		const offsetX = panoWidth - width
		const dX = ((e.pageX / panoWidth) * offsetX) / scaleRatio

		setDeltaX(dX)
		xAnimate({ x: dX, easing: easeQuadOut })
	}

	const handleSwipe = (direction) => {
		if (locked) return
		if (direction === 'left' && currentIndex < points.length - 1) {
			setCurrentIndex(currentIndex + 1)
		} else if (direction === 'right' && currentIndex > 0) {
			setCurrentIndex(currentIndex - 1)
		}
	}

	useEffect(() => {
		const point = points[currentIndex]
		if (point !== undefined && point !== null) {
			const imageWidth = document.querySelector('.panorama__image').offsetWidth
			const panoWidth = document.querySelector('.panorama').offsetWidth
			// Вычисляем центр относительно точки point, чтобы точка оказалась в центре
			const offsetX = (panoWidth - imageWidth * scaleRatio) / scaleRatio
			const centerDeltaX = transformBound(offsetX / 2 + point)

			setDeltaX(centerDeltaX)
			xAnimate({
				x: centerDeltaX,
				easing: easeQuadOut,
			})
		}
	}, [currentIndex, points])

	const getConstraints = useCallback(() => {
		const imageWidth = document.querySelector('.panorama__image').offsetWidth
		const panoramaWidth = document.querySelector('.panorama').offsetWidth

		const leftConstraint = 0
		const rightConstraint =
			(panoramaWidth - imageWidth * scaleRatio) / scaleRatio || 0

		return {
			left: leftConstraint,
			right: rightConstraint,
		}
	}, [scaleRatio])

	const transformBound = useCallback(
		(xPoint: number) => {
			const constraints = getConstraints()

			if (xPoint > constraints.left) return constraints.left
			if (xPoint < constraints.right) return constraints.right

			return xPoint
		},
		[getConstraints],
	)

	const onTouchStart = (e) => {
		if (locked) return false
		setTouchX(e.touches[0].pageX)
	}

	const handleTouchEnd = (e) => {
		const endX = e.changedTouches[0].clientX

		const shouldSwipe = Math.abs(Math.abs(touchX) - Math.abs(endX)) > 25
		if (!shouldSwipe) return
		if (touchX !== null && endX !== null) {
			const deltaX = endX - touchX

			if (deltaX > 0) {
				handleSwipe('right')
			} else {
				handleSwipe('left')
			}
		}

		setTouchX(null)
	}

	const moveTouch = (e) => {
		if (locked) return false
		const width = imageRef.current.getBoundingClientRect().width
		const panoWidth = panoRef.current.getBoundingClientRect().width
		const offsetX = panoWidth - width
		const touches = e.changedTouches
		const nextTouchX = touches[0].pageX - touchX

		const leftBound = 0
		const rightBound = offsetX / scaleRatio

		const newDeltaX = nextTouchX / scaleRatio + deltaX

		setTouchX(touches[0].pageX)

		if (newDeltaX > leftBound) {
			setDeltaX(0)
			xAnimate({ x: 0 })
		} else if (newDeltaX < rightBound) {
			setDeltaX(offsetX / scaleRatio)
			xAnimate({ x: offsetX / scaleRatio })
		} else {
			setDeltaX(newDeltaX)
			xAnimate({ x: newDeltaX })
		}

		return
	}

	return (
		<TransformCenter>
			{/*<div*/}
			{/*	style={{*/}
			{/*		position: 'fixed',*/}
			{/*		background: '#fff',*/}
			{/*		zIndex: 22101,*/}
			{/*		padding: 6,*/}
			{/*		borderRadius: 12,*/}
			{/*		top: 160,*/}
			{/*		left: 60,*/}
			{/*	}}*/}
			{/*>*/}
			{/*	<div>point: {points[currentIndex]}</div>*/}
			{/*	<div>deltaX: {deltaX}</div>*/}
			{/*	<div>centerX: {centerX}</div>*/}
			{/*	<div>x: {JSON.stringify(xStyle.x)}</div>*/}
			{/*	<div>y: {JSON.stringify(pStyle.y)}</div>*/}
			{/*	<div>scale: {JSON.stringify(pStyle.scale)}</div>*/}
			{/*	<div>to: {JSON.stringify(to)}</div>*/}
			{/*</div>*/}
			<animated.div
				className="panorama"
				ref={panoRef}
				onTouchStart={!fixed ? onTouchStart : null}
				onTouchEnd={!fixed ? handleTouchEnd : null}
				onTouchMove={!fixed && !points.length ? moveTouch : null}
				onMouseMove={
					!fixed ? throttle(moveMouse, settings.cursorThrottle) : null
				}
				style={{ ...zStyle, width: '100vw', height }}
			>
				<animated.div
					className="panorama__frame"
					style={{ ...pStyle, top: offset }}
					ref={frameRef}
				>
					<animated.div
						className="panorama__image"
						ref={imageRef}
						style={xStyle}
					>
						{children}
					</animated.div>
				</animated.div>
			</animated.div>
		</TransformCenter>
	)
}

export default Panorama

const TransformCenter = styled.div`
	transform-origin: center;
	min-height: 100%;
	height: 100%;
	min-width: 100vw;
	width: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	/* overflow: hidden; */
	@media (orientation: landscape) and (max-height: 400px) {
		height: 100%;
		bottom: 0;
		top: auto;
		overflow: auto;
	}
`
