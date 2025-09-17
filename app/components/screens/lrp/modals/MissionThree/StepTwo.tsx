import Box from "@/components/Box";
import media from "@/utils/media";
import React from "react";
import styled from 'styled-components';

const StepTwo = () => {
    return (
        <StepWrapper $flex>
            <ImageWrapper $flex />
            <ContentWrapper $flex>
                <Title>#КОЖА БОЛЬШЕ ЧЕМ КОЖА –</Title>
                <Desc>новый проект марки<br />La Roche-Posay, посвященный поддержке людей, страдающих заболеваниями кожи</Desc>
                <Count>
                    <img src="assets/images/lrp/modal/number.png" />
                </Count>
                <CountText>
                    млрд ЛЮДЕЙ  В МИРЕ Страдают дерматозами
                </CountText>
                <Content>
                    Мы знаем, что порой проблемы с кожей могут стать источником дискомфорта, стресса и могут изменить повседневную жизнь. Именно поэтому совместно с дерматологами мы разрабатываем эффективные решения, призванные улучшить качество жизни.
                </Content>
            </ContentWrapper>
        </StepWrapper>
    )
}

export default StepTwo

const ImageWrapper = styled(Box)`
    width: 60%;
    background: url(assets/images/lrp/modal/modal4.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    border-radius: 4px 0 0 4px;
`

const ContentWrapper = styled(Box)`
    flex-direction: column;
    padding: 20px 30px 20px 10px;
    width: 40%;

    ${media.md`
        padding: 16px 40px 40px 40px;
    `}
`

const Count = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px 0;
`

const StepWrapper = styled(Box)`

    ${media.md`
        flex-direction: column;

        ${ImageWrapper} {
            background: url(assets/images/lrp/modal/modal5.png);
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 300px;
            border-radius: 4px 4px 0 0;
        }

        ${ContentWrapper} {
            width: 100%;

            ${Count} {
                img {
                    max-height: 125px;
                }
            }
        }
    `}

    ${media.sm`
        ${ImageWrapper} {
            background: url(assets/images/lrp/modal/modal6.png);
            background-size: cover;
            background-position: center;
            height: 320px;
        }
    `}
`

const Content = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #000000;
    margin-top: 24px;

    ${media.md`
        margin-bottom: 24px;
    `}
`

const CountText = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;

    ${media.md`
        font-size: 20px;
        line-height: 25px;
    `}
`

const Title = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
`

const Desc = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #000000;
    margin-top: 16px;

    ${media.md`
        font-size: 20px;
        line-height: 25px;
    `}
`