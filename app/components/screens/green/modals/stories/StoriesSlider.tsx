import React, { useState } from 'react'
import styled from 'styled-components'
import StorySection from '@/components/screens/green/modals/stories/components/StorySection/StorySection'
import { stories } from '@/components/screens/green/modals/stories/stories'

const StoriesSlider = ({ close }) => {
	const [selected, setSelected] = useState(0)

	return (
		<Wrapper>
			{stories.map((section, idx) => (
				<StorySection
					key={idx}
					items={section}
					pos={idx - selected}
					selected={selected}
					idx={idx}
					hasNext={stories.length - 1 != idx}
					hasPrev={idx != 0}
					onSelect={setSelected}
					close={close}
				/>
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	height: 100%;
	padding: 0;
	overflow: hidden;
	position: relative;
	background: linear-gradient(180deg, #2c2c2c 0%, #1e1e1e 51.04%, #2c2c2c 100%);
	display: flex;
	justify-content: center;
	align-items: center;
`

export default StoriesSlider
