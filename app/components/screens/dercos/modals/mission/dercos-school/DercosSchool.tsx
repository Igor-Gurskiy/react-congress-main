import React from 'react'
import AnimatedContainer from '@/components/screens/dercos/modals/mission/AnimatedContainer'

import styles from './DercosSchool.module.scss'

import clsx from 'clsx'
import PulseButton from '@/components/Help/PulsingButton'
import { CrossIcon } from '@/components/shared/icons/CrossIcon'

const DercosSchool = ({ changeStep }) => {
	return (
		<AnimatedContainer className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.desc}>
						<b>РАЗВИТИЕ ТРИХОСКОПИИ,</b>
						<br />
						Как основного метода
						<br />
						диагностики заболеваний скальпа
					</div>
					<div className={styles.brand}>ШКОЛА ТРИХОСКОПИИ</div>
					<div className={styles.subtitle}>
						ПРОЕКТ, НАПРАВЛЕННЫЙ
						<br />
						НА УСОВЕРШЕНСТВОВАНИЕ <br />
						ПРОФЕССИОНАЛЬНЫХ НАВЫКОВ <br />
						ВРАЧЕЙ В ОБЛАСТИ ТРИХОСКОПИИ
					</div>
				</div>

				<img
					className={styles.schoolMobile}
					src="/assets/images/dercos/modals/mission/school-mobile.png"
				/>

				<div className={styles.container}>
					<div className={styles.item}>
						<div className={styles.coverContainer}>
							<img
								alt="school logo"
								className={styles.itemCoverNautilus}
								src="/assets/images/dercos/modals/mission/nautilus.png"
							/>
						</div>
						<div className={styles.year}>2021</div>
						<div className={styles.name}>
							<b>ШКОЛА ТРИХОСКОПИИ</b>
							<br />
							СОВМЕСТНО СО&nbsp;ШКОЛОЙ ТРИХОЛОГИИ «Наутилус»
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.coverContainer}>
							<img
								alt="school logo"
								className={styles.itemCover}
								src="/assets/images/dercos/modals/mission/rhrs.png"
							/>
						</div>

						<div className={styles.year}>2022</div>
						<div className={styles.name}>
							<b>ШКОЛА ТРИХОСКОПИИ</b> <br />
							СОВМЕСТНО СО&nbsp;ШКОЛОЙ ТРИХОЛОГИИ Татьяны Силюк
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.coverContainer}>
							<img
								alt="school logo"
								className={styles.itemCover}
								src="/assets/images/dercos/modals/mission/trihology.png"
							/>
						</div>

						<div className={styles.year}>2023</div>
						<div className={styles.name}>
							<b>4 ДЕКАБРЯ</b>
							<br />
							<b>ТРИХОЛОГИЧЕСКАЯ СЕКЦИЯ</b>
							<br />
							Трихоскопическая викторина
						</div>
					</div>
				</div>
			</div>

			<img
				className={clsx(styles.chevron, styles.vLeft)}
				src="/assets/images/dercos/modals/mission/v-left.svg"
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
		</AnimatedContainer>
	)
}

export default DercosSchool
