import media from '@/utils/media'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import Box from '../Box'
import ProductBackButton from '../shared/product-modal/ProductBackButton'
import CabinButton from './CabinButton'

const FinishedStep = ({ onClose }) => {

    const router = useRouter()

    const handleRedirect = (e) => {
        e.preventDefault()
        onClose()
        router.push('/conference')
    }

    return (
        <WrapperFinished>
            <ProductBackButton onClick={onClose} />
            <ImageWrapper>
                <img src="assets/images/sad.png" alt="cabin closed" />
            </ImageWrapper>
            <Heading>Фотокабина не работает</Heading>
            <Desc>
                Мероприятие завершилось,<br />но вы еще можете посмотреть<br />записи вебинаров<br />до <b>28 октября</b>
            </Desc>
            <ButtonWrapper>
                <CabinButton.Upload onClick={handleRedirect} >
                    <span>К вебинарам</span>
                </CabinButton.Upload>
            </ButtonWrapper>
        </WrapperFinished>
    )
}

export default FinishedStep

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Desc = styled.div`
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #1F1F1F;
    margin-bottom: 12px;
`

const Heading = styled.div`
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #1F1F1F;
    margin-bottom: 12px;
`

const WrapperFinished = styled.div`
    width: 100%;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 16px 16px 32px 16px;
`

const ImageWrapper = styled.div<{ $color?: string }>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px 0;
`
const UploadText = styled(Box)`
    font-weight: 300;
    font-size: 20px;
    line-height: 110%;
    color: #4F4F4F;
    text-transform: uppercase;
    margin-left: 16px;

    ${media.md`
        font-size: 16px;
    `}

    ${media.sm`
        margin-left: 0px;
    `}
`