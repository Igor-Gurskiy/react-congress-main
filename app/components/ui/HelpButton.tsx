import React from "react"
import PulseButton from "../Help/PulsingButton"
import Typography from "../Typography"
import { Back } from "./Button/BackButtonBase"
import HelpButtonBase from "./Button/HelpButtonBase"

type BackButtonPropsType = {
    onClick?: (args?: any) => void | null | undefined
}

const HelpButton: React.FC<BackButtonPropsType> = ({ onClick }) => {

    return (
        <HelpButtonBase onClick={onClick} style={{ zIndex: 1101 }}>
            <Back size={40} style={{ textAlign: 'right' }}>Включить<br />режим подсказки</Back>
            <PulseButton style={{ padding: '12px 22px' }}>
                <Typography size={32} style={{ fontWeight: 400, fontFamily: 'Century Gothic', zIndex: 11 }}>?</Typography>
            </PulseButton>
        </HelpButtonBase>
    )
}

export default HelpButton