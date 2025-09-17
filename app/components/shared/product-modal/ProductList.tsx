import styled from 'styled-components'

const ProductList = styled.div`
	position: relative;
	margin: 8px 0;

	& > div {
		&:not(:first-child) {
			margin-top: 8px;
		}
	}
`

export const ProductUList = styled.div<{ $disc: string }>`
	transition: all 0.5s;
	margin-left: 0px;
	font-size: 12px;
	line-height: 16px;
	color: #1f1f1f;
	overflow: hidden;
	margin-bottom: 10px;

	& > ul > li {
		font-size: 12px;
		line-height: 16px;
		color: #1f1f1f;
		list-style-type: none;
		position: relative;
		padding-left: 16px;
		margin-bottom: 6px;

		&:before {
			content: ' ';
			width: 6px;
			height: 6px;
			border-radius: 50%;
			left: 4px;
			top: 5px;
			position: absolute;
			background: ${(props) => props.$disc};
		}
	}
`

export default ProductList
