import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import media from '@/utils/media'
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Box from '../Box'
import CabinButton from './CabinButton'
import CabinSection from './CabinSection'
import CabinTitle from './CabinTitle'
import CabinWrapper from './CabinWrapper'
import ImageIcon from './ImageIcon'
import ShareIcon from './ShareIcon'
import Loader from "react-loader-spinner"
import { ResultCodesEnum } from '@/api/types'

const CabinPreviewStep = ({ result, setStep, taskId, color, ...otherProps }) => {

    const [isDownloading, setDownloading] = useState(false)

    const handleDownloadClick = async () => {
        setDownloading(true)
        API.tracker.sendEvent(EventsEnum.acdPhotoDownload)
        
        try {
            const response = await API.cabin.getResult(taskId)

            if (response && response.status === ResultCodesEnum.Success) {
                const downloadLink = document.createElement("a")
                downloadLink.href = response.data_url
                downloadLink.download = `cabin_${nanoid()}.png`
                downloadLink.click()
            } else {
                alert('Возникла ошибка при загрузке изображения')
            }

        } catch (e) {
            alert('Возникла непредвиденная ошибка при загрузке изображения')
        }

        setDownloading(false)
    }

    useEffect(() => {
        API.tracker.sendEvent(EventsEnum.acdPhotoPreview)
    }, [])

    return (
        <CabinWrapper {...otherProps}>
            <CabinTitle>ПОЖАЛУЙСТА, ПОДОЖДИТЕ</CabinTitle>

            <CabinSection>
                <CabinSection.Header number={3} icon={<ImageIcon />} description='Сохраните на память фото с ACD конгресса 2021' />
                <CabinSection.Content>
                    <DownloadZone>
                        <PreviewImageWrapper>
                            <img src={result} />
                        </PreviewImageWrapper>
                        <UploadText $mb={24}>предварительный<br />просмотр</UploadText>
                    </DownloadZone>
                    <DownloadControls>
                        <CabinButton.Upload
                            onClick={handleDownloadClick}
                            $color={color.primary}
                        >
                            {isDownloading && (
                                <CabinButton.Loader>
                                    <Loader
                                        type="TailSpin"
                                        color="#fff"
                                        height={24}
                                        width={24}
                                    />
                                </CabinButton.Loader>
                            )}
                            <span>Скачать</span>
                        </CabinButton.Upload>
                        <CabinButton.Choose as="div" $color={color.primary} onClick={() => setStep('upload')}>Начать заново</CabinButton.Choose>
                    </DownloadControls>
                </CabinSection.Content>
            </CabinSection>

            <CabinSection>
                <CabinSection.Header number={4} icon={<ShareIcon />} description='' />
                <CabinSection.Content>
                    <Text $color={color.primary}>
                        Поделитесь снимком в своем профиле Instagram с хештегом <span>#ACDCONGRESS2021</span> и примите участие в конкурсе.
                        <br />Профиль должен быть открытым. В конце октября будут выбраны победители.
                    </Text>
                </CabinSection.Content>
            </CabinSection>

            <Bottom>
                <CabinButton.Choose $color={color.primary} onClick={() => setStep('dislike')}>НЕ ПОНРАВИЛОСЬ ФОТО</CabinButton.Choose>
            </Bottom>
        </CabinWrapper>
    )
}

export default CabinPreviewStep

const DownloadControls = styled.div`
    display: flex;
    ${CabinButton.Choose} {
        &:not(:first-child) {
            margin-left: 16px;
        }
    }

    ${media.sm`
        flex-direction: column;

        ${CabinButton.Choose} {
            &:not(:first-child) {
                margin-left: 0px;
                margin-top: 16px;
            }
        }
    `}
`

const Text = styled.div<{ $color?: string }>`
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #4F4F4F;

    span {
        ${({ $color }) => $color && css`color: ${$color};`}
    }
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

const Bottom = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 48px;

    ${media.md`
        justify-content: center;

        ${CabinButton.Choose} {
            width: 100%;
        }
    `}
`

const PreviewImageWrapper = styled.div`
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

const DownloadZone = styled.div`
    width: 100%;
    /* background: #F2F2F2; */
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    /* flex-direction: column; */
    margin-bottom: 16px;

    ${media.sm`
        flex-direction: column-reverse;
        br {
            display: inline;
            content: ' ';
            padding: 0 3px;
        }
    `}
`