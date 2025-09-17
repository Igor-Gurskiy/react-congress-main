// @ts-nocheck

import useWindowSize from '@/hooks/useWindowSize'
import { useUIStore } from '@/stores/uiStore'
import React, { useEffect, useRef, useState } from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'

const settings = {
    cursorThrottle: (1000 / 60),
    gyroscopeThrottle: (1000 / 20),
    resizeThrottle: 500,
}

const FRAME_HEIGHT = 1250

const calculateScale = ({ height, width }) => {
    let ratio = height / FRAME_HEIGHT
    const widthRatio = (ratio * 2500) / width
    if (widthRatio < 1) {
        ratio = ratio / widthRatio
        
        const offset = (1250 * ratio - height) / 2

        // console.log('width lower', offset / ratio)
    }

    // console.log(ratio)

    return ratio
}

const PreloaderPanorama = ({ children, to, fixed = false }: any) => {
    // Scale Ratio
    const scaleRatio = useUIStore(state => state.scaleRatio)
    const cabin = useUIStore(state => state.cabin)
    const setScaleRatio = useUIStore(state => state.setScaleRatio)
    const locked = useUIStore(state => state.locked)

    const [loaded, setLoaded] = useState(false)
    const [centerX, setCenterX] = useState(0)

    const panoRef = useRef(null)
    const imageRef = useRef(null)
    const [width, height] = useWindowSize();

    useEffect(() => {
        setLoaded(true)
        if (window) {
            const panorama = document.querySelector('.panorama')
            const removeDefaultBehaviour = (e) => {
                e.preventDefault()
            }

            panorama.addEventListener('touchmove', removeDefaultBehaviour, false)

            return () => panorama?.removeEventListener('touchmove', removeDefaultBehaviour, false)
        }
    }, [])

    useEffect(() => {
        const ratio = calculateScale({ width, height })

        if (locked) {
            return
        } else {
            if (ratio > 0) {
                setScaleRatio(ratio)
            }
        }
      
        const imageWidth = document.querySelector('.panorama__image').offsetWidth
        const panoWidth = document.querySelector('.panorama').offsetWidth
        const offsetX = (panoWidth + 20 - imageWidth * scaleRatio) / scaleRatio

        setCenterX((offsetX / 2))

    }, [height, width])

    useEffect(() => {
        const imageWidth = document.querySelector('.panorama__image').offsetWidth
        const panoWidth = document.querySelector('.panorama').offsetWidth
        const offsetX = (panoWidth - imageWidth * scaleRatio) / scaleRatio
        setCenterX((offsetX / 2))
    }, [imageRef, panoRef, scaleRatio, loaded])


    return (
        <TransformCenter>
            <animated.div
                className="panorama"
                ref={panoRef}
                style={{ width, height }}
            >
                <animated.div className="panorama__frame" style={{ transform: `scale(${scaleRatio})` }}>
                    <animated.div className="panorama__image" ref={imageRef} style={{ transform: `translateX(${centerX}px)` }}>
                        {children}
                    </animated.div>
                </animated.div>
            </animated.div>
        </TransformCenter>
    )
}

export default PreloaderPanorama

const TransformCenter = styled.div`
    transform-origin: center;
    min-height: 100vh;
    height: 100%;
    min-width: 100vw;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
    @media (orientation: landscape) and (max-height: 400px) {
        top: calc(77% - 400px);
        height: 400px;
      }
 
`