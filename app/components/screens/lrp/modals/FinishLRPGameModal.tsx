import React, {useState} from "react";
import ModalClose, {ModalCloseWrapper} from "@/components/shared/modal/ModalClose";
import styled, {css} from "styled-components";
import useWindowSize from "@/hooks/useWindowSize";
import useResponsive from "@/hooks/useResponsive";
import media from "@/utils/media";
import useClickOutside from "@/hooks/useClickOutside";

const FinishLRPGameModal = ({close}) => {
    const [step, setStep] = useState(1)
    const [width, height] = useWindowSize()
    const {isMobile} = useResponsive()
    const scale = width > 767.98 ? Math.min(width / 1024, (height - 140) / 768) : 1
    const scaleBy = scale >= 1 ? 1 : scale

    const nodeRef = useClickOutside(() => close())

    return (
        <Wrapper>
            <Content style={{maxHeight: height}} ref={nodeRef}>
                <ModalCloseWrapper>
                    <ModalClose close={close}/>
                </ModalCloseWrapper>
                <BodyWrapper $scale={scaleBy}>
                    {isMobile ? (
                        <MobileContent style={{maxHeight: height - 100}}>
                            <Header>
                                Вы нашли все 10 молекул Aqua Posae Filiformis
                            </Header>

                            <FinishImageWrapper>
                                <img src="/assets/images/lrp/modals/rules/finish-cup.png" alt="finish cup"/>
                            </FinishImageWrapper>

                            <Text>
                                Поздравляем! Вы нашли все 10 молекул Aqua Posae Filiformis и <b>стали участником
                                розыгрыша.</b>
                            </Text>
                            <Text>
                                По завершению ACD Конгресса <b>искусственный интеллект выберет
                                победителей,</b> с
                                которыми мы свяжемся в начале декабря.
                            </Text>

                            <Description>
                                *300 победителей будут выбраны случайным образом среди нашедших все 10 молекул. Призы
                                будут разосланы по окончании конгресса.
                            </Description>

                            <PlayButton onClick={close}>Ок, спасибо</PlayButton>
                        </MobileContent>
                    ) : (
                        <>
                            <Header>
                                Вы нашли все 10 молекул Aqua Posae Filiformis
                            </Header>
                            <Container>
                                <ImageWrapper>
                                    <img src="/assets/images/lrp/modals/rules/cup.png" alt="cup"/>
                                </ImageWrapper>
                                <Rules>
                                    <Text>
                                        Поздравляем! Вы нашли все 10 молекул Aqua Posae Filiformis и <b>стали участником
                                        розыгрыша.</b>
                                    </Text>
                                    <Text>
                                        По завершению ACD Конгресса <b>искусственный интеллект выберет
                                        победителей,</b> с
                                        которыми мы свяжемся в начале декабря.
                                    </Text>
                                    <Description>
                                        *300 победителей будут выбраны случайным образом среди нашедших все 10 молекул.
                                        Призы будут разосланы по окончании конгресса.
                                    </Description>

                                    <PlayButton onClick={close}>Ок, спасибо</PlayButton>
                                </Rules>
                            </Container>
                        </>
                    )}
                </BodyWrapper>
            </Content>
        </Wrapper>
    )
}

export default FinishLRPGameModal

const FinishImageWrapper = styled.div`
  text-align: center;
`

const MobileContent = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 4px;
  height: 100%;
  overflow-y: auto;
`

const ImageWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-right: 64px;

  ${media.md`
    margin-right: 0px;
    max-height: 192px;
    height: 100%;
    margin: 12px 0;
    img {
        max-height: 100%;
        object-fit: contain;
    }
  `}
`

const Rules = styled.div`
  max-width: 486px;
  width: 100%;
`

const PlayButton = styled.button`
  padding: 12px 26px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 24px;

  min-width: 124px;
  min-height: 48px;
  background: #36B0FC;
  border-radius: 4px;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #FFFFFF;
  ${media.md`
      width: 100%;
      text-align: center;
      justify-content: center;
      margin: 24px auto;
  `}
`

const Description = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: #2C435F;
  margin-top: 48px;

  ${media.md`
    margin-top: 0px;
    text-align: left;
  `}
`

const Text = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  color: #2C435F;
  margin-bottom: 16px;

  b {
    font-weight: 800;
  }

  ${media.md`
    font-size: 16px;
    text-align: center;
  `}
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: url('/assets/images/lrp/modals/rules/molecules.png');
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 60px 40px 100px 60px;
`

const Header = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 23px rgba(72, 120, 220, 0.32);

  min-height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 16px;
  top: 0;
  left: 0;
  right: 0;

  font-weight: 800;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #003056;

  ${media.md`
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #2C435F;
    
    position: relative;
    
    box-shadow: none;
    min-height: 0;
    margin-bottom: 16px;
  `}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${media.md`
    align-items: flex-start;
  `}
`

const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  overflow: hidden;
`

const BodyWrapper = styled.div<{ $scale?: number }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform-origin: top;
  border-radius: 4px;


  padding-top: 108px;
  ${media.md`
    padding-top: 0px;
  `}
  ${({$scale}) => $scale && css`
    transform: scale(${$scale});
  `}
`