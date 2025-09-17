import { animated, config, useTransition } from 'react-spring'
import styled, { css } from 'styled-components'
import { useEffect, useState } from 'react'
import MoleculeItem from '@/components/ui/molecule/MoleculeItem'
import ModalService from '@/components/shared/modal/ModalService'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import { trackerIds } from '@/components/ui/molecule/molecule.lib'
import { dispatchPreventClickOutside } from '@/hooks/useClickOutside'
import MoleculeGame from '@/components/screens/moleculegame/MoleculeGame'
import MoleculeGameFinish from '@/components/screens/moleculegame/MoleculeGameFinish'

type PositionAxis = {
	top?: PositionType
	left?: PositionType
	right?: PositionType
	bottom?: PositionType
}

type TranslateAxis = {
	x?: PositionType
	y?: PositionType
}

type MoleculeType = 'lrp' | 'vichy' | 'dercos'

export const getMoleculesFromStorage = () => {
	const molecules = localStorage.getItem('molecules') || '[]'
	const serialized = JSON.parse(molecules)
	const moleculesArr = Array.isArray(serialized)
		? serialized
		: serialized.split(',')

	return moleculesArr
}

const saveMoleculesToStorage = (molecules) => {
	localStorage.setItem('molecules', JSON.stringify(molecules.join(',')))
}

const Molecule = ({
	size = 55 as number | string,
	type = 'lrp' as MoleculeType,
	position = {
		top: '',
		left: '',
		right: '',
		bottom: '',
	} as PositionAxis,
	translate = {
		x: '',
		y: '',
	} as TranslateAxis,
	direction = 'right',
	id,
	disabled = false,
	block = false,
}) => {
	const [show, setShow] = useState(false)
	const [picked, setPicked] = useState(false)

	const transitions = useTransition(show, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.wobbly,
	})

	useEffect(() => {
		const molecules = getMoleculesFromStorage()

		const isPicked = molecules.includes(id)

		if (!isPicked) {
			setShow(true)
		}
	}, [])

	useEffect(() => {
		if (!picked) return
		setTimeout(() => {
			setShow(false)
		}, 1000)
	}, [picked])

	const handlePickUp = () => {
		if (disabled) return
		setPicked(true)

		const molecules = getMoleculesFromStorage()
		const pickedArr = molecules.concat(id)

		const isPicked = molecules.includes(id)

		if (isPicked) return

		const isGameFinished = pickedArr.length >= 30
		const trackerEvent = trackerIds[id]

		if (trackerEvent) {
			API.tracker.sendEvent(trackerEvent)
		}

		if (pickedArr.length === 1) {
			dispatchPreventClickOutside()

			setTimeout(() => {
				ModalService.open(MoleculeGame, { padding: 0 })
			}, 500)
		}
		if (isGameFinished) {
			setTimeout(() => {
				ModalService.open(MoleculeGameFinish)
			}, 1000)
			API.tracker.sendEvent(EventsEnum.moleculeResult, `params[score]=30`)
		}

		saveMoleculesToStorage(pickedArr)
	}

	return transitions((style, item) =>
		item ? (
			<MoleculeWrapper
				style={style}
				$size={size}
				$top={position.top}
				$left={position.left}
				$right={position.right}
				$bottom={position.bottom}
				$translate={translate}
				onClick={handlePickUp}
				$block={block}
			>
				<MoleculeItem
					size={Number(size)}
					type={type}
					picked={picked}
					direction={direction}
				/>
			</MoleculeWrapper>
		) : (
			''
		),
	)
}

export default Molecule

type PositionType = string | number

const MoleculeWrapper = styled(animated.div)<{
	$size?: number | string
	$top?: PositionType
	$left?: PositionType
	$right?: PositionType
	$bottom?: PositionType
	$translate?: any
	$block?: boolean
}>`
	transform-origin: center;
	z-index: 111;
	position: absolute;

	${({ $size }) =>
		$size &&
		css`
			width: ${typeof $size === 'string' ? $size : $size + 'px'};
			height: ${typeof $size === 'string' ? $size : $size + 'px'};
		`}

	cursor: pointer;
	transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

	--translate-x: 0;
	--translate-y: 0;

	transform: scale(1) translate3d(var(--translate-x), var(--translate-y), 0);

	&:hover {
		transform: scale(1.2) translate3d(var(--translate-x), var(--translate-y), 0);
	}

	img {
		max-width: 100%;
		max-height: 100%;
	}

	${({ $block }) =>
		$block &&
		css`
			position: relative;
		`}

	${({ $top }) =>
		(typeof $top === 'number' || typeof $top === 'string') &&
		css`
			top: ${convert($top)};
		`}

  ${({ $left }) =>
		(typeof $left === 'number' || typeof $left === 'string') &&
		css`
			left: ${convert($left)};
		`}

  ${({ $bottom }) =>
		(typeof $bottom === 'number' || typeof $bottom === 'string') &&
		css`
			bottom: ${convert($bottom)};
		`}

  ${({ $right }) =>
		(typeof $right === 'number' || typeof $right === 'string') &&
		css`
			right: ${convert($right)};
		`}

  ${({ $translate }) =>
		(typeof $translate.x === 'number' ||
			typeof $translate.x === 'string' ||
			typeof $translate.y === 'number' ||
			typeof $translate.y === 'string') &&
		css`
			--translate-x: ${convert($translate.x) || 0};
			--translate-y: ${convert($translate.y) || 0};
		`}
`

const convert = (num) => {
	if (num === null || num === undefined) {
		return num
	}

	return typeof num === 'string' ? (num.includes('%') ? num : num) : num + 'px'
}
