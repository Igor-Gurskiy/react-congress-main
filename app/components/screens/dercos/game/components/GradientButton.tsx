import styled from 'styled-components'
import PulseButton from '@/components/Help/PulsingButton'

const GradientButton = styled(PulseButton)`
	background: #000000;
	border-color: #000000;
	border-radius: 3px;
	padding: 4px;
	flex-shrink: 0;

	max-width: 300px;
	width: 100%;

	.pulse-text {
		color: #fff;
		text-align: center;
		font-size: 18px;
		font-weight: 600;
	}
`

export const ShowCorrectAnswersButton = styled(PulseButton)`
	background: #fff;
	border-color: #fff;
	border-radius: 3px;
	padding: 4px;
	flex-shrink: 0;

	max-width: 300px;
	width: 100%;

	.pulse-text {
		color: #000;
		text-align: center;
		font-size: 18px;
		font-weight: 600;
	}
`
export default GradientButton
