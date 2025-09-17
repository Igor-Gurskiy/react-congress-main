export const BannerHeader = ({ day, weekday, passed, ...otherProps }) => {
	const weekDayText = passed ? 'рекомендация' : weekday
	const dayText = passed ? 'для вас' : day

	return (
		<div {...otherProps}>
			<div>
				<b>{weekDayText}</b>
			</div>
			<div>{dayText}</div>
		</div>
	)
}
