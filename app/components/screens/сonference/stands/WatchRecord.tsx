import React from "react"
import styled, {css} from "styled-components"

type WatchRecordPropsType = {
    rotate?: number
    width: number
    height: number
}

const WatchRecord: React.FC<WatchRecordPropsType> = ({rotate, width, height, children}) => {
    return (
        <Wrapper $rotate={rotate} $width={width} $height={height}>
            <WatchRecordText>{children}</WatchRecordText>
        </Wrapper>
    )
}

export default WatchRecord

const Wrapper = styled.div<{ $rotate?: number, $width: number, $height: number }>`
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

const WatchRecordText = styled.div`
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #00ACC2;
`