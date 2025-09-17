import {LiveIcon} from "@/components/OnAir"
import React from "react"
import styled, {css} from "styled-components"

type WatchNowPropsType = {
    rotate?: number
    width: number
    height: number
}

const WatchNow: React.FC<WatchNowPropsType> = ({rotate, width, height}) => {
    return (
        <WatchNowWrapper $rotate={rotate} $width={width} $height={height}>
            <WatchNowText>Смотреть сейчас</WatchNowText>
            <LiveIcon/>
        </WatchNowWrapper>
    )
}

export default WatchNow

const WatchNowWrapper = styled.div<{ $rotate?: number, $width: number, $height: number }>`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${({$width}) => $width && css`
    width: ${$width}px;
  `}

  ${({$height}) => $height && css`
    height: ${$height}px;
  `}

  ${({$rotate}) => $rotate && css`
    transform: rotate(${$rotate}deg);
  `}
`

const WatchNowText = styled.div`
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #FFFFFF;
  margin-bottom: 8px;
`