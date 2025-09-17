import styled, { css } from "styled-components"

type ProductBoxPropsType = {
    $scale?: number
    $width?: string
    $height?: string
}

const ProductBox = styled.div<ProductBoxPropsType>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    ${({ $width }) => $width && css`
        width: ${$width};
    `}

    ${({ $height }) => $height && css`
        height: ${$height};
    `}

    ${({ $scale }) => $scale && css`
        img {
            transform: scale(${$scale});
            transform-origin: bottom center;
        }
    `}
`

export default ProductBox