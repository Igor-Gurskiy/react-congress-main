import {API} from '@/api';
import {EventsEnum} from '@/api/tracker';
import Box from '@/components/Box';
import Modal from '@/components/Modal';
import ScrollbarsBody from '@/components/ScollbarsBody';
import useWindowSize from '@/hooks/useWindowSize';
import media from '@/utils/media';
import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import Controls from './Controls';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const steps = [<StepTwo/>, <StepOne/>, <StepThree/>, <StepFour/>]

const MissionThreeModal = ({close}) => {

    const [width, height] = useWindowSize()
    const [step, setStep] = useState(0)

    const nextStep = () => {
        const next = step + 1
        if (next >= steps.length) {
            setStep(0)
            return
        }
        setStep(next)

    }
    const prevStep = () => {
        const prev = step - 1
        if (prev < 0) {
            setStep(steps.length - 1)
            return
        }
        setStep(prev)
    }

    const renderStep = (currentStep) => steps[currentStep]

    useEffect(() => {
        setStep(0)
        API.tracker.sendEvent(EventsEnum.lrpMissionVisit)
    }, [])


    return (
        <Modal open={true} onClose={close} maxWidth={1024}>
            <ScrollbarsBody>
                <Wrapper $fullWidth>
                    <Main $step={step}>
                        <Controls step={step} onClose={close} prevStep={prevStep} nextStep={nextStep}
                                  absolute={step != 0}/>
                        {renderStep(step)}
                    </Main>
                </Wrapper>
            </ScrollbarsBody>
        </Modal>
    )
}

export default MissionThreeModal

const Main = styled.div<{ $step?: number }>`
  z-index: 11;
  border-radius: 4px;
  max-width: 1024px;

  ${({$step}) => {
    switch ($step) {
      case 1: {
        return css`
          background: url(assets/images/lrp/modal/modal3.png);
          background-position: right top;
          background-repeat: no-repeat;
          background-size: cover;
          padding-top: 140px;
          ${media.sm`
                            padding-top: 80px;
                            background-position: 70% top;
                        `}
        `
      }
      case 0: {
        return css`
          background: #fff;
        `
      }
      case 2: {
        return css`
          background: #fff;
          padding-top: 100px;
          ${media.sm`
                            padding-top: 60px;
                        `}
        `
      }
      case 3: {
        return css`
          background: url(assets/images/lrp/modal/modal7.png);
          background-position: right top;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          padding-top: 140px;
          ${media.sm`
                            padding-top: 0px;
                            background: #71C9ED;
                        `}
        `
      }
      default:
        return
    }
  }}
`

const Wrapper = styled(Box)`
  border-radius: 4px;
  max-width: 1024px;
`
