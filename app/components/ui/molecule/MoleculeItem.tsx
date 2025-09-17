import { animated, config, useSpring } from 'react-spring'
import styled, { keyframes } from 'styled-components'
import { easeQuadInOut } from 'd3-ease'
import { useEffect, useMemo } from 'react'

const MoleculeItem = ({ size = 60, picked = false, direction, type }) => {
	const style = useSpring({
		from: { rotate: '0deg' },
		to: { rotate: '360deg' },
		config: {
			duration: size * 300,
			easing: easeQuadInOut,
		},
		loop: true,
	})

	const wrapperStyle = useSpring({
		from: { y: 0 },
		to: [{ y: size * 0.1 }, { y: 0 }],
		config: {
			duration: size * 50,
			easing: easeQuadInOut,
		},
		loop: {
			reverse: true,
		},
	})

	const [itemX, xAPI] = useSpring(() => ({
		x: 0,
		config: config.stiff,
	}))
	const [itemY, yAPI] = useSpring(() => ({
		y: 0,
		config: config.stiff,
	}))
	const [itemScale, scaleAPI] = useSpring(() => ({
		scale: 1,
		config: config.stiff,
	}))

	useEffect(() => {
		if (picked) {
			xAPI.start({
				x: direction === 'left' ? -size : size,
				onRest: () => xAPI.start({ x: 0 }),
			})
			yAPI.start({
				y: -size,
				onRest: () => yAPI.start({ y: size * 25 }),
			})
			scaleAPI.start({
				scale: 2,
			})
		}
	}, [picked])

	const src = useMemo(() => {
		if (type == 'vichy') return '/assets/images/shared/vichy-molecule.png'
		if (type == 'dercos') return '/assets/images/shared/dercos-molecule.png'
		return '/assets/images/shared/lrp-molecule.png'
	}, [type])

	return (
		<>
			<animated.div style={{ ...itemX, ...itemY, ...itemScale }}>
				<animated.div style={wrapperStyle}>
					<animated.img style={style} src={src} alt="lrp molecule" />
				</animated.div>
			</animated.div>
			<MoleculeBlinker />
		</>
	)
}

export default MoleculeItem

const blinker = keyframes`
  0% {
    transform: rotate(-45deg) translate3d(-30%, -500%, 0);
  }
  10% {
    transform: rotate(-45deg) translate3d(-30%, 500%, 0);
  }

  50% {
    transform: rotate(-45deg) translate3d(-30%, 500%, 0);
  }
  60% {
    transform: rotate(-45deg) translate3d(-30%, -500%, 0);
  }
  100% {
    transform: rotate(-45deg) translate3d(-30%, -500%, 0);
  }
`

const MoleculeBlinker = styled.div`
	overflow: hidden;
	border-radius: 50%;
	position: absolute;
	top: 0;
	left: 0;
	width: 110%;
	height: 110%;

	&::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 200%;
		height: 25%;
		background: #fff;
		opacity: 0.5;
		filter: blur(10px);
		transform: rotate(-45deg) translate3d(-30%, -500%, 0);
		animation: ${blinker} 20s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	}
`

type PositionType = string | number
