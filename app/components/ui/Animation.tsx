import { keyframes } from 'styled-components'

export const CabinAniamtionFlicker = keyframes`
    0% {
        opacity: 0;
    }
    3% {
        opacity: 1;
    }
    5% {
        opacity: 0;
    }
    25% {
        opacity: 0;
    }
    26% {
        opacity: 1;
    }
    27% {
        opacity: 0;
    }
    29% {
        opacity: 1;
    }
    31% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`
export const BannerAnimationFlicker = keyframes`
    0% {
        opacity: 0;
    }
    5% {
        opacity: 1;
    }
    15% {
        opacity: 0.8;
    }
    30% {
        opacity: 1;
    }
    35% {
        opacity: 0;
    }
    45% {
        opacity: 1;
    }
    55% {
        opacity: 0.8;
    }
    70% {
        opacity: 1;
    }
    75% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`

export const PulseAnimation = keyframes`
    50% {
        box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(255, 255, 255, 0.75);
    }
    100% {
        box-shadow: 0 0 0 4px #fff, 0 0 0 15px rgba(255, 255, 255, 0);
    }
`