import Box from '@/components/Box'
import media from '@/utils/media'
import React from 'react'
import styled from 'styled-components'

const StepOne = () => {
    return (
        <Box $p="0px 40px 40px 40px">
            <Header>
                <img src="assets/images/vichy/dercos_academy_logo.png" alt="Dercos academy logo" />
                <Text>ВСЕ, ЧТО ВЫ ХОТИТЕ ЗНАТЬ<br />О КОЖЕ ГОЛОВЫ И ВОЛОСАХ</Text>
            </Header>

            <Body>
                <List>
                    <Item>
                        <ItemIcon>
                            <img src="assets/images/vichy/v1.png" alt="" />
                        </ItemIcon>
                        <ItemText>
                            НАУЧНЫЕ СТАТЬИ
                        </ItemText>
                    </Item>
                    <Item>
                        <ItemIcon>
                            <img src="assets/images/vichy/v2.png" alt="" />
                        </ItemIcon>
                        <ItemText>
                            ОБУЧАЮЩИЙ КУРС ПО ТРИХОСКОПИИ
                        </ItemText>
                    </Item>
                    <Item>
                        <ItemIcon>
                            <img src="assets/images/vichy/v3.png" alt="" />
                        </ItemIcon>
                        <ItemText>
                            ВЕБИНАРЫ С УЧАСТИЕМ МЕЖДУНАРОДНЫХ ЭКСПЕРТОВ
                        </ItemText>
                    </Item>
                    <Item>
                        <ItemIcon>
                            <img src="assets/images/vichy/v4.png" alt="" />
                        </ItemIcon>
                        <ItemText>
                            МАТЕРИАЛЫ ДЛЯ ПАЦИЕНТОВ
                        </ItemText>
                    </Item>
                </List>
                <AcademyImg src="assets/images/vichy/img.png" alt="" />    
            </Body>

            <More>
                БОЛЬШЕ ИНФОРМАЦИИ НА САЙТЕ<br />dermatologicalbeauty.loreal.com.ru
            </More>          
        </Box>
    )
}

export default StepOne

const AcademyImg = styled.img`
    object-fit: contain;
    max-width: 100%;
`

const More = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 28px;
    line-height: 115%;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-top: 70px;
    word-break: break-word;
    ${media.md`
        font-size: 24px;
    `}

    ${media.sm`
        margin-top: 30px;
        font-size: 12px;
    `}
`

const ItemText = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 24px;
    line-height: 115%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #FFFFFF;
    display: flex;
    align-items: center;

    ${media.sm`
        font-size: 14px;
    `}
`

const ItemIcon = styled.div`
    margin-right: 16px;
    max-width: 60px;
    width: 100%;

    ${media.sm`
        max-width: 35px;
        img {
            width: 100%;
            image-rendering: auto;
            image-rendering: crisp-edges;
            image-rendering: pixelated;
        }
    `}
`

const Item = styled.div`
    display: flex;
    &:not(:last-child) {
        margin-bottom: 16px;
    }
    ${media.sm`
        margin-top: 4px;
    `}
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
    justify-content: space-between;

    ${media.md`
        flex-direction: column-reverse;
    `}

    ${media.sm`
        margin-top: 30px;
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

    ${media.md`
        font-size: 18px;
    `}
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.sm`
        flex-direction: column;
        
        

        ${Text} {
            text-align: left;
        }
    `}
`