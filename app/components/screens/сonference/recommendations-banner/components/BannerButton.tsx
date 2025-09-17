const BannerButton = ({ passed, ...otherProps }) => {
	return (
		<button {...otherProps}>{passed ? 'Смотреть' : 'Присоединиться'}</button>
	)
}

export default BannerButton
