import styled from 'styled-components'
import { CabinAniamtionFlicker } from './ui/Animation'

const CabinLightBase = styled.div<{ $locked?: boolean }>`
    position: absolute;
    opacity: 0;
    transition: all 0.3s;
    animation: ${CabinAniamtionFlicker} 7s 5s ease-out infinite;
    cursor: pointer;
    z-index: 1001;
    will-change: opacity;
    transform: translateZ(0);

    ${props => props.$locked && `
        opacity: 1;
        animation: none;
    `}

    &:hover {
        opacity: 1;
        animation: none;
    }
`

export default CabinLightBase