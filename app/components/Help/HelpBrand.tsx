import React from 'react'
import styled from 'styled-components'

const HelpBrand = () => {
    return (
        <Brand>
            <Title>ACD2021</Title>
            <Description>онлайн-конгресс</Description>
        </Brand>
    )
}

export default HelpBrand

const Brand = styled.div`
    position: absolute;
    top: 95px;
    left: 95px;
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 160px;
    line-height: 160px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
`

const Title = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    font-size: 160px;
    line-height: 160px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
`

const Description = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    font-size: 42px;
    line-height: 52px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
`