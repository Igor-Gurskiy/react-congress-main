import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import PlusSVG from './PlusSvg'

const PulseButton = ({
	children,
	padding = null,
	button = false,
	...otherProps
}) => {
	return (
		<PulseButtonWrapper $button={button} $p={padding} {...otherProps}>
			<PulseRing />
			<PulseRing />
			<PulseRing />
			<PulseRing />
			{button ? (
				<PulseButtonText className="pulse-text">{children}</PulseButtonText>
			) : (
				children
			)}
		</PulseButtonWrapper>
	)
}

export default PulseButton

const PulsePlusButton = ({ size = 20, ...otherProps }) => {
	return (
		<PulseButton {...otherProps}>
			<PlusSVG size={size} />
		</PulseButton>
	)
}

PulseButton.Plus = PulsePlusButton

const PulsingAnimation = keyframes`
  100% {
    transform: scale(2);
    opacity: 0;
  }
`

const PulsingButtonAnimation = keyframes`
  100% {
    transform: scale(1.2, 1.6);
    opacity: 0;
  }
`

const PulseRing = styled.div`
	position: absolute;
	background-color: inherit;
	width: 100%;
	height: 100%;
	border-radius: 100%;
	opacity: 0.8;
	animation: ${PulsingAnimation} 4s ease-out infinite;
	will-change: opacity, transform;

	&:nth-of-type(1) {
		animation-delay: -1s;
	}

	&:nth-of-type(2) {
		animation-delay: -2s;
	}

	&:nth-of-type(3) {
		animation-delay: -3s;
	}
`

const PulseButtonWrapper = styled.button<{
	$button?: boolean
	$p?: string | null
}>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #000;
	background: #fff;
	outline: none;
	cursor: pointer;
	color: #000;

	${({ $p }) =>
		$p
			? css`
					padding: ${$p};
			  `
			: css`
					padding: 15px;
			  `}
	${({ $button }) =>
		$button
			? css`
					border-radius: 4px;
					padding: 18px 15px;

					${PulseRing} {
						border-radius: 8px;
						animation: ${PulsingButtonAnimation} 4s ease-out infinite;

						&:nth-of-type(1) {
							animation-delay: -1s;
						}

						&:nth-of-type(2) {
							animation-delay: -2s;
						}

						&:nth-of-type(3) {
							animation-delay: -3s;
						}
					}
			  `
			: css`
					border-radius: 50%;
			  `}
  svg {
		z-index: 11;
	}
`

const PulseButtonText = styled.div`
	font-family: 'Century Gothic';
	color: #010101;
	text-transform: uppercase;
	font-size: 34px;
	z-index: 11;
`
