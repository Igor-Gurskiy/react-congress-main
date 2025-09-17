import styled, { css } from 'styled-components'

type ShelfItemPropsType = {
	source: string
	alt?: string
	animated?: boolean
	top: number
	left: number
	width: number
	height: number
	center?: boolean
	onChange?: (args?: any) => void
	onClick?: (args?: any) => void
	scale?: number
	glow?: number
}

const ShelfItem: React.FC<ShelfItemPropsType> = ({
	source,
	alt = '',
	animated,
	top,
	left,
	width,
	height,
	center,
	onChange,
	onClick,
	scale = 0.454966887,
	glow = 1,
}) => {
	const onChangeHandle = (handleArg) => {
		if (typeof onChange === 'function') {
			onChange(handleArg)
		}
	}

	return (
		<ShelfBase
			$top={top}
			$left={left}
			$width={width}
			$height={height}
			$animated={animated}
			$center={center}
			onMouseOver={onChangeHandle.bind(null, false)}
			onMouseOut={onChangeHandle.bind(null, true)}
			onClick={onClick}
			$scale={scale}
			$glow={glow}
		>
			<picture>
				{/*<source srcSet={source.replace('.png', '.webp')} type="image/webp" />*/}
				{/*<source srcSet={source} type="image/png" />*/}
				<img src={source} alt={alt} />
			</picture>
		</ShelfBase>
	)
}

export const Shelves: React.FC<ShelvesPropsType> = ({
	source,
	top,
	left,
	scale = 0.5,
}) => {
	return (
		<ShelfBase $top={top} $left={left} $width={1} $height={1} $scale={scale}>
			<picture>
				<img src={source} alt="shelves" />
			</picture>
		</ShelfBase>
	)
}
export default ShelfItem

type ShelvesPropsType = {
	source: string
	top: number
	left: number
	scale?: number
}

type ShelfBasePropsType = {
	$animated?: boolean
	$top: number
	$left: number
	$width: number
	$height: number
	$center?: boolean
	$scale: number
	$glow?: number
}

const ShelfBase = styled.div<ShelfBasePropsType>`
	position: absolute;
	cursor: pointer;
	z-index: 3001;
	background-size: contain;
	will-change: transform;
	transform-origin: top left;
	backface-visibility: hidden;
	transform: translateZ(0) scale(0.454966887);

	img {
		--shadow-color: rgba(255, 255, 255, 0.75);

		image-rendering: -moz-crisp-edges; /* Firefox */
		image-rendering: -o-crisp-edges; /* Opera */
		image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
		image-rendering: crisp-edges;
		-ms-interpolation-mode: nearest-neighbor;
		transition: filter 0.5s;
	}

	${({ $scale }) =>
		$scale &&
		css`
			transform: translateZ(0) scale(${$scale});
		`}
	${({ $center }) =>
		$center &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
		`}
  ${({ $top }) =>
		$top &&
		css`
			top: ${$top}px;
		`}
  ${({ $left }) =>
		$left &&
		css`
			left: ${$left}px;
		`}
  ${({ $width }) =>
		$width &&
		css`
			width: ${$width}px;
		`}
  ${({ $height }) =>
		$height &&
		css`
			height: ${$height}px;
		`}
  ${({ $glow }) =>
		$glow &&
		css`
			&:hover,
			&:focus,
			&:active {
				img {
					filter: drop-shadow(-3px -3px 5px var(--shadow-color))
						drop-shadow(3px -3px 5px var(--shadow-color))
						drop-shadow(-3px 3px 5px var(--shadow-color))
						drop-shadow(3px 3px 5px var(--shadow-color));
				}
			}
		`}
`
