import React from "react";
import styled, {css} from "styled-components";
import Box from "@/components/Box";
import media from "@/utils/media";
import ScrollbarsBody from "@/components/ScollbarsBody";
import useWindowSize from "@/hooks/useWindowSize";

const BodyWrapper = styled.div`
  width: 100%;
`

const HairDayModal = ({step}) => {
    const [width] = useWindowSize()
    const isMobile = width < 769

    const Scrollbars = isMobile ? ScrollbarsBody : BodyWrapper

    return (
        <Wrapper $step={`${100 - 100 * step}%`}>
            <Scrollbars noRadius>
                <Container>
                    <Header>
                        <HeaderContainer>
                            <img src="/assets/images/dercos/modals/our-projects/vichy.svg" alt="vichy logo"/>
                            <img src="/assets/images/dercos/modals/our-projects/dercos.svg" alt="dercos logo"/>
                        </HeaderContainer>
                    </Header>

                    <InfoWrapper>
                        <InfoContainer>
                            <Info>
                                <Box $flex $mb={16}>
                                    <Badge>24–30 октября</Badge>
                                </Box>
                                <Title>ДНИ ЗДОРОВЬЯ ВОЛОС DERCOS</Title>
                                <Description>
                                    <b>DERCOS</b> – НАУЧНЫЙ ПАРТНЕР ДЕРМАТОЛОГОВ В ОБЛАСТИ ТРИХОЛОГИЧЕСКОЙ ЭКСПЕРТИЗЫ
                                </Description>
                            </Info>
                        </InfoContainer>
                    </InfoWrapper>
                </Container>

                <Body>
                    <Box $pt={32}>
                        <Mission>НАША МИССИЯ</Mission>
                        <List>
                            <ListItem>
                                ЗАБОТА О ЗДОРОВЬЕ ВОЛОС И КОЖЕ ГОЛОВЫ ПАЦИЕНТОВ
                            </ListItem>
                            <ListItem>
                                ПОВЫШЕНИЕ ТРИХОЛОГИЧЕСКОЙ ЭКСПЕРТИЗЫ ВРАЧЕЙ, принимающих участие в ДЗВ
                            </ListItem>
                        </List>
                    </Box>
                    <Stats>
                        <FreeWrapper>
                            <FreeTitle>
                                VICHY ДАЕТ ВОЗМОЖНОСТЬ ЛЮБОМУ ПАЦИЕНТУ ПРОЙТИ БЕСПЛАТНУЮ
                            </FreeTitle>
                            <FreeDescription>
                                диагностику кожи головы волос у дерматолога-трихолога
                            </FreeDescription>
                            <FreeStats>
                                <FreeStatsItem>
                                    <FreeValue>40</FreeValue>
                                    <FreeProperty>городов</FreeProperty>
                                </FreeStatsItem>
                                <FreeStatsItem>
                                    <FreeBorder/>
                                </FreeStatsItem>
                                <FreeStatsItem>
                                    <FreeValue>80</FreeValue>
                                    <FreeProperty>клиник</FreeProperty>
                                </FreeStatsItem>
                            </FreeStats>
                        </FreeWrapper>
                    </Stats>
                </Body>

                <BlackBox/>
            </Scrollbars>
        </Wrapper>
    )
}

export default HairDayModal

const BlackBox = styled.div`
  background: #000;
  width: 100%;
  min-height: 72px;
  height: 100%;
`

const Stats = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -16px;
  margin-bottom: -16px;

  ${media.md`
    margin-top: 32px;
    margin-bottom: 32px;
  `}
`

const FreeBorder = styled.div`
  width: 1px;
  background: #000000;
  height: 80%;
  margin: 0 24px;
`

const FreeProperty = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #000000;

  ${media.md`
      font-size: 14px;
      line-height: 17px;
  `}
`

const FreeValue = styled.div`
  font-weight: 300;
  font-size: 56px;
  line-height: 48px;
  letter-spacing: 0.02em;
  color: #00964A;

  ${media.md`
      font-size: 32px;
      line-height: 48px;
  `}
`

const FreeStatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FreeStats = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`

const FreeDescription = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: #000000;
  margin-top: 8px;

  ${media.md`
      font-size: 14px;
      line-height: 17px;
  `}
`

const FreeTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 110%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;

  ${media.md`
      font-size: 16px;
      line-height: 18px;
  `}
`

const FreeWrapper = styled.div`
  padding: 40px 32px;

  max-width: 359px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px -2px 22px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  ${media.md`
      padding: 24px;
  `}
`

const ListItem = styled.li`
  font-weight: 300;
  font-size: 20px;
  line-height: 110%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #0D0D0D;
  position: relative;
  list-style: none;
  padding-left: 24px;
  max-width: 380px;

  &::before {
    content: ' ';
    position: absolute;
    width: 8px;
    height: 8px;
    left: 0px;
    top: 10px;

    background: #00964A;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  ${media.md`
    font-size: 14px;
    line-height: 17px;
  `}
`
const List = styled.ul`
  margin-top: 16px
`

const Mission = styled.div`
  font-weight: 600;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: 0.02em;

  color: #000000;

  ${media.md`
        font-size: 24px;
      line-height: 29px;
  `}
`

const Badge = styled.div`
  padding: 8px 16px;
  height: 35px;
  background: #00964A;

  font-weight: 300;
  font-size: 16px;
  line-height: 120%;

  color: #FFFFFF;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  border-radius: 500px;

`

const Description = styled.div`
  margin-top: 16px;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  text-transform: uppercase;

  color: #FFFFFF;

  b {
    color: #FFFFFF;
    font-weight: 600;
  }

  ${media.md`
    font-size: 16px;
    line-height: 19px;
  `}
`

const Container = styled.div`
  width: 100%;
`

const Info = styled.div`
  width: 50%;

  ${media.lg`
    padding: 16px;
  `}

  ${media.md`
      width: 100%;
  `}
`

const Wrapper = styled.div<{ $step: string }>`
  width: 100%;
  background: #fff;
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

const Header = styled.div`
  width: 100%;
  padding: 16px;
  min-height: 72px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`

const HeaderContainer = styled.div`
  max-width: 825px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  ${media.md`
  img {
      max-width: 40%;
      object-fit: contain;    
  }
`}
`

const Body = styled.div`
  background: #fff;

  display: flex;
  width: 100%;
  max-width: 825px;
  margin: 0 auto;

  z-index: 111;

  ${Box} {
    width: 50%;
  }

  ${media.md`
    flex-direction: column;
    padding: 16px;
    
      ${Box} {
        width: 100%;
      }
  `}
`


const InfoContainer = styled.div`
  max-width: 825px;
  margin: 0 auto;
`

const InfoWrapper = styled.div`
  padding: 100px 0 72px;
  background: url("/assets/images/dercos/modals/our-projects/bg.png");

  ${media.md`
     background-position: 80% center;
  `}
`

const Title = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 57px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #FFFFFF;

  ${media.md`
    font-size: 28px;
    line-height: 33px;
  `}
`