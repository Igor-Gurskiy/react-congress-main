import { useUIStore } from "@/stores/uiStore"
import media from "@/utils/media"
import React from "react"
import styled, { css } from "styled-components"
import { colorScheme } from "./PhotoCabin"


const CabinSectionHeader: React.FC<CabinSectionHeaderPropsType> = ({ number, icon, description }) => {
    const cabin = useUIStore(state => state.cabin)
    const colorKey = cabin || 'lrp'
    return (
        <Section>
            <SectionHead $color={colorScheme[colorKey].primary}>
                <SectionNumber>{number}</SectionNumber>
                <div>
                    {icon}
                </div>
            </SectionHead>

            {description && <SectionDescription>{description}</SectionDescription>}
        </Section>
    )
}

const CabinSection = ({ children }) => {
    return (
        <SectionWrapper>
            {children}
        </SectionWrapper>
    )
}

export default CabinSection

const SectionContent = styled.div`
    width: 100%;
    margin-left: 24px;

    ${media.md`
        margin-left: 0px;
    `}
`

CabinSection.Header = CabinSectionHeader
CabinSection.Content = SectionContent

type CabinSectionHeaderPropsType = {
    number: number
    icon: JSX.Element
    description: string
}



const Section = styled.div`
    max-width: 135px;
    width: 100%;

    ${media.md`
        max-width: 100%;
        margin-bottom: 24px;
    `}
`

const SectionHead = styled.div<{ $color: string }>`
    margin-bottom: 8px;
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    ${({ $color }) => $color && css`
        border-bottom: 1px solid ${$color};
    `}
`

const SectionNumber = styled.div`
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    color: #4F4F4F;
`

const SectionDescription = styled.div`
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #4F4F4F;
`

const SectionWrapper = styled.div`
    display: flex;
    width: 100%;

    &:not(:first-child) {
        margin-top: 48px;
    }

    ${media.md`
        flex-direction: column;
    `}
`