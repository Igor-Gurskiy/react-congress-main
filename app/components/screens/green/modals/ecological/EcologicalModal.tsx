import React, { useState } from 'react'
import ModalClose, {
	ModalCloseWrapper,
} from '@/components/shared/modal/ModalClose'
import styled, { css } from 'styled-components'
import LaRochePosayModal from '@/components/screens/green/modals/ecological/lrp/LaRochePosayModal'
import useClickOutside from '@/hooks/useClickOutside'
import media from '@/utils/media'
import ModalControls from '@/components/screens/green/modals/ecological/ModalControls'
import LaRochePosayModalChanges from '@/components/screens/green/modals/ecological/lrp/LaRochePosayModalChanges'
import ModalControlsChanges from '@/components/screens/green/modals/ecological/ModalControlsChanges'

const EcologicalModal = ({ close }) => {
	const [step, setStep] = useState(1)
	const [showChangesModal, setShowChangesModal] = useState(false) // Для показа или скрытия попапа LaRochePosayModalChanges

	// Показать попап LaRochePosayModalChanges
	const handleShowChangesModal = () => {
		setShowChangesModal(true)
	}
	// Скрыть попап LaRochePosayModalChanges
	const handleCloseChangesModal = () => {
		setShowChangesModal(false)
	}

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

	const nodeRef = useClickOutside(() => close())

	return (
		<Wrapper>
			<Content ref={nodeRef}>
				<BodyWrapper>
					<ModalCloseWrapper>
						<ModalClose close={close} />
					</ModalCloseWrapper>
					<ModalContent>
						{showChangesModal ? (
							<>
								<LaRochePosayModalChanges />
								<ModalControlsChanges
									handleCloseChangesModal={handleCloseChangesModal}
								/>
							</>
						) : (
							<>
								<LaRochePosayModal
									step={step}
									handleShowChangesModal={handleShowChangesModal}
								/>
								{/* <ModalControls
									close={close}
									step={step}
									handleNext={handleNext}
									handlePrev={handlePrev}
								/> */}
								<ModalControlsChanges
									handleCloseChangesModal={close}
								/>
							</>
						)}
					</ModalContent>
				</BodyWrapper>
			</Content>
		</Wrapper>
	)
}

export default EcologicalModal

const ModalContent = styled.div`
	position: relative;
	display: flex;
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
	height: 100%;
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
