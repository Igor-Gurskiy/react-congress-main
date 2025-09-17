import media from '@/utils/media'
import React from 'react'
import styled from 'styled-components'

const StepFour = () => {
    return (
        <Container>
            <Header>
                <Logo>SKINCONSULT</Logo>
                <Text>УНИКАЛЬНАЯ ДИАГНОСТИКА КОЖИ ВАШИХ ПАЦИЕНТОВ НА ОСНОВЕ ИСКУССТВЕННОГО ИНТЕЛЛЕКТА</Text>
            </Header>

            <Body>
                <List>
                    <Item>РАЗРАБОТАНА СОВМЕСТНО С ДЕРМАТОЛОГАМИ</Item>
                    <Item>ОПРЕДЕЛЯЕТ 7 ПРИЗНАКОВ СТАРЕНИЯ КОЖИ</Item>
                    <Item>ПОДБОР ПРОТОКОЛА УХОДА, УЧИТЫВАЯ ТИП И СОСТОЯНИЕ КОЖИ</Item>
                </List>
            </Body>

            <New>
                <img src="assets/images/vichy/modal4.png" />
                <Block>
                    <NewText>NEW</NewText>
                    <BlockTitle>ЭКСПОЗОМ ДИАГНОСТИКА</BlockTitle>
                    <BlockText>ОЦЕНКА ВЛИЯНИЯ ЭКСПОЗОМ-ФАКТОРОВ НА КОЖУ</BlockText>
                </Block>
            </New>
        </Container>
    )
}

export default StepFour

const NewText = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 115%;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    position: absolute;
    top: -30px;
`

const Block = styled.div`
    background: #C06564;
    position: absolute;
    left: 20%;
    bottom: 10%;
    min-height: 85px;
    width: 100%;
    z-index: 11;
    padding-left: 27%;
    padding-right: 44%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    ${media.sm`
        padding-left: 25%;
        padding-right: 48%;
    `}
`

const BlockText = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 115%;
    letter-spacing: 0.01em;
    color: #000000;
    ${media.lg`
        font-size: 16px;
        line-height: 18px;
    `}
    ${media.sm`
        font-size: 12px;
        line-height: 16px;
    `}
`

const BlockTitle = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 18px;
    line-height: 115%;
    letter-spacing: 0.01em;
    color: #FFFFFF;

    ${media.lg`
        font-size: 16px;
        line-height: 18px;
    `}
    ${media.sm`
        font-size: 12px;
        line-height: 16px;
    `}
`

const Container = styled.div`
    overflow: hidden;
`

const New = styled.div`
    position: relative;
    padding: 0px 40px 0px 0px;
    img {
        max-width: 100%;
        z-index: 12;
        position: relative;
    }

    margin-top: -25%;

    ${media.md`
        margin-top: 0px;
    `}
`

const Logo = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 30px;
    line-height: 34px;
    letter-spacing: 0.01em;
    color: #FFFFFF;

    ${media.md`
        margin-bottom: 16px;
    `}
`

const Item = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin-bottom: 20px;
`

const List = styled.div`
    max-width: 50%;
    
    ${media.md`
        max-width: 100%;
        margin-top: 40px;
    `}

    ${media.sm`
        margin-top: 20px;
    `}
`

const Body = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    padding: 0px 40px 0px 40px;

    ${media.md`
        margin-top: 16px;
    `}
`

const Text = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 28px;
    line-height: 115%;
    text-align: right;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #FFFFFF;
    ${media.lg`
        font-size: 18px;
        line-height: 21px;
    `}
    ${media.md`
        font-size: 18px;
    `}
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px 0px 40px;

    ${media.md`
        align-items: flex-start;
        margin-top: 20px;
    `}

    ${media.sm`
        flex-direction: column;

        ${Text} {
            text-align: left;
        }
    `}
`