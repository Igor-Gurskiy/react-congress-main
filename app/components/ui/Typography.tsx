// @ts-nocheck

import React from 'react';
import styled from 'styled-components';

export const TypographyBase = styled.div<TypographyBasePropsType>`
    font-family: 'Century Gothic';
    font-size: ${props => props.size ? `${props.size}px` : '14px'};
    color: ${props => props.color ? `${props.color}` : '#010101'};
    &&& {
        ${props => props.position && `position: ${props.position};`}
        ${props => props.left && `left: ${props.left};`}
        ${props => props.right && `right: ${props.right};`}
        ${props => props.top && `top: ${props.top};`}
        ${props => props.bottom && `bottom: ${props.bottom};`}
    }
`

const Typography = ({ component = 'div', children, ...otherProps }) => {
    return (
        <TypographyBase as={component} {...otherProps}>
            {children}
        </TypographyBase>
    )
}

export default Typography

type TypographyBasePropsType = {
    size?: number
    color?: string
    position?: string
    left?: string
    right?: string
    top?: string
    bottom?: string
}