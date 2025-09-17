import media from "@/utils/media"
import React from 'react'
import styled from "styled-components"
import ProductTypography from "./ProductTypography"

type ProductHeadPropsType = {
    title: string
}

const ProductHead: React.FC<ProductHeadPropsType> = ({ title }) => {
    return (
        <Head>
            <Chip>new</Chip>
            <ProductTypography $title>{title}</ProductTypography>
        </Head>
    )
}

export default ProductHead

const Head = styled.div`
    ${media.md`
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    `}
`

const Chip = styled.div`
    background: #D7E5ED;
    border-radius: 30px;
    padding: 0 8px;
    margin-right: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    margin-bottom: 8px;
    font-weight: 800;


    ${media.md`
        width: 40px;
        height: 40px;
        background: #D7E5ED;
    `}
`