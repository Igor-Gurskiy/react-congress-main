import React from 'react'
import ButtonBase from './ui/Button/ButtonBase'

const Button = ({ children, ...otherProps }) => {
    return (
        <ButtonBase {...otherProps}>
            {children}
        </ButtonBase>
    )
}

export default Button