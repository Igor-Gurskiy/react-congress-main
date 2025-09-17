import React from "react";
import styled, {css} from "styled-components";
import SchoolSteps from "@/components/screens/dercos/modals/our-projects/school/SchoolSteps";
import media from "@/utils/media";
import ScrollbarsBody from "@/components/ScollbarsBody";
import useWindowSize from "@/hooks/useWindowSize";

const BodyWrapper = styled.div`
  width: 100%;
`

const SchoolModal = ({step}) => {
    const [width] = useWindowSize()
    const isMobile = width < 769

    const Scrollbars = isMobile ? ScrollbarsBody : BodyWrapper
    return (
        <Wrapper $step={`${100 - 100 * step}%`}>
            <Scrollbars noRadius>
                <Header>
                    <HeaderContainer>
                        <img src="/assets/images/dercos/modals/our-projects/vichy.png" alt="vichy logo"/>
                        <img src="/assets/images/dercos/modals/our-projects/rhrs.png" alt="rhrs logo"/>
                    </HeaderContainer>
                </Header>

                <Body>
                    <Info>
                        <Title>ШКОЛА ТРИХОСКОПИИ 2022</Title>
                        <List>
                            <ListItem>Новый партнер</ListItem>
                            <ListItem>Новые возможности</ListItem>
                            <ListItem>Новые эксперты</ListItem>
                        </List>
                    </Info>

                    <SchoolSteps/>

                    <AboutContainer>
                        <DoctorImg src="/assets/images/dercos/modals/our-projects/doctor.png"
                                   alt="doctor image"/>

                        <SchoolContainer>
                            <TatianaWrapper>
                                <img
                                    src="/assets/images/dercos/modals/our-projects/tatiana.png"
                                    alt="tatiana image"/>
                            </TatianaWrapper>

                            <PartnerWrapper>
                                <PartnerText>
                                    В 2022 году партнер проекта –<br/>
                                    <b>Школа трихологии Татьяны Силюк</b>
                                </PartnerText>
                                <img
                                    src="/assets/images/dercos/modals/our-projects/school-logo.png"
                                    alt="school logo image"/>
                            </PartnerWrapper>
                        </SchoolContainer>
                    </AboutContainer>
                </Body>
            </Scrollbars>
        </Wrapper>
    )

    return (
        <Wrapper $step={`${100 - 100 * step}%`}>
            <ScrollbarsBody noRadius>
                <Header>
                    <HeaderContainer>
                        <img src="/assets/images/dercos/modals/our-projects/vichy.png" alt="vichy logo"/>
                        <img src="/assets/images/dercos/modals/our-projects/rhrs.png" alt="rhrs logo"/>
                    </HeaderContainer>
                </Header>

                <Body>
                    <Info>
                        <Title>ШКОЛА ТРИХОСКОПИИ 2022</Title>
                        <List>
                            <ListItem>Новый партнер</ListItem>
                            <ListItem>Новые возможности</ListItem>
                            <ListItem>Новые эксперты</ListItem>
                        </List>
                    </Info>

                    <SchoolSteps/>

                    <AboutContainer>
                        <DoctorImg src="/assets/images/dercos/modals/our-projects/doctor.png"
                                   alt="doctor image"/>

                        <SchoolContainer>
                            <TatianaWrapper>
                                <img
                                    src="/assets/images/dercos/modals/our-projects/tatiana.png"
                                    alt="tatiana image"/>
                            </TatianaWrapper>

                            <PartnerWrapper>
                                <PartnerText>
                                    В 2022 году партнер проекта –<br/>
                                    <b>Школа трихологии Татьяны Силюк</b>
                                </PartnerText>
                                <img
                                    src="/assets/images/dercos/modals/our-projects/school-logo.png"
                                    alt="school logo image"/>
                            </PartnerWrapper>
                        </SchoolContainer>
                    </AboutContainer>
                </Body>
            </ScrollbarsBody>
        </Wrapper>
    )
}

export default SchoolModal

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
  background: #1C1C1C;
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
  width: 100%;
`

const Info = styled.div`
  padding: 35px 0 54px;
`

const Title = styled.div`
  max-width: 825px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 61px;
  line-height: 73px;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  color: #000000;

  ${media.lg`
    font-size: 32px;
    line-height: 38px;
  `}
`

const List = styled.div`
  max-width: 825px;
  margin: 0 auto;
  font-weight: 800;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  color: #5BB2A8;

  ${media.lg`
    font-size: 18px;
    line-height: 22px;
    flex-direction: column;
  `}
`

const ListItem = styled.div``

const AboutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;

  ${media.md`
    flex-direction: column;
    align-items: flex-start;
  `}
`

const DoctorImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;

  ${media.lg`
    max-width: 50%;
  `}

  ${media.md`
    position: relative;
    max-width: 100%;
    max-height: 200px;
    object-fit: contain;
    margin-top: -50px;
  `}
`

const SchoolContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  ${media.md`
   padding: 0 16px;
  `}
`

const TatianaWrapper = styled.div`
  display: inline-block;
  border: 1px solid #000000;
  border-radius: 50%;
  overflow: hidden;
  padding-top: 8px;
  width: 148px;
  height: 148px;

  ${media.md`
    img {
        max-width: 96px;
    }
  `}
`
const PartnerWrapper = styled.div`
  display: inline-block;
  max-width: 200px;
  margin-left: 24px;


`
const PartnerText = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;

  color: #1C1C1C;
`
