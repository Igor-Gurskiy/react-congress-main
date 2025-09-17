import {easePoly} from 'd3-ease';
import React from 'react';
import {animated, useSpring} from 'react-spring';
import styled from 'styled-components';

const PreloaderScene = () => {

    const light = useSpring({
        from: {transform: 'matrix(1,0,0,1,0,0)'},
        to: [
            {transform: 'matrix(1,0,0,1,2500,0)'},
            {transform: 'matrix(1,0,0,1,0,0)'}
        ],
        loop: {delay: 300},
        config: {
            easing: easePoly.exponent(2),
            duration: 1500
        },
    })

    return (
        <SvgWrapper width="2500" height="1250" viewBox="0 0 2500 1250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1606_41195)">
                <rect width="2500" height="1250" fill="#F9F9F9"/>
                <path
                    d="M1341 -24C639.597 -24 180.992 8.35418 -0.618774 -24L-154 1381C54.3055 1359.57 627.041 1276 1301 1276C1958.59 1276 2926 1636 2499.94 1012.56V-24C2318.42 7.24584 1972.67 -24 1341 -24Z"
                    fill="#F9F9F9"/>
                <path
                    d="M1341 -24C639.597 -24 180.992 8.35418 -0.618774 -24L-154 1381C54.3055 1359.57 627.041 1276 1301 1276C1958.59 1276 2926 1636 2499.94 1012.56V-24C2318.42 7.24584 1972.67 -24 1341 -24Z"
                    fill="url(#paint0_linear_1606_41195)" style={{mixBlendMode: 'screen'}}/>
                <g filter="url(#filter0_d_1606_41195)">
                    <path d="M1851.81 -80.2854L2162.53 498.094H2206.14L1898.69 -80.2854H1851.81Z"
                          fill="url(#paint1_linear_1606_41195)"/>
                    <path d="M1830 -80.8306L2140.72 497.549H2163.07L1852.35 -80.8306H1830Z"
                          fill="url(#paint2_linear_1606_41195)"/>
                </g>
                <g filter="url(#filter1_d_1606_41195)">
                    <path d="M575.203 1303.43L264.481 725.046H220.871L528.323 1303.43H575.203Z"
                          fill="url(#paint3_linear_1606_41195)"/>
                    <path d="M597.009 1303.97L286.286 725.591H263.936L574.658 1303.97H597.009Z"
                          fill="url(#paint4_linear_1606_41195)"/>
                </g>
                <g filter="url(#filter2_d_1606_41195)">
                    <path d="M655.332 1644.38L344.61 1066H301L608.451 1644.38H655.332Z"
                          fill="url(#paint5_linear_1606_41195)"/>
                    <path d="M677.137 1644.92L366.415 1066.55H344.065L654.787 1644.92H677.137Z"
                          fill="url(#paint6_linear_1606_41195)"/>
                </g>
                <g filter="url(#filter3_d_1606_41195)">
                    <path d="M1762.81 -433.455L2073.53 144.924H2117.14L1809.69 -433.455H1762.81Z"
                          fill="url(#paint7_linear_1606_41195)"/>
                    <path d="M1741 -434L2051.72 144.379H2074.07L1763.35 -434H1741Z"
                          fill="url(#paint8_linear_1606_41195)"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_d_1606_41195" x="1820" y="-80.8306" width="388.137" height="591.924"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-4" dy="7"/>
                    <feGaussianBlur stdDeviation="3"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1606_41195"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1606_41195" result="shape"/>
                </filter>
                <filter id="filter1_d_1606_41195" x="210.871" y="725.046" width="388.137" height="591.924"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-4" dy="7"/>
                    <feGaussianBlur stdDeviation="3"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1606_41195"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1606_41195" result="shape"/>
                </filter>
                <filter id="filter2_d_1606_41195" x="291" y="1066" width="388.137" height="591.924"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-4" dy="7"/>
                    <feGaussianBlur stdDeviation="3"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1606_41195"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1606_41195" result="shape"/>
                </filter>
                <filter id="filter3_d_1606_41195" x="1731" y="-434" width="388.137" height="591.924"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-4" dy="7"/>
                    <feGaussianBlur stdDeviation="3"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1606_41195"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1606_41195" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_1606_41195" x1="-0.618729" y1="245.939" x2="2499.94" y2="245.939"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C4C4C4"/>
                    <stop offset="0.5" stopColor="#C4C4C4" stop-opacity="0"/>
                    <stop offset="1" stopColor="#C4C4C4"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1606_41195" x1="1981.55" y1="191.187" x2="2029.52" y2="166.657"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00C7D7"/>
                    <stop offset="1" stopColor="#00C3D5"/>
                </linearGradient>
                <linearGradient id="paint2_linear_1606_41195" x1="1846.9" y1="-70.4732" x2="2153.26" y2="497.549"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B6CB"/>
                    <stop offset="0.513889" stopColor="#00AFC4"/>
                    <stop offset="1" stopColor="#009AAC"/>
                </linearGradient>
                <linearGradient id="paint3_linear_1606_41195" x1="445.463" y1="1031.95" x2="397.492" y2="1056.48"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00C7D7"/>
                    <stop offset="1" stopColor="#00C3D5"/>
                </linearGradient>
                <linearGradient id="paint4_linear_1606_41195" x1="580.11" y1="1293.61" x2="273.749" y2="725.591"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B6CB"/>
                    <stop offset="0.513889" stopColor="#00AFC4"/>
                    <stop offset="1" stopColor="#009AAC"/>
                </linearGradient>
                <linearGradient id="paint5_linear_1606_41195" x1="525.592" y1="1372.91" x2="477.621" y2="1397.44"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00C7D7"/>
                    <stop offset="1" stopColor="#00C3D5"/>
                </linearGradient>
                <linearGradient id="paint6_linear_1606_41195" x1="660.238" y1="1634.57" x2="353.877" y2="1066.55"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B6CB"/>
                    <stop offset="0.513889" stopColor="#00AFC4"/>
                    <stop offset="1" stopColor="#009AAC"/>
                </linearGradient>
                <linearGradient id="paint7_linear_1606_41195" x1="1892.55" y1="-161.982" x2="1940.52" y2="-186.513"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00C7D7"/>
                    <stop offset="1" stopColor="#00C3D5"/>
                </linearGradient>
                <linearGradient id="paint8_linear_1606_41195" x1="1757.9" y1="-423.643" x2="2064.26" y2="144.379"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B6CB"/>
                    <stop offset="0.513889" stopColor="#00AFC4"/>
                    <stop offset="1" stopColor="#009AAC"/>
                </linearGradient>
                <clipPath id="clip0_1606_41195">
                    <rect width="2500" height="1250" fill="white"/>
                </clipPath>
            </defs>
        </SvgWrapper>
    )
}

export default PreloaderScene

const SvgWrapper = styled.svg`
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0);
`

const Light = styled(animated.g)`
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0);
`