import React from 'react';
import styled from 'styled-components';

export const TypographyBase = styled.div`
    font-family: 'Gilroy';
    font-weight: 300;
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