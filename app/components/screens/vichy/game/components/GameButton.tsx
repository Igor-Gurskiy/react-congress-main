import styled from 'styled-components'
import PulseButton from '@/components/Help/PulsingButton'
import media from '@/utils/media'

export const GameButton = styled(PulseButton)`
	background: #000000;
	border-color: #000000;
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

	${media.md`
	align-self: center;
		max-width: 90%;
	`}
`
