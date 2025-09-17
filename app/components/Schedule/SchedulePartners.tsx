import media from '@/utils/media'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const SchedulePartners = ({ children, extra = false }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' })
    return (
        <PartnersWrapper>
            <PartnersRow>
                <PartnersTitle>ПРИ ПОДДЕРЖКЕ</PartnersTitle>
                {!isMobile && <PartnersContent>{children}</PartnersContent>}
                {!isMobile && extra && <PartnersUsed>С использованием<br />материалов EADV</PartnersUsed>}
            </PartnersRow>
            {isMobile && (
                <>
                    <PartnersRow>
                        <PartnersContent>{children}</PartnersContent>
                    </PartnersRow>
                    {extra && (
                        <PartnersRow>
                            <PartnersUsed>С использованием материалов EADV</PartnersUsed>
                        </PartnersRow>
                    )}
                </>
            )}
        </PartnersWrapper>
    )
}

export default SchedulePartners

const PartnersRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;

    &:not(:first-child) {
        margin-top: 8px;
    }
`

const PartnersContent = styled.div`
    flex-grow: 1;
    display: flex;
    padding: 0 16px;
    align-items: center;
    flex-wrap: wrap;

    & > {
        * {
            margin-bottom: 16px;
            &:not(:last-child) {
                margin-right: 16px;
            }
        }
    }


    ${media.md`
        padding: 0;
        img {
            margin-top: 8px;
        }

        & > {
            * {
                margin-bottom: 8px;
                &:not(:last-child) {
                    margin-right: 8px;
                }
            }
        }
    `}

`

const PartnersWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 8px;
`
const PartnersTitle = styled.div`
    font-weight: 300;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #444444;
`

const PartnersUsed = styled(PartnersTitle)`
    text-align: right;
`