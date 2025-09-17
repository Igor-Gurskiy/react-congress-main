import { useUIStore } from '@/stores/uiStore'
import { usePinch } from '@use-gesture/react'
import { easePoly } from 'd3-ease'
import React, { FC, SVGProps, useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled, { css } from 'styled-components'
import LRPBasicProducts from './variants/LRPBasicProducts'
import LRPOncologyProducts from '@/components/screens/lrp/shelf/variants/LRPOncologyProducts'
import LRPPediatricsProducts from '@/components/screens/lrp/shelf/variants/LRPPediatricsProducts'
import { BannerAnimationFlicker } from '@/components/ui/Animation'
import BasicInactivityShelf from '@/components/screens/lrp/shelf/BasicInactivityShelf'
import LrpShelfVideo from '@/components/screens/lrp/LRPShelfVideo'
import PedsInactivityShelf from '@/components/screens/lrp/shelf/PedsInactivityShelf'
import OncoInactivityShelf from '@/components/screens/lrp/shelf/OncoInactivityShelf'
import LRPAllergProducts from '@/components/screens/lrp/shelf/variants/LRPAllergProducts'
import AllergInactivityShelf from '@/components/screens/lrp/shelf/AllergInactivityShelf'

const shelf = {
	oncology: {
		png: 'assets/images/lrp/shelf/shelf.png',
		webp: 'assets/images/lrp/shelf/shelf.webp',
	},
}

const LRPShelf = ({ onClick }) => {
	const locked = useUIStore((state) => state.locked)
	const specialization =
		useUIStore((state) => state.specialization) || 'dermatology'

	const [hover, setHover] = useState(false)
	const [productsHover, setProductsHover] = useState(false)
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
			<LrpShelfVideo
				onMouseEnter={setHover.bind(null, true)}
				onMouseLeave={setHover.bind(null, false)}
			/>

			{!locked && (
				<ProductsClickZone
					onClick={onClick}
					onMouseEnter={setProductsHover.bind(null, true)}
					onMouseLeave={setProductsHover.bind(null, false)}
					{...onPinch()}
				/>
			)}

			<ShelfPicture>
				<source srcSet="assets/images/lrp/shelf/shelf.webp" type="image/webp" />
				<source srcSet="assets/images/lrp/shelf/shelf.png" type="image/png" />
				<img src="assets/images/lrp/shelf/shelf.png" alt="oncology shelf" />
			</ShelfPicture>

			<ShelfVideoLight active={!locked && hover} />
			<ShelfProductsLight active={!locked && productsHover} />
			{/*<ShelfLight active={!locked && hover} />*/}

			<ProductsLight
				id="products"
				$locked={locked || hover || productsHover}
				$active={false}
			/>

			{['dermatology', 'therapy', 'pharmacy'].includes(specialization) && (
				<LRPBasicProducts />
			)}
			{specialization === 'pediatrics' && <LRPPediatricsProducts />}
			{specialization === 'oncology' && <LRPOncologyProducts />}
			{specialization === 'allerg' && <LRPAllergProducts />}

			{['dermatology', 'therapy', 'pharmacy'].includes(specialization) && (
				<BasicInactivityShelf />
			)}
			{specialization === 'pediatrics' && <PedsInactivityShelf />}
			{specialization === 'oncology' && <OncoInactivityShelf />}
			{specialization === 'allerg' && <AllergInactivityShelf />}
		</Container>
	)
}

const MemoLRPShelf = React.memo(LRPShelf)

export default MemoLRPShelf

const ProductsClickZone: FC<SVGProps<SVGElement>> = ({
	onMouseEnter,
	onMouseLeave,
	...otherProps
}) => {
	return (
		// @ts-ignore
		<ClickZone
			width="328"
			height="656"
			viewBox="0 0 328 656"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			{...otherProps}
		>
			<path
				d="M0.500004 0C43.5079 5.13647e-07 86.0947 8.48398 125.829 24.9675C165.563 41.4511 201.666 65.6114 232.078 96.069C262.489 126.527 286.612 162.685 303.071 202.48C319.529 242.275 328 284.927 328 328C328 371.074 319.529 413.726 303.07 453.52C286.612 493.315 262.489 529.474 232.077 559.931C201.666 590.389 165.563 614.549 125.829 631.033C86.0945 647.516 43.5077 656 0.499733 656L0.5 328L0.500004 0Z"
				fill="transparent"
				fillOpacity="0"
			/>
		</ClickZone>
	)
}

const ProductsLight = styled.div<{ $locked?: boolean; $active?: boolean }>`
	user-select: none;
	background: url(assets/images/lrp/shelf/light.png);
	position: absolute;
	width: 766px;
	height: 767px;
	top: -70px;
	left: -55px;
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
	width: 100%;
	height: 100%;

	img {
		user-select: none;
		width: 1320px;
		height: 1419px;
		z-index: 2;
		will-change: transform;
		transform-origin: top left;
		backface-visibility: hidden;
		transform: translateZ(0) scale(0.500741427);
		image-rendering: -moz-crisp-edges; /* Firefox */
		image-rendering: -o-crisp-edges; /* Opera */
		image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
		image-rendering: crisp-edges;
		-ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
	}
`

const Light = styled(animated.img)`
	position: absolute;
	top: -70px;
	left: -55px;
	user-select: none;
`

const ProductsHalfLight = styled(animated.img)`
	position: absolute;
	top: -70px;
	right: -55px;
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
		item ? <Light style={style} src="assets/images/lrp/shelf/light.png" /> : '',
	)
}

const ShelfVideoLight = ({ active = false }) => {
	const transitions = useTransition(active, {
		from: { opacity: 0, rotate: '180deg' },
		enter: { opacity: 1, rotate: '180deg' },
		leave: { opacity: 0, rotate: '180deg' },
		config: {
			easing: easePoly.exponent(2),
			duration: 300,
		},
	})

	return transitions((style, item) =>
		item ? (
			<Light style={style} src="assets/images/lrp/light/shelf-half-light.png" />
		) : (
			''
		),
	)
}

const ShelfProductsLight = ({ active = false }) => {
	const transitions = useTransition(active, {
		from: { opacity: 0, rotate: '0deg' },
		enter: { opacity: 1, rotate: '0deg' },
		leave: { opacity: 0, rotate: '0deg' },
		config: {
			easing: easePoly.exponent(2),
			duration: 300,
		},
	})

	return transitions((style, item) =>
		item ? (
			<ProductsHalfLight
				style={style}
				src="assets/images/lrp/light/shelf-half-light.png"
			/>
		) : (
			''
		),
	)
}

const ClickZone = styled.svg`
	position: absolute;
	top: 0;
	right: 6px;
	z-index: 12001;
	user-select: none;
`

const Container = styled.div`
	position: absolute;
	width: 662px;
	height: 711px;
	z-index: 1;
	top: 336px;
	left: 956px;
	cursor: pointer;

	* {
		user-select: none;
	}
`
