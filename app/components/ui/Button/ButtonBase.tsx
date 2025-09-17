import media from '@/utils/media'
import styled, { css, keyframes } from 'styled-components'

const PulseAnimation = keyframes`
    /* 100% {
        transform: scale(1.4);
        opacity: 0;
    } */
    50% {
        box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(255, 255, 255, 0.75);
    }
    100% {
        box-shadow: 0 0 0 4px #fff, 0 0 0 15px rgba(255, 255, 255, 0);
    }
`

const ButtonBase = styled.button<ButtonBasePropsType>`
    border: none;
    font-family: 'Century Gothic';
    color: #010101;
    text-transform: uppercase;
    font-size: 18px;
    background: #fff;
    border-radius: 3px;
    padding: 15px 10px;
    cursor: pointer;
    position: relative;
    ${props => props.left && `left: ${props.left};`}
    ${props => props.right && `right: ${props.right};`}
    ${props => props.top && `top: ${props.top};`}
    ${props => props.bottom && `bottom: ${props.bottom};`}
    ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
    ${props => props.$p && `padding: ${props.$p};`}
    ${media.md`
        ${props => props.$fs && `font-size: ${props.$fs}px;`}
    `}

    ${({ $fullWidth }) => $fullWidth && css`
        width: 100%;
    `}

    ${({ animated, borderRadius }) => animated && css`
        box-shadow: 0 0 0 1px #aaa, 0 0 0 3px rgba(255, 255, 255, 0.75);
        &::before, &::after {
            content: " ";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: #fff;
            border-radius: ${borderRadius};
            z-index: -1;
        }

        /* &::before {
            animation: ${PulseAnimation} 2s ease-out infinite;
        }

        &::after {
            animation: ${PulseAnimation} 2s 1s ease-out infinite;
        } */
    `}
`

export default ButtonBase

type ButtonBasePropsType = {
    left?: string | number
    right?: string | number
    top?: string | number
    bottom?: string | number
    borderRadius?: string | number
    animated?: boolean
    $fullWidth?: boolean
    $p?: string
    $fs?: number
}