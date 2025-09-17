import Box from '@/components/Box'
import media from '@/utils/media'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const StepOne = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' })

    return (
        <Box>
            <Title>день диагностики<br />меланомы</Title>

            <FactsWrapper>
                <Fact>
                    <FactNumber>14</FactNumber>
                    <FactDescription>лет в России</FactDescription>
                </Fact>
                <Fact>
                    <FactNumber>165 000</FactNumber>
                    <FactDescription>пациентов прошли<br />диагностику</FactDescription>
                </Fact>
                <Fact>
                    <FactNumber>2 767</FactNumber>
                    <FactDescription>выявлено подозрений<br />на меланому</FactDescription>
                </Fact>
            </FactsWrapper>

            <SponsorsWrapper>
                <Sponsor>
                    {isMobile && <img src="assets/images/lrp/modal/sponsor1_small.png" />}
                    {!isMobile && <img src="assets/images/lrp/modal/sponsor1.png" />}
                </Sponsor>
                <Sponsor>
                    {isMobile && <img src="assets/images/lrp/modal/sponsor2_small.png" />}
                    {!isMobile && <img src="assets/images/lrp/modal/sponsor2.png" />}
                </Sponsor>
                <Sponsor>
                    {isMobile && <img src="assets/images/lrp/modal/sponsor3_small.png" />}
                    {!isMobile && <img src="assets/images/lrp/modal/sponsor3.png" />}
                </Sponsor>
            </SponsorsWrapper>
        </Box>
    )
}

export default StepOne


const FactsWrapper = styled.div`
    padding: 36px 40px;

    ${media.sm`
        padding: 32px 16px;
    `}
`

const FactDescription = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.01em;
    color: #FFFFFF;

    ${media.md`
        font-size: 32px;
        line-height: 38px;
    `}

    ${media.sm`
        font-size: 20px;
        line-height: 24px;
    `}
`

const FactNumber = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 80px;
    line-height: 98px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-right: 16px;

    ${media.md`
        font-size: 64px;
        line-height: 78px;
    `}

    ${media.sm`
        font-size: 48px;
        line-height: 59px;
    `}
`

const Fact = styled.div`
    display: flex;
    align-items: center;

    ${media.sm`
        align-items: flex-start;
        flex-direction: column;
        margin: 10px 0;
    `}
`


const SponsorsWrapper = styled.div`
    display: flex;
    padding: 20px 40px 40px 40px;

    ${media.sm`
        flex-direction: column;
    `}
`

const Sponsor = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        max-width: 100%;

        ${media.sm`
            margin: 10px;
        `}
    }
`


const Title = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 50px;
    line-height: 115%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 0px 40px;

    ${media.md`
        font-size: 32px;
        line-height: 115%;
        padding: 16px 16px 0px 16px;
    `}
`