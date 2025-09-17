import useWindowSize from '@/hooks/useWindowSize'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const PanoramaViewTrack = () => {
    const [width] = useWindowSize()
    const [sliderWidth, setSliderWidth] = useState(width)
    const [sliderPos, setSliderPos] = useState(0)
    const offset = useUIStore(state => state.offset)
    const scaleRatio = useUIStore(state => state.scaleRatio)

    useEffect(() => {
        const sliderTempPos = offset / (2500 - width / scaleRatio)
        setSliderPos(Math.floor(Math.abs(sliderTempPos) * (width - 32 - sliderWidth)))
    }, [width, offset, sliderWidth])

    useEffect(() => {
        const sliderWidthPercent = width / 2500
        setSliderWidth(width * sliderWidthPercent)
    }, [width])
    
    return (
        <ViewTrackWrapper>
            <Track>
                <TrackSlider $width={sliderWidth} $left={sliderPos} />
            </Track>
        </ViewTrackWrapper>
    )
}

export default PanoramaViewTrack

const TrackSlider = styled.div<{ $width: number, $left: number }>`
    position: absolute;
    ${({ $width }) => $width && css`
        width: ${$width}px;
    `}
    ${({ $left }) => css`
        transform: translateX(${$left}px);
    `}
    transition: transform 0.3s;
    height: 14px;
    background: #BDBDBD;
    border-radius: 29px;
`

const Track = styled.div`
    position: relative;
    background: #424242;
    border-radius: 20px;
    height: 14px;
    overflow: hidden;
`

const ViewTrackWrapper = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0px;
    left: 0px;
    padding: 20px 16px;
    pointer-events: none;
`