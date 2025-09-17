import Tube from '@/components/screens/green/game/components/Tube'
import React from 'react'
import styled from 'styled-components'

import styles from './Tubes.module.scss'
import clsx from 'clsx'

const Tubes = () => {
	return (
		<>
			<Tube id="sort-tube1" className={clsx(styles.tube, styles.tube1)} />
			<Tube id="sort-tube2" className={clsx(styles.tube, styles.tube2)} />
			<Tube id="sort-tube3" className={clsx(styles.tube, styles.tube3)} />
			<Tube id="sort-tube4" className={clsx(styles.tube, styles.tube4)} />
			<Tube id="sort-tube5" className={clsx(styles.tube, styles.tube5)} />
		</>
	)
}

export default Tubes

const TubesContainer = styled.div`
	position: absolute;
	top: -10vh;
	width: 100vw;
	display: flex;
	justify-content: space-between;
`
