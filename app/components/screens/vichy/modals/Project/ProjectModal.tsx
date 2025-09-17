import { API } from '@/api';
import { EventsEnum } from '@/api/tracker';
import Box from '@/components/Box';
import Controls from '@/components/screens/lrp/modals/MissionThree/Controls';
import Modal from '@/components/Modal';
import ScrollbarsBody from '@/components/ScollbarsBody';
import { useVichyModalStore } from '@/stores/vichyModalStore';
import media from '@/utils/media';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const steps = [<StepOne />, <StepTwo />, <StepThree />, <StepFour />]

const ProjectOneModal = () => {
    const project = useVichyModalStore(state => state.project)
    const setProject = useVichyModalStore(state => state.setProject)
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
        if (project) {
            setStep(0)
            API.tracker.sendEvent(EventsEnum.vichyMissionVisit)
        }
    }, [project])

    const onCloseHandler = () => setProject(false)

    return (
        <Modal open={project} onClose={onCloseHandler} maxWidth={1024}>
            <ScrollbarsBody>
                <Wrapper $fullWidth>
                    <Main $step={step}>
                        <Controls prevStep={prevStep} step={1} onClose={onCloseHandler} nextStep={nextStep} />
                        {renderStep(step)}
                    </Main>
                </Wrapper>
            </ScrollbarsBody>
        </Modal>
    )
}

export default ProjectOneModal

const Main = styled.div<{ $step?: number }>`
    z-index: 11;
    border-radius: 4px;
    max-width: 1024px;

    background: #000;
`

const Wrapper = styled(Box)`
    border-radius: 4px;
    max-width: 1024px;
    height: 100%;
`

const Body = styled.div`
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    height: auto;
    margin-bottom: 20px;
    
    ${media.md`
        margin: 0;
        display: block;
    `}
`