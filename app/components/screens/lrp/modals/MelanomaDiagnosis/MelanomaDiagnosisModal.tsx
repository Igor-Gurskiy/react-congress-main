import React, { useEffect } from 'react'
import ModalClose, {
	ModalCloseWrapper,
} from '@/components/shared/modal/ModalClose'
import styled from 'styled-components'
import useClickOutside from '@/hooks/useClickOutside'
import media from '@/utils/media'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import MelanomaDiagnosisContent from '@/components/screens/lrp/modals/MelanomaDiagnosis/MelanomaDiagnosisContent'

const MelanomaDiagnosisModal = ({ close }) => {
	const nodeRef = useClickOutside(() => close())

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpMelanomaDay)
	}, [])

	return (
		<Wrapper>
			<Content ref={nodeRef}>
				<BodyWrapper>
					<ModalCloseWrapper>
						<ModalClose close={close} />
					</ModalCloseWrapper>
					<ModalContent>
						<MelanomaDiagnosisContent close={close} />
					</ModalContent>
				</BodyWrapper>
			</Content>
		</Wrapper>
	)
}

export default MelanomaDiagnosisModal

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
	overflow: hidden;
	display: flex;
	flex-direction: column;
`
