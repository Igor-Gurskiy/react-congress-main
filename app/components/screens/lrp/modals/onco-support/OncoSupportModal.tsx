import React, { useEffect, useState } from 'react'
import ModalClose, {
	ModalCloseWrapper,
} from '@/components/shared/modal/ModalClose'
import styled from 'styled-components'
import useClickOutside from '@/hooks/useClickOutside'
import media from '@/utils/media'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import OncoSupportContent from '@/components/screens/lrp/modals/onco-support/OncoSupportContent'
import { useTransition } from 'react-spring'
import OncoMap from '@/components/screens/lrp/modals/onco-support/OncoMap'

const OncoSupportModal = ({ close }) => {
	const nodeRef = useClickOutside(() => close())
	const [open, setOpen] = useState(false)

	const transitions = useTransition(open, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			duration: 250,
		},
	})

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.lrpOncoSupport)
	}, [])

	return (
		<Wrapper>
			<Content ref={nodeRef}>
				<BodyWrapper>
					<ModalCloseWrapper>
						<ModalClose close={close} />
					</ModalCloseWrapper>
					<ModalContent>
						{!open && (
							<OncoSupportContent close={close} onOpen={() => setOpen(true)} />
						)}
						{transitions((style, item) =>
							item ? <OncoMap style={style} close={close} /> : '',
						)}
					</ModalContent>
				</BodyWrapper>
			</Content>
		</Wrapper>
	)
}

export default OncoSupportModal

const ModalContent = styled.div`
	position: relative;
	display: flex;
	background: #59abdd;
	overflow: hidden;
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
