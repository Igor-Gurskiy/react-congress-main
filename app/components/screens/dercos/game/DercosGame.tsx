import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

import { GameContainer } from '@/components/shared/game/GameContainer'
import FormulaBack from '@/components/screens/dercos/formula/shared/FormulaBack'
import WelcomePopup from './components/WelcomePopup'
import PercentageScale from './components/PercentageScale'
import GameCases from './GameCases'
import GameShelf from './GameShelf'
import CongratulationsPopup from './components/CongratulationsPopup'

import lineGameBg from '/public/assets/images/dercos/linegame/linegame-bg.png'

import ModalService from '@/components/shared/modal/ModalService'
import ImagePreloader from '@/components/screens/dercos/game/components/ImagePreloader'
import ArrowWrapper from '@/components/screens/dercos/game/components/flow/ArrowWrapper'
import { dispatchCloseModals } from '@/components/shared/modal/modal-utils'
import { useDercosGameStore } from '@/components/screens/dercos/game/stores/dercos-game-store'

const DercosGame = () => {
	const [start, setStart] = useState(false)
	const [resultPopup, setResultPopup] = useState(false)
	const [percentScale, setPercentScale] = useState(true)
	const [result, setResult] = useState(0)
	const anchorMulti = useRef<HTMLDivElement | null>(null)
	const reset = useDercosGameStore((state) => state.resetGame)
	const isGuide = useDercosGameStore((state) => state.isGuide)

	const handleOpenResultPopup = (res: number) => {
		setResultPopup(true)
		setResult(res)
		setPercentScale(false)
	}

	useEffect(() => {
		setTimeout(
			() =>
				ModalService.open(WelcomePopup, {
					onClose: () => {
						setStart(true)
					},
				}),
			1000,
		)

		return () => {
			reset()
			dispatchCloseModals()
		}
	}, [])

	return (
		<GameWrapper>
			<ArrowWrapper resultPopup={resultPopup}>
				{(percentScale || isGuide) && (
					<PercentageScale openResultPopup={handleOpenResultPopup} />
				)}

				{resultPopup && (
					<CongratulationsBg>
						<img
							className="fullscreen__bg"
							src="/assets/images/dercos/linegame/fullscreen__bg.png"
							alt=""
						/>
						<img
							className="midscreen__bg"
							src="/assets/images/dercos/linegame/midscreen__bg.png"
							alt=""
						/>
						<img
							className="smallscreen__bg"
							src="/assets/images/dercos/linegame/smallscreen__bg.png"
							alt=""
						/>
					</CongratulationsBg>
				)}

				{resultPopup ? (
					<CongratulationsPopup result={result} setResult={setResultPopup} />
				) : null}

				<FormulaBack link="/dercos" />

				<LineGameContainer>
					<LineGameContent>
						<GameShelf
							start={start}
							anchorMulti={anchorMulti}
							resultPopup={resultPopup}
						/>
						{!resultPopup && <GameCases />}
					</LineGameContent>
				</LineGameContainer>

				<ImagePreloader />
			</ArrowWrapper>
			<div
				style={{ position: 'fixed', bottom: 10, right: 10 }}
				ref={anchorMulti}
			/>
		</GameWrapper>
	)
}

export default DercosGame

const LineGameContainer = styled(GameContainer)`
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-image: url(${lineGameBg.src});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`

const GameWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	min-height: 100vh;
	padding: 0px;
	height: 100vh;
	height: var(--app-height);

	.instruction__two-phone {
		display: none;
		${media.sm`	
		display: block;
		`}
	}
`
const LineGameContent = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 0 auto;
	min-height: 100vh;
	padding: 0px;
	height: 100vh;
`
const CongratulationsBg = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: -5%;
	z-index: 1;

	.fullscreen__bg {
		height: 100%;
		${media.md`	
		display: none;
		`}
	}

	.midscreen__bg {
		display: none;
		${media.md`	
			display: block;
			height: 77%;
		`}
		${media.phone_xl`	
			height: 74%;
		`}
    ${media.sm`	
			display: none;
		`}
	}

	.smallscreen__bg {
		position: absolute;
		max-height: 55%;
		max-width: 96vw;
		display: none;

		${media.sm`	
			display: block;
			right: 0; 
			bottom: auto;
		`}
	}
`
