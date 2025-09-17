import React, { useState } from 'react'
import ModalClose, {
	ModalCloseWrapper,
} from '@/components/shared/modal/ModalClose'
import styled, { css } from 'styled-components'
import ModalControls from '@/components/screens/green/modals/ecological/ModalControls'
import MineralModal from '@/components/screens/green/modals/products/mineralEcoShelf/mineral/MineralModal'
import PackagingSavingModal from '@/components/screens/green/modals/products/mineralEcoShelf/packagingSavings/PackagingSavingModal'

import useClickOutside from '@/hooks/useClickOutside'
import media from '@/utils/media'
import useSwipe from '@/hooks/use-swipe'

const MineralEcoModal = ({ close, currentStep }) => {
	const [step, setStep] = useState(currentStep)

	const handleNext = () => {
		if (step === 2) {
			return
		}

		setStep(2)
	}

	const handlePrev = () => {
		if (step === 1) {
			return
		}

		setStep(1)
	}

	const { onTouchEnd, onTouchStart } = useSwipe({
		onLeftSwipe: () => handleNext(),
		onRightSwipe: () => handlePrev(),
	})

	const nodeRef = useClickOutside(() => close())

	return (
		<Wrapper>
			<Content ref={nodeRef}>
				<BodyWrapper>
					<ModalCloseWrapper>
						<ModalClose close={close} />
					</ModalCloseWrapper>
					<ModalContent onTouchEnd={onTouchEnd} onTouchStart={onTouchStart}>
						<MineralModal step={step} />
						<PackagingSavingModal step={step} />

						<ModalControls
							close={close}
							step={step}
							handleNext={handleNext}
							handlePrev={handlePrev}
						/>
					</ModalContent>
				</BodyWrapper>
			</Content>
		</Wrapper>
	)
}

export default MineralEcoModal

const ModalContent = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
`

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	${media.md`
     align-items: flex-start;
  `}
`

const Content = styled.div`
	width: 100%;
	max-width: 664px;
	overflow: hidden;
`

const BodyWrapper = styled.div<{ $scale?: number }>`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transform-origin: top;

	${({ $scale }) =>
		$scale &&
		css`
			transform: scale(${$scale});
		`}
`
