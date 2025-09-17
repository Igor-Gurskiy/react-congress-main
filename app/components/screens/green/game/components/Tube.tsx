import React from 'react'
import styled from 'styled-components'

const Tube = ({ ...otherProps }) => {
	return (
		<TubeImage
			alt="tube"
			src="/assets/images/green/game/tube.png"
			{...otherProps}
		/>
	)
}

export default Tube

const TubeImage = styled.img`
	max-width: 17%;
	max-height: 43%;

	height: 100%;
`
