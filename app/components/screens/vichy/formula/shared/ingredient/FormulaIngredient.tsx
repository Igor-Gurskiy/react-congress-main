// @ts-nocheck
import styled, { css } from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { easePoly } from 'd3-ease'
import { useGesture } from '@use-gesture/react'
import useWindowSize from '@/hooks/useWindowSize'
import media from '@/utils/media'

const FormulaIngredient = ({ top = 10, left = 20, ingredient, state }) => {
	const [width] = useWindowSize()
	const isMobile = width < 768

	const isUsed = state.ids.includes(ingredient.id)
	const isCorrect = isUsed ? state.layers.includes(ingredient.layer) : null

	const [{ x, y }, api] = useSpring(() => ({
		x: 0,
		y: 0,
		config: {
			mass: 1,
			tension: 370,
			friction: 25,
			easing: easePoly.exponent(2),
		},
	}))

	const bindIngredientPos = useGesture(
		{
			onClick: (params) => {
				const target = params.event.target as any
				if (!target) return
				const targetPos = target.getBoundingClientRect()

				const bottle = document.getElementById('vichy-bottle')
				if (!bottle) return
				const bottlePos = bottle.getBoundingClientRect()
				const x = bottlePos.x + bottlePos.width / 3 - targetPos.x
				const y = bottlePos.y + bottlePos.height / 2 - targetPos.y

				api.start({
					x,
					y,
					onRest: () => {
						const newevent = new CustomEvent('vichy-formula-add', {
							detail: ingredient,
						})
						document.dispatchEvent(newevent)
						api.start({ x: 0, y: 0 })
					},
				})
			},
			onDrag: (params) => {
				// params.event.preventDefault()
				api.start({ x: params.offset[0], y: params.offset[1] })
			},
			onDragEnd: (params) => {
				const posX = params.xy[0]
				const posY = params.xy[1]

				const bottle = document.getElementById('vichy-bottle')

				if (!bottle) return
				const bottlePos = bottle.getBoundingClientRect()

				const isInWidthRange =
					posX >= bottlePos.x && posX <= bottlePos.x + bottlePos.width
				const isInHeightRange =
					posY >= bottlePos.y && posY <= bottlePos.y + bottlePos.height

				if (isInWidthRange && isInHeightRange) {
					const newevent = new CustomEvent('vichy-formula-add', {
						detail: ingredient,
					})
					document.dispatchEvent(newevent)
					api.start({ x: 0, y: 0 })
				} else {
					api.start({ x: 0, y: 0 })
				}
			},
		},
		{
			drag: {
				rubberband: true,
				from: () => [0, 0],
			},
		},
	)

	return (
		<IngredientWrapper
			$top={isMobile ? ingredient.mPos.y : top}
			$left={isMobile ? ingredient.mPos.x : left}
			{...bindIngredientPos()}
			style={{ x, y }}
		>
			<ImageWrapper>
				<IngredientImage src={ingredient.source} />
				<IngredientResult>
					{isCorrect === true && (
						<img src="/assets/images/vichy/formula/correct.svg" />
					)}
					{isCorrect === false && (
						<img src="/assets/images/vichy/formula/incorrect.svg" />
					)}
				</IngredientResult>
			</ImageWrapper>
			<IngredientName>{ingredient.caption}</IngredientName>
		</IngredientWrapper>
	)
}

export default FormulaIngredient

const IngredientResult = styled.div`
	position: absolute;
	right: 0;
	top: -5%;
	z-index: 11;
	max-width: 41px;

	img {
		${media.md`
        max-width: 30px;
    `}
	}
`

const IngredientName = styled.div`
	font-weight: 400;
	font-size: 2vmin;
	line-height: 100%;
	text-align: center;
	color: #334366;
	margin-top: 8px;

	${media.md`
    font-size: 14px;
  `}
`

const ImageWrapper = styled.div`
	width: 12vmin;
	height: 12vmin;

	pointer-events: none;

	border: 3px solid #d32531;
	border-radius: 50%;
	box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.3);
	overflow: hidden;

	${media.md`
    width: 15vmin;
    height: 15vmin;
  `}
`

const IngredientImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const IngredientWrapper = styled(animated.div)<{ $top: number; $left: number }>`
	position: absolute;
	top: 10%;
	left: 20%;
	z-index: 10;

	touch-action: none;

	user-select: none;

	* {
		user-select: none;
	}

	&:active {
		z-index: 11;
	}

	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	${({ $top }) =>
		$top &&
		css`
			top: ${$top}%;
		`}

	${({ $left }) =>
		$left &&
		css`
			left: ${$left}%;
		`}

  ${media.md`
    width: 80px;
  `}
`
