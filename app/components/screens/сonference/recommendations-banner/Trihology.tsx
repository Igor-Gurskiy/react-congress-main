import styles from './SpecialBanner.module.scss'
import { BannerHeader } from '@/components/screens/сonference/recommendations-banner/components/BannerHeader'
import clsx from 'clsx'
import BannerButton from '@/components/screens/сonference/recommendations-banner/components/BannerButton'

const Trihology = ({ passed = false }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<img
					src="/assets/images/conference/banner/trihology.png"
					className={styles.med}
				/>
				<div className={styles.body}>
					<BannerHeader
						className={clsx(styles.heading, { [styles.headingPassed]: passed })}
						weekday="Понедельник"
						day="4 декабря"
						passed={passed}
					/>

					<div className={styles.controls}>
						<BannerButton className={styles.button} passed={passed} />
					</div>

					<div className={styles.name}>
						СЕКЦИЯ
						<br />
						<b>
							«ТРИХОЛОГИя»,
							<br />
							«ШКОЛА
							<br />
							ТРИХОСКОПИИ»
						</b>
					</div>
					<div className={styles.time}>
						{passed ? (
							<>
								Уже доступно
								<br />
								<b>в записи</b>
							</>
						) : (
							<>
								Начало
								<br />
								<b>в 10:00 по МСК</b>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Trihology
