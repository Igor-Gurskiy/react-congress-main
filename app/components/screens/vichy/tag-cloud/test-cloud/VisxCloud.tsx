import TestCloudV3 from '@/components/screens/vichy/tag-cloud/test-cloud/TestCloudV3'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const VisxCloud = ({ data, maxScale }) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [size, setSize] = useState({ width: 0, height: 0 })

	useEffect(() => {
		if (!containerRef.current) return
		setSize({
			width: containerRef.current.clientWidth,
			height: containerRef.current.clientHeight,
		})
	}, [containerRef.current])

	return (
		<Container ref={containerRef}>
			<TestCloudV3
				data={data}
				maxScale={maxScale}
				width={size.width}
				height={size.height}
			/>
		</Container>
	)
}
export default VisxCloud

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`
