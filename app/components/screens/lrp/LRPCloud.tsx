import React, { useMemo } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import MeCloud from '@/components/screens/hall/MeCloud'
import { useUIStore } from '@/stores/uiStore'

const TagsWrapper = styled.div`
	height: 200px;
	width: 390px;
	transform: rotate(1deg);
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

const LRPCloud = ({ data, maxScale }) => {
	const transformedData = useMemo(
		() => data.map((word) => ({ ...word, text: word.text })),
		[data],
	)
	const isLoading = useUIStore((state) => state.isLoading)
	if (!transformedData || !transformedData.length || isLoading) return <div />

	return (
		<Link legacyBehavior href="/lrp/cloud">
			<TagsWrapper>
				<MeCloud
					color="#fff"
					words={transformedData}
					side={{ text: 'center', base: 'middle' }}
					scale={maxScale}
					min={14}
					max={40}
				/>
			</TagsWrapper>
		</Link>
	)
}

export default LRPCloud
