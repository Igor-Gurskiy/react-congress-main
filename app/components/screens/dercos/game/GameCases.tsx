import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import PulseButton from '@/components/Help/PulsingButton'
import { PencilIcon } from '@/components/shared/icons/PencilIcon'
import {
	handleCaseFive,
	handleCaseFour,
	handleCaseOne,
	handleCaseThree,
	handleCaseTwo,
} from '@/components/screens/dercos/game/utils/cases'
import ArrowTarget from '@/components/screens/dercos/game/components/flow/ArrowTarget'
import { CrossIcon } from '@/components/shared/icons/CrossIcon'
import { TickIcon } from '@/components/shared/icons/TickIcon'
import {
	dercosCorrectAnswers,
	useDercosGameStore,
} from '@/components/screens/dercos/game/stores/dercos-game-store'

const getConnectionStatus = (connection: any, id: string) =>
	connection
		? connection.start == dercosCorrectAnswers[id]
			? 'correct'
			: 'incorrect'
		: 'unset'

const TargetHandler = ({ id }) => {
	const arrows = useDercosGameStore((state) => state.arrows)
	const isGuide = useDercosGameStore((state) => state.isGuide)
	const removeArrow = useDercosGameStore((state) => state.removeArrow)
	const connection = arrows.find((arr) => arr.end == id)
	const status = getConnectionStatus(connection, id)

	const renderIcon = () => {
		if (status === 'unset') return <PencilIcon />
		if (!isGuide) return <CrossIcon />
		if (status === 'incorrect') return <CrossIcon />
		return <TickIcon />
	}

	const getStatusColor = () => {
		if (!isGuide) return '#000'
		return status === 'correct'
			? '#00964A'
			: status === 'incorrect'
			? '#DE0311'
			: '#000'
	}

	return (
		<div className="pencil-wrapper">
			<ArrowTarget handler="left" boxId={id}>
				<PulseButton
					className="pencil"
					onClick={() => {
						if (!isGuide) {
							removeArrow(id, 'target')
						}
					}}
					style={{
						borderColor: getStatusColor(),
						color: getStatusColor(),
					}}
				>
					{renderIcon()}
				</PulseButton>
			</ArrowTarget>
		</div>
	)
}

const GameCases = () => {
	return (
		<CasesContainer>
			<CaseWrapper>
				<CaseContent>
					<TargetHandler id="target1" />

					<img
						className="question-icon case__one"
						src="/assets/images/dercos/linegame/question.svg"
						alt=""
						onClick={handleCaseOne}
					/>

					<img
						className="case__bg"
						src="/assets/images/dercos/linegame/case1.png"
						alt=""
					/>
					<p className="case__one" onClick={handleCaseOne}>
						изучить
					</p>
				</CaseContent>
			</CaseWrapper>
			<CaseWrapper>
				<CaseContent>
					<TargetHandler id="target2" />

					<img
						className="question-icon case__two"
						src="/assets/images/dercos/linegame/question.svg"
						alt=""
						onClick={handleCaseTwo}
					/>
					<img
						className="case__bg"
						src="/assets/images/dercos/linegame/case2.png"
						alt=""
					/>
					<p className="case__two" onClick={handleCaseTwo}>
						изучить
					</p>
				</CaseContent>
			</CaseWrapper>
			<CaseWrapper>
				<CaseContent>
					<TargetHandler id="target3" />

					<img
						className="question-icon case__three"
						src="/assets/images/dercos/linegame/question.svg"
						alt=""
						onClick={handleCaseThree}
					/>
					<img
						className="case__bg"
						src="/assets/images/dercos/linegame/case3.png"
						alt=""
					/>
					<p className="case__three" onClick={handleCaseThree}>
						изучить
					</p>
				</CaseContent>
			</CaseWrapper>
			<CaseWrapper>
				<CaseContent>
					<TargetHandler id="target4" />

					<img
						className="question-icon case__four"
						src="/assets/images/dercos/linegame/question.svg"
						alt=""
						onClick={handleCaseFour}
					/>
					<img
						className="case__bg"
						src="/assets/images/dercos/linegame/case4.png"
						alt=""
					/>
					<p className="case__four" onClick={handleCaseFour}>
						изучить
					</p>
				</CaseContent>
			</CaseWrapper>
			<CaseWrapper>
				<CaseContent>
					<TargetHandler id="target5" />
					<img
						className="question-icon case__five"
						src="/assets/images/dercos/linegame/question.svg"
						alt=""
						onClick={handleCaseFive}
					/>
					<img
						className="case__bg"
						src="/assets/images/dercos/linegame/case5.png"
						alt=""
					/>
					<p className="case__five" onClick={handleCaseFive}>
						изучить
					</p>
				</CaseContent>
			</CaseWrapper>
		</CasesContainer>
	)
}

export default GameCases

const CaseContent = styled.div`
	z-index: 1;
	display: flex;
	align-content: center;
	justify-content: center;
`

const CasesContainer = styled.div`
	flex-grow: 1;
`

