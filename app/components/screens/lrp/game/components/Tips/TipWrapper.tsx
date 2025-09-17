import React, { FC, PropsWithChildren } from 'react'
import { GameButton } from '@/components/screens/lrp/game/components/GameButton'

import styles from './TipWrapper.module.scss'

interface ITip {
	src: string
	onClick: Function
	color: string
}

const TipWrapper: FC<PropsWithChildren<ITip>> = ({
	src,
	children,
	onClick,
	color,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<img className="instruction-icon" src={src} alt="" />
				<div className={styles.text}>{children}</div>
				<div className={styles.controls}>
					<GameButton
						button={true}
						onClick={onClick}
						style={{ background: color }}
					>
						понятно
					</GameButton>
				</div>
			</div>
		</div>
	)
}

export default TipWrapper
