import styled, {css} from "styled-components";
import media from "@/utils/media";

type GameButtonPropsType = {
    $fullWidth?: boolean
    $primary?: boolean
    $default?: boolean
    $mt?: number
    $mb?: number
    $mr?: number
    $ml?: number
    $m?: string
}

const RecycleButton = styled.button<GameButtonPropsType>`
    padding: 25px;
    outline: none;
    border: none;
    cursor: pointer;
    
    font-family: Gilroy, sans-serif;
    transition: all 0.2s;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    ${({ $fullWidth }) => $fullWidth && css`
        width: 100%;
    `}

    ${({ $mt }) => $mt && css`
        margin-top: ${$mt}px;
    `}
    ${({ $mb }) => $mb && css`
        margin-bottom: ${$mb}px;
    `}
    ${({ $mr }) => $mr && css`
        margin-right: ${$mr}px;
    `}
    ${({ $ml }) => $ml && css`
        margin-left: ${$ml}px;
    `}
    ${({ $m }) => $m && css`
        margin: ${$m};
    `}

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 14px;
      padding: 12px;
    }

`

export default RecycleButton