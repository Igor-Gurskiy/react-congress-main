import styles from './SocialProject.module.scss'
import BannerButton from '@/components/screens/сonference/recommendations-banner/components/BannerButton'
import { BannerHeader } from '@/components/screens/сonference/recommendations-banner/components/BannerHeader'

const SocialProject = ({ passed = false }) => {
	return (
		<div className={styles.wrapper}>
			<BannerHeader
				className={styles.heading}
				weekday="четверг"
				day="30 ноября"
				passed={passed}
			/>

			<div className={styles.content}>
				<div className={styles.name}>
					Социальный
					<br />
					проект
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
							<b>в 12:00 по МСК</b>
						</>
					)}
				</div>
				<div>
					<BannerButton className={styles.button} passed={passed} />
				</div>
			</div>

			<img
				src="/assets/images/conference/banner/social-kid.png"
				className={styles.kid}
			/>
		</div>
	)
}

export default SocialProject
