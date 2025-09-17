import media, {mediaMin} from '@/utils/media'
import React from 'react'
import {animated, useTransition} from 'react-spring'
import styled, {css} from 'styled-components'
import Button from '../Button'

const TourStep = ({open, currentStep, maxSteps, maxWidth = 880, text, nextStep, skip, ...otherProps}) => {
    const transition = useTransition(open, {
        from: {opacity: 0, transform: 'scale(0.8)'},
        enter: {opacity: 1, transform: 'scale(1)'},
        leave: {opacity: 0, transform: 'scale(1.1)'}
    })

    return transition((style, item) => item ? (
        <StepWrapper style={style} $maxWidth={maxWidth} {...otherProps}>
            <StepNumber>{currentStep}/{maxSteps}</StepNumber>
            <StepText>{text}</StepText>
            <StepControls>
                <Button $fs={36} onClick={nextStep} animated borderRadius="4px"
                        $p="15px 45px">{currentStep === maxSteps ? 'Ок, понятно' : 'Далее'}</Button>
                {currentStep !== maxSteps && <StepSkip onClick={skip}>Пропустить инструкцию</StepSkip>}
            </StepControls>
        </StepWrapper>
    ) : '')
}

const TourMobileStep = ({open, currentStep, maxSteps, text, nextStep, skip, ...otherProps}) => {
    const transition = useTransition(open, {
        from: {opacity: 0, transform: 'scale(0.8)'},
        enter: {opacity: 1, transform: 'scale(1)'},
        leave: {opacity: 0, transform: 'scale(1.1)'}
    })

    return transition((style, item) => item ? (
        <StepWrapper style={style} {...otherProps}>
            <StepNumber>{currentStep}/{maxSteps}</StepNumber>
            <StepText>{text}</StepText>
            <StepControls>
                <Button onClick={nextStep} animated borderRadius="4px"
                        $p="15px 45px">{currentStep === maxSteps ? 'Ок, понятно' : 'Далее'}</Button>
                {currentStep !== maxSteps && <StepSkip onClick={skip}>Пропустить инструкцию</StepSkip>}
            </StepControls>
        </StepWrapper>
    ) : '')
}

export default TourStep


const StepSkip = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
`

const StepControls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  ${StepSkip} {
    margin-left: 24px;
  }

  ${media.md`
        flex-direction: column;
        justify-content: center;

        ${StepSkip} {
            margin-left: 0;
            margin-top: 32px;
            padding: 10px;
        }
    `} @media(orientation: landscape) and (max-height: 767.98 px) {
  flex-direction: row;
  justify-content: flex-start;

  button {
    font-size: 18px;
  }

  ${StepSkip} {
    margin-left: 24px;
    margin-top: 0;
  }
}
`

const StepText = styled.div`
  margin-top: 8px;
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;

  word-break: break-word;

  a {
    outline: none;
    color: #FFFFFF;
    text-decoration: none;
  }

    /* ${media.sm`
        font-size: 20px;
        line-height: 28px;
    `} */
`

const StepNumber = styled.div`
  font-weight: 800;
  font-size: 56px;
  line-height: 69px;
  text-transform: uppercase;
  color: #FFFFFF;

    /* ${media.sm`
        font-size: 36px;
        line-height: 44px;
    `} */
`

type StepWrapperPropsType = {
    $top?: number
    $left?: number
    $right?: number
    $bottom?: number
    $maxWidth?: number
}

const StepWrapper = styled(animated.div)<StepWrapperPropsType>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  z-index: 3001;
    /* ${media.md`
        max-width: 100vw;
        max-width: var(--tour-width);
    `} */
  ${mediaMin.md`
        top: 708px;
        left: 1275px;
        max-width: 880px;
        ${({$top}) => $top && css`top: ${$top}px;`}
        ${({$left}) => $left && css`left: ${$left}px;`}
        ${({$right}) => $right && css`right: ${$right}px;`}
        ${({$bottom}) => $bottom && css`bottom: ${$bottom}px;`}
        ${({$maxWidth}) => $maxWidth && css`max-width: ${$maxWidth}px;`}
    `}

  ${media.md`
        padding: 20px;
        ${({$top}) => $top && css`top: ${$top}px;`}
    `} @media(orientation: landscape) and (max-height: 767.98 px) {
  top: 708px;
  left: 1275px;
  max-width: 880px;
  ${({$top}) => $top && css`top: ${$top}px;`}
  ${({$left}) => $left && css`left: ${$left}px;`}
  ${({$right}) => $right && css`right: ${$right}px;`}
  ${({$bottom}) => $bottom && css`bottom: ${$bottom}px;`}
}
`