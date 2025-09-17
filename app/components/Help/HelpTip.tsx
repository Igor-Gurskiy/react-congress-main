import React from 'react'
import { animated } from 'react-spring'
import styled, { css } from 'styled-components'
import { TypographyBase } from '../Typography'
import ButtonBase from '../ui/Button/ButtonBase'
import PulseButton from './PulsingButton'

type TipPropsType = {
	$left?: string
	$right?: string
	$top?: string
	$bottom?: string
	$position?: string
	$size?: number
	$color?: string
}

type HelpTipPropsType = {
	children?: JSX.Element | JSX.Element[]
	left?: string
	right?: string
	top?: string
	bottom?: string
	plus?: boolean
	onClick?: (args: any) => void
	style?: any
}

const HelpTip = ({
	children,
	plus,
	left,
	right,
	top,
	bottom,
	onClick,
	style,
	...otherProps
}: HelpTipPropsType & any) => {
	return (
		<Tip
			$left={left}
			$right={right}
			$top={top}
			$bottom={bottom}
			onClick={onClick}
			style={style}
			{...otherProps}
		>
			{plus && <Plus {...otherProps} />}
			{children}
		</Tip>
	)
}

export default HelpTip

export const TipText = styled(TypographyBase)<
	TipPropsType & { $textAlign?: 'right' | 'center' | 'left' }
>`
	position: absolute;
	font-size: 18px;
	color: #fff;
	line-height: 120%;
	text-transform: uppercase;
	min-width: 200px;
	font-family: 'Gilroy', sans-serif;
	font-weight: 800;
	text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 0px 8px rgba(0, 0, 0, 0.8);

	&&& {
		${({ $textAlign }) =>
			$textAlign &&
			css`
				text-align: ${$textAlign};
			`}
		${({ $left }) =>
			$left &&
			css`
				left: ${$left};
			`}
    ${({ $right }) =>
			$right &&
			css`
				right: ${$right};
			`}
    ${({ $top }) =>
			$top &&
			css`
				top: ${$top};
			`}
    ${({ $bottom }) =>
			$bottom &&
			css`
				bottom: ${$bottom};
			`}
    ${({ $position }) =>
			$position &&
			css`
				position: ${$position};
			`}
    ${({ $color }) =>
			$color &&
			css`
				color: ${$color};
			`}
    ${({ $size }) =>
			$size
				? css`
						font-size: ${$size};
				  `
				: css`
						font-size: 14px;
				  `}
	}
`

const Plus = ({ ...rest }) => {
	return <PulseButton.Plus {...rest} />
}

const Tip = styled(animated.div)<TipPropsType>`
	position: absolute;
	z-index: 10001;
	letter-spacing: 1.26px;

	${(props) =>
		props.$left &&
		css`
			left: ${props.$left};
		`}
	${(props) =>
		props.$right &&
		css`
			right: ${props.$right};
		`}
  ${(props) =>
		props.$top &&
		css`
			top: ${props.$top};
		`}
  ${(props) =>
		props.$bottom &&
		css`
			bottom: ${props.$bottom};
		`}
  ${ButtonBase} {
		width: 46px;
		height: 46px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		cursor: pointer;
	}

	${TipText} {
		left: 50%;
		top: -150%;
	}
`
