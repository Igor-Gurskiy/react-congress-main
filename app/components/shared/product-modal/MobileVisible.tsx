import React from 'react'
import { useMediaQuery } from 'react-responsive'

type MobileVisiblePropsType = {
    children: JSX.Element
    visible?: boolean
}

const MobileVisible: React.FC<MobileVisiblePropsType> = ({ children, visible = true }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' })

    if (isMobile === !visible) return null

    return (
        <>
            {children}
        </>
    )
}

export default MobileVisible