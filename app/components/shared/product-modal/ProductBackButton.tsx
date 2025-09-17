import React from 'react'
import styled, { css } from 'styled-components'
import PulseButton from '../../Help/PulsingButton'

const ProductBackButton = ({ white = false, ...otherProps }) => {
    return (
        <ProductBackButtonContainer {...otherProps}>
            <ProductBackIcon white={white} />
            <ProductBackText $white={white}>Назад</ProductBackText>
        </ProductBackButtonContainer>
    )
}

export default ProductBackButton

const ProductBackText = styled.div<{ $white?: boolean }>`
  font-family: 'Gilroy';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #1F1F1F;

    margin-left: 8px;
    ${({ $white }) => $white && css`
        color: #fff;
    `}
`

const ProductBackButtonContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    cursor: pointer;
`

const ProductBackIcon = ({ white = false, ...otherProps }) => {

    if (white) return (
        <PulseButton $p="10px 14px">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.102439 7.95784C0.0858154 7.75962 0.153336 7.55568 0.305001 7.40401L6.86141 0.847604C7.13478 0.574236 7.57799 0.574236 7.85136 0.847603C8.12473 1.12097 8.12473 1.56419 7.85136 1.83755L1.76592 7.92299L7.68307 13.8401C7.95644 14.1135 7.95644 14.5567 7.68307 14.8301C7.40971 15.1035 6.96649 15.1035 6.69312 14.8301L0.307413 8.44439C0.172872 8.30985 0.104547 8.13416 0.102439 7.95784Z" fill="black" />
            </svg>
        </PulseButton>
    )

    return (
        <ProductBackIconWrapper $white={white} {...otherProps}>
            <BackIcon />
        </ProductBackIconWrapper>
    )
}

const BackIcon = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2932 16.0683C10.2742 15.8418 10.3514 15.6087 10.5247 15.4354L18.0178 7.94232C18.3302 7.6299 18.8367 7.6299 19.1491 7.94232C19.4615 8.25474 19.4615 8.76127 19.1491 9.07369L12.1943 16.0285L18.9568 22.7909C19.2692 23.1034 19.2692 23.6099 18.9568 23.9223C18.6444 24.2347 18.1379 24.2347 17.8254 23.9223L10.5275 16.6244C10.3737 16.4706 10.2956 16.2698 10.2932 16.0683Z" fill="black" />
            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="black" />
        </svg>
    )
}

const ProductBackIconWrapper = styled.div<{ $white?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ $white }) => $white && css`
        background: #fff;
        border-radius: 50%;
    `}
`