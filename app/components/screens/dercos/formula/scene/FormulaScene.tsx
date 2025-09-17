import React from 'react'

import styles from './FormulaScene.module.scss'

const FormulaScene = () => {
	return (
		<div className={styles.wrapper}>
			<picture className={styles.scene}>
				<source
					srcSet="/assets/images/vichy/formula/scene.webp"
					type="image/webp"
				/>
				<source
					srcSet="/assets/images/vichy/formula/scene.png"
					type="image/png"
				/>
				<img
					src="/assets/images/vichy/scene/formula/scene.png"
					alt="Vichy Formula LOR"
				/>
			</picture>
		</div>
	)
}

export default FormulaScene
