import media from "@/utils/media"
import React from 'react'
import styled from "styled-components"

type ProductKnowMorePropsType = {
    knowMore: boolean
    setKnowMore?: (know: boolean) => void
    onClick?: () => void
}

const ProductKnowMore: React.FC<ProductKnowMorePropsType> = ({ knowMore, setKnowMore, onClick }) => {
    return (
        <MoreBox>
            {!knowMore && <MoreBtn onClick={onClick}>Хочу узнать больше</MoreBtn>}
            {knowMore && <AdditionalInfo><b>Мы вам напишем по почте после конгресса</b><br />Дополнительная информация будет<br />направлена вам на email</AdditionalInfo>}
        </MoreBox>
    )
}

export default ProductKnowMore

const AdditionalInfo = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    color: #8F9396;
    margin-bottom: 10px;

    ${media.md`
        text-align: center;
    `}
`

const MoreBox = styled.div`
    ${media.md`
        width: 100%;
        border-bottom: 1px solid #E2E2E2;
        margin-bottom: 8px;
    `}
`

export const MoreBtn = styled.div`
    background: #FFFFFF;
    border: 1px solid #8F9396;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #8F9396;
    padding: 8px 16px;
    cursor: pointer;

    transition: all 0.3s;
    &:hover {
        background: #8F9396;
        border: 1px solid #8F9396;
        box-sizing: border-box;
        box-shadow: 0px 0px 4px rgba(31, 31, 31, 0.25);
        border-radius: 8px;
        color: #fff;
    }

    &:disabled {
        opacity: 0.5;
    }
`