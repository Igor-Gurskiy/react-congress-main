import React, { ReactNode, RefObject, useRef } from 'react'
import styled from 'styled-components'
import { useClickAway } from 'react-use'
import {
	autoUpdate,
	flip,
	offset,
	Placement,
	shift,
} from '@floating-ui/react-dom'
import { motion } from 'framer-motion'
import { arrow, FloatingArrow, useFloating } from '@floating-ui/react'
import { Portal } from 'react-portal'

export type PopoverPlacement = Placement

interface PopoverProps {
	anchor: RefObject<HTMLElement>
	children: ReactNode
	placement?: PopoverPlacement
	withArrow?: boolean
	distance?: number
	enableScreenCover?: boolean
	onClickOutside?: () => void
}

export const Popover = ({
	anchor,
	children,
	onClickOutside,
	placement = 'bottom',
	withArrow = true,
	distance = 24,
	enableScreenCover = false,
}: PopoverProps) => {
	const arrowRef = useRef(null)
	const { refs, floatingStyles, context } = useFloating({
		placement,
		strategy: 'fixed',
		elements: {
			reference: anchor.current,
		},
		middleware: [
			flip({ fallbackPlacements: ['top-start'] }),
			offset(distance),
			shift({ padding: 8 }),
			withArrow &&
				arrow({
					element: arrowRef,
				}),
		],
		whileElementsMounted: autoUpdate,
	})

	useClickAway(refs.floating, () => {
		onClickOutside?.()
	})

	// const box = useBoundingBox(popperElement)
	const popoverNode = (
		<Portal>
			<Container ref={refs.setFloating} style={floatingStyles}>
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0, opacity: 0 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}
				>
					{children}
					{withArrow && (
						<FloatingArrow
							ref={arrowRef}
							context={context}
							height={15}
							width={30}
							fill="#fff"
						/>
					)}
				</motion.div>
			</Container>
		</Portal>
	)

	return (
		<>
			{!enableScreenCover && popoverNode}
			{enableScreenCover && <ScreenCover>{popoverNode}</ScreenCover>}
		</>
	)
}

const Container = styled.div`
	position: fixed;
	z-index: 12101;
`

const ScreenCover = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	background: rgba(0, 0, 0, 0.1);
`
