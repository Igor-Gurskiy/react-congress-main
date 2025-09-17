import Typography from "@/components/Typography"
import styled from "styled-components"
import ButtonBase from "./ButtonBase"

export const Back = styled(Typography)`
    font-size: 22px;
    color: #fff;
    line-height: 24px;
    text-transform: uppercase;
    min-width: 150px;
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 0px 8px rgba(0, 0, 0, 0.8);
`

const BackButtonBase = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 2%;
    left: 2%;
    cursor: pointer;
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
        margin-left: 16px;
        z-index: 1000;
    }
`

export default BackButtonBase