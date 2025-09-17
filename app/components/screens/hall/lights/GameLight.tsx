import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import ModalService from '@/components/shared/modal/ModalService'
import MoleculeGame from '@/components/screens/moleculegame/MoleculeGame'

const GameLight = () => {
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

	const handleClick = () => {
		ModalService.open(MoleculeGame, { padding: 0 })
	}

	return (
		<Wrapper ref={ref} onClick={handleClick}>
			{transitions((style, item) =>
				item ? (
					<Light style={style} src="assets/images/hall/light/game-light.png" />
				) : (
					''
				),
			)}
		</Wrapper>
	)
}

export default GameLight

const Wrapper = styled.div`
	position: absolute;
	top: 1010px;
	left: 555px;
	width: 310px;
	height: 180px;
	cursor: pointer;
	z-index: 11;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -55px;
	left: -50px;
	pointer-events: none;
	user-select: none;
`
