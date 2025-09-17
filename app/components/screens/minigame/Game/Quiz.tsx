import {useGameStore} from '@/stores/gameStore';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import formatTime from '../../../../utils/formatTime';
import Box from '../../../Box';
import {Game} from './MiniGame';
import questions from './questions';

function fill(start: number, end: number) {
    const arr: number[] = []
    let temp = start
    while (temp <= end) {
        arr.push(temp)
        temp++;
    }
    return arr
}

const QuizTimer = () => {
    const section = useGameStore(state => state.section)
    const time = useGameStore(state => state.time)
    const setTime = useGameStore(state => state.setTime)
    const setSection = useGameStore(state => state.setSection)
    const currentQuestion = useGameStore(state => state.currentQuestion)
    const pushIncorrectArr = useGameStore(state => state.pushIncorrectArr)

    useEffect(() => {
        if (section !== 'game') return

        if (time >= 120) {
            const incorrect = fill(currentQuestion, questions.length)
            pushIncorrectArr(incorrect)
            setSection('result')
        }

        let interval: NodeJS.Timeout
        interval = setInterval(() => {
            setTime(time + 1);
        }, 1000)

        return () => clearInterval(interval);
    }, [time, section])

    return <Game.Timer>{formatTime(120 - time)}</Game.Timer>
}

const Quiz: React.FC = () => {
    const score = useGameStore(state => state.score)
    const currentQuestion = useGameStore(state => state.currentQuestion)
    const setScore = useGameStore(state => state.setScore)
    const setCurrentQuestion = useGameStore(state => state.setCurrentQuestion)
    const setSection = useGameStore(state => state.setSection)
    const pushIncorrect = useGameStore(state => state.pushIncorrect)

    const question = questions[currentQuestion]

    const handleAnswerQuestion = (truth: boolean) => {
        const nextQuestion = currentQuestion + 1
        if (question.isCorrect === truth) {
            setScore(score + 1)
        } else {
            pushIncorrect(currentQuestion)
        }

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setSection('result')
        }

        // document?.getElementById('quiz_game')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    return (
        <Game.Wrapper>
            <Box $flex $justifyContent="space-between" $mb={30}>
                <QuizTimer/>
                <Game.Score>{score}</Game.Score>
            </Box>
            {question && (
                <Container>
                    <GameQuestion>{question.questionText}</GameQuestion>
                    <QuestionWrapper>
                        <QuestionImage src={question.image}/>
                    </QuestionWrapper>
                </Container>
            )}
            <Game.Controls $flex $justifyContent="space-between" $mt={45}>
                <Game.Button
                    $primary
                    $fullWidth
                    $mr={10}
                    onClick={handleAnswerQuestion.bind(null, true)}
                >
                    Правда
                </Game.Button>
                <Game.Button
                    $default
                    $fullWidth
                    $ml={10}
                    onClick={handleAnswerQuestion.bind(null, false)}
                >
                    Ложь
                </Game.Button>
            </Game.Controls>
        </Game.Wrapper>
    )
}

export default Quiz

const QuestionWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const GameQuestion = styled.div`
  font-family: Gilroy, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 140%;
  color: #000000;
`

const QuestionImage = styled.img`
  max-width: 100%;
  margin: 0 auto;
  display: block;
`