import {
	forwardRef,
	MouseEvent,
	TouchEvent,
	useEffect,
	useRef,
	useState,
} from 'react'
import styled from 'styled-components'
import { useWindowSize } from 'react-use'
import PulseButton from '@/components/Help/PulsingButton'
import { useDocumentEvent } from '@/shared/hooks/use-document-event'
import { isMouseEvent, isTouchEvent } from '@/utils/type-guards/events.guard'
import { useSortGameStore } from '@/components/screens/green/game/stores/sort-game.store'

const Basket = forwardRef<HTMLImageElement, {}>(({}, ref) => {
	const { width } = useWindowSize()
	const basketRef = useRef<HTMLDivElement>(null)

	const isStarted = useSortGameStore((state) => state.isStarted)

	const [position, setPosition] = useState(width / 2)
	const [offset, setOffset] = useState(0)
	const [dragging, setDragging] = useState(false)
	const [clicked, setClick] = useState(false)

	const handleMouseDown = (e: TouchEvent | MouseEvent) => {
		if (!basketRef.current) return
		const attrs = basketRef.current.getBoundingClientRect()
		let pos = 0
		if (isMouseEvent(e)) {
			pos = e.pageX
		}
		if (isTouchEvent(e)) {
			pos = e.touches[0].pageX
		}
		const offset = pos - attrs.x
		setDragging(true)
		setOffset(offset)
	}

	// center initial position & on resize
	useEffect(() => {
		if (!basketRef.current) return
		const attrs = basketRef.current.getBoundingClientRect()
		setOffset(attrs.width / 2)
		setPosition(width / 2 - attrs.width / 2)
	}, [width, basketRef])

	const handleMouseMove = (e) => {
		if (isStarted && (dragging || clicked) && basketRef.current) {
			const x = e.pageX
			handleMoveBasket(x)
		}
	}

	const handleTouchMove = (e) => {
		if (dragging && basketRef.current) {
			const x = e.touches[0].pageX
			handleMoveBasket(x)
		}
	}

	const handleMoveBasket = (x: number) => {
		if (!basketRef.current) return
		const attrs = basketRef.current.getBoundingClientRect()

		const newPosition = x - offset
		const constraintLeft = width * 0.05
		const constraintRight = width * 0.95 - attrs.width

		if (newPosition < constraintLeft) {
			setPosition(constraintLeft)
			return
		}

		if (newPosition > constraintRight) {
			setPosition(constraintRight)
			return
		}
		setPosition(newPosition)
	}

	const handleMouseUp = (e) => {
		if (!basketRef.current) return

		const attrs = basketRef.current.getBoundingClientRect()

		if (isStarted && e.clientX <= position + attrs.width && e.clientX >= position) {
			if (clicked) {
				setClick(false)
			}
			else {
				if (e.clientY >= attrs.y) {
					setClick(true)
				}
			}
		}

		setDragging(false)
	}

	const handleClick = (e) => {
		const windowHeight = window.innerHeight

		if (!basketRef.current) return

		const attrs = basketRef.current.getBoundingClientRect()

		if (isStarted && e.clientY >= windowHeight * 0.8) {
			const startTime = performance.now()
			const startLocation = position
	
			const animate = (currentTime: number) => {
		  		const progress = (currentTime - startTime) / 300
				let newPosition = 0

				if (e.clientX - startLocation > 0)
				{
					newPosition = startLocation + (e.clientX - startLocation - offset) * Math.min(progress, 1)
				}
				else {
					newPosition = startLocation + (e.clientX - startLocation - offset) * Math.min(progress, 1)
				}

				const constraintLeft = width * 0.05
				const constraintRight = width * 0.95 - attrs.width

				if (newPosition < constraintLeft) {
					setPosition(constraintLeft)
					return
				}

				if (newPosition > constraintRight) {
					setPosition(constraintRight)
					return
				}
				setPosition(newPosition)
	
		  		if (progress < 1) {
					requestAnimationFrame(animate)
		  		}
			}
	
			requestAnimationFrame(animate)
	  	}
	}

	useDocumentEvent('mousemove', handleMouseMove)
	useDocumentEvent('mouseup', handleMouseUp)
	useDocumentEvent('click', handleClick)

	return (
		<BasketWrapper
			ref={basketRef}
			onDragStart={(e) => e.preventDefault()}
			onMouseDown={handleMouseDown}
			// onMouseMove={handleMouseMove}
			// onMouseUp={handleMouseUp}
			onTouchStart={handleMouseDown}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleMouseUp}
			onClick={handleClick}
			style={{
				transform: `translateX(${position}px)`,
				cursor: 'grabbing',
			}}
		>
			<div className="relative flex align-bottom">
				<MoveButton>
					<svg
						width="24"
						height="24"
						viewBox="0 0 33 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M24.5992 0.317301C24.1762 -0.105767 23.4902 -0.105767 23.0672 0.317301C22.6441 0.740369 22.6441 1.4263 23.0672 1.84937L28.8011 7.58331H20.1829C19.5846 7.58331 19.0996 8.06833 19.0996 8.66664C19.0996 9.26495 19.5846 9.74998 20.1829 9.74998H28.8012L23.0672 15.484C22.6441 15.907 22.6441 16.593 23.0672 17.016C23.4902 17.4391 24.1762 17.4391 24.5992 17.016L32.1826 9.4327C32.2906 9.3247 32.371 9.19956 32.4239 9.06604C32.4694 8.95131 32.4959 8.82696 32.4994 8.69688C32.4999 8.67898 32.5 8.66107 32.4996 8.64317C32.4966 8.50134 32.4663 8.36622 32.4138 8.24284C32.3673 8.13314 32.3018 8.02957 32.2174 7.93707C32.2047 7.92322 32.1918 7.90969 32.1784 7.8965L24.5992 0.317301Z"
							fill="black"
						/>
						<path
							d="M8.40054 17.0162C8.82361 17.4393 9.50953 17.4393 9.9326 17.0162C10.3557 16.5931 10.3557 15.9072 9.9326 15.4841L4.19866 9.75019L12.8166 9.75019C13.4149 9.75019 13.8999 9.26516 13.8999 8.66685C13.8999 8.06855 13.4149 7.58352 12.8166 7.58352L4.19861 7.58352L9.9326 1.84953C10.3557 1.42646 10.3557 0.740532 9.9326 0.317464C9.50954 -0.105603 8.82361 -0.105603 8.40054 0.317464L0.817205 7.9008C0.709201 8.0088 0.628769 8.13393 0.575908 8.26745C0.53038 8.38218 0.503887 8.50654 0.500322 8.63662C0.499826 8.65452 0.499772 8.67243 0.500157 8.69033C0.503173 8.83215 0.533441 8.96727 0.585938 9.09066C0.632513 9.20035 0.697998 9.30393 0.782392 9.39642C0.795025 9.41028 0.808011 9.42381 0.821338 9.43699L8.40054 17.0162Z"
							fill="black"
						/>
						<circle
							cx="16.5001"
							cy="9.10019"
							r="3.15"
							stroke="black"
							strokeWidth="1.5"
						/>
					</svg>
				</MoveButton>
				<img
					ref={ref}
					alt="container"
					src="/assets/images/green/game/container.png"
				/>
			</div>
		</BasketWrapper>
	)
})
export default Basket

const MoveButton = styled(PulseButton)`
	padding: 4px;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`

const BasketWrapper = styled.div`
	position: absolute;
	//top: 0;
	bottom: 0;
	left: 0;

	display: flex;
	align-items: flex-end;

	img {
		//max-width: 25vw;
		//max-height: 30vh;
		width: calc(16.75 * var(--size));
	}
`
