import React from "react";
import styled from "styled-components";
import media from "@/utils/media";
import useWindowSize from "@/hooks/useWindowSize";


const FormulaHeader = ({score, finished}) => {

    const percent = ((score / 5) * 100).toFixed(0)
    const [width] = useWindowSize()
    const isMobile = width < 769

    if (isMobile && finished) return null

    return (
        <Header>
            <MarkName>Aminexil intensive 5</MarkName>
            <ProgressWrapper>
                <Progress>
                    <ProgressPercent>{percent}%</ProgressPercent>
                    <ProgressBar>
                        <ProgressLine style={{width: `${percent}%`}}/>
                    </ProgressBar>
                </Progress>
            </ProgressWrapper>
        </Header>
    )
}

export default FormulaHeader

const ProgressLine = styled.div`
  background: linear-gradient(90deg, #BC1A19 0%, #E91012 100%);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  transition: all 0.3s ease-out;
`

const ProgressBar = styled.div`
  background: #E7E7E7;
  border-radius: 35px;
  width: 100%;
  height: 14px;
  overflow: hidden;
  position: relative;
`

const ProgressPercent = styled.div`
  font-weight: 800;
  font-size: 28px;
  line-height: 34px;
  color: #DE0311;

  margin-right: 24px;

  ${media.lg`
      font-size: 20px;
      line-height: 24px;
  `}

  ${media.xl`
      font-size: 24px;
      line-height: 28px;
  `}
`

const ProgressWrapper = styled.div`
  max-width: 574px;
  width: 100%;
  margin: 16px auto 0;

  ${media.lg`
    max-width: 420px;
  `}

  ${media.md`
      max-width: 100%;
      margin-top: 0;
      padding: 16px;
  `}
`

const Progress = styled.div`
  background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%);
  box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  padding: 20px;

  display: flex;
  align-items: center;

  ${media.xl`
    padding: 12px 20px;
  `}
`

const Header = styled.div`
  max-width: 600px;
  width: 100%;
  position: absolute;
  top: 3vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  @media only screen and (max-device-width: 1024px) and (orientation: landscape) {
    display: none;
  }
`

const MarkName = styled.h1`
  font-weight: 600;
  font-size: 56px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #DE0311;

  ${media.xl`
      font-size: 42px;
  `}

  ${media.lg`
      font-size: 32px;
  `}

  ${media.lg`
      font-size: 24px;
      text-align: right;
      padding-right: 16px;
  `}

`