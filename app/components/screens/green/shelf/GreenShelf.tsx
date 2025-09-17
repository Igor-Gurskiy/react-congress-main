import { useUIStore } from '@/stores/uiStore'
import { usePinch } from '@use-gesture/react'
import { easePoly } from 'd3-ease'
import React, { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled, { css } from 'styled-components'
import GreenBasicProducts from './variants/GreenBasicProducts'
import { BannerAnimationFlicker } from '@/components/ui/Animation'
import GreenInactivityShelf from '@/components/screens/green/shelf/GreenInactivityShelf'

const GreenShelf = ({ onClick }) => {
	const locked = useUIStore((state) => state.locked)
	const specialization =
		useUIStore((state) => state.specialization) || 'dermatology'

	const [hover, setHover] = useState(false)
	const onPinch = usePinch(() => {
		onClick()
	})

	useEffect(() => {
		if (locked) {
			setHover(false)
		}
	}, [locked])

	return (
		<Container>
			{!locked && (
				<ClickZone
					onClick={onClick}
					onMouseEnter={setHover.bind(null, true)}
					onMouseLeave={setHover.bind(null, false)}
					{...onPinch()}
				/>
			)}
			<ShelfPicture>
				{/*<source srcSet="assets/images/green/shelf/green-shelf.webp" type="image/webp"/>*/}
				<source
					srcSet="assets/images/green/shelf/green-shelf.png"
					type="image/png"
				/>
				<img
					src="assets/images/green/shelf/green-shelf.png"
					alt="dercos shelf"
				/>
			</ShelfPicture>

			<ShelfLight active={!locked && hover} />
			<GreenBasicProducts />
			<ProductsLight id="products" $locked={locked} $active={hover} />
			<GreenInactivityShelf />

			{/* {['dermatology', 'therapy', 'pharmacy'].includes(specialization) && <LRPBasicProducts />}
            {specialization === 'pediatrics' && <LRPPediatricsShelf />}
            {['oncology', 'allerg'].includes(specialization) && <LRPOncologyShelf />} */}
		</Container>
	)
}

export default GreenShelf

const ProductsLight = styled.div<{ $locked?: boolean; $active?: boolean }>`
	user-select: none;
	background: url(assets/images/green/light/shelf-light.png);
	position: absolute;
	left: -59px;
	width: 475px;
	height: 700px;
	top: -53px;
	opacity: 0;
	transition: all 0.3s;
	animation: ${BannerAnimationFlicker} 10s 3s ease-out infinite;
	cursor: pointer;
	z-index: 1001;
	will-change: opacity;
	transform: translateZ(0);
	pointer-events: none;

	${(props) =>
		props.$locked &&
		css`
			opacity: 0;
			animation: none;
			pointer-events: none;
		`}

	${(props) =>
		props.$active &&
		css`
			opacity: 1;
			animation: none;
		`}
`

const ShelfPicture = styled.picture`
	position: absolute;
	top: 0px;
	left: 0px;
	user-select: none;
	transform: translateZ(0) scale(0.25);
	transform-origin: top left;

	img {
		user-select: none;
		width: 1408px;
		height: 2448px;
		z-index: 2;
		will-change: transform;
		transform-origin: top left;
		backface-visibility: hidden;
		//transform: translateZ(0) scale(0.25);
		//image-rendering: -moz-crisp-edges; /* Firefox */
		//image-rendering: -o-crisp-edges; /* Opera */
		//image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
		//image-rendering: crisp-edges;
		//-ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
	}
`

const Light = styled(animated.img)`
	position: absolute;
	top: -52px;
	left: -58px;
	user-select: none;
`

const ShelfLight = ({ active = false }) => {
	const transitions = useTransition(active, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			easing: easePoly.exponent(2),
			duration: 300,
		},
	})

	return transitions((style, item) =>
		item ? (
			<Light style={style} src="assets/images/green/light/shelf-light.png" />
		) : (
			''
		),
	)
}

const ClickZone = styled.div`
	width: 100%;
	height: 120%;
	position: absolute;
	top: -70px;
	left: 0;
	z-index: 12001;
	user-select: none;
`

const Container = styled.div`
	position: absolute;
	width: 352px;
	height: 612px;
	z-index: 1;
	top: 419px;
	left: 1059px;
	cursor: pointer;

	* {
		user-select: none;
	}
`
