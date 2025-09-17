import React from "react";
import styled from "styled-components";
import media from "@/utils/media";

const SchoolSteps = () => {
    return (
        <Wrapper>
            <Container>
                <CourseBadge>Механика курса</CourseBadge>

                <StepsContainer>
                    <Step>
                        <StepNum>1</StepNum>
                        <StepName>Базовый курс</StepName>
                        <StepDesc>4 видеолекции в онлайн-формате</StepDesc>
                        <NextStep>
                            <svg width="18" height="65" viewBox="0 0 18 65" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 64.5L17 32.5L1 0.5" stroke="black"/>
                            </svg>
                        </NextStep>
                    </Step>
                    <Step>
                        <StepNum>2</StepNum>
                        <StepName>30 мест</StepName>
                        <StepDesc>разыгрываются случайным образом среди
                            участников, прослушавших лекции Базового курса и успешно сдавших экзамен.
                        </StepDesc>
                        <NextStep>
                            <svg width="18" height="65" viewBox="0 0 18 65" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 64.5L17 32.5L1 0.5" stroke="black"/>
                            </svg>
                        </NextStep>
                    </Step>
                    <Step>
                        <StepNum>3</StepNum>
                        <StepName>Продвинутый курс</StepName>
                        <StepDesc>Двухдневный Продвинутый курс проходит в очном
                            формате в обучающем центре Школы трихологии Татьяны Силюк в
                            Санкт-Петербурге.
                        </StepDesc>
                    </Step>
                </StepsContainer>
            </Container>
        </Wrapper>
    )
}

export default SchoolSteps

const Wrapper = styled.div`
  background: #5BB2A8;
`

const Container = styled.div`
  padding: 32px 16px 32px;
  gap: 8px;
  max-width: 825px;
  margin: 0 auto;
  position: relative;

  ${media.md`
    padding: 0 0 32px 0;
  `}
`

const CourseBadge = styled.div`
  position: absolute;
  top: -16px;
  left: 0;

  padding: 8px 16px;
  height: 35px;
  background: #000000;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  border-radius: 500px;
  color: #FFFFFF;

  ${media.md`
       left: 20px;
  `}
`

const StepsContainer = styled.div`
  display: flex;
  //padding: 32px 0 16px;

  ${media.md`
       flex-direction: column;
  `}
`

const Step = styled.div`
  padding: 0 16px;
  text-align: center;
  flex-basis: 33.3333%;
  position: relative;

  ${media.md`
    flex-basis: 100%;
    padding-bottom: 30px;
    padding-top: 30px;
  `}
`


const StepNum = styled.div`
  font-weight: 300;
  font-size: 64px;
  line-height: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
`

const StepName = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  margin: 8px 0;
`

const StepDesc = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: #FFFFFF;
`

const NextStep = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateX(50%) translateY(-50%);

  ${media.md`
      top: 100%;
      left: 50%;
      right: unset;
      
      transform: translateX(-50%) translateY(-50%) rotate(90deg);
  `}
`
