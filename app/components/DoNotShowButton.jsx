import React from 'react'
import styled, { css } from 'styled-components'
import { useUIStore } from '../stores/uiStore'

const DoNotShow = styled.button`
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    background: transparent;
    border: none;
    cursor: pointer;

    ${props => props.ml && css`margin-left: ${props.ml};`}
`

const DoNotShowButton = ({ children, ...otherProps }) => {
    const doNotShow = useUIStore(state => state.doNotShow)
    const setDoNotShow = useUIStore(state => state.setDoNotShow)
    const setHelpOverlay = useUIStore(state => state.setHelpOverlay)

    const neverShowInitially = () => {
        localStorage.setItem('doNotShow', 'true')
        setHelpOverlay(false)
        setDoNotShow(doNotShow == 'true')
    }

    if (doNotShow) return null

    return (
        <DoNotShow {...otherProps} onClick={neverShowInitially}>
            {children}
        </DoNotShow>
    )
}

export default DoNotShowButton