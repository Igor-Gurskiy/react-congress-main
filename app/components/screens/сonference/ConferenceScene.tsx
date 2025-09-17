import { easePoly } from 'd3-ease';
import React from 'react';
import { animated, useSpring } from 'react-spring';

const ConferenceScene = () => {

    const col1 = useSpring({
        from: { transform: 'matrix(1,0,0,1,215,150)' },
        to: [
            { transform: 'matrix(1,0,0,1,215,190)' },
            { transform: 'matrix(1,0,0,1,215,150)' }
        ],
        loop: { delay: 1000 },
        config: {
            easing: easePoly.exponent(2),
            duration: 3500
        },
    })

    const col2 = useSpring({
        from: { transform: 'matrix(1,0,0,1,1126,144)' },
        to: [
            { transform: 'matrix(1,0,0,0.7,1126,144)' },
            { transform: 'matrix(1,0,0,1,1126,144)' }
        ],
        loop: { delay: 500 },
        config: {
            easing: easePoly.exponent(2),
            duration: 4500
        },
    })

    const col3 = useSpring({
        from: { transform: 'matrix(1,0,0,1,1737,50)' },
        to: [
            { transform: 'matrix(1,0,0,1,1737,70)' },
            { transform: 'matrix(1,0,0,1,1737,50)' }
        ],
        loop: { delay: 1500 },
        config: {
            easing: easePoly.exponent(2),
            duration: 3000
        },
    })

    const breathe = useSpring({
        from: { opacity: 0 },
        to: [
            { opacity: 0.7 },
            { opacity: 0 }
        ],
        loop: true,
        config: {
            easing: easePoly.exponent(2),
            duration: 2000
        }
    })

    const light = useSpring({
        from: { opacity: 0 },
        to: [
            { opacity: 1 },
            { opacity: 0 }
        ],
        loop: true,
        config: {
            easing: easePoly.exponent(2),
            duration: 1000
        }
    })

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2500 1250"
            width="2500"
            height="1250"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "100%", transform: 'translate3d(0px, 0px, 0px)' }}
        >
            <defs>
                <image width="108px" height="438px" href="assets/images/conference/col1.png" />
                <image width="103px" height="91px" href="assets/images/conference/col2.png" />
                <image width="139px" height="114px" href="assets/images/conference/col3.png" />
            </defs>


            {/* Kids LIVE */}
            {/* <defs>
                <linearGradient id="conference_kids_paint0_linear" x1="5.47462" y1="21.0544" x2="275.836" y2="137.381" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00BED1" />
                    <stop offset="1" stopColor="#00B4C7" />
                </linearGradient>
            </defs> */}

            <g opacity="1">
                <animated.g style={col1} opacity="1">
                    <image width="108px" height="438px" href="assets/images/conference/col1.png" />
                </animated.g>
                <animated.g style={col2} opacity="1">
                    <image width="103px" height="91px" href="assets/images/conference/col2.png" />
                </animated.g>
                <animated.g style={col3} opacity="1">
                    <image width="139px" height="114px" href="assets/images/conference/col3.png" />
                </animated.g>
                <animated.g style={breathe} transform="matrix(1,0,0,1,392,341)">
                    <path d="M0 0L270 21.5V453L0 459.5V0Z" fill="white" fillOpacity="0.5" />
                </animated.g>
                <animated.g style={breathe} transform="matrix(1,0,0,1,689.5,366)">
                    <path d="M1 0L261 12V424L0.5 427.5L1 0Z" fill="white" fillOpacity="0.5" />
                </animated.g>
                <animated.g style={breathe} transform="matrix(1,0,0,1,971,379)">
                    <path d="M0 0L257 3V411H0V0Z" fill="white" fillOpacity="0.5" />
                </animated.g>
                <animated.g style={breathe} transform="matrix(1,0,0,1,1250,378)">
                    <path d="M0 3.5L257 0V412H0V3.5Z" fill="white" fillOpacity="0.5" />
                </animated.g>

                <animated.g style={light} filter="url(#conference_filter0_fy)" transform="matrix(1,0,0,1,2335,645)">
                    <path d="M56.1697 33.1363L52.7957 36.3553C50.5005 33.9339 47.9184 32.7231 45.0493 32.7231C42.6278 32.7231 40.5851 33.5494 38.921 35.202C37.2685 36.8545 36.4422 38.8916 36.4422 41.313C36.4422 43 36.8094 44.4977 37.5439 45.806C38.2784 47.1143 39.317 48.1414 40.6597 48.8873C42.0024 49.6333 43.4943 50.0063 45.1354 50.0063C46.5355 50.0063 47.8151 49.748 48.9742 49.2316C50.1333 48.7037 51.4071 47.7512 52.7957 46.374L56.0665 49.7825C54.1958 51.6072 52.4285 52.8753 50.7645 53.5868C49.1004 54.2869 47.2011 54.6369 45.0665 54.6369C41.1302 54.6369 37.9054 53.3917 35.3921 50.9014C32.8903 48.3996 31.6394 45.1977 31.6394 41.2958C31.6394 38.7711 32.2075 36.5275 33.3436 34.565C34.4912 32.6026 36.1266 31.0246 38.2497 29.8311C40.3843 28.6376 42.6795 28.0408 45.1354 28.0408C47.2241 28.0408 49.2324 28.4827 51.1604 29.3663C53.0999 30.25 54.7697 31.5066 56.1697 33.1363Z" fill="white" />
                    <path d="M41.2794 63.6778H46.151L54.2934 84.4726H57.1165V92.7871H52.4515V89H35.0306V92.7871H30.3655V84.4726H33.1715L41.2794 63.6778ZM43.7582 70.3913L38.2152 84.4726H49.284L43.7582 70.3913Z" fill="white" />
                    <path d="M37.4923 94.6778H51.3153V99.3945H42.2778V103.973H51.3153V108.604H42.2778V115.266H51.3153V120H37.4923V94.6778Z" fill="white" />
                    <path d="M50.7989 150L43.7927 131.391L36.666 150H31.5533L41.3138 124.678H46.2027L55.946 150H50.7989Z" fill="white" />
                    <path d="M41.3138 157.678H46.2027L55.946 183H50.9366L48.957 177.784H38.6284L36.5627 183H31.5533L41.3138 157.678ZM43.7927 164.391L40.4187 173.085H47.1495L43.7927 164.391Z" fill="white" />
                    <path d="M36.752 185.678H50.7472V190.429H46.1338V211H41.245V190.429H36.752V185.678Z" fill="white" />
                    <path d="M36.6143 246V220.678H41.4343V230.232H42.4844C44.4927 230.232 46.1625 230.467 47.4937 230.937C48.8365 231.397 49.9956 232.28 50.971 233.588C51.9465 234.885 52.4342 236.452 52.4342 238.288C52.4342 240.021 52.0154 241.49 51.1776 242.695C50.3398 243.9 49.3644 244.755 48.2512 245.26C47.1495 245.753 45.6346 246 43.7066 246H36.6143ZM41.4343 234.535V241.404H42.6393C44.6362 241.404 45.9732 241.157 46.6502 240.664C47.3273 240.17 47.6659 239.327 47.6659 238.133C47.6659 235.735 45.9215 234.535 42.4327 234.535H41.4343Z" fill="white" />
                    <path d="M46.0305 275.678V278.948H47.0978C53.1802 278.948 56.2214 281.456 56.2214 286.471C56.2214 287.894 55.9804 289.105 55.4984 290.103C55.0279 291.09 54.3278 291.911 53.3982 292.565C52.4802 293.208 51.5276 293.632 50.5407 293.839C49.5652 294.034 48.0618 294.131 46.0305 294.131V301H41.1761V294.131C39.053 294.131 37.3086 293.919 35.943 293.495C34.5888 293.07 33.4756 292.267 32.6034 291.085C31.7312 289.891 31.2951 288.399 31.2951 286.609C31.2951 284.922 31.6451 283.499 32.3452 282.34C33.0452 281.181 34.0322 280.326 35.306 279.775C36.5914 279.224 38.5481 278.948 41.1761 278.948V275.678H46.0305ZM41.1761 283.39H40.0572C38.3702 283.39 37.2455 283.665 36.6832 284.216C36.1208 284.755 35.8397 285.547 35.8397 286.592C35.8397 287.82 36.1782 288.669 36.8553 289.139C37.5439 289.61 38.5481 289.845 39.8678 289.845H41.1761V283.39ZM46.0305 283.39V289.845H47.6143C49.2439 289.845 50.3226 289.541 50.8505 288.933C51.3784 288.325 51.6424 287.533 51.6424 286.557C51.6424 285.559 51.3612 284.784 50.7989 284.233C50.248 283.671 49.1291 283.39 47.4421 283.39H46.0305Z" fill="white" />
                    <path d="M51.5907 329.662V308.678H56.4452V329.662H61.6095V337.787H57.0993V334H28.1621V308.678H33.051V329.662H39.8162V308.678H44.6706V329.662H51.5907Z" fill="white" />
                    <path d="M37.4923 340.678H51.3153V345.394H42.2778V349.973H51.3153V354.604H42.2778V361.266H51.3153V366H37.4923V340.678Z" fill="white" />
                    <path d="M43.8099 375.041C47.3905 375.041 50.4661 376.338 53.0367 378.931C55.6189 381.525 56.91 384.687 56.91 388.416C56.91 392.112 55.6361 395.239 53.0884 397.798C50.5522 400.357 47.4708 401.637 43.8443 401.637C40.0457 401.637 36.8898 400.323 34.3765 397.695C31.8632 395.067 30.6065 391.945 30.6065 388.33C30.6065 385.909 31.1918 383.682 32.3624 381.651C33.533 379.62 35.1396 378.013 37.1824 376.831C39.2366 375.638 41.4458 375.041 43.8099 375.041ZM43.7582 379.758C41.4171 379.758 39.4489 380.572 37.8538 382.202C36.2586 383.832 35.461 385.903 35.461 388.416C35.461 391.217 36.4651 393.431 38.4735 395.061C40.0342 396.335 41.8245 396.972 43.8443 396.972C46.1281 396.972 48.0733 396.146 49.68 394.493C51.2866 392.84 52.09 390.803 52.09 388.382C52.09 385.972 51.2809 383.935 49.6627 382.271C48.0446 380.595 46.0764 379.758 43.7582 379.758Z" fill="white" />
                </animated.g>
{/*                 

                <animated.g transform="matrix(1,0,0,1,387,226)">
                    <path d="M0.985107 0.0544434H4.53313L4.97152 116H0.985107V0.0544434Z" fill="#7EAFB6" />
                    <path d="M2.01355 0.0544434H5.56158L5.99997 116H2.01355V0.0544434Z" fill="#017687" />
                    <path d="M5.47461 0.0544434L276 21.0544V137L5.47461 116V0.0544434Z" fill="url(#conference_kids_paint0_linear)" />
                </animated.g> */}


            </g>
        </svg>
    )
}

export default ConferenceScene