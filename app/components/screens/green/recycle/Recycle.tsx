import React from 'react'
import styled from "styled-components"
import RecycleIntro from "@/components/screens/green/recycle/intro/RecycleIntro"
import RecycleInfo from "@/components/screens/green/recycle/info/RecycleInfo";
import RecycleRules from "@/components/screens/green/recycle/rules/RecycleRules";
import RulesHint from "@/components/screens/green/recycle/hint/RulesHint";
import RecycleGame from "@/components/screens/green/recycle/game/RecycleGame";
import RecycleResult from "@/components/screens/green/recycle/result/RecycleResult";
import GameAppbar from "@/components/shared/game/GameAppbar";
import {GameContainer} from "@/components/shared/game/GameContainer";

const Recycle = () => {
    return (
        <GameWrapper>
            <GameAppbar showText link="/green" />

            <GameContainer>
                <RecycleIntro />
                <RecycleInfo />
                <RecycleRules />
                <RulesHint />
                <RecycleGame />
                <RecycleResult />
            </GameContainer>
        </GameWrapper>
    )
}

export default Recycle

const GameWrapper = styled.div`
  //max-width: 1144px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  padding: 25px;
  
  @media (max-width: 767px) {
    padding: 20px 0;
  }
`