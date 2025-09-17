import media from '@/utils/media'
import React, { useRef } from 'react'
import styled from 'styled-components'
import ProductModal from './ProductModal'
import useScrollbars from '@/shared/hooks/use-scrollbars'

const ProductBody = ({ children, share = false, onClose }) => {
	const ref = useRef<HTMLDivElement>(null)
	useScrollbars(ref, true)

	return (
		<Container ref={ref}>
			<BackButtonBox>
				<ProductModal.Back onClick={onClose} />
			</BackButtonBox>
			<Body>{children}</Body>
		</Container>
	)
}

export default ProductBody

const BackButtonBox = styled.div`
	display: flex;
	padding: 24px 32px 0px 32px;

	${media.xl`
        padding: 16px 16px 0px 16px;
    `}

	${media.five`
        padding: 16px 8px 0px 8px;
    `}
`

const Container = styled.div`
	width: 100%;
	background: #fff;
	overflow-y: auto;
	position: relative;

	${media.md`
        margin: 0;
        display: block;
    `}
`

const Body = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: space-between;
	padding: 20px 0 20px 0;
	overflow: hidden;
	height: auto;

	${media.md`
        margin: 0;
        display: block;
    `}/* margin-bottom: 20px; */
`
