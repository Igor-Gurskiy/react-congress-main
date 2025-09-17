import React from 'react'
import AnimatedContainer from '@/components/screens/dercos/modals/mission/AnimatedContainer'

import styles from './HairsDayReport.module.scss'
import PulseButton from '@/components/Help/PulsingButton'

const HairsDay = ({ changeStep }) => {
	return (
		<AnimatedContainer className={styles.wrapper}>
			<div className={styles.body}>
				<div className={styles.header}>
					<div className={styles.controls}>
						<div>
							<PulseButton
								style={{ padding: 12 }}
								onClick={changeStep.bind(null, 3)}
							>
								<svg
									width="16"
									height="16"
									viewBox="1 0 16 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.254398 13.063C0.224714 12.709 0.345286 12.3448 0.616116 12.074L12.324 0.366117C12.8121 -0.122039 13.6036 -0.122039 14.0918 0.366116C14.5799 0.854272 14.5799 1.64573 14.0918 2.13388L3.2249 13.0007L13.7912 23.5671C14.2794 24.0552 14.2794 24.8467 13.7912 25.3349C13.3031 25.823 12.5116 25.823 12.0235 25.3349L0.620424 13.9318C0.380173 13.6916 0.258164 13.3778 0.254398 13.063Z"
										fill="black"
									/>
								</svg>
							</PulseButton>
						</div>
						<div className={styles.brandControls}>
							ДЕЛАЕМ ТРИХОЛОГИЧЕСКИЙ ПРИЕМ&nbsp;ДОСТУПНЫМ
						</div>
					</div>
					<div>
						<img
							className={styles.logo}
							src="/assets/images/dercos/modals/mission/hairs-day-logo.png"
						/>
					</div>
				</div>
				<div className={styles.content}>
					<div className={styles.results}>Результаты 2023</div>
					<div className={styles.pros}>
						<div className={styles.prosItem}>
							<div className={styles.digit}>50</div>
							<div className={styles.text}>городов</div>
						</div>
						<div className={styles.prosItem}>
							<div className={styles.digit}>287</div>
							<div className={styles.text}>врачей</div>
						</div>
						<div className={styles.prosItem}>
							<div className={styles.digit}>3 131</div>
							<div className={styles.text}>пациент</div>
						</div>
					</div>
					<div className={styles.ps}>х3 vs 2022</div>
				</div>
			</div>
		</AnimatedContainer>
	)
}

export default HairsDay
