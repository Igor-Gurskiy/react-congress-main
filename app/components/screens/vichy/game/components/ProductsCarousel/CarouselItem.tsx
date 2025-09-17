import styles from '@/components/screens/vichy/game/components/ProductsCarousel/ProductsCarousel.module.scss'
import React, { FC, RefObject } from 'react'
import clsx from 'clsx'
import { useWindowSize } from 'react-use'

export interface ICaseItem {
	key: string
	name: string
	src: string
}

interface ICarouselItem {
	item: ICaseItem
	isSelected: boolean
	isDragging: RefObject<boolean>
	selectProduct: (product: string) => void
}

const CarouselItem: FC<ICarouselItem> = ({
	item,
	isDragging,
	isSelected,
	selectProduct,
}) => {
	const { key, name, src } = item
	const { height } = useWindowSize()

	const handleSelect = () => {
		if (isDragging.current) return
		selectProduct(key)
	}

	return (
		<li
			className={clsx(styles.carouselItem, { [styles.selected]: isSelected })}
			onClick={handleSelect}
		>
			<div className={styles.image} style={{ height: height * 0.25 }}>
				<img src={src} alt={name} />
			</div>
			<div className={styles.productName}>{name}</div>
		</li>
	)
}

export default CarouselItem
