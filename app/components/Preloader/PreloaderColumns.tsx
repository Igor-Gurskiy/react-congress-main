import React from 'react'
import styled, { keyframes } from 'styled-components'
import media from '@/utils/media'

const PreloaderColumns = () => {
	return (
		<>
			<BotLeftCol src="/assets/images/preloader/col1.svg" alt="col" />
			<SmallBotLeftCol src="/assets/images/preloader/col1.svg" alt="col" />

			<TopRightCol src="/assets/images/preloader/col1.svg" alt="col" />
			<SmallTopRightCol src="/assets/images/preloader/col1.svg" alt="col" />
		</>
	)
}

export default PreloaderColumns

const moveLeftAnimation = keyframes`
  0% {
    transform: translateX(10%) translateY(10%);
  }
  50% {
    transform: translateX(20%) translateY(30%);
  }
  100% {
    transform: translateX(10%) translateY(10%);
  }
`

const moveRightAnimation = keyframes`
  0% {
    transform: translateX(-10%) translateY(-10%);
  }
  50% {
    transform: translateX(-20%) translateY(-30%);
  }
  100% {
    transform: translateX(-10%) translateY(-10%);
  }
`
const TopRightCol = styled.img`
	position: absolute;
	top: -5%;
	right: 10%;
	max-height: 45%;
	animation: ${moveRightAnimation} 9s cubic-bezier(0.5, 0, 0.5, 1) infinite;

	${media.lg`
     top: -15%;
     right: 15%;
  `}
`

const SmallTopRightCol = styled.img`
	position: absolute;
	top: -20%;
	right: 8%;
	max-height: 45%;
	animation: ${moveRightAnimation} 5s cubic-bezier(0.5, 0, 0.5, 1) infinite;

	${media.lg`
     top: -30%;
     right: 5%;
  `}
`

const BotLeftCol = styled.img`
	position: absolute;
	bottom: -5%;
	left: 10%;
	max-height: 45%;
	animation: ${moveLeftAnimation} 7s cubic-bezier(0.5, 0, 0.5, 1) infinite;

	${media.lg`
     bottom: -15%;
     left: 15%;
  `}
`

const SmallBotLeftCol = styled.img`
	position: absolute;
	bottom: -20%;
	left: 8%;
	max-height: 45%;

	animation: ${moveLeftAnimation} 4s cubic-bezier(0.5, 0, 0.5, 1) infinite;

	${media.lg`
     bottom: -30%;
     left: 5%;
  `}
`
