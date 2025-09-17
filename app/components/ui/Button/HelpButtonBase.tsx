import styled from 'styled-components'
import { Back } from './BackButtonBase'
import ButtonBase from './ButtonBase'

const HelpButtonBase = styled.div`
    position: absolute;
    top: 2%;
    right: 2%;
    cursor: pointer;
    display: flex;
    align-items: center;
    
    /* @media (orientation: landscape) and (max-height: 400px) {
        position: fixed;
        top: 60px;
    } */
    

    ${ButtonBase} {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        cursor: pointer;
    }

    ${Back} {
        margin-right: 16px;
        z-index: 1000;
    }
`

export default HelpButtonBase