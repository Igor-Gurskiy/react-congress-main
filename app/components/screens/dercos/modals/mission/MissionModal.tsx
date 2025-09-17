import React, { forwardRef, useState } from 'react'
import ModalClose, {
	ModalCloseWrapper,
} from '@/components/shared/modal/ModalClose'
import styled from 'styled-components'
import MissionIntro from '@/components/screens/dercos/modals/mission/mission-intro/MissionIntro'
import { AnimatePresence } from 'framer-motion'
import DercosAcademy from '@/components/screens/dercos/modals/mission/dercos-academy/DercosAcademy'
import DercosSchool from '@/components/screens/dercos/modals/mission/dercos-school/DercosSchool'
import PreloadImages from '@/components/screens/dercos/modals/mission/ImagePreloader'
import HairsDay from '@/components/screens/dercos/modals/mission/hairs-day/HairsDay'
import HairsDayReport from '@/components/screens/dercos/modals/mission/hairs-day-report/HairsDayReport'

const MissionModal = forwardRef<HTMLDivElement, { close: () => void }>(
	({ close }, ref) => {
		const [step, setStep] = useState<number | null>(0)

		return (
			<AllContent>
				<ModalCloseWrapper>
					<ModalClose close={close} />
				</ModalCloseWrapper>
				<ModalContent ref={ref}>
					<AnimatePresence mode="wait">
						{step === 0 && <MissionIntro changeStep={setStep} />}
						{step === 1 && <DercosAcademy changeStep={setStep} />}
						{step === 2 && <DercosSchool changeStep={setStep} />}
						{step === 3 && <HairsDay changeStep={setStep} />}
						{step === 4 && <HairsDayReport changeStep={setStep} />}
					</AnimatePresence>
				</ModalContent>
				<PreloadImages />
			</AllContent>
		)
	},
)

export default MissionModal

const ModalContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background: #fff;

	* {
		font-family: Montserrat;
	}
`

const AllContent = styled.div`
	width: 100%;
	overflow: hidden;

	max-width: 1024px;

	@media screen and (max-width: 1023.98px) {
		flex-direction: column;
		max-width: 768px;
	}
`
