import media, { mediaMin } from '@/utils/media'
import React from 'react'
import styled, { css } from 'styled-components'
import ProductTypography from './ProductTypography'

const ProductOtherProducts: React.FC<{ products: ProductPropsType[], big: boolean, cols?: number }> = ({ products, big = false, cols = 1 }) => {

    return (
        <div>
            <ProductTypography $subtitle $mt={24}>Другие продукты</ProductTypography>
            <OtherProducts $cols={cols}>
                {products.map((p, idx) => <OtherProduct key={idx} big={big} {...p} cols={cols} />)}
            </OtherProducts>
        </div>
    )
}

type ProductPropsType = {
    src: string
    srcBig: string
    title: string | JSX.Element
    onClick: (args: any) => void
}

interface OtherProductPropsType extends ProductPropsType {
    big: boolean
    cols: number
}

const OtherProduct: React.FC<OtherProductPropsType> = ({ src, srcBig, title, onClick, big, cols }) => {
    return (
        <OtherProductBox onClick={onClick} $cols={cols}>
            {big ? (
                <OtherProductImageWrapper>
                    <img src={srcBig} />
                </OtherProductImageWrapper>
            ) : <img src={src} />}
            <p>{title}</p>
        </OtherProductBox>
    )
}

export default ProductOtherProducts

const OtherProductBox = styled.a<{ $cols: number }>`
    display: flex;
    align-items: center;
    background: #F2F2F2;
    border-radius: 8px;
    height: 72px;
    cursor: pointer;
    
    
    ${mediaMin.md`
        ${({ $cols }) => $cols > 1 && css`
            width: ${100/$cols}%;
        `}
    `}

    ${media.md`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 8px;
        max-height: 224px;
        max-width: 168px;
        width: 100%;
        height: 100%;
        &:not(:last-child) {
            margin-right: 8px;
        }
    `}
    img {
        margin: 8px 16px 8px 8px;
        ${media.md`
            /* object-fit: contain; */
            object-fit: none;
            margin: 0;
        `}
    }

    p {
        font-family: 'Gilroy', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 13px;
        line-height: 16px;
        text-transform: uppercase;
        color: #1F1F1F;
        ${media.md`
            margin-top: 8px;
        `}
    }

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`

const OtherProducts = styled.div<{ $cols: number }>`
    margin-top: 8px;
    ${mediaMin.md`
        ${({ $cols }) => $cols > 1 && css`
            display: flex;
            margin: 8px -8px;
            ${OtherProductBox} {
                margin: 4px;
            }
        `}
    `}
    p {
        padding: 0 8px;
    }

    ${media.md`
        display: flex;
        overflow-x: auto;
        p {
            padding: 0;
        }
    `}
`

const OtherProductImageWrapper = styled.div`
    width: 144px;
    height: 142px;
    display: flex;
    background: #fff;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`