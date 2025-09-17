import media from '@/utils/media'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const StepThree = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 575.98px)' })

    return (
        <Container>
            <Header>
                <img src="assets/images/vichy/modal3.png" alt="vichy project3 modal" />
                <Text>НОВЫЙ СЕРВИС ДЛЯ ХРАНЕНИЯ, НАВИГАЦИИ И ЭКСПОРТА КЛИНИЧЕСКИХ СЛУЧАЕВ </Text>
            </Header>

            <Body>
                <List>
                    <Item>
                        <ItemNumber><b>1</b>{isMobile && <span>Простота</span>}</ItemNumber>
                        <ItemText>
                            {!isMobile && <span>Простота</span>}
                            <p>
                                Создайте 
                                карточку пациента в своем личном кабинете на сайте
                                Dermatologicalbeauty.
                                loreal.com.ru
                            </p>
                        </ItemText>
                    </Item>
                    <Item>
                        <ItemNumber><b>2</b>{isMobile && <span>практичность</span>}</ItemNumber>
                        <ItemText>
                            {!isMobile && <span>практичность</span>}
                            <p>
                                Загрузите 
                                фото и описание клинического случая. Наблюдайте за динамикой лечения и делитесь своими случаями с коллегами
                            </p>
                        </ItemText>
                    </Item>
                    <Item>
                        <ItemNumber><b>3</b>{isMobile && <span>удобство</span>}</ItemNumber>
                        <ItemText>
                            {!isMobile && <span>удобство</span>}
                            <p>
                                Вы всегда имеете доступ 
                                к Вашей библиотеке КС 
                                с любого устройства – компьютера или мобильного телефона
                            </p>
                        </ItemText>
                    </Item>
                </List>
            </Body>
        </Container>
    )
}

export default StepThree

const Container = styled.div`
    padding: 0px;
`

const ItemText = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 115%;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    span {
        font-weight: 800;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        color: #F8F8F8;
        
        font-size: 36px;
        line-height: 40px;
        text-align: left;

        margin-bottom: 10px;
    }

    ${media.md`
        span {
            font-size: 36px;
        }
        font-size: 16px;
    `}

    ${media.sm`
        margin-top: 0;
        p {
            font-size: 14px;
            line-height: 16px;
        }
    `}
`

const ItemNumber = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #F8F8F8;
    display: flex;
    flex-direction: column;

    b {
        font-size: 96px;
        line-height: 110px;
        text-align: center;
    }

    span {
        font-size: 36px;
        line-height: 40px;
        text-align: left;
    }
    
    ${media.lg`
        b {
            text-align: left;
        }
    `}

    ${media.sm`
        b {
            font-size: 48px;
            line-height: 55px;
        }

        span {
            font-size: 24px;
            line-height: 28px;
        }
    `}

`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    &:not(:last-child) {
        padding-right: 10px;
        ${media.lg`
            padding-right: 0;
        `}
        
    }
    &:not(:first-child) {
        padding-left: 10px;
        ${media.lg`
            padding-left: 0;
        `}
    }

    ${media.lg`
        flex-direction: row;
        margin-top: 10px;
    `}

    ${ItemNumber} {
        max-width: 80px;
        width: 100%;

        ${media.sm`
            display: flex;
            flex-direction: row;
            align-items: center;
            max-width: none;
            b {
                margin-right: 10px;
            }
        `}
    }

    ${media.sm`
        flex-direction: column;
    `}
`

const List = styled.div`
    display: flex;

    ${media.lg`
        flex-direction: column;
    `}
`

const Body = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -60px;
    position: relative;
    z-index: 100;
    padding: 0px 40px 40px 40px;
    ${media.lg`
    `}
    ${media.md`
        padding: 0px 20px 20px 20px;
    `}
`

const Text = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 30px;
    line-height: 115%;
    text-align: center;
    letter-spacing: 0.01em;
    color: #000000;
    position: absolute;

    top: 20px;
    left: 0;
    z-index: 10;

    background: rgba(255, 255, 255, 0.7);

    padding: 10px;

    ${media.md`
        font-size: 26px;
    `}

    ${media.sm`
        font-size: 12px;
    `}
`

const Header = styled.div`
    position: relative;
    margin-top: 20px;
    
    img {
        max-width: 100%;
        z-index: 1;
    }
`