import Box from '@/components/Box'
import PulseButton from '@/components/Help/PulsingButton'
import ProductBackButton from '@/components/shared/product-modal/ProductBackButton'
import ButtonBase from '@/components/ui/Button/ButtonBase'
import media from '@/utils/media'
import React from 'react'
import styled, { css } from 'styled-components'

export const ButtonPrev = ({ onClick }) => {
    return (
        <PulseButton $p="10px 14px" onClick={onClick} style={{ marginRight: 20 }}>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.102439 7.95784C0.0858154 7.75962 0.153336 7.55568 0.305001 7.40401L6.86141 0.847604C7.13478 0.574236 7.57799 0.574236 7.85136 0.847603C8.12473 1.12097 8.12473 1.56419 7.85136 1.83755L1.76592 7.92299L7.68307 13.8401C7.95644 14.1135 7.95644 14.5567 7.68307 14.8301C7.40971 15.1035 6.96649 15.1035 6.69312 14.8301L0.307413 8.44439C0.172872 8.30985 0.104547 8.13416 0.102439 7.95784Z" fill="black" />
            </svg>
        </PulseButton>
    )
}

export const ButtonNext = ({ onClick }) => {
    return (
        <PulseButton $p="10px 14px" onClick={onClick}>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.15403 7.7199C8.17065 7.91811 8.10313 8.12206 7.95147 8.27372L1.39506 14.8301C1.12169 15.1035 0.678478 15.1035 0.405111 14.8301C0.131744 14.5568 0.131743 14.1135 0.40511 13.8402L6.49055 7.75474L0.573398 1.83759C0.300031 1.56422 0.300032 1.121 0.573399 0.847638C0.846766 0.574271 1.28998 0.57427 1.56335 0.847638L7.94906 7.23335C8.0836 7.36789 8.15192 7.54357 8.15403 7.7199Z" fill="black" />
            </svg>
        </PulseButton>
    )
}

const Controls = ({ prevStep, nextStep, step, onClose, absolute = false }) => {
    return (
        <ConstrolsWrapper $absolute={absolute} >
            <Box>
                <ProductBackButton white={step != 2} onClick={onClose} />
            </Box>
            <Box $flex $alignItems="center">
                <ButtonPrev onClick={prevStep} />
                <ButtonNext onClick={nextStep} />
            </Box>
        </ConstrolsWrapper>
    )
}

export default Controls

const ButtonControls = styled(ButtonBase)`
    padding: 9px 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`

const ConstrolsWrapper = styled.div<{ $absolute?: boolean }>`
    padding: 50px 50px 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 12001;
    width: 100%;

    ${ButtonControls} {
        &:not(:last-child) {
            margin-right: 20px;
        }
    }

    ${media.sm`
        padding: 30px 16px 0px 16px;
    `}

    ${({ $absolute }) => $absolute && css`
        position: absolute;
        top: 50px;
        left: 0;
        padding: 0 50px;

        ${media.sm`
            top: 16px;
            padding: 16px 24px;
        `}
    `}
`
