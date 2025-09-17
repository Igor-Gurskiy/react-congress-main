import { useGameStore } from "@/stores/gameStore"
import media from "@/utils/media"
import React from "react"
import { Scrollbars } from 'react-custom-scrollbars-2'
import styled from "styled-components"
import Box from "../../../Box"
import GameModal from "./GameModal"
import questions from "./questions"

const OverviewModal = () => {
    const overview = useGameStore(state => state.overview)
    const incorrect = useGameStore(state => state.incorrect)
    const setOverview = useGameStore(state => state.setOverview)

    const onClose = () => setOverview(false)
    
    return (
        <GameModal open={overview} onClose={onClose}>
            <Header $flex $justifyContent='space-between' $alignItems="center">
                <Title>правильные ответы</Title>
                <Close onClick={onClose}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#00BCD4" />
                        <circle cx="20" cy="20" r="12" fill="white" />
                        <rect x="25.6569" y="12.679" width="2" height="18" transform="rotate(45 25.6569 12.679)" fill="#00BCD4" />
                        <rect x="27.0711" y="25.4069" width="2" height="18" transform="rotate(135 27.0711 25.4069)" fill="#00BCD4" />
                        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" />
                    </svg>
                </Close>
            </Header>
            <Body>
                <Scrollbars
                    style={{ width: '100%', height: '100%' }}
                    // universal
                    autoHeight
                    autoHeightMin={100}
                    autoHeightMax={'calc(100% - 30px)'}
                    autoHide={false}
                    renderView={props => <div {...props} style={{ ...props.style, overflow: 'hidden', overflowY: 'scroll' }}  />}
                    renderTrackVertical={props => <TrackVertical {...props}/>}
                    renderThumbVertical={props => <ThumbVertical {...props}/>}
                >
                    <OverviewList>
                        {questions.map((question, idx) => (
                            <li key={idx}>
                                <QuestionText>
                                    {question.questionText}
                                </QuestionText>
                                <Answer>
                                    <AnswerTitle>{question.isCorrect ? 'ПРАВДА' : 'ЛОЖЬ'}</AnswerTitle>
                                    <AnswerImageWrapper>
                                        <AnswerImage src={question.image} />
                                    </AnswerImageWrapper>
                                    <AnswerDescription>
                                        {question.description}
                                    </AnswerDescription>
                                </Answer>
                            </li>
                        ))}
                    </OverviewList>
                </Scrollbars>
            </Body>
        </GameModal>
    )
}

export default OverviewModal

const ThumbVertical = styled.div`
    background: #00BCD4;
    border-radius: 20px;
`

const TrackVertical = styled.div`
    background: #FFFFFF;
    border: 1px solid #00BCD4;
    box-sizing: border-box;
    border-radius: 20px;
    right: 12px;
    bottom: 2px;
    top: 2px;
    width: 10px !important;
`

const OverviewList = styled.ul`
    li {
        position: relative;
        padding-left: 30px;
        padding-right: 40px;
        
        &::before {
            content: '';
            position: absolute;
            background: #00BCD4;
            width: 13px;
            height: 13px;
            border-radius: 50%;
            top: 10px;
            left: 0px;
        }

        &:not(:first-child) {
            margin-top: 35px;
        }

        ${media.md`
            padding-right: 30px;
        `}
    }
`

const AnswerDescription = styled.div`
    font-family: Gilroy, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 120%;
    color: #000000;

    ${media.md`
        font-size: 13px;
        line-height: 16px;
    `}
`

const AnswerImage = styled.img`
    max-width: 100%;
    margin: 0 auto;
    display: block;
`

const AnswerImageWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`


const AnswerTitle = styled.div`
    font-family: Gilroy, sans-serif;
    font-weight: 800;
    font-size: 28.5px;
    line-height: 35px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #000000;
    ${media.md`
        font-size: 16px;
        line-height: 19px;
    `}
`

const Answer = styled.div`
    margin-top: 25px;
    background: #F3F3F3;
    padding: 45px 50px;

    ${media.md`
        padding: 20px;
    `}
`

const QuestionText = styled.div`
    font-family: Gilroy, sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 140%;
    color: #000000;
    ${media.md`
        font-size: 15px;
        line-height: 18px;
    `}
`

const Body = styled(Box)`
    margin: 30px 0;
    flex-grow: 1;
    height: 100%;
`

const Header = styled(Box)`
    width: 100%;
`

const Title = styled.div`
    font-family: Gilroy, sans-serif;
    font-weight: 800;
    font-size: 48.5px;
    line-height: 59px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #00BCD4;

    ${media.md`
        font-size: 24px;
        line-height: 28px;
    `}
`

const Close = styled.div`
    width: 40px;
    height: 40px;
    cursor: pointer;

    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }
`