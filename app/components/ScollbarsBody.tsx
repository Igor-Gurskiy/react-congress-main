import useWindowSize from '@/hooks/useWindowSize'
import media from '@/utils/media'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const ScrollbarsBody = ({
	children,
	ref = null,
	noRadius = false,
	factor = 0,
}) => {
	const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' })
	const [_, height] = useWindowSize()

	// if (isMobile) return (
	//     <ScrollbarsWrapper style={{ height: height - 100 }}>
	//         <ContentWrapper>
	//             {children}
	//         </ContentWrapper>
	//     </ScrollbarsWrapper>
	// )

	return (
		<Scrollbars
			autoHeight={true}
			autoHeightMax={height - 120 - factor}
			style={{
				width: '100%',
				borderRadius: noRadius ? 0 : 8,
				overflow: 'hidden',
			}}
			autoHide={false}
			ref={ref}
		>
			<ScrollbarsWrapper>{children}</ScrollbarsWrapper>
		</Scrollbars>
	)
}

export default ScrollbarsBody

const ContentWrapper = styled.div`
	max-height: 2000px;
	min-height: 100%;
	height: 100%;

	overflow-y: scroll;
`

const ScrollbarsWrapper = styled.div`
	overflow: hidden;
	//border-radius: 8px;

	padding-right: 0px;
	// ${media.md`
  //       overflow-y: scroll;
  //   `}
`
