import React, { useEffect } from 'react'
import ModalClose, {
	ModalCloseWrapper,
} from '@/components/shared/modal/ModalClose'
import styled from 'styled-components'
import useClickOutside from '@/hooks/useClickOutside'
import media from '@/utils/media'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import FondationContent from '@/components/screens/lrp/modals/fondation/FondationContent'

const FondationModal = ({ close }) => {
	const nodeRef = useClickOutside(() => close())

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpFondation)
	}, [])

	return (
		<Wrapper>
			<Content ref={nodeRef}>
				<BodyWrapper>
					<ModalCloseWrapper>
						<ModalClose close={close} />
					</ModalCloseWrapper>
					<ModalContent>
						<FondationContent close={close} />
					</ModalContent>
				</BodyWrapper>
			</Content>
		</Wrapper>
	)
}

export default FondationModal

const ModalContent = styled.div`
	position: relative;
	display: flex;
	background: #59abdd;
	border-radius: 4px;
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
`
