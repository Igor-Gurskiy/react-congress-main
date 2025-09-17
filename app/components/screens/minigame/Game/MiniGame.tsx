import {useGameStore} from "@/stores/gameStore";
import media from "@/utils/media";
import React from 'react';
import styled, {css} from "styled-components";
import Box from "../../../Box";
import GameResult from './GameResult';
import Intro from "./Intro";
import PreloadGameImages from './PreloadGameImages';
import Quiz from './Quiz';

const MiniGame = () => {
    const section = useGameStore(state => state.section)

    return (
        <Game>
            <PreloadGameImages/>
            {section === 'intro' && <Intro/>}
            {section === 'game' && <Quiz/>}
            {section === 'result' && <GameResult/>}
        </Game>
    )
}

export default MiniGame


const GameControls = styled(Box) <{ $start?: boolean }>`
  margin-top: 30px;
  margin-bottom: 20px;

  ${({$start}) => $start && css`
    margin-top: 110px;

    ${media.md`
            margin-top: 75px;
        `}
  `}
`

const GameTitle = styled.h3`
  font-family: Gilroy, sans-serif;
  font-weight: 800;
  font-size: 48.5px;
  line-height: 59px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;

  ${media.md`
        font-size: 24px;
        line-height: 29px;
    `}
`

const GameDescription = styled.div`
  font-family: Gilroy, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 140%;
  color: #000000;
  margin-top: 50px;
  flex-grow: 1;

  p {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }

  ${media.md`
        font-size: 19px;
        line-height: 150%;
        margin-top: 30px;
    `}
`

type GameButtonPropsType = {
    $fullWidth?: boolean
    $primary?: boolean
    $default?: boolean
    $mt?: number
    $mb?: number
    $mr?: number
    $ml?: number
    $m?: string
}

const GameButton = styled.button<GameButtonPropsType>`
  box-shadow: 0px 10.6667px 21.3333px rgba(0, 0, 0, 0.15), 0px 1.33333px 2.66667px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  padding: 25px;
  outline: none;
  border: none;
  cursor: pointer;

  font-family: Gilroy, sans-serif;
  font-weight: 800;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  ${({$primary}) => $primary && css`
    background: #01C0D9;
    color: #FFFFFF;
  `}

  ${({$default}) => $default && css`
    background: #FFFFFF;
    color: #262626;
    font-weight: 300;
  `}

  ${({$fullWidth}) => $fullWidth && css`
    width: 100%;
  `}

  ${({$mt}) => $mt && css`
    margin-top: ${$mt}px;
  `}
  ${({$mb}) => $mb && css`
    margin-bottom: ${$mb}px;
  `}
  ${({$mr}) => $mr && css`
    margin-right: ${$mr}px;
  `}
  ${({$ml}) => $ml && css`
    margin-left: ${$ml}px;
  `}
  ${({$m}) => $m && css`
    margin: ${$m};
  `}

  ${media.md`
        font-size: 16px;
        line-height: 19px;
        padding: 15px;
    `}
`

const Content = styled.div`
  max-width: 515px;
  width: 100%;
  max-height: 720px;
  height: 100%;

  ${media.sm`
        max-width: 315px;
        height: 100%;
    `}
`

const GameWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const GameTimer = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #01C0D9;
  box-shadow: 0px 3px 13px rgba(0, 0, 0, .25);
  border-radius: 5px;
  font-family: Gilroy, sans-serif;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #FFFFFF;
  font-weight: 700;

  ${media.sm`
        width: 74px;
        height: 26px;
        font-size: 13px;
        line-height: 16px;
    `}
`

const GameScore = styled(GameTimer)`
  background: #FFFFFF;
  color: #00ACC2;
`

export const Game = ({children, ...otherProps}) => {
    return (
        <Content {...otherProps}>
            {children}
        </Content>
    )
}

Game.Title = GameTitle
Game.Description = GameDescription
Game.Button = GameButton
Game.Controls = GameControls
Game.Wrapper = GameWrapper
Game.Timer = GameTimer
Game.Score = GameScore
