import React from 'react'
import styled, { css } from 'styled-components'
import Box, { BoxPropsType } from '../../Box'

interface ProductPricePropsType extends PriceWrapperPropsType {
    price: string
    volume: string
}

const ProductPrice: React.FC<ProductPricePropsType> = ({ price, volume, ...otherProps }) => {
    return (
        <PriceWrapper
            {...otherProps}
        >
            <Price>{price}</Price>
            <Volume>{volume}</Volume>
        </PriceWrapper>
    )
}

export default ProductPrice

interface PriceWrapperPropsType extends BoxPropsType {
    $absolute?: boolean
    $top?: number
    $left?: number
    $right?: number
    $bottom?: number
}

const PriceWrapper = styled(Box)<PriceWrapperPropsType>`
    width: 56px;
    height: 56px;
    background: #D7E5ED;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10;
    position: relative;
    
    ${({ $absolute }) => $absolute && css`
        position: absolute;
    `}
    ${({ $top }) => $top && css`
        top: ${$top}px;
    `}
    ${({ $bottom }) => $bottom && css`
        bottom: ${$bottom}px;
    `}
    ${({ $left }) => $left && css`
        left: ${$left}px;
    `}
    ${({ $right }) => $right && css`
        right: ${$right}px;
    `}
`

const Price = styled(Box)`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #1F1F1F;
`

const Volume = styled(Price)`
    opacity: 0.5;
`