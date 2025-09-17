import { useRouter } from "next/router"
import React from "react"
import PulseButton from "../Help/PulsingButton"
import BackButtonBase, { Back } from "./Button/BackButtonBase"

type BackButtonPropsType = {
    onClick?: (args?: any) => void | null | undefined
}

const BackButton: React.FC<BackButtonPropsType> = ({ onClick }) => {
    
    const router = useRouter()

    const handleBackClick = () => {
        if (typeof onClick  === 'function') {
            onClick()
        } else {
            router.push('/')
        }
    }
    
    return (
        <BackButtonBase onClick={handleBackClick} style={{ zIndex: 1101 }}>
            <PulseButton style={{ padding: '20px 25px' }}>
                <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0035186 10.4504C-0.0202288 10.1672 0.0762292 9.87586 0.292893 9.65919L9.65919 0.292894C10.0497 -0.097631 10.6829 -0.0976312 11.0734 0.292893C11.4639 0.683417 11.4639 1.31658 11.0734 1.70711L2.37992 10.4006L10.833 18.8537C11.2235 19.2442 11.2235 19.8774 10.833 20.2679C10.4425 20.6584 9.80931 20.6584 9.41878 20.2679L0.296339 11.1454C0.104138 10.9532 0.00653126 10.7023 0.0035186 10.4504Z" fill="black" />
                </svg>
            </PulseButton>
            <Back size={40}>НАЗАД</Back>
        </BackButtonBase>
    )
}

export default BackButton