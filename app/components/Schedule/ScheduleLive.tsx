import React from 'react'
import styled, { keyframes } from "styled-components"

const LiveSchedule = () => {
    return (
        <LiveWrapper>
            <LiveButton>LIVE</LiveButton>
            <LiveCircle />
        </LiveWrapper>
    )
}

export default LiveSchedule

const LiveWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LiveButton = styled.div`
    border: 1px solid #C71A1A;
    border-radius: 5px;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #C71A1A;
    padding: 10px 12px;
`

const PulseAnimation = keyframes`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0.2;
    }
    40% {
        opacity: 0.6;
    }
    60% {
        opacity: 1;
    }
    80% {
        opacity: 0.5;
    }
    100% {
        opacity: 0;
    }
`

const LiveCircle = styled.div`
    width: 8px;
    height: 8px;
    background: #C71A1A;
    border-radius: 50%;
    position: relative;
    z-index: 11;
    margin-right: 8px;

    &:before {
        content: ' ';
        position: absolute;
        width: 16px;
        height: 16px;
        top: -4px;
        left: -4px;
        z-index: -1;
        border-radius: 50%;
        background: rgba(199, 26, 26, 0.5);
        animation: ${PulseAnimation} 4s ease-out infinite;
    }

    &:after {
        content: ' ';
        position: absolute;
        width: 24px;
        height: 24px;
        top: -8px;
        left: -8px;
        z-index: -1;
        border-radius: 50%;
        background: rgba(199, 26, 26, 0.2);
        animation: ${PulseAnimation} 2s 4s ease-out infinite;
    }
`