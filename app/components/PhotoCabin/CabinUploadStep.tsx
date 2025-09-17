import { API } from '@/api'
import { useUIStore } from '@/stores/uiStore'
import media from '@/utils/media'
import React, { useEffect, useState } from 'react'
import Loader from "react-loader-spinner"
import styled, { css } from 'styled-components'
import Box from '../Box'
import CabinButton from './CabinButton'
import CabinSection from './CabinSection'
import CabinTitle from './CabinTitle'
import CabinWrapper from './CabinWrapper'
import FileName from './FileName'
import PhotoIcon from './PhotoIcon'
import SelectIcon from './SelectIcon'

const CabinUploadStep = ({ setResult, setStep, file, setFile, setTaskId, color, ...otherProps }) => {
    const cabinBackgrounds = useUIStore(state => state.cabinBackgrounds)
    const cabin = useUIStore(state => state.cabin)

    const [isUploading, setIsUploading] = useState<boolean>(false)
    const [chosen, setChosen] = useState<number | null>(null)
    const [drag, setDrag] = useState<boolean>(false)

    const handleFileInput = (event) => {
        const file = event.target.files[0]
        checkFile(file)
    }

    useEffect(() => {
        setIsUploading(false)
    }, [])

    useEffect(() => {
        setChosen(cabinBackgrounds[0]?.id)
    }, [cabinBackgrounds])

    const handleUpload = async (e) => {
        e.preventDefault()


        if (!file || !chosen) return alert('Выберите файл и фон')
        setIsUploading(true)

        const response = await API.cabin.createTask(chosen, file, cabin)

        if (response && response.create_cabin_task) {
            const { id } = response.create_cabin_task
            const origin = await API.cabin.getPreview(id)
            if (!origin) return
            setResult(origin.data_url)
            setTaskId(id)
            setStep('result')
        }

        setIsUploading(false)
    }

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }
    
    function checkFile(file) {
        const maxfilesize = 1024 * 1024 * 25
        const mimetypes = ['image/jpeg', 'image/png']

        if (file.size > maxfilesize) {
            alert('Слишком большой размер файла')
        } else if (!mimetypes.includes(file.type)) {
            alert('Доступные для загрузки форматы PNG/JPEG')
        } else {
            setFile(file)
        }
    }

    function onDropHandler(e) {
        e.preventDefault()
        try {
            let file = e.dataTransfer.files[0]
            checkFile(file)
        } catch (e) {
            console.error('Error on file selection')
        }
        setDrag(false)
    }

    return (
        <CabinWrapper {...otherProps}>
            <CabinTitle>Сделайте фото на память<br />о конгрессе ACD 2021</CabinTitle>

            <CabinSection>
                <UploadLabel
                    htmlFor="photo"
                >
                    <CabinSection.Header number={1} icon={<PhotoIcon />} description='Сделайте снимок или загрузите фото' />
                    <CabinSection.Content
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                    >
                        <UploadZone $color={color.primary}>
                            {drag ? (
                                <UploadText>Отпустите файл, чтобы загрузить</UploadText>
                            ) : (
                                <div>
                                    <input type="file" id="photo" accept="image/*" hidden onChange={handleFileInput} />
                                    <CabinButton.Upload as="div" $color={color.primary}>Загрузить фото</CabinButton.Upload>
                                    <FileName name={file?.name} />
                                </div>
                            )}
                        </UploadZone>
                    </CabinSection.Content>
                </UploadLabel>
            </CabinSection>

            <CabinSection>
                <CabinSection.Header number={2} icon={<SelectIcon />} description='Выберите понравившийся фон' />
                <CabinSection.Content>
                    <BackgroundGrid>
                        {cabinBackgrounds.map(bg => (
                            <CabinBackgroundItemWrapper
                                key={bg.image.image_id}
                                $chosen={bg.id === chosen}
                                onClick={setChosen.bind(null, bg.id)}
                            >
                                <BackgroundItem
                                    $src={`/media/${bg.image.context_name}/${bg.image.owner_id}/${bg.image.image_id}.SW250H250CF!default.${bg.image.extension}`}
                                />
                            </CabinBackgroundItemWrapper>
                        ))}
                    </BackgroundGrid>
                </CabinSection.Content>
            </CabinSection>

            <Bottom>
                <CabinButton.Upload
                    onClick={handleUpload}
                    $color={color.primary}
                    disabled={isUploading}
                >
                    {isUploading && (
                        <CabinButton.Loader>
                            <Loader
                                type="TailSpin"
                                color="#fff"
                                height={24}
                                width={24}
                            />
                        </CabinButton.Loader>
                    )}
                    <span>Обработать</span>
                </CabinButton.Upload>
            </Bottom>
        </CabinWrapper>
    )
}

export default CabinUploadStep

const UploadLabel = styled.label`
    display: flex;
    width: 100%;

    &:not(:first-child) {
        margin-top: 48px;
    }

    ${media.md`
        flex-direction: column;
    `}
`

const CabinBackgroundItemWrapper = styled.div<{ $chosen: boolean }>`
    border: 4px solid #fff;
    border-radius: 8px;
    overflow: hidden;
    min-width: 100px;
    min-height: 100px;
    max-width: 146px;
    max-height: 146px;
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    ${({ $chosen }) => $chosen && css`
        border: 4px solid #00AEEF;
    `}
`

const BackgroundGrid = styled.div`
    display: grid;
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fill,minmax(146px,1fr));
    grid-template-rows: repeat(auto-fit, minmax(146px, 1fr));
    justify-items: center;

    ${media.sm`
        grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
        grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    `}
`

const BackgroundItem = styled.div<{ $src: string }>`
    background: #E5F0F6;
    min-width: 100px;
    min-height: 100px;
    max-width: 146px;
    max-height: 146px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 4px;

    ${({ $src }) => $src && css`
        background-image: url(${$src});
        background-size: cover;
    `}

    /* ${media.md`
        width: 108px;
        height: 108px;
    `} */
`

const UploadText = styled(Box)`
    font-weight: 300;
    font-size: 20px;
    line-height: 110%;
    text-align: center;
    color: #4F4F4F;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
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

const UploadZone = styled.label<{ $color?: string }>`
    width: 100%;
    background: #F2F2F2;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 182px;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    ${({ $color }) => $color && css`
        border: 1px dashed ${$color};
    `}
`