import styled from "styled-components";
import media from "@/utils/media";

export const ProductBrandContainer = styled.div<{ $color?: string }>`
  background: ${props => props.$color || '#E41315'};
  border: 2px solid #FFFFFF;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFFFFF;
  
  padding: 8px 0px 8px 32px;
  
  ${media.md`
    padding: 16px 0px 16px 16px;
    margin-right: 16px;
  `}
`

export const ProductBrandTitle = styled.div`
  font-weight: 800;
  font-size: 16px;
  line-height: 26px;
`

export const ProductBrandName = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.07em;
`