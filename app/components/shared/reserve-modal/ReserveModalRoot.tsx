import React, {Component, useEffect, useState} from 'react'
import ModalService from "@/components/shared/modal/ModalService"
import {animated, useTransition} from "react-spring"
import {easePoly} from 'd3-ease'
import styled from "styled-components";

// interface IModal {
//     component: React.ReactNode
//     props: any
//     close?: Function
// }

export const FORCE_CLOSE_RESERVE_MODALS = 'force-close-reserve-modals'

export const dispatchCloseReserveModals = () => {
    const closeEvent = new CustomEvent(FORCE_CLOSE_RESERVE_MODALS)

    document.dispatchEvent(closeEvent)
}

const ModalRoot = () => {
    const [modal, setModal] = useState<any>({})

    const transitions = useTransition(modal, {
        from: {opacity: 0, transform: "scale(1.1)"},
        enter: {opacity: 1, transform: "scale(1)"},
        leave: {opacity: 0, transform: "scale(1.1)"},
        config: {
            duration: 250,
            easing: easePoly.exponent(2)
        }
    })

    const closeAllmodals = () => setModal({})

    useEffect(() => {
        ModalService.on('reserve-open', ({component, props}) => {
            setModal({
                component,
                props,
                close: () => {
                    setModal({})
                }
            })
        })

        document.addEventListener(FORCE_CLOSE_RESERVE_MODALS, closeAllmodals, true)
        return () => document.removeEventListener(FORCE_CLOSE_RESERVE_MODALS, closeAllmodals, true)
    }, [])

    return transitions((style, {component: Component}) => Component ? (
        <ModalWrapper style={style} id="reserve">
            <Component
                {...modal.props}
                close={modal.close}
                // className={ModalComponent ? 'd-block' : ''}
            />
        </ModalWrapper>
    ) : '')
}

export default ModalRoot


const ModalWrapper = styled(animated.div)<{ $center?: boolean, $maxWidth?: number }>`
  display: flex;
  justify-content: center;
  background: rgba(31, 31, 31, 0.8);
  z-index: 10001;
  padding: 10px 15px;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
`