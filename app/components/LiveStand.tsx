import { LiveIcon } from "./OnAir"
import styled, { css } from 'styled-components';
import { useUIStore } from "@/stores/uiStore";

const LiveStand = ({ top = 10 }) => {
    const live = useUIStore(state => state.live)

    if (!live) return null

    return (
        <LiveWrapper $top={top}>
            <LiveIcon />
        </LiveWrapper>
    )
}

export default LiveStand

const LiveWrapper = styled.div<{ $top: number }>`
    width: 90px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    ${({ $top }) => $top && css`
        top: ${$top}px;
    `}
`