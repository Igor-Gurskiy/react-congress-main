import media, {mediaMin} from '@/utils/media'
import React from 'react'
import styled, {css} from 'styled-components'
import Box from '../../Box'
import {MoreBtn} from './ProductKnowMore'

const ProductFooter = ({children, background = '', ...otherProps}) => {
    return (
        <FooterWrapper $background={background}>
            <FooterBox {...otherProps}>
                {children}
            </FooterBox>
        </FooterWrapper>
    )
}

export default ProductFooter

const FooterWrapper = styled.div<{ noShare?: boolean, $background?: string }>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 32px;
  background: #fff;
  //max-height: 76px;
  //border: 2px solid #fff;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  ${mediaMin.xl`
         padding: 8px 32px;
  `}

  ${media.md`
        border-top: none;
        max-height: none;
  `}

  ${props => props.$background && css`
    background: url(${props.$background}) no-repeat right bottom;
    background-size: cover;
  `}

  z-index: 1;
  overflow: initial !important;

  ${props => props.noShare && css`
    border-top: 1px solid #E2E2E2 !important;
  `}
`


const FooterBox = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;

  ${media.md`
        flex-direction: column;

        ${MoreBtn} {
            width: 100%;
            margin-bottom: 16px;
        }
  `}

`
