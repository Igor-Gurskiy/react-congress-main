import media from "@/utils/media"
import styled from "styled-components"

const ProductColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 312px;
    width: 100%;
    ${media.md`
        max-width: 100%;
    `}
`

export default ProductColumn