import React, {useState} from "react";
import ModalClose, {ModalCloseWrapper} from "@/components/shared/modal/ModalClose";
import styled, {css} from "styled-components";
import useWindowSize from "@/hooks/useWindowSize";
import useClickOutside from "@/hooks/useClickOutside";
import ScrollbarsBody from "@/components/ScollbarsBody";

const SerumModal = ({close}) => {
    const [step, setStep] = useState(1)
    const [width, height] = useWindowSize()
    const scale = width > 767.98 ? Math.min(width / 931, (height - 100) / 853) : 1
    const scaleBy = scale >= 1 ? 1 : scale

    const isMobile = width < 769
    const Scrollbars = isMobile ? ScrollbarsBody : BodyWrapper

    const nodeRef = useClickOutside(() => close())

    return (
        <AllWrapper>
            <AllContent style={{maxHeight: height}} ref={nodeRef}>
                <BodyWrapper $scale={scaleBy}>
                    <ModalCloseWrapper>
                        <ModalClose close={close}/>
                    </ModalCloseWrapper>
                    <ModalContent>

                        <Wrapper $step={`${100 - 100 * step}%`}>
                            <Scrollbars noRadius>
                                <Content>
                                    <picture>
                                        <img src="assets/images/vichy/modals/aminexil/serum.png"
                                             alt="aminexil serum"/>
                                    </picture>
                                    {/*<ModalHeader>*/}
                                    {/*    <ModalTitle>aminexil intensive 5</ModalTitle>*/}
                                    {/*    <ModalCaption>*/}
                                    {/*        средство против выпадения волос широкого спектра*/}
                                    {/*    </ModalCaption>*/}
                                    {/*    <ModalDescription>*/}
                                    {/*        действует на кожу головы, корень<br/>*/}
                                    {/*        и волокно волоса, помогая эффективно<br/>*/}
                                    {/*        бороться с процессом выпадения*/}
                                    {/*    </ModalDescription>*/}
                                    {/*    <Impact>*/}
                                    {/*        5 активных ингредиентов<br/>>*/}
                                    {/*        для комплексного действия*/}
                                    {/*    </Impact>*/}
                                    {/*</ModalHeader>*/}
                                </Content>
                            </Scrollbars>
                        </Wrapper>


                    </ModalContent>
                </BodyWrapper>
            </AllContent>
        </AllWrapper>
    )
}

export default SerumModal

const Impact = styled.div`
  font-weight: 300;
  font-size: 28px;
  line-height: 114.5%;
  text-transform: uppercase;
  color: #000000;

  padding-left: 24px;
  position: relative;

  &::before {
    content: ' ';
    position: absolute;
    top: 4px;
    left: 0px;
    background: #CD001F;
    width: 10px;
    height: 100%;
  }

`

const ModalDescription = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 114.5%;
  text-transform: uppercase;
  color: #000000;
`

const ModalHeader = styled.div``
const ModalTitle = styled.div`
  font-weight: 600;
  font-size: 64px;
  line-height: 114.5%;
  text-transform: uppercase;
  color: #000000;
`
const ModalCaption = styled.div`
  font-weight: 300;
  font-size: 42px;
  line-height: 114.5%;
  text-transform: uppercase;
  color: #000000;
`


const Content = styled.div`
  background-position: bottom center;
  background-repeat: no-repeat;

  display: flex;
  flex-shrink: 0;
  width: 100%;
  flex-direction: column;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`

const Wrapper = styled.div<{ $step: string }>`
  width: 100%;
  height: 100%;
  background-color: #fff;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  transition: all 0.3s ease-out;

  ${({$step}) => $step && css`
    transform: translateX(${$step});
  `}
`

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
`

const AllWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const AllContent = styled.div`
  width: 100%;
  max-width: 930px;
  overflow: hidden;
`

const BodyWrapper = styled.div<{ $scale?: number }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform-origin: top;

  ${({$scale}) => $scale && css`
    transform: scale(${$scale});
  `}
`