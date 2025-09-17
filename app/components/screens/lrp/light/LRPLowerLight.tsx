import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import MelanomaDiagnosisModal from '@/components/screens/lrp/modals/MelanomaDiagnosis/MelanomaDiagnosisModal'
import ModalService from '@/components/shared/modal/ModalService'

const LRPLowerLight = () => {
	const ref = useRef(null)
	const active = useHover(ref)

	const transitions = useTransition(active, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			easing: easePoly.exponent(2),
			duration: 300,
		},
	})

	return (
		<Wrapper
			ref={ref}
			onClick={() => ModalService.open(MelanomaDiagnosisModal)}
		>
			{transitions((style, item) =>
				item ? (
					<Light style={style} src="assets/images/lrp/light/lower-banner.png" />
				) : (
					''
				),
			)}
		</Wrapper>
	)
}

export default LRPLowerLight

const Wrapper = styled.div`
	position: absolute;
	top: 871px;
	left: 362px;
	width: 347px;
	height: 114px;
	cursor: pointer;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -52px;
	left: -48px;
	pointer-events: none;
`
