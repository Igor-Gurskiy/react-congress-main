import media from '@/utils/media'
import { easePoly } from 'd3-ease'
import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled, { css } from 'styled-components'
import useClickOutside from '../hooks/useClickOutside'

const ESC_KEY = 27

const Modal = ({
	open,
	children,
	onClose,
	center = false,
	maxWidth = 664,
	...otherProps
}) => {
	const animation = useSpring({
		config: {
			duration: 200,
			easing: easePoly.exponent(2),
		},
		delay: 0,
		opacity: open ? 1 : 0,
		transform: open ? 'scale(1)' : 'scale(0.6)',
	})

	const useNodeRef = useClickOutside(onClose)

	const handleKeyDown = (event) => {
		if (event.keyCode === ESC_KEY) {
			event.stopPropagation()
			onClose()
		}
	}

	return (
		<ModalWrapper
			$maxWidth={maxWidth}
			tabIndex={-1}
			$center={center}
			onKeyDown={handleKeyDown}
			{...otherProps}
		>
			<ModalContent
				ref={useNodeRef as any}
				style={animation}
				$maxWidth={maxWidth}
			>
				<ModalHeader>
					<Close onClick={onClose}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
								fill="white"
							/>
						</svg>
					</Close>
				</ModalHeader>
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</ModalWrapper>
	)
}

export default Modal

const Close = styled.div`
	cursor: pointer;
	transition: all 0.3s;
	padding: 10px;
	margin-right: -10px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const ModalContent = styled(animated.div)<{ $maxWidth?: number }>`
	width: 100%;
	/* overflow: hidden; */
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	${({ $maxWidth }) =>
		$maxWidth &&
		css`
			max-width: ${$maxWidth}px;
		`}/* ${media.md`
        margin-top: -30px;
    `} */
`

const ModalWrapper = styled(animated.div)<{
	$center?: boolean
	$maxWidth?: number
}>`
	display: flex;
	justify-content: center;
	//border-radius: 8px;

	${({ $center }) =>
		$center &&
		css`
			align-items: center;
			justify-content: center;

			${ModalContent} {
				max-width: 1024px;
				border-radius: 4px;
			}

			${ModalBody} {
				max-width: 1024px;
			}
		`}

	${({ $maxWidth }) =>
		$maxWidth &&
		css`
			${ModalContent} {
				max-width: ${$maxWidth}px;
			}

			${ModalBody} {
				max-width: ${$maxWidth}px;
			}
		`}

  //background: rgba(31, 31, 31, 0.8);
  z-index: 10001;
	padding: 10px 15px;
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100%;
	width: 100%;
`

const ModalHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

const ModalBody = styled(animated.div)`
	width: 100%;
	font-family: 'Gilroy', sans-serif;
	font-size: 13px;
	line-height: 20px;
	color: #1f1f1f;
	position: relative;
	overflow: hidden;
	border-radius: 4px;
	border: 2px solid #fff;
	background: #fff;

	display: flex;
	flex-direction: column;

	${media.md`
        overflow-y: scroll;
    `}
`
