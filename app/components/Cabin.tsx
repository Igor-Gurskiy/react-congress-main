import { API } from '@/api';
import { CabinBackground } from '@/api/cabin';
import { EventsEnum } from '@/api/tracker';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { animated, useTransition } from 'react-spring';
import styled, { css } from 'styled-components';
import { useUIStore } from '../stores/uiStore';
import media, { mediaMin } from '../utils/media';
import AttentionIcon from './shared/icons/AttentionIcon';
import DownloadIcon from './shared/icons/DownloadIcon';
import StartIcon from './shared/icons/StartIcon';

const PhotoCabin = () => {
    const cabin = useUIStore(state => state.cabin)
    const setCabin = useUIStore(state => state.setCabin)
    const [uploaded, setUploaded] = useState(false)
    const [backgroundList, setBackgroundList] = useState<CabinBackground[]>([])
    const [chosen, setChosen] = useState<number | null>(null)
    const [file, setFile] = useState<Blob | null>(null)
    const [result, setResult] = useState<string | null>(null)

    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }
        setFile(event.target.files[0])
    }

    const uploadCabin = async (e) => {
        e.preventDefault()
        if (!file || !chosen) return

        const response = await API.cabin.createTask(chosen, file, 'vichy')
        const taskId = response?.create_cabin_task?.id
        if (taskId) {
            const origin = await API.cabin.getPreview(taskId)
            if (!origin) return
            setResult(origin.data_url)
            setUploaded(true)
        }
    }

    const fetchCabinBackgrounds = async () => {
        const response = await API.cabin.getBackgroundList()
        if (response && response.cabin_background_list) {
            const initialBgId = Math.floor(response.cabin_background_list.length / 2)
            setChosen(response.cabin_background_list[initialBgId].id)
            setBackgroundList(response.cabin_background_list)
        }
     }

    useEffect(() => {
        if (cabin) {
            fetchCabinBackgrounds()
        }
    }, [cabin])

    const transitions = useTransition(cabin, {
        from: { opacity: 0, transform: "scale(1.1)" },
        enter: { opacity: 1, transform: "scale(1)" },
        leave: { opacity: 0, transform: "scale(1.1)" },
        onDestroyed: () => {
            if (!cabin) setUploaded(false)
        }
    })

    const screens = useTransition(uploaded, {
        from: { opacity: 0, transform: "scale(1.1)" },
        enter: { opacity: 1, transform: "scale(1)" },
    })

    const onClose = () => setCabin(null)

    const handleDownloadClick = () => {
        API.tracker.sendEvent(EventsEnum.acdPhotoDownload)
    }

    useEffect(() => {
        if (uploaded) {
            API.tracker.sendEvent(EventsEnum.acdPhotoPreview)
        }
    }, [uploaded])

    return transitions((props, item) => item ? (
        <CabinWrapper style={props}>
            <Circle />
            <ContentWrapper>
                {screens((style, show) => !show ? (
                    <UploadForm style={style}>
                        <Title>Сделайте фото на память<br />о конгрессе ACD 2021</Title>
                        <ChooseBackgroundText>Выберите понравившийся фон:</ChooseBackgroundText>

                        <Container>
                            <PerfectScrollbar>
                                <BackgroundChooser>
                                    {backgroundList.map(bg => {
                                        const src = `/media/${bg.image.context_name}/${bg.image.owner_id}/${bg.image.image_id}.SW250H250CF!default.${bg.image.extension}`
                                        return (
                                            <BackgroundItem
                                                key={bg.id}
                                                $src={src}
                                                $chosen={bg.id === chosen}
                                                onClick={setChosen.bind(null, bg.id)}
                                            />
                                        )
                                    })}
                                </BackgroundChooser>
                            </PerfectScrollbar>
                        </Container>

                        <input type="file" id="photo" accept="image/*" hidden onChange={handleFileInput} />

                        <Uploader htmlFor="photo">
                            {file ? (
                                <img id="upload_photo" src={URL.createObjectURL(file)} />
                            ) : (
                                <>
                                    <img src="assets/images/plus.png" />
                                    <UploaderText>Сделайте или загрузите<br />фото из списка</UploaderText>
                                </>
                            )}
                        </Uploader>

                        <SubmitButton disabled={!file && !chosen} onClick={uploadCabin}>Отправить</SubmitButton>
                    </UploadForm>
                ) : (
                    <ResultScreen style={style}>
                        <Title>Поделитесь фотографией в<br />социальных сетях с хэштегом<br /><span>#ACDcongress2021</span></Title>
                        <ChooseBackgroundText>Предпросмотр</ChooseBackgroundText>

                        <Preview>
                            {result && (
                                <img style={{ maxHeight: 300 }} src={result} />
                            )}
                        </Preview>

                        <ButtonsBox>
                            <Button $attempt>
                                <AttentionIcon />
                                <span>Что-то не так?</span>
                            </Button>
                            <Button $start onClick={() => setUploaded(false)}>
                                <StartIcon />
                                <span>Начать заново</span>
                            </Button>
                            {result && (
                                <Button $download as={'a'} onClick={handleDownloadClick} download={`cabin_${nanoid()}.png`} href={result}>
                                    <DownloadIcon />
                                    <span>Скачать фото</span>
                                </Button>
                            )}
                            
                        </ButtonsBox>
                    </ResultScreen>
                ))}
            </ContentWrapper>

            <Close onClick={onClose}>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.8861 3.11475L2.60449 35.3963" stroke="#0AB8B6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.60449 3.11475L34.8861 35.3963" stroke="#0AB8B6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Close>
        </CabinWrapper>
    ) : '')
}

