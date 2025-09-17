import { animated, useTransition } from "react-spring"
import styled, { css } from "styled-components"

const TourLightImage = styled(animated.img)<{ $top: number, $left: number }>`
    position: absolute;
    ${({ $top }) => $top && css`top: ${$top}px;`}
    ${({ $left }) => $left && css`left: ${$left}px;`}
    z-index: 23;
    user-select: none;
    pointer-events: none;
`


const TourLight = ({ open, src, left, top }) => {
    const transition = useTransition(open, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    return transition((style, item) => item ? (
        <TourLightImage style={style} src={src} $top={top} $left={left} />
    ) : '')
}

export default TourLight