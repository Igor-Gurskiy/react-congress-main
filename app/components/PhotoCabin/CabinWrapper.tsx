import media from "@/utils/media"
import { animated } from "react-spring"
import styled from "styled-components"

const Wrapper = styled(animated.div)`
    max-width: 1024px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 50px 40px;

    ${media.md`
        padding: 48px 32px;
    `}
`

const CabinWrapper = ({ children, ...otherProps }) => {
    return (
        <Wrapper {...otherProps}>
            {children}
        </Wrapper>
    )
}

export default CabinWrapper