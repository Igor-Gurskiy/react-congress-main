import styled, { css } from 'styled-components'

export type BoxPropsType = {
    $flex?: boolean
    $fullWidth?: boolean
    $alignItems?: string
    $justifyContent?: string
    $direction?: string
    $flexGrow?: number
    $flexWrap?: string
    $mt?: number
    $mb?: number
    $mr?: number
    $ml?: number
    $m?: string
    $pt?: number
    $pb?: number
    $pr?: number
    $pl?: number
    $p?: string
}

const Box = styled.div<BoxPropsType>`
    ${({ $flex }) => $flex && css`
        display: flex;
    `}
    ${({ $fullWidth }) => $fullWidth && css`
        width: 100%;
    `}
    ${({ $alignItems }) => $alignItems && css`
        align-items: ${$alignItems};
    `}
    ${({ $justifyContent }) => $justifyContent && css`
        justify-content: ${$justifyContent};
    `}
    ${({ $direction }) => $direction && css`
        flex-direction: ${$direction};
    `}
    ${({ $flexGrow }) => $flexGrow && css`
        flex-grow: ${$flexGrow};
    `}
    ${({ $flexWrap }) => $flexWrap && css`
        flex-wrap: ${$flexWrap};
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
    ${({ $pt }) => $pt && css`
        padding-top: ${$pt}px;
    `}
    ${({ $pb }) => $pb && css`
        padding-bottom: ${$pb}px;
    `}
    ${({ $pr }) => $pr && css`
        padding-right: ${$pr}px;
    `}
    ${({ $pl }) => $pl && css`
        padding-left: ${$pl}px;
    `}
    ${({ $p }) => $p && css`
        padding: ${$p};
    `}
`

export default Box