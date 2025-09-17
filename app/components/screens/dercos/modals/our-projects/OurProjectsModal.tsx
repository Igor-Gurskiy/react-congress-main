import React, {useState} from "react";
import ModalClose, {ModalCloseWrapper} from "@/components/shared/modal/ModalClose";
import SchoolModal from "@/components/screens/dercos/modals/our-projects/school/SchoolModal";
import styled, {css} from "styled-components";
import HairDayModal from "@/components/screens/dercos/modals/our-projects/hair-day/HairDayModal";
import media from "@/utils/media";
import useWindowSize from "@/hooks/useWindowSize";
import useClickOutside from "@/hooks/useClickOutside";

const OurProjectsModal = ({close}) => {
    const [step, setStep] = useState(1)
    const [width, height] = useWindowSize()
    const scale = width > 767.98 ? Math.min(width / 1024, (height - 140) / 780) : 1
    const scaleBy = scale >= 1 ? 1 : scale

    const isDesktop = width > 1023

    const handleNext = () => {
        if (step === 2) {
            return
        }

        setStep(2)
    }

    const handlePrev = () => {
        if (step === 1) {
            return
        }

        setStep(1)
    }

    const nodeRef = useClickOutside(() => close())

    return (
        <Wrapper>
            <Content style={{maxHeight: height}} ref={nodeRef}>
                <ModalCloseWrapper>
                    <ModalClose close={close}/>
                </ModalCloseWrapper>
                <BodyWrapper $scale={scaleBy}>
                    <SchoolModal step={step}/>
                    <HairDayModal step={step}/>

                    <ControlsWrapper>
                        {isDesktop ? (
                            <>
                                <ArrowLeft onClick={handlePrev}>
                                    {step === 2 && <Control/>}
                                </ArrowLeft>

                                <ArrowRight onClick={handleNext}>
                                    {step === 1 && <Control/>}
                                </ArrowRight>
                            </>
                        ) : (
                            <MobileControls>
                                <Back onClick={close}>
                                    <Control/>
                                    <BackText>Назад</BackText>
                                </Back>

                                <ControlsContainer>
                                    <ArrowLeft onClick={handlePrev}>
                                        <Arrow/>
                                    </ArrowLeft>

                                    <IndicatorsWrapper>
                                        <Circle $active={step === 1}/>
                                        <Circle $active={step === 2}/>
                                    </IndicatorsWrapper>

                                    <ArrowRight onClick={handleNext}>
                                        <Arrow/>
                                    </ArrowRight>
                                </ControlsContainer>
                            </MobileControls>
                        )}

                    </ControlsWrapper>
                </BodyWrapper>
            </Content>
        </Wrapper>
    )
}

export default OurProjectsModal

const ControlsContainer = styled.div`
  display: flex;
`

const Circle = styled.div<{ $active?: boolean }>`
  width: 3px;
  height: 3px;
  background: #B9C9D7;
  border-radius: 50%;
  margin: 2px;

  ${({$active}) => $active && css`
    background: #003056;
    border: 1px solid #B8C9D7;
    width: 5px;
    height: 5px;
  `}
`

const IndicatorsWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Arrow = () => {
    return (
        <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.33093 12.1054L0.75 6.69355L6.33093 1.28174" stroke="#003056" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>

    )
}

const CWrapper = styled.div``

const MobileControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const BackText = styled.div`
  margin-left: 8px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #1F1F1F;
`

const Back = styled.div`
  display: flex;
  align-items: center;
`

const BodyWrapper = styled.div<{ $scale?: number }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  transform-origin: top;

  ${({$scale}) => $scale && css`
    transform: scale(${$scale});
  `}

  ${media.lg`
        padding-top: 72px;
  `}
`

const ControlsWrapper = styled.div`
  position: absolute;
  top: 110px;
  left: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 111;

  ${media.lg`
       top: 0;
       left: 0;
       right: 0;
       background: #fff;
       height: 72px;
       padding: 0 16px;
  `}
`


const ArrowLeft = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  padding: 12px;

  ${media.lg`
        padding: 12px;
  `}
`

const ArrowRight = styled.div`
  display: flex;
  flex-shrink: 0;
  transform: rotate(180deg);
  cursor: pointer;

  ${media.lg`
        padding: 12px;
  `}
`

const Control = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3309 17.1054L8.75 11.6936L14.3309 6.28174" stroke="#2C435F" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#2C435F"/>
        </svg>

    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  overflow: hidden;
`