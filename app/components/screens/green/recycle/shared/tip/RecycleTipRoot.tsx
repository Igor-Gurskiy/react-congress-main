import React, {Component, useEffect, useState} from 'react'
import {animated, useTransition} from "react-spring"
import RecycleTipService, {RECYCLE_TIP_OPEN} from "@/components/screens/green/recycle/shared/tip/RecycleTipService";

const RecycleTipRoot = () => {
    const [modal, setModal] = useState<any>({})

    const transitions = useTransition(modal, {
        from: { opacity: 0, y: -50 },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0, y: -50 },
        config: {
            // easing: easePoly.exponent(2),
            duration: 200
        }
    })

    useEffect(() => {
        RecycleTipService.on(RECYCLE_TIP_OPEN, ({ component, props }) => {
            setModal({
                component,
                props,
                close: () => {
                    setModal({})
                }
            })
        })
    }, [])

    return (
        <div style={{ position: 'relative' }}>
            {transitions((style, {component: Component, props}) => Component ? (
                <animated.div style={{ ...style, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <Component
                        {...props}
                        close={modal.close}
                    />
                </animated.div>
            ) : '')}
        </div>
    )
}

export default RecycleTipRoot