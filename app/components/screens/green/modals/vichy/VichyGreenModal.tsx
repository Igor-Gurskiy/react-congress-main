import React from 'react'
import ModalClose, {
	ModalCloseWrapper,
} from '@/components/shared/modal/ModalClose'
import styled from 'styled-components'

import useClickOutside from '@/hooks/useClickOutside'
import media from '@/utils/media'
import ModalControls from '@/components/screens/green/modals/vichy/ModalControls'
import VichyModal from '@/components/screens/green/modals/vichy/vichy/VichyModal'

const VichyGreenModal = ({ close }) => {
	const nodeRef = useClickOutside(() => close())

	return (
		<Wrapper>
			<Content ref={nodeRef}>
				<BodyWrapper>
					<ModalCloseWrapper>
						<ModalClose close={close} />
					</ModalCloseWrapper>
					<ModalContent>
						<VichyModal />
						<ModalControls close={close} />
					</ModalContent>
				</BodyWrapper>
			</Content>
		</Wrapper>
	)
}

export default VichyGreenModal

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
`
