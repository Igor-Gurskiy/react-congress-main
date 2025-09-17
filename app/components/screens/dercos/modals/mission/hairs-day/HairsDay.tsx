import React from 'react'
import AnimatedContainer from '@/components/screens/dercos/modals/mission/AnimatedContainer'

import clsx from 'clsx'
import PulseButton from '@/components/Help/PulsingButton'
import { CrossIcon } from '@/components/shared/icons/CrossIcon'
import { PlusIcon } from '@/components/shared/icons/PlusIcon'

import styles from './HairsDay.module.scss'

const HairsDay = ({ changeStep }) => {
	return (
		<AnimatedContainer className={styles.wrapper}>
			<div className={styles.body}>
				<img
					className={styles.schoolMobile}
					src="/assets/images/dercos/modals/mission/hairs-mobile.png"
				/>
				<div className={styles.content}>
					<div className={styles.header}>
						<div className={styles.desc}>
							<b>ПОВЫШЕНИЕ КАЧЕСТВА</b> <br />
							<b>ЖИЗНИ ПАЦИЕНТОВ,</b> <br />
							СТРАДАЮЩИХ ЗАБОЛЕВАНИЯМИ <br />
							КОЖИ ГОЛОВЫ И&nbsp;ВОЛОС
						</div>
						<div className={styles.brand}>
							<div>DERCOS</div>
							<PulseButton
								style={{ padding: 12, fontSize: 16 }}
								onClick={changeStep.bind(null, 4)}
							>
								<PlusIcon />
							</PulseButton>
						</div>
						<div className={styles.subtitle}>
							<div>ДНИ ЗДОРОВЬЯ ВОЛОС</div>
							<span>23–29 октября 2023&nbsp;года</span>
						</div>
						<div className={styles.qs}>
							<div className={styles.info}>
								Каждый желающий имеет возможность записаться на&nbsp;бесплатный
								прием к&nbsp;врачу дерматологу трихологу в&nbsp;одну
								из&nbsp;партнёрских клиник
							</div>
							<img
								className={styles.logo}
								src="/assets/images/dercos/modals/mission/hairs-day-logo.png"
							/>
						</div>
					</div>

					<div className={styles.ms}>
						<div className={styles.info}>
							Каждый желающий имеет возможность записаться на&nbsp;бесплатный
							прием к&nbsp;врачу дерматологу трихологу в&nbsp;одну
							из&nbsp;партнёрских клиник
						</div>
						<img
							className={styles.logo}
							src="/assets/images/dercos/modals/mission/hairs-day-logo.png"
						/>
					</div>
				</div>

				<img
					className={clsx(styles.chevron, styles.vLeft)}
					src="/assets/images/dercos/modals/mission/v-left-white.svg"
				/>
				<img
					className={clsx(styles.chevron, styles.vRight)}
					src="/assets/images/dercos/modals/mission/v-right.svg"
				/>
				<div className={styles.close}>
					<PulseButton onClick={changeStep.bind(null, 0)}>
						<CrossIcon />
					</PulseButton>
				</div>
			</div>
		</AnimatedContainer>
	)
}

export default HairsDay
