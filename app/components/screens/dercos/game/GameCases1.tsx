import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

import pancelIcon from '/public/assets/images/dercos/linegame/pancel.svg'
import crossIcon from '/public/assets/images/dercos/linegame/cross.svg'
import questionIcon from '/public/assets/images/dercos/linegame/question.svg'

import CaseOneBg from '/public/assets/images/dercos/linegame/case1.png'
import CaseTwoBg from '/public/assets/images/dercos/linegame/case2.png'
import CaseThreeBg from '/public/assets/images/dercos/linegame/case3.png'
import CaseFourBg from '/public/assets/images/dercos/linegame/case4.png'
import CaseFiveBg from '/public/assets/images/dercos/linegame/case5.png'

const GameCases = () => {
    return (
        <>
            <CasesContainer>
                <CaseWrapper>
                    <CaseContent>
                        <img className="cross-icon" src={crossIcon.src} alt=""/>
                        <img className="pancel-icon" src={pancelIcon.src} alt=""/>{' '}
                        <img className="question-icon" src={questionIcon.src} alt=""/>
                        <img className="case__bg" src={CaseOneBg.src} alt=""/>
                        <p>изучить</p>
                    </CaseContent>
                </CaseWrapper>
                <CaseWrapper>
                    <CaseContent>
                        <img className="cross-icon" src={crossIcon.src} alt=""/>
                        <img className="pancel-icon" src={pancelIcon.src} alt=""/>
                        <img className="question-icon" src={questionIcon.src} alt=""/>
                        <img className="case__bg" src={CaseTwoBg.src} alt=""/>
                        <p>изучить</p>
                    </CaseContent>
                </CaseWrapper>
                <CaseWrapper>
                    <CaseContent>
                        <img className="cross-icon" src={crossIcon.src} alt=""/>
                        <img className="pancel-icon" src={pancelIcon.src} alt=""/>
                        <img className="question-icon" src={questionIcon.src} alt=""/>
                        <img className="case__bg" src={CaseThreeBg.src} alt=""/>
                        <p>изучить</p>
                    </CaseContent>
                </CaseWrapper>
                <CaseWrapper>
                    <CaseContent>
                        <img className="cross-icon" src={crossIcon.src} alt=""/>
                        <img className="pancel-icon" src={pancelIcon.src} alt=""/>{' '}
                        <img className="question-icon" src={questionIcon.src} alt=""/>
                        <img className="case__bg" src={CaseFourBg.src} alt=""/>
                        <p>изучить</p>
                    </CaseContent>
                </CaseWrapper>
                <CaseWrapper>
                    <CaseContent>
                        <img className="cross-icon" src={crossIcon.src} alt=""/>
                        <img className="pancel-icon" src={pancelIcon.src} alt=""/>
                        <img className="question-icon" src={questionIcon.src} alt=""/>
                        <img className="case__bg" src={CaseFiveBg.src} alt=""/>
                        <p>изучить</p>
                    </CaseContent>
                </CaseWrapper>
            </CasesContainer>
        </>
    )
}

export default GameCases

const CaseContent = styled.div`
  position: relative;
  z-index: 1;
`

const CasesContainer = styled.div`
  flex-grow: 1;
  position: relative;
`

