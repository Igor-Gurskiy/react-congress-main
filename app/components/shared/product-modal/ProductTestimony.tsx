import React from "react"
import Box from "../../Box"
import ProductTypography from "./ProductTypography"

const ProductTestimony = ({ testimonies = [] as TestimonyType[], text = 'Показания' }) => {
    return (
        <div>
            <ProductTypography $subtitle $mt={24}>{text}</ProductTypography>
            <div>
                {testimonies.map((t, idx) => <Testimony testimony={t} key={idx} />)}
            </div>
        </div>
    )
}

export default ProductTestimony

type TestimonyType = {
    text: string | JSX.Element
    after?: string | JSX.Element
    icon?: boolean
    src?: string
}

type TestimonyPropsType = {
    testimony: TestimonyType
}

const Testimony: React.FC<TestimonyPropsType> = ({ testimony }) => {
    const { text = '', after, icon = true, src } = testimony
    return (
        <>
            <Box $flex $alignItems={src ? 'center' : 'flex-start'} $mt={8}>
                {icon && (
                    <Box>
                        {src ? (
                            <img src={src} />
                        ) : (
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#D7E5ED" />
                                <path d="M5.79818 9.80001L2.7998 7.12682L3.27089 6.64894L5.78273 8.88835L10.7128 4.20001L11.1998 4.66315L5.79818 9.80001Z" fill="#1F1F1F" />
                            </svg>
                        )}
                    </Box>
                )}

                <ProductTypography $ml={icon ? 8 : 0}>{text}</ProductTypography>
            </Box>
            {after}
        </>
    )
}