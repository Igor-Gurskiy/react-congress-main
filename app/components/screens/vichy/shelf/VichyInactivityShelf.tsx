import {easePoly} from 'd3-ease'
import React, {useEffect, useState} from 'react'
import {useSpring} from 'react-spring'
import {useUIStore} from "@/stores/uiStore";
import Help from "@/components/Help/Help";
import ModalService from "@/components/shared/modal/ModalService";
import LiftactivModal from "@/components/screens/vichy/modals/products/liftactiv/LiftactivModal";
import NeovadiolModal from "@/components/screens/vichy/modals/products/neovadiol/NeovadiolModal";
import MineralModal from "@/components/screens/vichy/modals/products/mineral/MineralModal";
import NormadermModal from "@/components/screens/vichy/modals/products/normaderm/NormadermModal";
import DeodorantModal from "@/components/screens/vichy/modals/products/deodorant/DeodorantModal";

let timer: NodeJS.Timeout

const VichyInactivityShelf = () => {
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

export default VichyInactivityShelf


const Tips = () => {
    const animation = useSpring({
        from: {opacity: 0, transform: 'scale(0.6)'},
        to: {opacity: 1, transform: 'scale(1)'},
        config: {duration: 700, easing: easePoly.exponent(2)},
    })

    return (
        <>
            <Help.Tip
                style={{...animation}}
                left="252px"
                top="298px"
                plus
                $p="6px"
                size={12}
                onClick={ModalService.open.bind(null, LiftactivModal)}
            />

            <Help.Tip
                style={{...animation}}
                left="252px"
                top="414px"
                plus
                $p="6px"
                size={12}
                onClick={ModalService.open.bind(null, NeovadiolModal)}
            />

            <Help.Tip
                style={{...animation}}
                left="252px"
                top="530px"
                plus
                $p="6px"
                size={12}
                onClick={ModalService.open.bind(null, MineralModal)}
            />

            <Help.Tip
                style={{...animation}}
                left="252px"
                top="646px"
                plus
                $p="6px"
                size={12}
                onClick={ModalService.open.bind(null, NormadermModal)}
            />

            <Help.Tip
                style={{...animation}}
                left="252px"
                top="762px"
                plus
                $p="6px"
                size={12}
                onClick={ModalService.open.bind(null, DeodorantModal)}
            />
        </>
    )
}