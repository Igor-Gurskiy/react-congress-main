import React, { FC, PropsWithChildren } from 'react'
import { GameButton } from '@/components/screens/vichy/game/components/GameButton'

import styles from './TipWrapper.module.scss'

interface ITip {
	src: string
	onClick: Function
}

const TipWrapper: FC<PropsWithChildren<ITip>> = ({
	src,
	children,
	onClick,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<img className="instruction-icon" src={src} alt="" />
				<div className={styles.text}>{children}</div>
				<div className={styles.controls}>
					<GameButton button={true} onClick={onClick}>
						понятно
					</GameButton>
				</div>
			</div>
		</div>
	)
}

export default TipWrapper
