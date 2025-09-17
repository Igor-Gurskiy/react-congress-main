import React from 'react'
import styled from 'styled-components'
import PulseButton from './PulsingButton'

const HelpBottom = ({ onClick, room = '' }) => {
    const handleUnderstand = () => {
        if (room) {
            localStorage.setItem(room + '_help', 'true')
        }
        onClick()
    }

    return (
        <BottomBar>
            <HelpDescription>
                Сейчас на экране<br />вы видите подсказки
            </HelpDescription>
            <PulseButton button={true} onClick={handleUnderstand}>Ок, все понятно</PulseButton>
            {/* <DoNotShowButton ml='30px'>Больше не показывать</DoNotShowButton> */}
        </BottomBar>
    )
}

export default HelpBottom

const HelpAcceptPulseButton = styled(PulseButton)`


`

const HelpDescription = styled.div`
    font-weight: 800;
    font-size: 32px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 0px 10px rgba(0, 0, 0, 0.6);
`

const BottomBar = styled.div`
    position: absolute;
    top: 590px;
    left: 1039px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${HelpDescription} {
        margin-bottom: 32px;
    }
`