import styled from 'styled-components'
import PulseButton from '@/components/Help/PulsingButton'
import media from '@/utils/media'

export const GameButton = styled(PulseButton)`
	background: #36b0fc;
	border-color: #36b0fc;
	border-radius: 3px;
	padding: 4px;
	flex-shrink: 0;

	max-width: 200px;
	width: 100%;

	.pulse-text {
		color: #fff;
		text-align: center;
		font-size: 18px;
		font-weight: 600;
	}
`
export const GameButtonGreen = styled(PulseButton)`
	background: #009d86;
	border-color: #009d86;
	border-radius: 3px;
	padding: 4px;
	flex-shrink: 0;

	max-width: 200px;
	width: 100%;

	.pulse-text {
		color: #fff;
		text-align: center;
		font-size: 18px;
		font-weight: 600;
	}
`
export const GameButtonPink = styled(PulseButton)`
	background: #d32a5c;
	border-color: #d32a5c;
	border-radius: 3px;
	padding: 4px;
	flex-shrink: 0;

	max-width: 200px;
	width: 100%;

	.pulse-text {
		color: #fff;
		text-align: center;
		font-size: 18px;
		font-weight: 600;
	}
`
export const GameButtonOrange = styled(PulseButton)`
	background: #f4852c;
	border-color: #f4852c;
	border-radius: 3px;
	padding: 4px;
	flex-shrink: 0;

	max-width: 200px;
	width: 100%;

	.pulse-text {
		color: #fff;
		text-align: center;
		font-size: 18px;
		font-weight: 600;
	}
`
export const GameButtonResult = styled(PulseButton)`
	background: #36b0fc;
	border-color: #36b0fc;
	border-radius: 3px;
	padding: 1.35vmin;
	flex-shrink: 0;

	width: 31vmin;

	.pulse-text {
		color: #fff;
		text-align: center;
		font-weight: 600;
	}
	${media.sm`	
	width: 48vmin;


		`}
`
