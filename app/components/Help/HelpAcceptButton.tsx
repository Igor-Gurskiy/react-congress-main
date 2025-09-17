import styled, { css, keyframes } from 'styled-components'

const PulseAnimation = keyframes`
    50% {
        box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(255, 255, 255, 0.75);
    }
    100% {
        box-shadow: 0 0 0 4px #fff, 0 0 0 15px rgba(255, 255, 255, 0);
    }
`

const HelpAcceptButton = styled.button<ButtonBasePropsType>`
    border: none;
    font-family: 'Century Gothic';
    color: #010101;
    text-transform: uppercase;
    font-size: 34px;
    background: #fff;
    border-radius: 3px;
    padding: 18px 15px;
    cursor: pointer;
    position: relative;

    ${({ animated, borderRadius }) => animated && css`
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

export default HelpAcceptButton

type ButtonBasePropsType = {
    borderRadius?: string | number
    animated?: boolean
}