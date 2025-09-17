import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import { animated, useTransition } from 'react-spring'
import MeCloud from '@/components/screens/hall/MeCloud'
import { useUIStore } from '@/stores/uiStore'

const TagsWrapper = styled.div`
	height: 245px;
	width: 465px;
	transform: perspective(1000px) rotateY(18deg);
	padding: 20px 8px;

	--shadow-color: rgba(255, 255, 255, 0.5);

	text {
		filter: drop-shadow(-1px -1px 2px var(--shadow-color));
	}

	.resizer {
		width: 100%;
		height: 100%;
	}
`

const DercosCloud = ({ data, maxScale }) => {
	const transformedData = useMemo(
		() => data.map((word) => ({ ...word, text: word.text.toUpperCase() })),
		[data],
	)
	const isLoading = useUIStore((state) => state.isLoading)
	const ref = useRef(null)
	const active = useHover(ref)

	const transitions = useTransition(active, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			easing: easePoly.exponent(2),
			duration: 300,
		},
	})

	if (!transformedData || !transformedData.length || isLoading) return <div />

	return (
		<Link legacyBehavior href="/dercos/cloud">
			<TagsWrapper ref={ref}>
				{transitions((style, item) =>
					item ? (
						<Light style={style} src="assets/images/dercos/light/cloud.png" />
					) : (
						''
					),
				)}

				<MeCloud
					color="#fff"
					words={transformedData}
					side={{ text: 'center', base: 'middle' }}
					scale={maxScale}
					min={14}
					max={60}
				/>
			</TagsWrapper>
		</Link>
	)
}

export default DercosCloud

const Light = styled(animated.img)`
	position: absolute;
	top: -92px;
	left: -60px;
	pointer-events: none;
`
