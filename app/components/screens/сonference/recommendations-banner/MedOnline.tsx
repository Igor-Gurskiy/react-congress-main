import styles from './BasicBanner.module.scss'
import BannerButton from '@/components/screens/сonference/recommendations-banner/components/BannerButton'
import { BannerHeader } from '@/components/screens/сonference/recommendations-banner/components/BannerHeader'

const MedOnline = ({ passed = false }) => {
	return (
		<div className={styles.wrapper}>
			<BannerHeader
				className={styles.heading}
				weekday="четверг"
				day="30 ноября"
				passed={passed}
			/>

			<div className={styles.content}>
				<img
					src="/assets/images/conference/banner/med.png"
					className={styles.med}
				/>
				<div className={styles.name}>
					СЕКЦИЯ
					<br />
					<b>
						«МЕДИЦИНА
						<br />
						ОНЛАЙН»
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
							<b>в 12:30 по МСК</b>
						</>
					)}
				</div>
				<div className={styles.controls}>
					<BannerButton className={styles.button} passed={passed} />
				</div>
			</div>
		</div>
	)
}

export default MedOnline
