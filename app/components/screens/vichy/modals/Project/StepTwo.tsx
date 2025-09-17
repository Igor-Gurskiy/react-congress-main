import Box from '@/components/Box'
import media from '@/utils/media'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const StepTwo = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' })

    return (
        <Container>
            <Header>
                <Col>
                    <img src="assets/images/vichy/exposm.png" alt="exposm logo" />
                    {isMobile && (
                        <ImageWrapper>
                            <img src="assets/images/vichy/exposm_body.png" alt="exposm logo" />
                        </ImageWrapper>
                    )}
                </Col>

                <Body>
                    <Content>
                        <Title>
                            <b>ЭКСПОЗОМ ГРАНТ</b>
                            <span>в размере</span>
                            <b>15 000 €</b>
                        </Title>

                        <Established>
                            учрежден<br />
                            Лабораториями VICHY <br />
                            для поощрения и стимулирования исследовательской деятельности <br />
                            в отношении воздействия экспозома на кожу
                        </Established>

                        <Divider />

                        <Join>
                            Подайте заявку на участие, начиная с
                        </Join>

                        <Date>1 ОКТЯБРЯ 2021 </Date>
                        <Established>
                            на сайте<br />
                            dermatologicalbeauty.loreal.com.ru
                        </Established>
                    </Content>
                </Body>
            </Header>

            

        </Container>
    )
}

export default StepTwo

const Container = styled(Box)`
    padding: 0px 0px 0px 40px;

    ${media.md`
        padding: 0px 20px 20px 20px;
    `}
`

const ImageWrapper = styled.div`
    img {
        max-width: 100%;
    }
`

const Established = styled(Box)`
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 24px;
    line-height: 115%;
    text-align: center;
    letter-spacing: 0.01em;
    color: #000000;
    ${media.md`
        color: #fff;
        text-align: left;
    `}
    ${media.sm`
        font-size: 14px;
    `}

`

const Join = styled(Established)`
    margin-top: 20px;
`

const Date = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 36px;
    line-height: 115%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #000000;
    text-align: center;
    ${media.md`
        color: #fff;
        text-align: left;
        margin: 10px 0;
    `}
    ${media.sm`
        font-size: 24px;
    `}
`

const Divider = styled.div`
    height: 1px;
    background: #000000;
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
    ${media.md`
        background: #fff;
        margin: 20px 0 10px 0;
    `}
`

const Title = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 36px;
    line-height: 115%;
    letter-spacing: 0.01em;
    color: #000000;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    b {
        font-weight: 800;
        text-transform: uppercase;
    }

    span {
        margin: 10px 0;
    }
    
    ${media.md`
        color: #fff;
        text-align: left;
    `}

    ${media.sm`
        font-size: 24px;
    `}
`

const Col = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.sm`
        flex-direction: column;
        align-items: flex-start;
    `}
`

const Content = styled.div`
    background: rgba(255, 255, 255, 0.7);
    max-width: 55%;
    margin-left: 35%;

    padding: 40px 20px;

    ${media.md`
        max-width: 100%;
        margin-left: 0;
        background: none;
    `}

    ${media.sm`
        padding: 20px 0px;
    `}
`

const Body = styled.div`
    background: url(assets/images/vichy/exposm_body.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    margin-left: 20px;

    ${media.md`
        background: none;
    `}

    ${media.sm`
        margin: 0;
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

    ${media.md`
        display: flex;
        flex-direction: column;
    `}

    ${media.sm`
        flex-direction: column;

        ${Text} {
            text-align: left;
        }
    `}
`