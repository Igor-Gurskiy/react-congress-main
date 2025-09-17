import { useUIStore } from '@/stores/uiStore'
import media from '@/utils/media'
import React from 'react'
import styled from 'styled-components'
import Box from '../Box'
import CabinButton from './CabinButton'
import CabinTitle from './CabinTitle'
import CabinWrapper from './CabinWrapper'

const CabinSentStep = ({ color, ...otherProps }) => {
    const setCabin = useUIStore(state => state.setCabin)

    return (
        <CabinWrapper {...otherProps}>
            <CabinTitle>отправлено!</CabinTitle>

            <UploadBox>
                <UploadZone>
                    <UploadText style={{ textTransform: 'uppercase' }} $mb={12}>
                        Извините за испорченный кадр МЫ отредактируем его вручную и ОТПРАВИМ ЕГО ВАМ В ТЕЧЕНИЕ <b>2</b> дней
                    </UploadText>
                </UploadZone>
            </UploadBox>

            <Bottom>
                <CabinButton.Upload $color={color.primary} onClick={() => setCabin(null)}>Закрыть</CabinButton.Upload>
            </Bottom>
        </CabinWrapper>
    )
}

export default CabinSentStep

const UploadBox = styled(Box)`
    margin-top: 48px;
    ${media.sm`
        margin-top: 16px;
    `}
`
const UploadText = styled(Box)`
    font-weight: 300;
    font-size: 20px;
    line-height: 110%;
    text-align: center;
    color: #4F4F4F;
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

const UploadZone = styled.label`
    width: 100%;
    background: #F2F2F2;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`