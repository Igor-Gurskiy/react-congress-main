import styles from './BasicBanner.module.scss'
import BannerButton from '@/components/screens/сonference/recommendations-banner/components/BannerButton'
import { BannerHeader } from '@/components/screens/сonference/recommendations-banner/components/BannerHeader'

const KidsAndTeens = ({ passed = false }) => {
	return (
		<div className={styles.wrapper}>
			<BannerHeader
				className={styles.heading}
				weekday="пятница"
				day="1 декабря"
				passed={passed}
			/>

			<div className={styles.content}>
				<img
					src="/assets/images/conference/banner/kids-and-teens.png"
					className={styles.med}
				/>
				<div className={styles.name}>
					СЕКЦИЯ
					<br />
					<b>
						«ДЕТИ И<br />
						ПОДРОСТКИ»
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
				<div className={styles.controls}>
					<BannerButton className={styles.button} passed={passed} />
				</div>
			</div>
		</div>
	)
}

export default KidsAndTeens
