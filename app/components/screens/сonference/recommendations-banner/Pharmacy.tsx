import styles from './BasicBanner.module.scss'
import { BannerHeader } from '@/components/screens/сonference/recommendations-banner/components/BannerHeader'
import BannerButton from '@/components/screens/сonference/recommendations-banner/components/BannerButton'

const Pharmacy = ({ passed = false }) => {
	return (
		<div className={styles.wrapper}>
			<BannerHeader
				className={styles.heading}
				weekday="ВТОРНИК"
				day="5 декабря"
				passed={passed}
			/>

			<div className={styles.content}>
				<img
					src="/assets/images/conference/banner/pharmacy.png"
					className={styles.med}
				/>
				<div className={styles.name}>
					СЕКЦИЯ
					<br />
					<b>«ФАРМАЦИЯ»</b>
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
				<div className={styles.controls}>
					<BannerButton className={styles.button} passed={passed} />
				</div>
			</div>
		</div>
	)
}

export default Pharmacy
