import React from 'react'

const PlusIcon = ({ size }) => {
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M192 149.4V0H149.4V149.4H0V192H149.4V341.4H192V192H341.4V149.4H192Z" fill="black" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="341.4" height="341.4" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default PlusIcon