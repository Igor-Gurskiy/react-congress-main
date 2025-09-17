import {easePoly} from 'd3-ease'
import React, {useEffect, useState} from 'react'
import {useSpring} from 'react-spring'
import {useUIStore} from "@/stores/uiStore";
import Help from "@/components/Help/Help";

let timer: NodeJS.Timeout

const DercosInactivityShelf = () => {
    const [inactive, setInactive] = useState(false)
    const locked = useUIStore(state => state.locked)

    const disableInactivity = () => {
        clearTimeout(timer)
        setInactive(false)
    }

    useEffect(() => {
        document.addEventListener('prevent-inactivity', disableInactivity, true)

        return () => {
            disableInactivity()
            document.removeEventListener('prevent-inactivity', disableInactivity, true)
        }
    }, [])

    useEffect(() => {
        if (locked) {
            timer = setTimeout(() => setInactive(true), 10000)
        } else {
            disableInactivity()
        }
        return () => {
            disableInactivity()
        }
    }, [locked])


    if (!inactive) return null

    return <Tips/>
}

export default DercosInactivityShelf


const Tips = () => {

    const animation = useSpring({
        from: {opacity: 0, transform: 'scale(0.6)'},
        to: {opacity: 1, transform: 'scale(1)'},
        config: {duration: 700, easing: easePoly.exponent(2)},
    })

    return (
        <>
            <Help.Tip
                style={{...animation, pointerEvents: 'none'}}
                left="285px"
                top="200px"
                plus
                $p="4px"
                size={16}
            />

            <Help.Tip
                style={{...animation, pointerEvents: 'none'}}
                left="420px"
                top="350px"
                plus
                $p="4px"
                size={16}
            />

            <Help.Tip
                style={{...animation, pointerEvents: 'none'}}
                left="270px"
                top="510px"
                plus
                $p="4px"
                size={16}
            />
        </>
    )
}