import media from '@/utils/media'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import PreloaderSpinner from '@/components/Preloader/PreloaderSpinner'
import PreloaderColumns from '@/components/Preloader/PreloaderColumns'

const PreloaderStage = () => {
	return (
		<Wrapper>
			<TextWrapper>
				<div>
					<PreloaderHeader>Онлайн-конгресс</PreloaderHeader>
					<PreloaderBrand>
						L'Oréal
						<br />
						Dermatological
						<br />
						Beauty <span>2023</span>
					</PreloaderBrand>
					<SpinnerWrapper>
						<PreloaderSpinner />
					</SpinnerWrapper>
					<PreloaderDescription>Идет загрузка</PreloaderDescription>
				</div>
			</TextWrapper>

			<PreloaderColumns />
		</Wrapper>
	)
}

export default PreloaderStage

const PreloaderBrand = styled.div`
	color: #242424;
	text-align: center;
	font-size: 90px;
	font-weight: 600;
	line-height: 95%;
	letter-spacing: 2.743px;
	text-transform: uppercase;

	span {
		color: #195298;
	}

	${media.lg`
        font-size: 72px;
    `};

	${media.md`
      font-size: 36px;
  `};

	@media screen and (orientation: landscape) and (max-width: 1024px) {
		font-size: 36px;
		line-height: 30px;
	}
`

const SpinnerWrapper = styled.div`
	margin: 56px auto 30px auto;

	@media screen and (orientation: landscape) and (max-width: 1024px) {
		margin: 16px auto;
	}
`

const Wrapper = styled.div`
	background: #fff;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`

const blinkingiamtion = keyframes`
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
`

const PreloaderDescription = styled.div`
	animation: ${blinkingiamtion} 2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	color: #1e1e1e;
	text-align: center;
	font-size: 36px;
	font-style: normal;
	font-weight: 300;
	line-height: 30px;
	letter-spacing: 1.8px;

	${media.md`
        font-size: 16px;
    `};

	@media screen and (orientation: landscape) and (max-width: 1024px) {
		font-size: 20px;
		line-height: 20px;
	}
`

const TextWrapper = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	text-align: center;
`

const PreloaderHeader = styled.div`
	text-transform: uppercase;
	font-weight: 400;
	font-size: 40px;
	line-height: 30px;
	margin-bottom: 36px;
	letter-spacing: 0.05em;

	color: #848484;

	${media.md`
        font-size: 20px;
    `};

	@media screen and (orientation: landscape) and (max-width: 1024px) {
		font-size: 24px;
		line-height: 30px;
		margin-bottom: 32px;
	}
`
