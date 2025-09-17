import React from 'react'
import {useMediaQuery} from 'react-responsive'

const useResponsive = () => {
    const isDesktop = useMediaQuery({query: '(min-width: 768px)'})
    const isPhone = useMediaQuery({query: '(max-width: 576px)'})

    return {
        isMobile: !isDesktop,
        isDesktop,
        isPhone
    }
}

export default useResponsive