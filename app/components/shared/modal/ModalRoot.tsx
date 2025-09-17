import { createElement, FC, useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
	FORCE_CLOSE_MODALS,
	OPEN_MODAL,
} from '@/components/shared/modal/modal-utils'
import { useOutsideClick } from '@/shared/hooks/use-outside-click'
import { useDocumentEvent } from '@/shared/hooks/use-document-event'
import ModalService from '@/components/shared/modal/ModalService'
import { animated, useTransition } from 'react-spring'
import { easePoly } from 'd3-ease'
import styled from 'styled-components'

export interface IModalProps<T = undefined> {
	props: T
	close: (...args: any[]) => void
}

interface ModalProps {
	onClose: (...args: any[]) => void
	attached: boolean
	modal: any
	index: number
}

const Modal: FC<ModalProps> = ({ index, modal, onClose, attached }) => {
	const modalRef = useRef(null)
	const { padding = '10px 15px' } = modal.props

	const transitions = useTransition(modal, {
		from: { opacity: 0, transform: 'scale(1.1)' },
		enter: { opacity: 1, transform: 'scale(1)' },
		leave: { opacity: 0, transform: 'scale(1.1)' },
		config: {
			duration: 250,
			easing: easePoly.exponent(2),
		},
	})
	// TODO: make alert on modified modal
	// const handleOutsideClick = () => {
	// 	if (modalRef.current) {
	// 		const userConfirmed = window.confirm(
	// 			'Вы уверены, что хотите закрыть модальное окно?',
	// 		)
	// 		if (userConfirmed) {
	// 			onClose()
	// 		}
	// 	}
	// }

	useOutsideClick(modalRef, onClose, attached)

	return transitions((style, { component: Component }) =>
		Component ? (
			<ModalWrapper style={style} $p={padding}>
				{createElement(modal.component, {
					...modal.props,
					close: onClose,
					ref: modalRef,
				})}
			</ModalWrapper>
		) : (
			''
		),
	)
}

const ModalWrapper = styled(animated.div)<{
	$center?: boolean
	$maxWidth?: number
	$p: string
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(31, 31, 31, 0.8);
	z-index: 10001;
	padding: ${({ $p }) => $p};
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
	width: 100%;
`

const ModalRoot = () => {
	const [modals, setModals] = useState<any[]>([])

	const closeAllModals = () => {
		setModals([])
		const html = document.querySelector('html')
		if (html) {
			html.style.overflow = ''
		}
	}

	const closeModalsOnEsc = (event: KeyboardEvent) => {
		if ((event.key === 'Esc' || event.key === 'Escape') && modals.length > 0) {
			event.preventDefault()
			handleModalClose(modals.length - 1)
		}
	}

	useEffect(() => {
		ModalService.on(OPEN_MODAL, ({ component, props }) => {
			setModals((prevModals) => [...prevModals, { component, props }])
			const html = document.querySelector('html')
			if (html) {
				html.style.overflow = 'hidden'
			}
		})
	}, [])

	useEffect(() => {
		if (modals.length) {
			document.addEventListener('keyup', closeModalsOnEsc, true)
		}

		return () => {
			document.removeEventListener('keyup', closeModalsOnEsc, true)
		}
	}, [modals.length])

	useDocumentEvent(FORCE_CLOSE_MODALS, closeAllModals)

	const handleModalClose = (index: number) => {
		setModals((prevModals) => {
			const updatedModals = [...prevModals]
			updatedModals.splice(index, 1)
			return updatedModals
		})

		if (modals.length === 1) {
			const html = document.querySelector('html')
			if (html) {
				html.style.overflow = ''
			}
		}
	}

	return (
		<AnimatePresence>
			{modals.map((modal, index, arr) => (
				<Modal
					key={`modal-${index}`}
					index={index}
					modal={modal}
					onClose={() => handleModalClose(index)}
					attached={index === arr.length - 1}
				/>
			))}
		</AnimatePresence>
	)
}

export default ModalRoot
