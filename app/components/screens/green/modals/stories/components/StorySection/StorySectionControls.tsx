import styled from 'styled-components'

const StorySectionControls = ({
	pos = 0,
	hasNext,
	hasPrev,
	handleNext,
	handlePrev,
}) => {
	if (pos !== 0) return null

	return (
		<>
			{hasPrev && (
				<PrevButton
					onClick={(e) => {
						e.stopPropagation()
						handlePrev()
					}}
				/>
			)}
			{hasNext && (
				<NextButton
					onClick={(e) => {
						e.stopPropagation()
						handleNext()
					}}
				/>
			)}
		</>
	)
}

export default StorySectionControls

const PrevButton = (props) => {
	return (
		<PrevWrapper {...props}>
			<ArrowIcon style={{ transform: 'rotate(180deg)' }} />
		</PrevWrapper>
	)
}
const ControlWrapper = styled.div`
	position: absolute;
	top: 50%;
	z-index: 10;

	svg {
		pointer-events: none;
	}
`
const PrevWrapper = styled(ControlWrapper)`
	left: 0;
	transform: translateX(-100%) translateY(-50%);
`
const NextWrapper = styled(ControlWrapper)`
	right: 0;
	transform: translateX(100%) translateY(-50%);
`
const NextButton = (props) => {
	return (
		<NextWrapper {...props}>
			<ArrowIcon />
		</NextWrapper>
	)
}

const ArrowIcon = (props: any) => (
	<ArrowWrapper {...props}>
		<svg
			width="42"
			height="42"
			viewBox="0 0 42 42"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="21"
				cy="21"
				r="20.5"
				transform="rotate(180 21 21)"
				stroke="white"
			/>
			<path
				d="M27.9965 20.5496C28.0202 20.8328 27.9238 21.1241 27.7071 21.3408L18.3408 30.7071C17.9503 31.0976 17.3171 31.0976 16.9266 30.7071C16.5361 30.3166 16.5361 29.6834 16.9266 29.2929L25.6201 20.5994L17.167 12.1463C16.7765 11.7558 16.7765 11.1226 17.167 10.7321C17.5575 10.3416 18.1907 10.3416 18.5812 10.7321L27.7037 19.8546C27.8959 20.0468 27.9935 20.2977 27.9965 20.5496Z"
				fill="white"
			/>
		</svg>
	</ArrowWrapper>
)
const ArrowWrapper = styled.div`
	padding: 8px;
`
