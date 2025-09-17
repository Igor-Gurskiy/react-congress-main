import { API } from '@/api'
import { ResultCodesEnum } from '@/api/types'
import media from '@/utils/media'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import Box from '../Box'
import CabinButton from './CabinButton'
import CabinTitle from './CabinTitle'
import CabinWrapper from './CabinWrapper'
import PrevIcon from './PrevIcon'

const CabinDislikeStep = ({ result, setStep, taskId, color, user, ...otherProps }) => {
    const [file, setFile] = useState<any>('')
    const [value, setValue] = useState<string>(user?.email || '')
    const [isUploading, setIsUploading] = useState<boolean>(false)
    const isPhone = useMediaQuery({ query: '(max-width: 575.98px)' })

    const handleInputChange = ({ target: { value } }) => {
        setValue(value)
    }

    const handleUpload = async (e) => {
        e.preventDefault()

        if (!taskId) return alert('Произошла ошибка, закройте и повторите процедуру заново')

        if (!value || !value.includes('@')) return alert('Введите e-mail')
        setIsUploading(true)

        const response = await API.cabin.dislike(taskId, value)

        if (response && response.status === ResultCodesEnum.Success) {
            setStep('sent')
        }
        setIsUploading(false)
    }


    return (
        <CabinWrapper {...otherProps}>
            <CabinTitle>
                <TitleBox>
                    <PrevButton onClick={() => setStep('result')}>
                        <PrevIcon color={color.primary} />
                        <span>Вам не понравился снимок?</span>
                    </PrevButton>
                </TitleBox>
            </CabinTitle>

            <Wrapper>
                    <PreviewImageWrapper>
                            <img src={result} />
                        </PreviewImageWrapper>

                <InputBox>
                    <UploadText style={{ textTransform: 'uppercase' }} $mb={12}>
                        Извините за испорченный кадр МЫ отредактируем его вручную и ОТПРАВИМ ЕГО ВАМ В ТЕЧЕНИЕ <b>2</b> дней
                    </UploadText>
                    {!isPhone && <InputEmail value={value} onChange={handleInputChange} type="email" name="email" placeholder="Email" />}
                </InputBox>
            </Wrapper>

            {isPhone && <MobileInput><InputEmail value={value} onChange={handleInputChange} type="email" name="email" placeholder="Email" /></MobileInput>}


            <Bottom>
                <CabinButton.Upload $color={color.primary} onClick={handleUpload}>Отправить</CabinButton.Upload>
            </Bottom>
        </CabinWrapper>
    )
}

export default CabinDislikeStep

const MobileInput = styled.div`
    margin-top: 16px;
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;

    ${media.sm`
        flex-direction: column-reverse;
    `}
`

const PrevButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const TitleBox = styled(Box)`
    span {
        margin-left: 32px;
    }
`

const UploadText = styled(Box)`
    font-weight: 300;
    font-size: 20px;
    line-height: 110%;
    text-align: left;
    color: #4F4F4F;
`

const PreviewImageWrapper = styled.div`
    margin-top: 48px;
    
    ${media.sm`
        margin-top: 16px;
    `}

    max-width: 256px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F2F2F2;
    border-radius: 8px;
    
    img {
        max-width: 100%;
    }

    ${media.sm`
        align-self: center;
        max-width: 100%;
    `}
`

const InputBox = styled(Box)`
    margin-top: 48px;
    flex-grow: 1;
    margin-left: 16px;

    ${media.sm`
        margin-top: 16px;
        margin-left: 0px;
    `}
`

const InputEmail = styled.input`
    width: 100%;
    background: #E5F0F6;
    border-radius: 5px;
    padding: 15px 20px;
    outline: none;
    border: none;

    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
`

const Bottom = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 48px;

    ${media.sm`
        justify-content: flex-start;
        margin-top: 16px;
        flex-grow: 1;
        button {
            width: 100%;
        }
    `}
`