const CaseWrapper = styled.div`
	user-select: none;
	// Фон черные круги
	&::before,
	&::after {
		content: '';
		position: absolute;
		width: 176px;
		height: 176px;

		max-width: 21vh;
		max-height: 22vh;

		background-color: black;
		/* opacity: 0.2; */
		border-radius: 50%;
		top: 46%;
		transform: translateY(-50%);
		${media.lg`	
			/* top: 154px; */
						top: 46%;

			width: 183px;
			height: 183px;		
		`}
		${media.md`	
		/* top: 130px; */
		top: 46%;

			width: 153px;
			height: 153px;	
		`}
    ${media.phone_xl`	
			// top: 108px;
			top: 46%;

			width: 125px;
			height: 125px;
		`}
    ${media.sm`	
			top: 46%;
			width: 76px;
			height: 76px;
		`}
	}

	// Левый черный круг
	&::before {
		left: 48px;
		${media.lg`	
		left: 55px;
		`}
		${media.md`	
		left: 25px;
		`}
    ${media.phone_xl`	
			left: 18px;
		`}
    ${media.sm`	
		left: 10px;
		`}
	}

	// Правый черный круг
	&::after {
		right: 13px;

		${media.md`	
		right: 0px;
		`}
		${media.phone_xl`	
			right: -5px;
		`}
    ${media.sm`	
		right: 6px;

		`}
	}

	//Контент карточки, карандаш, крестик
	${CaseContent} {
		.pencil {
			cursor: pointer;
			padding: 8px;
			border-width: 2px;
			width: 48px;
			height: 48px;
			max-width: 10vh;
			max-height: 10vh;

			${media.lg`	
				max-width: 36px;
				max-height: 36px;		
			`}
			${media.md`	
				max-width: 32px;
				max-height: 32px;	
			`}
		}

		.pencil-wrapper,
		.pancel-icon,
		.cross-icon {
			position: absolute;
			left: 3px;
			top: 41%;
			cursor: pointer;
			padding: 8px;
			border-width: 2px;
			width: 48px;
			height: 48px;
			max-width: 10vh;
			max-height: 10vh;
			z-index: 1;
			display: flex;
			justify-content: center;
			align-items: center;

			${media.lg`	
			max-width: 36px;
			max-height: 36px;		
			`}
			${media.md`	
			top: 41%;
			max-width: 32px;
			max-height: 32px;	
		`}
      ${media.phone_xl`	
				top: 41%;
			max-width: 45px;
			max-height: 45px;	
		`}
      ${media.sm`	
			top: 33%;
			left: -6px;
		`}
		}

		// Иконка вопроса
		.question-icon {
			display: none;
			position: absolute;
			right: 10%;
			top: 41%;
			cursor: pointer;
			z-index: 2;
			${media.sm`	
			display: block;
		`}
		}

		//Карточка
		.case__bg {
			height: 360px;
			z-index: 1;
			/* max-height: 50vh; */
			max-height: 50vmin;
			pointer-events: none;
			${media.lg`	
			height: 320px;
			max-height: 45vmin;

		`}
			${media.md`	
			height: 270px;
			max-height: 40vmin;

		`}
      ${media.phone_xl`	
			height: 220px;
			max-height: 35vmin;
		`}
      ${media.sm`	
			height: 180px;
			max-height: 50vmin;

		`}
		}
	}

	// Расположение карточек
	&:nth-child(1) {
		position: absolute;

		top: 0%;
		right: 38%;

		${media.lg`	
		top: 8%;
		right:35%;
			`}
		${media.md`	
		`}
    ${media.sm`	
		top: 8%;
		right:45%;
		`}
	}

	&:nth-child(2) {
		position: absolute;
		top: 10%;
		right: 4%;
		${media.lg`	
			`}
		${media.md`	
		`}
    ${media.sm`	
		top: 22%;
		right: 4%;
		`}
	}

	&:nth-child(3) {
		position: absolute;
		top: 33%;
		right: 21%;

		${media.lg`	
		right: 4%;
		top: 45%;

		`}
		${media.sm`	
		top: 52%;
		right: 4%;
		`}
	}

	&:nth-child(4) {
		position: absolute;
		bottom: -3%;
		right: 38%;
		${media.giant`	
			`}
		${media.lg`	
		
			`}
    ${media.md`	
		`}
    ${media.sm`	
			right: 53%;
			bottom: 0%;
		`}
	}

	&:nth-child(5) {
		position: absolute;
		bottom: -3%;
		right: 4%;
		${media.giant`	
			`}
		${media.lg`	
		
		`}
    ${media.md`	
		`}
    ${media.sm`	
			right: 4%;
			bottom: 0%;
		`}
	}

	// Ссылка "Изучить"
	${CaseContent} p {
		color: #fff;
		text-align: center;
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 0.064px;
		text-transform: uppercase;
		position: absolute;
		right: 5.5%;
		top: 44.5%;
		cursor: pointer;
		z-index: 1;
		${media.lg`	
		font-size: 12px;
		top: 43%;
		right: 0%;
		`}
		${media.md`	
		top: 42%;
		right: 1%;
		`}
    ${media.phone_xl`	
				font-size: 10px;

			top: 41%;
			right: -3px;
		`}
    ${media.sm`	
			display: none;
		`}
	}
`
