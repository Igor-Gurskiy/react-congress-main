import Box from '@/components/Box'
import React from 'react'
import styled from 'styled-components'

const StepThree = () => {
    return (
        <Box>
            <Grid>
                <One>
                    Компания поощряет инициативы устойчивого развития нашего бизнеса. <b>Забота о планете</b> – один из главных принципов <b>La Roche-Posay</b>
                </One>
                <Two>
                    <CardText>Мы стремимся увеличить долю перерабатываемой упаковки до 60%, ЧТО сэкономит 7000 т пластика</CardText>
                    <CardImageWrapper>
                        <img src="assets/images/lrp/modal/m1.png" />
                    </CardImageWrapper>
                </Two>
                <Two>
                    <CardText>упаковка продукции используется как вторсырье, а тубы и помпы - как смешанные отходы</CardText>
                    <CardImageWrapper>
                        <img src="assets/images/lrp/modal/m2.png" />
                    </CardImageWrapper>
                </Two>
                <Three>
                    <CardText>-78%<br />сокращение<br /><b>выбросов<br />углекислого газа</b></CardText>
                    <CardImageWrapper>
                        <img src="assets/images/lrp/modal/m3.png" />
                    </CardImageWrapper>
                </Three>
                <Three>
                    <CardText>100%<br />экологически<br /><b>чистая энергия</b></CardText>
                    <CardImageWrapper>
                        <img src="assets/images/lrp/modal/m4.png" />
                    </CardImageWrapper>
                </Three>
                <Three>
                    <CardText>-51%<br />сокращение<br /><b>потребления воды<br />заводами</b></CardText>
                    <CardImageWrapper>
                        <img src="assets/images/lrp/modal/m5.png" />
                    </CardImageWrapper>
                </Three>
            </Grid>
        </Box>
    )
}

export default StepThree

const CardText = styled.div`

`

const CardImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 8px;
    flex-grow: 1;
`

const Grid = styled(Box)`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    gap: 24px;
    padding: 20px;
    margin-bottom: 20px;
`

const Card = styled.div`
    width: 100%;
    min-height: 275px;
    padding: 20px;
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #fff;
`

const One = styled(Card)`
    background: rgba(0, 174, 234, 0.1);
    color: #444444;
`

const Two = styled(Card)`
    background: #00AEEA;
    display: flex;
    flex-direction: column;
`

const Three = styled(Card)`
    background: #61C560;
    display: flex;
    flex-direction: column;
`