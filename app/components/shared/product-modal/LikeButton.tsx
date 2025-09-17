import React from 'react'
import styled, {css, keyframes} from 'styled-components'

type LikeButtonPropsType = {
    like: boolean
    setLike?: (like: boolean) => void
    onClick: () => void
}

const LikeButton: React.FC<LikeButtonPropsType> = ({like, onClick}) => {
    return (
        <RecommendBtn active={like} onClick={onClick}>
            <ButtonContainer>
                <ButtonText>Я рекомендую</ButtonText>
                <IconBox>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {like ? (
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M5.67981 10.8898C6.15327 11.2783 6.60087 11.6457 7.00017 11.9998L7.00084 12.0051C7.43084 11.6211 7.91617 11.2244 8.43084 10.8051L8.4375 10.7998C10.2475 9.32244 12.2982 7.64844 13.2042 5.64177C13.5023 5.0019 13.66 4.30565 13.6668 3.59977C13.6678 3.12109 13.5732 2.64704 13.3884 2.20545C13.2037 1.76387 12.9325 1.36364 12.591 1.02828C12.2494 0.692925 11.8443 0.429193 11.3994 0.252572C10.9545 0.075951 10.4787 -0.00999797 10.0002 -0.000227976C9.21328 0.000917724 8.44333 0.228409 7.78217 0.655105C7.49217 0.845105 7.2295 1.07311 7.00017 1.33311C6.77245 1.07194 6.50948 0.843751 6.21884 0.655105C5.55739 0.228493 4.78726 0.00101523 4.00017 -0.000227976C3.52159 -0.00999797 3.04588 0.075951 2.60098 0.252572C2.15607 0.429193 1.75094 0.692925 1.40938 1.02828C1.06781 1.36364 0.796686 1.76387 0.611932 2.20545C0.427178 2.64704 0.332516 3.12109 0.333504 3.59977C0.340837 4.3051 0.498837 4.99977 0.79617 5.63844C1.70027 7.6409 3.74491 9.31275 5.55212 10.7905L5.5635 10.7998H5.57017C5.60686 10.8299 5.64341 10.8599 5.67981 10.8898Z"/>
                        ) : (
                            <path
                                d="M7.00017 11.9998C6.57017 11.6184 6.08417 11.2218 5.57017 10.7998H5.5635C3.7535 9.31977 1.70217 7.6451 0.79617 5.63844C0.498837 4.99977 0.340837 4.3051 0.333504 3.59977C0.332516 3.12109 0.427178 2.64704 0.611932 2.20545C0.796686 1.76387 1.06781 1.36364 1.40938 1.02828C1.75094 0.692925 2.15607 0.429193 2.60098 0.252572C3.04588 0.075951 3.52159 -0.00999797 4.00017 -0.000227976C4.78726 0.00101523 5.55739 0.228493 6.21884 0.655105C6.50948 0.843751 6.77245 1.07194 7.00017 1.33311C7.2295 1.07311 7.49217 0.845105 7.78217 0.655105C8.44333 0.228409 9.21328 0.000917724 10.0002 -0.000227976C10.4787 -0.00999797 10.9545 0.075951 11.3994 0.252572C11.8443 0.429193 12.2494 0.692925 12.591 1.02828C12.9325 1.36364 13.2037 1.76387 13.3884 2.20545C13.5732 2.64704 13.6678 3.12109 13.6668 3.59977C13.66 4.30565 13.5023 5.0019 13.2042 5.64177C12.2982 7.64844 10.2475 9.32244 8.4375 10.7998L8.43084 10.8051C7.91617 11.2244 7.43084 11.6211 7.00084 12.0051L7.00017 11.9998ZM4.00017 1.33311C3.37918 1.32533 2.78022 1.563 2.3335 1.99444C2.12047 2.20369 1.95168 2.45363 1.83716 2.72941C1.72263 3.00518 1.66471 3.30117 1.66684 3.59977C1.67417 4.1131 1.79084 4.61977 2.00817 5.08511C2.43586 5.9509 3.01292 6.73446 3.71284 7.39977C4.3735 8.06644 5.1335 8.71177 5.79084 9.25444C5.97284 9.40444 6.15817 9.55577 6.3435 9.7071L6.46017 9.80244C6.63817 9.94777 6.82217 10.0984 7.00017 10.2464L7.00884 10.2384L7.01284 10.2351H7.01684L7.02284 10.2304H7.0295L7.0415 10.2204L7.06884 10.1984L7.0735 10.1944L7.08084 10.1891H7.08484L7.09084 10.1838L7.5335 9.82044L7.6495 9.7251C7.83684 9.57244 8.02217 9.4211 8.20417 9.2711C8.8615 8.72844 9.62217 8.08377 10.2828 7.41377C10.9829 6.74883 11.56 5.96546 11.9875 5.09977C12.2088 4.63044 12.3275 4.11844 12.3342 3.59977C12.3355 3.30202 12.2771 3.00703 12.1625 2.73223C12.0478 2.45742 11.8793 2.20836 11.6668 1.99977C11.221 1.56639 10.6219 1.32676 10.0002 1.33311C9.62506 1.32992 9.25352 1.40615 8.90997 1.55678C8.56642 1.70741 8.25863 1.92904 8.00684 2.20711L7.00017 3.36711L5.9935 2.20711C5.74171 1.92904 5.43392 1.70741 5.09037 1.55678C4.74682 1.40615 4.37528 1.32992 4.00017 1.33311Z"/>
                        )}
                    </svg>
                </IconBox>
            </ButtonContainer>
        </RecommendBtn>
    )
}

export default LikeButton

const ButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  //color: #1F1F1F;
`

const IconBox = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  z-index: 2;
`

const scaleIn = keyframes`
  0% {
    transform: scale(0.2);
  }
  70% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`

const RecommendBtn = styled.button<{ active?: boolean }>`
  b {
    font-family: Gilroy, sans-serif;
  }

  min-width: 160px;
  background: #fff;
  filter: drop-shadow(1px 4px 9px rgba(64, 64, 64, 0.25));
  border-radius: 8px;
  padding: 8px 12px;
  color: #1F1F1F;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform;
  z-index: 11;

  svg {
    margin-left: 8px;
    fill: #1F1F1F;
    transition: all 0.4s ease-in-out;
  }

  &::before {
    content: ' ';
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    top: 20px;
    right: 20px;
    border-radius: 50%;
    background-color: #1F1F1F;
    transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
    transform: translate(0, -50%);
    z-index: 1;
    opacity: 0;
  }

  @media (hover: hover) {
    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
  }

  ${props => props.active && css`
    box-shadow: 0px 0px 4px rgba(31, 31, 31, 0.25);
    border-radius: 8px;
    color: #D7E5ED;

    svg {
      fill: #D7E5ED;
      animation: ${scaleIn} 0.4s ease-out;
    }

    &::before {
      width: 200%;
      height: 250px;
      opacity: 1;
      transform: translate(20%, -50%);
    }

    &:hover {
      svg {
        transform: none;
      }
    }
  `}
  &:disabled {
    opacity: 0.5;
  }
`