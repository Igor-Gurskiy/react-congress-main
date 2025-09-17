'use client'
import dynamic from 'next/dynamic'
import { CanvasHorizontalAlign } from '@alesmenzel/cloud-react'
import { FC } from 'react'
import { useUIStore } from '@/stores/uiStore'

const ClientCloud = dynamic(() => import('./Cloud'), { ssr: false })

type ITagCloudWord = {
	text: string
	count: number
}
type SideType = {
	text: CanvasTextAlign
	base: CanvasHorizontalAlign
}

interface ITagCloud {
	words: ITagCloudWord[]
	side: SideType
	scale: number
	colorScale?: any
	direction?: any
}

const TagCloud: FC<ITagCloud> = ({
	words,
	side,
	scale,
	colorScale,
	direction,
	...props
}) => {
	const isLoading = useUIStore((state) => state.isLoading)

	if (!words || !words.length || isLoading) return <div />

	return (
		<ClientCloud
			words={words || []}
			scale={scale}
			colorScale={colorScale}
			{...props}
		/>
	)
}

export default TagCloud
