import React, {useState} from "react";
import ModalClose, {ModalCloseWrapper} from "@/components/shared/modal/ModalClose";
import styled, {css} from "styled-components";
import useWindowSize from "@/hooks/useWindowSize";
import useResponsive from "@/hooks/useResponsive";
import media from "@/utils/media";
import {useRouter} from "next/router";
import useClickOutside from "@/hooks/useClickOutside";

const VichyRulesModal = ({close}) => {
    const [step, setStep] = useState(1)
    const [width, height] = useWindowSize()
    const {isMobile} = useResponsive()
    const scale = width > 767.98 ? Math.min(width / 1024, (height) / 768) : 1
    const scaleBy = scale >= 1 ? 1 : scale

    const router = useRouter()

    const handleStartGame = () => {
        router.push('/vichy/formula')
        close()
    }
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
                                Добро пожаловать в лабораторию VICHY
                            </Header>
                            <Text>
                                Проверьте свои знания и самостоятельно создайте сыворотку с <b>ВИТАМИНОМ B3</b> против
                                пигментации и морщин <b>LIFTACTIV B3</b>
                            </Text>
                            <MoleculeBox>
                                <Divider/>
                                <MoleculeWrapper>
                                    <GameIcon>
                                        <img src="/assets/images/vichy/modals/rules/molecules.png" alt="molecules"/>
                                    </GameIcon>
                                    <MoleculeText>
                                        LIFTACTIV B3
                                    </MoleculeText>
                                </MoleculeWrapper>
                                <Divider/>
                            </MoleculeBox>
                            <Text>
                                Переместите все правильные ингредиенты во флакон и получите шанс* выиграть один
                                из лимитированных <b>зонтов от марки VICHY</b>.
                            </Text>
                            <ImageWrapper>
                                <img src="/assets/images/vichy/modals/rules/umbrella.png" alt="umbrella"/>
                            </ImageWrapper>
                            <Description>
                                *250 победителей будут выбраны случайным образом. Призы будут разосланы по окончанию
                                конгресса.
                            </Description>

                            <PlayButton onClick={handleStartGame}>Играть</PlayButton>
                        </MobileContent>
                    ) : (
                        <>
                            <HeaderWrapper>
                                <Header>
                                    Добро пожаловать в лабораторию VICHY
                                </Header>
                            </HeaderWrapper>
                            <Container>
                                <ImageWrapper>
                                    <img src="/assets/images/vichy/modals/rules/umbrella.png" alt="umbrella"/>
                                </ImageWrapper>
                                <Rules>
                                    <Text>
                                        Проверьте свои знания и самостоятельно создайте сыворотку с <b>ВИТАМИНОМ
                                        B3</b> против пигментации и морщин <b>LIFTACTIV B3</b>.
                                    </Text>
                                    <Text>
                                        Переместите все правильные ингредиенты во флакон и получите шанс* выиграть один
                                        из лимитированных зонтов от марки <b>VICHY</b>.
                                    </Text>
                                    <Description>
                                        *250 победителей будут выбраны случайным образом. Призы будут разосланы по
                                        окончании конгресса.
                                    </Description>

                                    <PlayButton onClick={handleStartGame}>Играть</PlayButton>
                                </Rules>
                            </Container>
                        </>
                    )}
                </BodyWrapper>
            </Content>
        </Wrapper>
    )
}

export default VichyRulesModal

const GameIcon = styled.div`
  margin: 8px 0;
`

const MoleculeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const MoleculeText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #003056;
  padding-left: 20px;
  min-height: 80px;
  display: flex;
  align-items: center;
`

const MoleculeBox = styled.div`
  margin: 20px 0;
`

const Divider = styled.div`
  height: 1px;
  background: #DE0311;
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
  max-width: 50%;

  ${media.md`
    margin-right: 0px;
    max-height: 192px;
    height: 100%;
    margin: 12px 0;
    max-width: 100%;

    img {
        max-height: 100%;
        object-fit: contain;
    }
  `}
`

const Rules = styled.div`
  max-width: 520px;
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
  background: #DE0311;
  border-radius: 5px;

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
    text-align: center;
  `}
`

const Text = styled.div`
  font-size: 24px;
  line-height: 130%;
  color: #2C435F;

  margin-bottom: 12px;

  b {
    font-weight: 800;
  }

  ${media.md`
    font-size: 16px;
    text-align: center;
    
    b {
        text-transform: uppercase;    
    }
  `}
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: url('/assets/images/vichy/modals/rules/bg.png');
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 60px 40px 100px 60px;
`

const HeaderWrapper = styled.div`
  width: 100%;
  background: #fff;
  padding: 0 40px;
`

const Header = styled.div`
  background: #FFFFFF;
  width: 100%;
  border-bottom: 1px solid #DE0311;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px 20px 20px;

  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #000000;

  ${media.md`
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #2C435F;
    border-bottom: none;
    position: relative;
    
    box-shadow: none;
    min-height: 0;
    margin-bottom: 16px;
    
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    color: #2C435F;
    padding: 0;
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


  ${media.md`
    padding-top: 0px;
  `}
  ${({$scale}) => $scale && css`
    transform: scale(${$scale});
  `}
`