export default PhotoCabin

const Button = styled.button<{ $download?: boolean, $start?: boolean, $attempt?: boolean }>`
    border-radius: 22px;
    font-family: Gilroy, sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    padding: 25px;
    cursor: pointer;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    ${props => props.$download && css`
        color: #FFFFFF;
        background: linear-gradient(0deg, #0AB8B6, #0AB8B6), #11C0D0;
    `}

    ${props => props.$start && css`
        color: #FFFFFF;
        background: linear-gradient(0deg, #6B8686, #6B8686), #11C0D0;
    `}

    ${props => props.$attempt && css`
        color: #11C0D0;
        background: linear-gradient(0deg, rgba(107, 134, 133, 0.22), rgba(107, 134, 133, 0.22)), rgba(17, 192, 208, 0.22);
    `}

    &:disabled {
        background: linear-gradient(0deg, #9da1a2, #9da1a2), #9da1a2;
    }

    ${media.xl`
        padding: 15px;
        font-size: 24px;
        line-height: 28px;
    `}

    &:hover {
        opacity: 0.7;
    }

    ${media.sm`
        font-size: 22px;
        line-height: 27px;
        width: 100%;

        svg {
            width: 22px;
            height: 22px;
            margin-right: 10px;
        }
    `}
`

const ButtonsBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;
    align-items: center;
    button {
        margin: 10px;
    }
    
    ${media.lg`
        max-width: 800px;
    `}

    ${media.sm`
        button {
            margin: 0;
            margin-bottom: 10px;
        }
        flex-direction: column;
        margin-bottom: 21px;
    `}
`

const Preview = styled.div`
    max-width: 1212px;
    min-height: 331px;
    flex-grow: 1;
    width: 100%;
    /* opacity: 0.33; */
    border: 2px dashed rgb(17 192 208 / 33%);
    box-sizing: border-box;
    border-radius: 100px;
    margin-bottom: 65px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.sm`
        border-radius: 20px;
        min-height: 203px;
        margin-bottom: 25px;
    `}
`

const ResultScreen = styled(animated.div)`
    width: 100%;
    padding: 20px;
    ${media.sm`
        padding: 58px 20px 30px 20px;
        overflow-y: auto;
        height: 100%;
    `}
    ${mediaMin.sm`
        align-items: center;
    `}
`
const UploadForm = styled(ResultScreen)``

const Close = styled.div`
    position: absolute;
    width: 99px;
    height: 99px;
    right: 20px;
    top: 20px;

    background: rgba(2, 32, 34, 0.55);
    border-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    
    cursor: pointer;

    svg {
        transition: transform 0.3s;
    }

    &:hover {
        svg {
            transform: rotate(180deg);
        }
    }

    ${media.md`
        width: 35px;
        height: 35px;
        top: 10px;
        right: 10px;

        svg {
            width: 15px;
            height: 15px;
        }
    `}
`

const SubmitButton = styled.button`
    background: linear-gradient(0deg, #0AB8B6, #0AB8B6), #11C0D0;
    border-radius: 22px;
    font-family: Gilroy, sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #FFFFFF;
    padding: 35px 85px;
    cursor: pointer;
    outline: none;
    border: none;
    margin: 0 auto;
    display: block;

    &:hover {
        opacity: 0.7;
    }

    ${media.sm`
        font-size: 22px;
        line-height: 27px;
        width: 100%;
        padding: 25px;
        margin-bottom: 21px;
    `}
`

const UploaderText = styled.div`
    font-family: Gilroy, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 30px;
    color: #236F76;
    ${media.lg`
        font-size: 22px;
        line-height: 30px;
    `}
    ${media.sm`
        font-size: 16px;
        line-height: 20px;
    `}
`


const Uploader = styled.label`
    width: 100%;
    border: 2px dashed rgb(17 192 208 / 22%);
    border-radius: 40px 40px 200px 200px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 20px 85px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 60px;
    cursor: pointer;
    display: block;

    #upload_photo {
        max-height: 200px;
    }
    ${media.sm`
        border-radius: 10px;

        img {
            max-height: 70px;
            max-width: 70px;
        }
    `}
`
const Container = styled.div`
    max-width: 100%;
    overflow: hidden;
    margin-bottom: 50px;
`
const BackgroundChooser = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    min-height: 190px;
    justify-content: center;
    ${media.sm`
        min-height: 130px;
        margin-bottom: 25px;
    `}
`

const BackgroundItem = styled.div<{ $chosen?: boolean, $src?: string }>`
    background: #386569;
    min-height: 168px;
    min-width: 190px;
    border-radius: 10px;
    flex: none;
    flex-grow: 0;
    margin: 0px 12px;
    border: 6px solid transparent;
    cursor: pointer;

    ${props => props.$chosen && css`
        border: 6px solid #0AB8B6;
    `}

    ${({ $src }) => $src && css`
        background-image: url(${$src});
        background-size: cover;
    `}

    ${media.sm`
        min-height: 113px;
        min-width: 134px;
    `}
`

const ChooseBackgroundText = styled.div`
    font-family: Gilroy, sans-serif;
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
    color: #236F76;
    margin-bottom: 26px;

    ${media.lg`
        font-size: 22px;
        line-height: 30px;
    `}
    ${media.sm`
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 5px;
    `}
`

const Title = styled.div`
    font-family: Gilroy, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 56px;
    line-height: 60px;
    text-align: center;
    color: #E4FCFC;
    margin-bottom: 50px;
    span {
        color: #0AB8B6;
    }

    ${media.lg`
        font-size: 36px;
        line-height: 42px;
    `}

    ${media.sm`
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 21px;
    `}
`

const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;

    ${mediaMin.xl`
        max-width: 1200px;
        width: 100%;
    `}

    
`

const Circle = styled.div`
    width: 1490px;
    height: 1490px;
    border-radius: 50%;
    border: 60px solid #E4FCFC;
    background: radial-gradient(77.82% 77.82% at 50% 50%, #000D0E 0%, #002F33 100%);
    box-sizing: border-box;
    position: absolute;
    ${media.lg`
        width: 1250px;
        height: 1250px;
    `}
    ${media.sm`
        min-height: 100vh;
        max-width: 100vw;
        height: 100%;
        border: none;
        border-radius: 0px;
    `}

`

const CabinWrapper = styled(animated.div)`
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0px;
    left: 0px;
    background: linear-gradient(0deg, rgba(0, 48, 63, 0.83), rgba(0, 48, 63, 0.83));
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 30001;
    ${media.sm`
        min-height: 100vh;
        max-width: 100vw;
        height: 100%;
    `}
`
