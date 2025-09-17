import React from 'react';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

type ArrowIconpropsType = {
    rotate?: number | null
    top?: number | null
    left?: number | null
    right?: number | null
    bottom?: number | null
    position?: string
    style: any
}

const ArrowIcon: React.FC<ArrowIconpropsType> = ({ top, left, right, style, rotate, position }) => {
    return (
        <IconWrapper style={style} $top={top} $left={left} $right={right} $position={position}>
            <svg width="223" height="353" viewBox="0 0 223 353" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${rotate}deg)` }}>
                <path d="M58.5375 111.621V353H166.553V111.621H223L111.5 0L0 111.621H58.5375Z" fill="url(#arrow_icon_paint0_linear)" />
                <defs>
                    <linearGradient id="arrow_icon_paint0_linear" x1="111.5" y1="0" x2="111.5" y2="292.306" gradientUnits="userSpaceOnUse">
                        <stop offset="0.280666" stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </IconWrapper>
    )
}

export default ArrowIcon

type IconWrapperPropsType = {
    $top?: number | null
    $left?: number | null
    $right?: number | null
    $bottom?: number | null
    $position?: string
}

const IconWrapper = styled(animated.div)<IconWrapperPropsType>`
    ${({ $top }) => $top && css`top: ${$top}px;`}
    ${({ $left }) => $left && css`left: ${$left}px;`}
    ${({ $right }) => $right && css`right: ${$right}px;`}
    ${({ $bottom }) => $bottom && css`bottom: ${$bottom}px;`}
    ${({ $position }) => $position && css`position: ${$position};`}
`