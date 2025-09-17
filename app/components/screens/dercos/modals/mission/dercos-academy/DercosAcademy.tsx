import React from 'react'
import AnimatedContainer from '@/components/screens/dercos/modals/mission/AnimatedContainer'

import styles from './DercosAcademy.module.scss'
import clsx from 'clsx'
import PulseButton from '@/components/Help/PulsingButton'
import { CrossIcon } from '@/components/shared/icons/CrossIcon'

const DercosAcademy = ({ changeStep }) => {
	return (
		<AnimatedContainer className={styles.wrapper}>
			<div className={styles.body}>
				<div className={styles.leftCol}>
					<div className={styles.content}>
						<div className={styles.header}>
							<div className={styles.brand}>DERCOS АКАДЕМИЯ</div>
							<div className={styles.subtitle}>
								ВСЕСТОРОННЯЯ <b>ПОДДЕРЖКА ВРАЧЕЙ</b> В&nbsp;НАПРАВЛЕНИИ
								ТРИХОЛОГИИ
							</div>
						</div>

						<ul className={styles.list}>
							<li className={styles.listItem}>
								<div className={styles.num}>
									<div className={styles.numText}>1.</div>
								</div>
								<div className={styles.caption}>
									<b>Сотрудничество с ключевыми экспертами </b>в&nbsp;области
									трихологии
								</div>
							</li>
							<li className={styles.listItem}>
								<div className={styles.num}>
									<div className={styles.numText}>2.</div>
								</div>
								<div className={styles.caption}>
									<b>
										Все&nbsp;самые актуальные материалы по&nbsp;проблемам кожи
									</b>{' '}
									головы и&nbsp;волос, позволяющие
									<br />
									повышать уровень экспертизы
								</div>
							</li>
							<li className={styles.listItem}>
								<div className={styles.num}>
									<div className={styles.numText}>3.</div>
								</div>
								<div className={styles.caption}>
									<b>
										База клинических
										<br />
										случаев
									</b>
								</div>
							</li>
							<li className={styles.listItem}>
								<div className={styles.num}>
									<div className={styles.numText}>4.</div>
								</div>
								<div className={styles.caption}>
									<b>
										Календарь <br />
										научных конгрессов
										<br />
									</b>
									с нашим участием
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.rightCol}>
					<div className={styles.mobileHeader}>
						<div className={styles.brand}>DERCOS АКАДЕМИЯ</div>
						<div className={styles.subtitle}>
							ВСЕСТОРОННЯЯ <b>ПОДДЕРЖКА ВРАЧЕЙ</b> В&nbsp;НАПРАВЛЕНИИ ТРИХОЛОГИИ
						</div>
					</div>
					<img
						className={styles.academy}
						src="/assets/images/dercos/modals/mission/academy-desktop.png"
					/>
					<div className={styles.computer}>
						<img
							className={styles.academyPc}
							src="/assets/images/dercos/modals/mission/pc.png"
						/>
						<img
							className={styles.academyMedia}
							src="/assets/images/dercos/modals/mission/media.gif"
						/>
					</div>
					<img
						className={styles.academyTablet}
						src="/assets/images/dercos/modals/mission/academy-tablet.png"
					/>
					<img
						className={styles.academyMobile}
						src="/assets/images/dercos/modals/mission/academy-mobile.png"
					/>
					<div className={styles.tabletHeader}>
						<div className="w-full">
							<div className={styles.brand}>DERCOS АКАДЕМИЯ</div>
							<div className={styles.subtitle}>
								ВСЕСТОРОННЯЯ <b>ПОДДЕРЖКА ВРАЧЕЙ</b> В&nbsp;НАПРАВЛЕНИИ
								ТРИХОЛОГИИ
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
			</div>
		</AnimatedContainer>
	)
}

export default DercosAcademy
