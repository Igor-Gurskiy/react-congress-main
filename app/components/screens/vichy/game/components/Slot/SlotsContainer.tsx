import { motion, useAnimation } from 'framer-motion'
import React, { FC, PropsWithChildren, useRef, useState } from 'react'

import styles from './SlotsContainer.module.scss'

const SlotsContainer: FC<PropsWithChildren<any>> = ({ children }) => {
	const carouselWrapperRef = useRef<HTMLDivElement>(null)
	const carouselRef = useRef<HTMLUListElement>(null)
	const isDragRef = useRef<boolean>(false)
	const [xPos, setXPos] = useState<number>(0)

	const animation = useAnimation()

	return (
		<div className={styles.carouselWrapper}>
			<div ref={carouselWrapperRef} className={styles.container}>
				<motion.ul
					ref={carouselRef}
					drag="x"
					dragDirectionLock
					dragConstraints={carouselWrapperRef}
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
					{children}
				</motion.ul>
			</div>
		</div>
	)
}

export default SlotsContainer
