import { motion, useAnimation } from 'framer-motion'
import React, { FC, useEffect, useRef, useState } from 'react'

import styles from './ProductsCarousel.module.scss'
import PulseButton from '@/components/Help/PulsingButton'
import clsx from 'clsx'
import styled from 'styled-components'
import CarouselItem, {
	ICaseItem,
} from '@/components/screens/lrp/game/components/ProductsCarousel/CarouselItem'
import CarouselArrowIcon from '@/components/screens/lrp/game/components/ProductsCarousel/CarouselArrowIcon'

const ProductsCarousel: FC<{
	key: string
	cases: ICaseItem[]
	selected?: string[]
	selectProduct: (product: string) => void
}> = ({ key, cases, selectProduct, selected = [] }) => {
	const carouselWrapperRef = useRef<HTMLDivElement>(null)
	const carouselRef = useRef<HTMLUListElement>(null)
	const isDragRef = useRef<boolean>(false)
	const [xPos, setXPos] = useState<number>(0)
	const [singleSlideWidth, setSingleSlideWidth] = useState(0)

	const animation = useAnimation()

	const handleClickPrev = () => {
		const newXPos = xPos + singleSlideWidth + 40
		const constraint = 0
		animation.start({
			x: newXPos > constraint ? constraint : newXPos,
		})
	}
	const handleClickNext = () => {
		const newXPos = xPos - singleSlideWidth - 40
		const constraint =
			(carouselWrapperRef.current?.clientWidth || 0) -
			(carouselRef.current?.clientWidth || 0)
		animation.start({
			x: newXPos < constraint ? constraint : newXPos,
		})
	}

	useEffect(() => {
		const carousel = carouselRef.current
		if (!carousel || !carousel.children.length) return
		setSingleSlideWidth(carousel.children[0].clientWidth)
	})

	return (
		<div className={styles.carouselWrapper}>
			<div ref={carouselWrapperRef} className={styles.container}>
				<motion.ul
					key={key + singleSlideWidth + xPos}
					ref={carouselRef}
					drag="x"
					dragDirectionLock
					dragConstraints={carouselWrapperRef}
					animate={animation}
					whileTap={{ cursor: 'grabbing' }}
					initial={{ x: 0 }}
					dragElastic={0.2}
					onDragStart={() => {
						isDragRef.current = true
					}}
					onDragEnd={() => {
						setTimeout(() => {
							isDragRef.current = false
						}, 150)
					}}
					className={styles.carousel}
					onUpdate={(pos) => {
						setXPos(Number(pos.x))
					}}
				>
					{cases.map((c) => (
						<CarouselItem
							key={c.key}
							item={c}
							isSelected={selected.includes(c.key)}
							isDragging={isDragRef}
							selectProduct={selectProduct}
						/>
					))}
				</motion.ul>
			</div>
			<div className={clsx(styles.arrow, styles.arrowLeft)}>
				<FontBasedPulse onClick={handleClickPrev}>
					<CarouselArrowIcon />
				</FontBasedPulse>
			</div>
			<div className={clsx(styles.arrow, styles.arrowRight)}>
				<FontBasedPulse onClick={handleClickNext}>
					<CarouselArrowIcon />
				</FontBasedPulse>
			</div>
		</div>
	)
}

export default ProductsCarousel

const FontBasedPulse = styled(PulseButton)`
	font-size: calc(1 * var(--size));
	padding: calc(0.6 * var(--size));

	@media screen and (max-width: 1024px) {
		font-size: 20px;
		padding: 8px;
	}
`
