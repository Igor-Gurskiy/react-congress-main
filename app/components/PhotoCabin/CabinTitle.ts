import media from '@/utils/media';
import styled from "styled-components";

const CabinTitle = styled.div`
    font-weight: 800;
    font-size: 26px;
    line-height: 32px;
    text-transform: uppercase;
    color: #333333;

    ${media.sm`
        font-size: 18px;
        line-height: 24px;
    `}
`


export default CabinTitle