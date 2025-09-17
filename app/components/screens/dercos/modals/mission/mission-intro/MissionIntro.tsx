import PulseButton from '@/components/Help/PulsingButton'
import React from 'react'

import styles from './MissionIntro.module.scss'
import AnimatedContainer from '@/components/screens/dercos/modals/mission/AnimatedContainer'

const MissionIntro = ({ changeStep }) => {
	return (
		<AnimatedContainer className={styles.wrapper}>
			<div className={styles.body}>
				<div className={styles.leftCol}>
					<div className="absolute top-4 right-4 z-10">
						<img
							className={styles.mobileLogo}
							src="/assets/images/dercos/modals/mission/vichy-white.svg"
						/>
					</div>
					<div className={styles.imageCol}>
						<img
							className="w-full"
							src="/assets/images/dercos/modals/mission/q1.jpg"
						/>
						<div className="absolute w-full h-full flex flex-center flex-col text-center text-white gap-4 p-4">
							<div className={styles.percent}>
								73<span>%</span>
							</div>
							<div className={styles.caption}>Женщин</div>
							<div className={styles.text}>
								страдают от заболеваний кожи головы
							</div>
						</div>
					</div>
					<div className={styles.imageCol}>
						<img
							className="w-full"
							src="/assets/images/dercos/modals/mission/q2.jpg"
						/>
						<div className="absolute w-full h-full flex flex-center flex-col text-center text-white gap-4 p-4">
							<div className={styles.percent}>
								42<span>%</span>
							</div>
							<div className={styles.caption}>Женщин</div>
							<div className={styles.text}>имеют перхоть</div>
						</div>
					</div>
					<div className={styles.imageCol}>
						<img
							className="w-full"
							src="/assets/images/dercos/modals/mission/q3.jpg"
						/>
						<div className="absolute w-full h-full flex flex-center flex-col text-center text-white gap-4 p-4">
							<div className={styles.percent}>
								41<span>%</span>
							</div>
							<div className={styles.caption}>Женщин</div>
							<div className={styles.text}>
								страдают от&nbsp;выпадения волос
							</div>
						</div>
					</div>
					<div className={styles.info}>
						<div className={styles.contact}>
							<div className={styles.sub}>1/5</div>
							<div className={styles.question}>
								ОБРАЩАЮТСЯ К ВРАЧУ
								<br />
								ЗА КОНСУЛЬТАЦИЕЙ
							</div>
						</div>
					</div>
				</div>
				<div className={styles.rightCol}>
					<div className="absolute top-4 right-4">
						<img
							className={styles.desktopLogo}
							src="/assets/images/dercos/modals/mission/vichy-logo.svg"
						/>
					</div>
					<div className={styles.content}>
						<div className={styles.header}>Наша миссия</div>
						<ul className={styles.list}>
							<li>
								<div className={styles.listItem}>
									<div className={styles.name}>
										ВСЕСТОРОННЯЯ <b>ПОДДЕРЖКА&nbsp;ВРАЧЕЙ</b> В&nbsp;НАПРАВЛЕНИИ
										ТРИХОЛОГИИ
									</div>
									<div className={styles.controls}>
										<PulseButton.Plus
											onClick={changeStep.bind(null, 1)}
											size={16}
											style={{ padding: 10 }}
										/>
									</div>
								</div>
							</li>
							<li className={styles.divider}>
								<img
									className="h-14"
									alt="accent"
									src="/assets/images/dercos/modals/mission/accent.svg"
								/>
							</li>
							<li>
								<div className={styles.listItem}>
									<div className={styles.name}>
										<b>РАЗВИТИЕ&nbsp;ТРИХОСКОПИИ</b>, КАК&nbsp;ОСНОВНОГО МЕТОДА
										ДИАГНОСТИКИ ЗАБОЛЕВАНИЙ&nbsp;СКАЛЬПА
									</div>
									<div className={styles.controls}>
										<PulseButton.Plus
											onClick={changeStep.bind(null, 2)}
											size={16}
											style={{ padding: 10 }}
										/>
									</div>
								</div>
							</li>
							<li className={styles.divider}>
								<img
									className="h-14"
									alt="accent"
									src="/assets/images/dercos/modals/mission/accent.svg"
								/>
							</li>
							<li>
								<div className={styles.listItem}>
									<div className={styles.name}>
										<b>ПОВЫШЕНИЕ&nbsp;КАЧЕСТВА ЖИЗНИ&nbsp;ПАЦИЕНТОВ, </b>
										СТРАДАЮЩИХ ЗАБОЛЕВАНИЯМИ&nbsp;КОЖИ ГОЛОВЫ И ВОЛОС
									</div>
									<div className={styles.controls}>
										<PulseButton.Plus
											onClick={changeStep.bind(null, 3)}
											size={16}
											style={{ padding: 10 }}
										/>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className={styles.vWrapper}>
						<img
							className={styles.vRight}
							src="/assets/images/dercos/modals/mission/v-right.svg"
						/>
					</div>
				</div>
			</div>
		</AnimatedContainer>
	)
}

export default MissionIntro
