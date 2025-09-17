import styled, { css } from "styled-components"


type SelectButtonPropsType = {
    $left?: string | number
    $right?: string | number
    $top?: string | number
    $bottom?: string | number
    $borderRadius?: string | number
    $active?: boolean
    $fullWidth?: boolean
}

const SelectButton = styled.button<SelectButtonPropsType>`
    border: none;
    outline: none;

    background: #FFFFFF;
    /* box-shadow: 0px 12px 10px rgba(0, 0, 0, 0.035), 0px 6px 5px rgba(0, 0, 0, 0.03); */
    border-radius: 4px;
    padding: 15px 10px;
    cursor: pointer;
    position: relative;
    color: #4F4F4F;
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items:center;
    min-width: 50%;
    /* box-shadow: inset 0 -0.375em 1px #e0e0e0, 0 0.05em #e0e0e0; */
    box-shadow: #e0e0e0 0px -0.3em 1px inset;

    ${props => props.$left && `left: ${props.$left};`}
    ${props => props.$right && `right: ${props.$right};`}
    ${props => props.$top && `top: ${props.$top};`}
    ${props => props.$bottom && `bottom: ${props.$bottom};`}
    ${props => props.$borderRadius && `border-radius: ${props.$borderRadius};`}

    ${({ $fullWidth }) => $fullWidth && css`
        width: 100%;
    `}

    ${({ $active }) => $active && css`
        background: #00BFD2;
        /* box-shadow: 0px 12px 55px rgba(0, 49, 48, 0.035), 0px 6px 16px rgba(0, 191, 209, 0.5); */
        font-weight: 800;
        color: #FFFFFF;
        box-shadow: #008b9a 0px -0.3em 1px inset;
    `}
`

export default SelectButton