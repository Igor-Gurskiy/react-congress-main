import React, { useState } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import styled from 'styled-components'

const Preloader = () => {
    
    const [isLoading, setLoading] = useState(true)
    const [styles, animate] = useSpring({
        from: { transform: 'scale(1)' },
        to: [
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' }
        ],
        loop: true
    }, [])


    const transition = useTransition(isLoading, {
        from: { opacity: 1, transform: 'scale(1.2)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(1.2)' }
    })


    return transition((style, item) => item ? (
        <PreloaderWrapper style={style}>
            <svg width="2500" height="1250" viewBox="0 0 2500 1250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#preloader_clip0)">
                    <rect width="2500" height="1250" fill="url(#preloader_paint0)" />
                    <ellipse rx="2044.11" ry="223.791" transform="matrix(-1 0 0 1 1270.86 1133.69)" fill="#00ACC2" />
                    <path d="M-530.912 1160.42C-530.912 1176.81 -518.5 1192.94 -494.522 1208.62C-470.57 1224.29 -435.212 1239.43 -389.629 1253.86C-298.47 1282.71 -166.534 1308.7 -3.47095 1330.53C322.649 1374.19 773.195 1401.2 1270.86 1401.2C1768.53 1401.2 2219.08 1374.19 2545.2 1330.53C2708.26 1308.7 2840.2 1282.71 2931.36 1253.86C2976.94 1239.43 3012.3 1224.29 3036.25 1208.62C3060.23 1192.94 3072.64 1176.81 3072.64 1160.42C3072.64 1144.03 3060.23 1127.89 3036.25 1112.21C3012.3 1096.54 2976.94 1081.4 2931.36 1066.98C2840.2 1038.12 2708.26 1012.13 2545.2 990.3C2219.08 946.641 1768.53 919.635 1270.86 919.635C773.195 919.635 322.649 946.641 -3.47095 990.3C-166.534 1012.13 -298.47 1038.12 -389.629 1066.98C-435.212 1081.4 -470.57 1096.54 -494.522 1112.21C-518.5 1127.89 -530.912 1144.03 -530.912 1160.42Z" fill="url(#paint1_radial)" stroke="#C4C4C4" />
                    <g style={{ mixBlendMode: 'overlay' }} filter="url(#preloader_filter0)">
                        <path d="M1249.9 835.919L1301.67 997.642L1631.7 839.916L1403.36 999.79L1999.7 851.762L1499.49 1004.01L2340.6 871.029L1586.61 1010.15L2642.08 897.02L1661.56 1017.98L2893.24 928.797L1721.62 1027.23L3085.01 965.21L1764.64 1037.56L3210.45 1004.94L1789.06 1048.59L3265.03 1046.56L1793.98 1059.93L3246.78 1088.56L1779.25 1071.16L3156.36 1129.42L1745.38 1081.89L2997.03 1167.67L1693.6 1091.72L2774.56 1201.92L1625.79 1100.3L2496.98 1230.94L1544.39 1107.32L2174.33 1253.67L1452.34 1112.52L1818.27 1269.29L1352.98 1115.72L1441.67 1277.25L1249.9 1116.8L1058.13 1277.25L1146.81 1115.72L681.524 1269.29L1047.45 1112.52L325.462 1253.67L955.408 1107.32L2.81097 1230.94L874.009 1100.3L-274.767 1201.92L806.195 1091.72L-497.24 1167.67L754.418 1081.89L-656.566 1129.42L720.548 1071.16L-746.988 1088.56L705.811 1059.93L-765.238 1046.56L710.738 1048.59L-710.655 1004.94L735.152 1037.56L-585.213 965.21L778.17 1027.23L-393.445 928.797L838.238 1017.98L-142.282 897.02L913.184 1010.15L159.198 871.029L1000.3 1004.01L500.098 851.762L1096.44 999.79L868.098 839.916L1198.12 997.642L1249.9 835.919Z" fill="white" />
                    </g>
                    <ellipse cx="1270.86" cy="56.851" rx="1572.36" ry="242.112" fill="#00ACC2" />
                    <path d="M2656.7 52.863C2656.7 68.5308 2647.14 83.9138 2628.72 98.8535C2610.31 113.788 2583.13 128.216 2548.07 141.974C2477.97 169.487 2376.5 194.274 2251.07 215.095C2000.23 256.734 1653.67 282.491 1270.86 282.491C888.057 282.491 541.502 256.734 290.659 215.095C165.234 194.274 63.7616 169.487 -6.34303 141.974C-41.3978 128.216 -68.5803 113.788 -86.9904 98.8535C-105.407 83.9138 -114.971 68.5308 -114.971 52.863C-114.971 37.1953 -105.407 21.8122 -86.9904 6.87257C-68.5803 -8.06181 -41.3978 -22.49 -6.34303 -36.2476C63.7616 -63.7609 165.234 -88.5483 290.659 -109.369C541.502 -151.008 888.057 -176.765 1270.86 -176.765C1653.67 -176.765 2000.23 -151.008 2251.07 -109.369C2376.5 -88.5483 2477.97 -63.7609 2548.07 -36.2476C2583.13 -22.49 2610.31 -8.06181 2628.72 6.87257C2647.14 21.8122 2656.7 37.1953 2656.7 52.863Z" fill="url(#preloader_paint2)" stroke="#C4C4C4" />
                    <g style={{ mixBlendMode: 'screen' }} filter="url(#preloader_filter1)">
                        <path d="M1249.9 -82.3977L1284.6 51.4956L1505.82 -79.0887L1352.76 53.2743L1752.5 -69.2812L1417.21 56.7676L1981.01 -53.3298L1475.6 61.8491L2183.09 -31.811L1525.84 68.3352L2351.45 -5.50244L1566.1 75.9914L2480 24.6449L1594.94 84.541L2564.08 57.5415L1611.3 93.6751L2600.67 91.9984L1614.61 103.063L2588.44 126.77L1604.73 112.367L2527.82 160.6L1582.02 121.249L2421.03 192.265L1547.32 129.389L2271.9 220.622L1501.86 136.492L2085.84 244.644L1447.3 142.302L1869.56 263.465L1385.6 146.609L1630.89 276.403L1319 149.257L1378.44 282.991L1249.9 150.15L1121.35 282.991L1180.8 149.257L868.909 276.403L1114.2 146.609L630.236 263.465L1052.5 142.302L413.959 244.644L997.934 136.492L227.895 220.622L952.478 129.389L78.7681 192.265L917.771 121.249L-28.0306 160.6L895.067 112.367L-88.6417 126.77L885.189 103.063L-100.874 91.9984L888.492 93.6751L-64.2868 57.5415L904.857 84.541L19.7988 24.6449L933.692 75.9914L148.343 -5.50244L973.956 68.3352L316.701 -31.811L1024.19 61.8491L518.787 -53.3298L1082.59 56.7676L747.297 -69.2812L1147.03 53.2743L993.972 -79.0887L1215.19 51.4956L1249.9 -82.3977Z" fill="white" />
                    </g>
                    <g style={{ mixBlendMode: 'multiply' }} opacity="0.5">
                        <rect width="2500" height="1250" fill="url(#preloader_paint3)" />
                    </g>
                    <ellipse rx="556.502" ry="74.6423" transform="matrix(-1 0 0 1 1270.86 1058.08)" fill="#00ACC2" />
                    <ellipse rx="556.501" ry="70.0186" transform="matrix(-1 0 0 1 1270.86 1053.21)" fill="url(#paint4_radial)" />
                    <ellipse rx="498.758" ry="61.8401" transform="matrix(-1 0 0 1 1270.86 1047.09)" fill="#00ACC2" />
                    <ellipse rx="481.741" ry="56.5094" transform="matrix(-1 0 0 1 1270.86 1043.83)" fill="url(#paint5_radial)" />
                    <ellipse cx="1270.86" cy="92.1844" rx="365.148" ry="69.5375" fill="#00ACC2" />
                    <ellipse cx="1270.86" cy="105.421" rx="395.47" ry="74.0101" fill="#9E9E9E" />
                    <ellipse cx="1270.86" cy="111.47" rx="395.47" ry="72.2554" fill="url(#paint6_radial)" />
                    <ellipse cx="1270.86" cy="111.47" rx="365.148" ry="63.2235" fill="#00ACC2" />
                    <ellipse cx="1270.86" cy="108.47" rx="311.813" ry="53.5464" fill="#9E9E9E" />
                    <path d="M1585.19 111.47C1585.19 114.953 1583.12 118.435 1578.98 121.877C1574.84 125.315 1568.71 128.655 1560.76 131.849C1544.88 138.236 1521.87 143.998 1493.4 148.84C1436.46 158.524 1357.78 164.517 1270.86 164.517C1183.95 164.517 1105.27 158.524 1048.33 148.84C1019.86 143.998 996.847 138.236 980.965 131.849C973.021 128.655 966.89 125.315 962.753 121.877C958.611 118.435 956.537 114.953 956.537 111.47C956.537 107.988 958.611 104.506 962.753 101.063C966.89 97.625 973.021 94.2857 980.965 91.0914C996.847 84.7048 1019.86 78.9428 1048.33 74.1001C1105.27 64.4161 1183.95 58.4238 1270.86 58.4238C1357.78 58.4238 1436.46 64.4161 1493.4 74.1001C1521.87 78.9428 1544.88 84.7048 1560.76 91.0914C1568.71 94.2857 1574.84 97.625 1578.98 101.063C1583.12 104.506 1585.19 107.988 1585.19 111.47Z" fill="url(#preloader_paint7)" stroke="#C4C4C4" />
                </g>
                <defs>
                    <filter id="preloader_filter0" x="-795.238" y="805.919" width="4090.27" height="501.333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    </filter>
                    <filter id="preloader_filter1" x="-120.874" y="-102.398" width="2741.54" height="405.388" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    </filter>
                    <linearGradient id="preloader_paint0" x1="0" y1="0" x2="2500" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EEEEEE" />
                        <stop offset="0.489583" stop-color="#F8F8F8" />
                        <stop offset="1" stop-color="#E9E7E7" />
                    </linearGradient>
                    <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1270.86 1067.32) rotate(90) scale(292.936 1872.16)">
                        <stop stop-color="#EEEEEE" />
                        <stop offset="0.489583" stop-color="#F8F8F8" />
                        <stop offset="1" stop-color="#E9E7E7" />
                    </radialGradient>
                    <radialGradient id="preloader_paint2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1270.86 102.685) rotate(90) scale(180.305 1277.1)">
                        <stop stop-color="#EEEEEE" />
                        <stop offset="0.489583" stop-color="#F8F8F8" />
                        <stop offset="1" stop-color="#E9E7E7" />
                    </radialGradient>
                    <linearGradient id="preloader_paint3" x1="0" y1="0" x2="2500" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C4C4C4" />
                        <stop offset="0.5" stop-color="#C4C4C4" stop-opacity="0" />
                        <stop offset="1" stop-color="#C4C4C4" />
                    </linearGradient>
                    <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(556.501 43.0021) rotate(90) scale(85.0087 578.079)">
                        <stop stop-color="#EEEEEE" />
                        <stop offset="0.489583" stop-color="#F8F8F8" />
                        <stop offset="1" stop-color="#EEEEEE" />
                    </radialGradient>
                    <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(481.741 34.7054) rotate(90) scale(68.6074 500.42)">
                        <stop stop-color="#EEEEEE" />
                        <stop offset="0.489583" stop-color="#F8F8F8" />
                        <stop offset="1" stop-color="#E9E7E7" />
                    </radialGradient>
                    <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1270.86 127.113) rotate(90) scale(56.6122 364.308)">
                        <stop stop-color="#EEEEEE" />
                        <stop offset="0.489583" stop-color="#F8F8F8" />
                        <stop offset="1" stop-color="#DFDFDF" />
                    </radialGradient>
                    <radialGradient id="preloader_paint7" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1270.86 123.063) rotate(90) scale(41.9537 290.02)">
                        <stop stop-color="#EEEEEE" />
                        <stop offset="0.489583" stop-color="#F8F8F8" />
                        <stop offset="1" stop-color="#E9E7E7" />
                    </radialGradient>
                    <clipPath id="preloader_clip0">
                        <rect width="2500" height="1250" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </PreloaderWrapper>
    ) : '')
}

export default Preloader

const PreloaderWrapper = styled(animated.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3001;
    background: #fff;
`