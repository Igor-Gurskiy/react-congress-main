'use client'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useUIStore } from '@/stores/uiStore'

const VichyClientCloud = dynamic(() => import('../hall/MeCloud'), {
	ssr: false,
})

const TagsWrapper = styled.div`
	height: 265px;
	width: 500px;
	//transform: perspective(1000px) rotateY(18deg);
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

const VichyCloud = ({ data, maxScale }) => {
	const transformedData = useMemo(
		() => data.map((word) => ({ ...word, text: word.text.toUpperCase() })),
		[data],
	)
	const isLoading = useUIStore((state) => state.isLoading)
	if (!transformedData || !transformedData.length || isLoading) return <div />

	return (
		<Link legacyBehavior href="/vichy/cloud">
			<TagsWrapper>
				<VichyClientCloud
					color="#565656"
					words={transformedData}
					side={{ text: 'center', base: 'middle' }}
					scale={maxScale}
					min={24}
					max={48}
				/>
			</TagsWrapper>
		</Link>
	)
}

export default VichyCloud
