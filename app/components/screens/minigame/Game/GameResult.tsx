import {API} from '@/api';
import {EventsEnum} from '@/api/tracker';
import {useGameStore} from '@/stores/gameStore';
import media from '@/utils/media';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';
import styled from 'styled-components';
import Box from '../../../Box';
import {Game} from './MiniGame';
import OverviewModal from './OverviewModal';
import questions from './questions';

const getWord = (num: number) => {
    if (num === 1) {
        return 'ошибку'
    }
    if (num >= 2 && num <= 4) {
        return 'ошибки'
    }
    if (num >= 5 && num <= 10) {
        return 'ошибок'
    }
    return 'ошибок'
}

const GameResult = () => {
    const router = useRouter()
    const score = useGameStore(state => state.score)
    const resetGame = useGameStore(state => state.resetGame)
    const setOverview = useGameStore(state => state.setOverview)

    const isMobile = useMediaQuery({query: '(max-width: 767.98px)'})

    const handleMainRedirect = () => {
        router.push('/')
    }

    const handlePlayAgain = () => {
        resetGame()
    }

    const mistakes = questions.length - score

    useEffect(() => {
        API.tracker.sendEvent(EventsEnum.gamePoints, `params[score]=${score}`)
    }, [])

    return (
        <>
            <Game.Wrapper>
                <Box $flex $alignItems="center" $justifyContent="center">
                    <Game.Title>Результат</Game.Title>
                </Box>
                <Score $flex $justifyContent="center" $alignItems="center" $mt={40}>
                    <Box $flex $alignItems="center" $justifyContent="center" $direction="column">
                        <Box>
                            <ResultNumber>{score}</ResultNumber>
                        </Box>

                        <Box>
                            <Result>
                                {[1].includes(score) && 'балл'}
                                {[2, 3, 4].includes(score) && 'балла'}
                                {[5, 6, 7, 8, 9, 10].includes(score) && 'баллов'}
                            </Result>
                        </Box>

                        <ResultDescription>
                            <ErrorCounter>Вы допустили {mistakes} {getWord(mistakes)}</ErrorCounter>
                            {mistakes > 0 && <MoreDetailsLink onClick={setOverview.bind(null, true)}>правильные
                                ответы</MoreDetailsLink>}
                        </ResultDescription>
                    </Box>
                </Score>

                <Game.Controls>
                    <Game.Button
                        $primary
                        $fullWidth
                        onClick={handlePlayAgain}
                    >
                        Играть снова
                    </Game.Button>
                    <Game.Button
                        $default
                        $fullWidth
                        $mt={15}
                        onClick={handleMainRedirect}
                    >
                        На главную
                    </Game.Button>
                </Game.Controls>

                {!isMobile && <OverviewModal/>}
            </Game.Wrapper>
        </>
    )
}

export default GameResult

const ResultDescription = styled(Box)`
  /* margin: 35px 0; */
  margin-top: 50px;
`

const MoreDetailsLink = styled.button`
  margin-top: 15px;
  background: #01C0D9;
  border: none;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 15px 20px;
  cursor: pointer;
  outline: none;
  width: 100%;

  font-weight: 800;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #fff;


  ${media.md`
        font-size: 16px;
        line-height: 19px;
    `}
`

const ErrorCounter = styled.div`
  font-family: Gilroy, sans-serif;
  font-style: normal;
  font-weight: 300;
  text-align: center;
  letter-spacing: 0.02em;
  color: rgba(38, 38, 38, 0.5);

  ${media.md`
        font-size: 16px;
        line-height: 19px;
    `}
`

const Score = styled(Box)`
  width: 100%;
  padding: 40px 20px;
  background: #FFFFFF;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25), 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

`

const Result = styled.div`
  font-family: Gilroy, sans-serif;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #01C0D9;

  ${media.md`
        font-size: 24px;
        line-height: 29px;
    `}
`

const ResultNumber = styled.div`
  font-family: Gilroy, sans-serif;
  font-weight: 800;
  font-size: 84px;
  line-height: 103px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #01C0D9;

`