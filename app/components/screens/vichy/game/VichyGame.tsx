import styles from './VichyGame.module.scss'
import FormulaBack from '@/components/screens/vichy/formula/shared/FormulaBack'
import React, { useEffect } from 'react'
import clsx from 'clsx'
import ProtocolOne from '@/components/screens/vichy/game/variants/ProtocolOne/ProtocolOne'
import { useVichyGameStore } from '@/components/screens/vichy/game/stores/vichyGameStore'
import ProtocolTwo from '@/components/screens/vichy/game/variants/ProtocolTwo/ProtocolTwo'
import ProtocolThree from '@/components/screens/vichy/game/variants/ProtocolThree/ProtocolThree'
import ProtocolOneMobile from '@/components/screens/vichy/game/variants/ProtocolOne/ProtocolOneMobile'

import ProtocolTwoMobile from '@/components/screens/vichy/game/variants/ProtocolTwo/ProtocolTwoMobile'
import ProtocolThreeMobile from '@/components/screens/vichy/game/variants/ProtocolThree/ProtocolThreeMobile'
import ModalService from '@/components/shared/modal/ModalService'
import Welcome from '@/components/screens/vichy/game/components/Welcome/Welcome'
import { dispatchCloseModals } from '@/components/shared/modal/modal-utils'
import { motion } from 'framer-motion'
import ProgressBar from '@/components/screens/vichy/game/components/ProgressBar/ProgressBar'
import VichyGameResult from '@/components/screens/vichy/game/components/VichyGameResult/VichyGameResult'

import dynamic from 'next/dynamic'
import styled from 'styled-components'

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

const VichyGame = () => {
	const step = useVichyGameStore((state) => state.step)
	const reset = useVichyGameStore((state) => state.reset)

	useEffect(() => {
		setTimeout(() => ModalService.open(Welcome), 1000)

		return () => {
			reset()
			dispatchCloseModals()
		}
	}, [])

	const renderCurrentStep = () => {
		if (step === 1) {
			return <ProtocolOne />
		}

		if (step === 2) {
			return <ProtocolTwo />
		}

		return <ProtocolThree />
	}

	const renderCurrentMobileStep = () => {
		if (step === 1) {
			return <ProtocolOneMobile />
		}

		if (step === 2) {
			return <ProtocolTwoMobile />
		}
		return <ProtocolThreeMobile />
	}

	const renderGame = () => {
		if (step === 4) {
			return <VichyGameResult />
		}

		return (
			<>
				<MediaQuery minDeviceWidth={1024}>
					{(matches) =>
						matches ? (
							<motion.img
								initial={{ translateX: '-100%', opacity: 0 }}
								animate={{ translateX: 0, opacity: 1 }}
								exit={{ translateX: '-100%', opacity: 0 }}
								transition={{
									type: 'spring',
									stiffness: 260,
									damping: 20,
								}}
								key={step}
								className={styles.aside}
								alt="person"
								src={`/assets/images/vichy/game/case${step}/person.png`}
							/>
						) : null
					}
				</MediaQuery>

				<MediaQuery minDeviceWidth={1024}>
					{(matches) =>
						matches ? (
							<div className={styles.container}>
								<div className={styles.progress}>
									<ProgressBar />
								</div>

								{renderCurrentStep()}
							</div>
						) : null
					}
				</MediaQuery>

				{/*Tablet & Mobile Version*/}
				<MediaQuery maxDeviceWidth={1023.98}>
					{(matches) => (matches ? renderCurrentMobileStep() : null)}
				</MediaQuery>
			</>
		)
	}

	return (
		<Wrapper
			className={clsx(styles.wrapper, {
				[styles.caseOne]: step === 1,
				[styles.caseTwo]: step === 2,
				[styles.caseThree]: step === 3,
				[styles.result]: step === 4,
			})}
		>
			<FormulaBack link="/vichy" />

			{renderGame()}
		</Wrapper>
	)
}

export default VichyGame

const Wrapper = styled.div``
