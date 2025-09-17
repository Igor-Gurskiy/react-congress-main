import React, { ReactNode } from 'react'
import Xarrow from 'react-xarrows'
import styled from 'styled-components'
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { useDercosGameStore } from '@/components/screens/dercos/game/stores/dercos-game-store'

interface ArrowWrapperProps {
	children: ReactNode
	resultPopup: boolean
}

const ArrowWrapper: React.FC<ArrowWrapperProps> = ({
	children,
	resultPopup,
}) => {
	const arrows = useDercosGameStore((state) => state.arrows)
	const isGuide = useDercosGameStore((state) => state.isGuide)
	const addArrow = useDercosGameStore((state) => state.addArrow)
	const pointerSensor = useSensor(PointerSensor, {
		activationConstraint: { distance: 10 },
	})
	const sensors = useSensors(pointerSensor)

	const checkAvailability = (targetId: string) => {
		return arrows.some((arr) => arr.end == targetId)
	}

	const handleDragEnd = (event) => {
		if (event.active && event.over) {
			if (checkAvailability(event.over.id)) return
			addArrow({ start: event.active.id, end: event.over.id })
		}
	}

	return (
		<DndContext onDragEnd={handleDragEnd} sensors={sensors}>
			<Wrapper>
				{children}
				{(!resultPopup || isGuide) &&
					arrows.map((ar, index) => (
						<Xarrow
							strokeWidth={3}
							color={ar.color}
							curveness={0.5}
							startAnchor="right"
							path="smooth"
							showHead={false}
							start={ar.start}
							end={ar.end}
							key={`${ar.start}-${ar.end}-${index}`}
						/>
					))}
			</Wrapper>
		</DndContext>
	)
}

export default ArrowWrapper

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;

	svg {
		path {
			filter: drop-shadow(-1px -1px 3px #fff);
		}
	}
`