const CaseWrapper = styled.div`
  position: relative;
  // Фон черные круги
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 176px;
    height: 176px;

    max-width: 21vh;
    max-height: 22vh;

    background-color: black;
    /* opacity: 0.2; */
    border-radius: 50%;
    top: 46%;
    transform: translateY(-50%);
    ${media.lg`	
			/* top: 154px; */
						top: 46%;

			width: 163px;
			height: 163px;		
		`}
    ${media.md`	
		/* top: 130px; */
		top: 46%;

			width: 153px;
			height: 153px;	
		`}
    ${media.phone_xl`	
			// top: 108px;
			top: 46%;

			width: 125px;
			height: 125px;
		`}
    ${media.sm`	
			top: 46%;
			width: 76px;
			height: 76px;
		`}
  }

  // Левый черный круг
  &::before {
    left: 48px;
    ${media.lg`	
		left: 40px;
		`}
    ${media.md`	
		left: 25px;
		`}
    ${media.phone_xl`	
			left: 18px;
		`}
    ${media.sm`	
		left: 10px;
		`}
  }

  // Правый черный круг
  &::after {
    right: 13px;
    ${media.md`	
		right: 0px;
		`}
    ${media.phone_xl`	
			right: -5px;
		`}
    ${media.sm`	
		right: 6px;

		`}
  }

  //Контент карточки, карандаш, крестик
  ${CaseContent} {
    .pancel-icon {
      position: absolute;
      left: 3px;
      top: 38%;
      cursor: pointer;
      width: 48px;
      height: 48px;
      max-width: 10vh;
      max-height: 10vh;

      ${media.lg`	
			max-width: 60px;
			max-height: 60px;		
			`}
      ${media.md`	
			top: 37%;
			max-width: 50px;
			max-height: 50px;	
		`}
      ${media.phone_xl`	
				top: 37%;
			max-width: 45px;
			max-height: 45px;	
		`}
      ${media.sm`	
			top: 33%;
			left: -6px;
		`}
    }

    .cross-icon {
      // Крестик появляется когда линия проведена
      display: none;
      position: absolute;
      left: 3px;
      top: 39%;
      cursor: pointer;
      max-width: 80px;
      max-height: 80px;
    }

    // Иконка вопроса
    .question-icon {
      display: none;
      position: absolute;
      right: 10%;
      top: 41%;
      cursor: pointer;
      ${media.sm`	
			display: block;
		`}
    }

    //Карточка
    .case__bg {
      height: 360px;
      max-height: 50vh;
      ${media.lg`	
			height: 320px;
		`}
      ${media.md`	
			height: 270px;
		`}
      ${media.phone_xl`	
			height: 220px;
		`}
      ${media.sm`	
			height: 180px;

		`}
        /* ${media.phone`	
			max-height: 140px;
		`} */
    }
  }

  // Расположение карточек
  &:nth-child(1) {
    position: absolute;
    top: 0%;
    right: 76%;

    ${media.lg`	
		right: 76%;
			`}
    ${media.md`	
		top: 3%;
		right: 70%;
		`}
  }

  &:nth-child(2) {
    position: absolute;
    top: 10%;
    right: 9%;
    ${media.lg`	
		right: 4%;
			`}
    ${media.md`	
		top: 18%;
		`}
  }

  &:nth-child(3) {
    position: absolute;
    top: 33%;
    right: 41%;

    ${media.md`	
		top: 42%;
		right: 45%;
		`}
  }

  &:nth-child(4) {
    position: absolute;
    bottom: -3%;
    right: 73%;
    ${media.giant`	
		bottom: -3%;
			`}
    ${media.lg`	
		bottom: -3%;
		right: 86%;
			`}
    ${media.md`	
		bottom: -3%;
		right: 90%;
		`}
  }

  &:nth-child(5) {
    position: absolute;
    bottom: -3%;
    right: 9%;
    ${media.giant`	
		bottom: -3%;
			`}
    ${media.lg`	
		bottom: -3%;
			right: 4%;
		`}
    ${media.md`	
		bottom: -3%;
		`}
  }

  // Ссылка "Изучить"
  ${CaseContent} p {
    color: #fff;
    text-align: center;
    font-size: 1.5vh;
    font-weight: 600;
    letter-spacing: 0.064px;
    text-transform: uppercase;
    position: absolute;
    right: 5.5%;
    top: 43%;
    cursor: pointer;
    ${media.lg`	
		top: 43%;
		right: 6%;
		`}
    ${media.md`	
		top: 42%;
		right: 1%;
		`}
    ${media.phone_xl`	
				font-size: 1.4vh;

			top: 41%;
			right: -3px;
		`}
    ${media.sm`	
			display: none;
		`}
  }
`
