import Box from '@/components/Box';
import media from '@/utils/media';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const StepFour = () => {

    const isPhone = useMediaQuery({ query: '(max-width: 575.98px)' })
    return (
        <StepWrapper>
            {isPhone ? (
                <MobileBackground>
                    <Title>EFFACLAR SPOTSCAN</Title>
                    <Innovative><b>инновационный</b><br />сервис</Innovative>
                </MobileBackground>
            ) : (
                <div>
                    <Title>EFFACLAR SPOTSCAN</Title>
                    <Diagnostics>
                        <div>
                            ПЕРВАЯ<br />ОНЛАЙН-ДИАГНОСТИКА АКНЕ
                        </div>
                    </Diagnostics>
                </div>
            )}
            

            {isPhone && (
                <Diagnostics>
                    ПЕРВАЯ ОНЛАЙН-<br />ДИАГНОСТИКА АКНЕ
                </Diagnostics>
            )}

            <ItemsWrapper>
                <Item>
                    <Icon src="assets/images/lrp/modal/ic1.png" />
                    <Text>Повышает<br /><b>информированность</b><br />о проблеме акне</Text>
                </Item>
                <Item>
                    <Icon src="assets/images/lrp/modal/ic2.png" />
                    <Text>Своевременно<br />направляет к<br /><b>дерматологу</b></Text>
                </Item>
                <Item>
                    <Icon src="assets/images/lrp/modal/ic3.png" />
                    <Text>Предлагает<br /><b>оптимальный</b> уход</Text>
                </Item>
                <Item>
                    <Icon src="assets/images/lrp/modal/ic4.png" />
                    <Text>Помогает отследить<br /><b>результаты</b></Text>
                </Item>
            </ItemsWrapper>

            {isPhone ? (
                <Partner>ПАРТНЕР В РЕКОМЕНДАЦИИ СРЕДСТВ ДЛЯ ПАЦИЕНТОВ С АКНЕ</Partner>
            ) : (
                <Bottom>
                    <Innovative><b>инновационный</b><br />сервис</Innovative>
                    <PartnerWrapper>
                        <Partner>ПАРТНЕР В РЕКОМЕНДАЦИИ СРЕДСТВ ДЛЯ ПАЦИЕНТОВ С АКНЕ</Partner>
                    </PartnerWrapper>
                </Bottom>
            )}
        </StepWrapper>
    )
}

export default StepFour

const StepWrapper = styled(Box)`
    overflow: hidden;
`

const MobileBackground = styled.div`
    background: url(assets/images/lrp/modal/mobile_modal4.png);
    background-position: left top;
    background-repeat: no-repeat;
    padding-top: 140px;
    min-height: 488px;
    position: relative;
`

const PartnerWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: -20px;
`

const Bottom = styled.div`
    padding: 40px;
    margin-bottom: 20px;
    margin-top: -40px;
`

const Icon = styled.img``

const Text = styled.div`
    min-width: 247px;

    ${media.sm`
        font-size: 16px;
        line-height: 100%;
    `}
`

const Partner = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    max-width: 430px;

    margin-top: 20px;

    ${media.sm`
        margin-top: -16px;
        margin-bottom: 40px;
        padding: 16px;
    `}
`

const Innovative = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 40px;
    line-height: 115%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #FFFFFF;

    ${media.sm`
        position: absolute;
        left: 16px;
        bottom: 60px;
        font-size: 24px;
        line-height: 115%;
    `}
`

const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`

const Item = styled.div`
    background: linear-gradient(270deg, #009EE3 53.46%, rgba(0, 158, 227, 0) 80.24%);
    max-width: 584px;
    width: 100%;
    text-align: left;
    display: flex;

    justify-content: flex-end;

    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0.01em;
    color: #FFFFFF;

    padding: 10px 40px 10px 10px;
    margin-bottom: 16px;
    ${Icon} {
        margin-right: 16px;
    }

    ${media.sm`
        justify-content: flex-start;
        background: linear-gradient(270deg, #009EE3 70.46%, rgba(0, 158, 227, 0) 100.24%);
    `}
`

const Diagnostics = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 20px;
    line-height: 120%;
    color: #FFFFFF;

    display: flex;
    justify-content: flex-end;

    padding-right: 60px;
    margin: 0px 0px 20px 0px;

    ${media.sm`
        padding: 16px;
        justify-content: flex-start;
        margin: 0;
    `}
`

const Title = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 50px;
    line-height: 115%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: 0px 0px 10px rgba(46, 46, 46, 0.2);
    padding-left: 40px;

    max-width: 592px;
    width: 100%;

    /* margin-top: -40px; */

    ${media.sm`
        font-size: 32px;
        line-height: 115%;
        color: #FFFFFF;
        position: absolute;
        left: 16px;
        top: 90px;
        padding: 0;
        margin-top: 0;
    `}

`