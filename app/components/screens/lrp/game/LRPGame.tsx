import styles from './LRPGame.module.scss'
import FormulaBack from '@/components/screens/vichy/formula/shared/FormulaBack'
import React, {
	ComponentType,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react'

import clsx from 'clsx'
import ProtocolOne from '@/components/screens/lrp/game/variants/ProtocolOne/ProtocolOne'
import { useLRPGameStore } from '@/components/screens/lrp/game/stores/LRPGameStore'
import ProtocolTwo from '@/components/screens/lrp/game/variants/ProtocolTwo/ProtocolTwo'
import ProtocolThree from '@/components/screens/lrp/game/variants/ProtocolThree/ProtocolThree'
import ProtocolFour from '@/components/screens/lrp/game/variants/ProtocolFour/ProtocolFour'
import ProtocolFive from '@/components/screens/lrp/game/variants/ProtocolFive/ProtocolFive'
import ProtocolSix from '@/components/screens/lrp/game/variants/ProtocolSix/ProtocolSix'
import ProtocolSeven from '@/components/screens/lrp/game/variants/ProtocolSeven/ProtocolSeven'

import ProtocolOneMobile from '@/components/screens/lrp/game/variants/ProtocolOne/ProtocolOneMobile'
import ProtocolTwoMobile from '@/components/screens/lrp/game/variants/ProtocolTwo/ProtocolTwoMobile'
import ProtocolThreeMobile from '@/components/screens/lrp/game/variants/ProtocolThree/ProtocolThreeMobile'
import ProtocolFourMobile from '@/components/screens/lrp/game/variants/ProtocolFour/ProtocolFourMobile'
import ProtocolFiveMobile from '@/components/screens/lrp/game/variants/ProtocolFive/ProtocolFiveMobile'
import ProtocolSixMobile from '@/components/screens/lrp/game/variants/ProtocolSix/ProtocolSixMobile'
import ProtocolSevenMobile from '@/components/screens/lrp/game/variants/ProtocolSeven/ProtocolSevenMobile'

import ModalService from '@/components/shared/modal/ModalService'
import Welcome from '@/components/screens/lrp/game/components/Welcome/Welcome'
import { dispatchCloseModals } from '@/components/shared/modal/modal-utils'
import { motion } from 'framer-motion'
import ProgressBar from '@/components/screens/lrp/game/components/ProgressBar/ProgressBar'
import LRPGameResult from '@/components/screens/lrp/game/components/LRPGameResult/LRPGameResult'

import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { useWindowSize } from 'react-use'
import { SpecType, useUIStore } from '@/stores/uiStore'

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

type SpecScenario = {
	desktop: ComponentType[]
	mobile: ComponentType[]
}

// Дерматологи / фармацевты / терапевты
const dermScenario: SpecScenario = {
	desktop: [
		ProtocolOne,
		ProtocolTwo,
		ProtocolThree,
		ProtocolFive,
		ProtocolSix,
		LRPGameResult,
	],
	mobile: [
		ProtocolOneMobile,
		ProtocolTwoMobile,
		ProtocolThreeMobile,
		ProtocolFiveMobile,
		ProtocolSixMobile,
		LRPGameResult,
	],
}
//Онкологи
const oncoScenario = {
	desktop: [ProtocolSeven, LRPGameResult],
	mobile: [ProtocolSevenMobile, LRPGameResult],
}
// Аллергологи
const allergScenario = {
	desktop: [
		ProtocolFour,
		ProtocolTwo,
		ProtocolThree,
		ProtocolSix,
		LRPGameResult,
	],
	mobile: [
		ProtocolFourMobile,
		ProtocolTwoMobile,
		ProtocolThreeMobile,
		ProtocolSixMobile,
		LRPGameResult,
	],
}
// Педиатры
const pediatricscenario = {
	desktop: [
		ProtocolSix,
		ProtocolOne,
		ProtocolTwo,
		ProtocolThree,
		LRPGameResult,
	],
	mobile: [
		ProtocolSixMobile,
		ProtocolOneMobile,
		ProtocolTwoMobile,
		ProtocolThreeMobile,
		LRPGameResult,
	],
}

const scenarioBySpec: Record<NonNullable<SpecType>, SpecScenario> = {
	dermatology: dermScenario,
	pharmacy: dermScenario,
	therapy: dermScenario,
	oncology: oncoScenario,
	allerg: allergScenario,
	pediatrics: pediatricscenario,
}

const getScenarioBySpec = (spec: SpecType) => {
	if (!spec) return dermScenario
	return scenarioBySpec[spec] || dermScenario
}

const getCurrentScenarioStep = (scenario: ReactNode[], step: number) => {
	if (scenario.length < step) return scenario.at(-1)
	return scenario.at(step - 1)
}

const getCurrentStep = (
	spec: SpecType,
	step: number,
	platform: 'desktop' | 'mobile',
) => {
	if (!spec) return
	const scenario = getScenarioBySpec(spec)
	const scenarioByPlatform =
		platform == 'desktop' ? scenario.desktop : scenario.mobile
	return getCurrentScenarioStep(scenarioByPlatform, step)
}

const LRPGame = () => {
	const spec = useUIStore((state) => state.specialization) ?? 'dermatology'
	const step = useLRPGameStore((state) => state.step)
	const reset = useLRPGameStore((state) => state.reset)
	const setMaxScore = useLRPGameStore((state) => state.setMaxScore)

	useEffect(() => {
		if (!spec) return

		if (['pharmacy', 'dermatology', 'therapy'].includes(spec)) {
			setMaxScore(20)
		}
		if (['allerg'].includes(spec)) {
			setMaxScore(16)
		}
		if (['pediatrics'].includes(spec)) {
			setMaxScore(16)
		}
		if (['oncology'].includes(spec)) {
			setMaxScore(5)
		}
	}, [spec])

	useEffect(() => {
		setTimeout(() => ModalService.open(Welcome), 1000)

		return () => {
			reset()
			dispatchCloseModals()
		}
	}, [])

	const renderCurrentStep = () => {
		const StepComponent = getCurrentStep(spec, step, 'desktop') as ComponentType
		return <StepComponent />
	}

	const renderCurrentMobileStep = () => {
		const StepComponent = getCurrentStep(spec, step, 'mobile') as ComponentType
		return <StepComponent />
	}

	const renderGame = (section: string) => {
		return (
			<>
				<MediaQuery minDeviceWidth={1024} minWidth={1024}>
					{(matches) =>
						matches && getCurrentBg(spec, step) !== 'result' ? (
							<AsideCover section={section} />
						) : null
					}
				</MediaQuery>
				<MediaQuery minDeviceWidth={1024}>
					{(matches) =>
						matches ? (
							<div className={styles.container}>
								{getCurrentBg(spec, step) !== 'result' && (
									<div className={styles.progress}>
										<ProgressBar section={section} />
									</div>
								)}

								{renderCurrentStep()}
							</div>
						) : null
					}
				</MediaQuery>

				{/*Tablet & Mobile Version*/}
				<MediaQuery maxDeviceWidth={1023.98} maxWidth={1023.98}>
					{(matches) => (matches ? renderCurrentMobileStep() : null)}
				</MediaQuery>
			</>
		)
	}

	return (
		<Wrapper
			className={clsx(styles.wrapper, {
				[styles.caseOne]: getCurrentBg(spec, step) === 'effaclar',
				[styles.caseTwo]: getCurrentBg(spec, step) === 'cicaplast',
				[styles.caseThree]: getCurrentBg(spec, step) === 'lipikar',
				[styles.caseFour]: getCurrentBg(spec, step) === 'rosalic',
				[styles.caseFive]: getCurrentBg(spec, step) === 'serum',
				[styles.caseSix]: getCurrentBg(spec, step) === 'anthelios',
				[styles.caseSeven]: getCurrentBg(spec, step) === 'onco',

				[styles.result]: getCurrentBg(spec, step) === 'result',
			})}
		>
			<FormulaBack link="/lrp" />

			{renderGame(getCurrentBg(spec, step))}
		</Wrapper>
	)
}

const baseBgArr = [
	'effaclar',
	'cicaplast',
	'lipikar',
	'serum',
	'anthelios',
	'result',
]
const stepBg = {
	dermatology: baseBgArr,
	pharmacy: baseBgArr,
	therapy: baseBgArr,
	oncology: ['onco', 'result'],
	allerg: ['rosalic', 'cicaplast', 'lipikar', 'anthelios', 'result'],
	pediatrics: ['anthelios', 'effaclar', 'cicaplast', 'lipikar', 'result'],
}

const getBgBySpec = (spec: SpecType) => {
	if (!spec) return baseBgArr
	return stepBg[spec] || baseBgArr
}
const getCurrentBgByStep = (bgArr: string[], step: number): string => {
	if (bgArr.length < step) return bgArr.at(-1) ?? 'cicaplast'
	return bgArr.at(step - 1) ?? 'cicaplast'
}
const getCurrentBg = (spec: SpecType, step: number): string => {
	const bgArr = getBgBySpec(spec)
	return getCurrentBgByStep(bgArr, step)
}

export default LRPGame

const Wrapper = styled.div``

export const stepBySection = {
	effaclar: 1,
	cicaplast: 2,
	lipikar: 3,
	rosalic: 4,
	serum: 5,
	anthelios: 6,
	onco: 7,
}

const AsideCover = ({ section }) => {
	const { width, height } = useWindowSize()
	const coverRef = useRef<HTMLImageElement | null>(null)

	const [x, setX] = useState(0)

	const computeTranslate = () => {
		if (!coverRef.current || !coverRef.current.complete) return
		const translateX = coverRef.current?.width - width * 0.35

		if (translateX < 0) {
			setX(0)
		} else {
			setX(translateX)
		}
	}

	useEffect(() => {
		computeTranslate()
	}, [width, height])

	return (
		<motion.div
			initial={{ translateX: '-100%', opacity: 0 }}
			animate={{ translateX: 0, opacity: 1 }}
			exit={{ translateX: '-100%', opacity: 0 }}
			transition={{
				type: 'spring',
				stiffness: 260,
				damping: 20,
			}}
			key={section}
			className={styles.aside}
		>
			<img
				ref={coverRef}
				alt="person"
				onLoad={computeTranslate}
				style={{
					height: '100%',
					transform: `translateX(${x}px)`,
				}}
				src={`/assets/images/lrp/game/case${
					stepBySection[section] ?? '1'
				}/person.png`}
			/>
		</motion.div>
	)
}
