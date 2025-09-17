import {useEffect, useRef} from 'react'
import {useUIStore} from "@/stores/uiStore";

const excludedList = ["reserve", "onair_close", "onair", "onair_container", "onair_close_svg", "onair_live_icon", "onair_content", "onair_live_text", "onair_event_name", "onair_content_link"]

export const dispatchPreventClickOutside = () => {
    const event = new CustomEvent('prevent-use-outside')
    document['prevented'] = true
    document.dispatchEvent(event)
}

export const dispatchDisablePreventClickOutside = () => {
    const event = new CustomEvent('prevent-disable-use-outside')
    document['prevented'] = false
    document.dispatchEvent(event)
}

const useClickOutside = (handler, force = false) => {
    const domNode = useRef<any>(null)
    const setPrevented = useUIStore(state => state.setPrevented)
    const prevented = useUIStore(state => state.prevented)

    const onPrevent = () => setPrevented(true)
    const onPreventDisable = () => setPrevented(false)

    const hookHandler = (event) => {
        if (!force && document['prevented'] === true) return

        if (!domNode.current?.contains(event.target)) {
            if (excludedList.indexOf(event.target.id) !== -1) return
            handler()
        }
    }

    useEffect(() => {
        document.addEventListener("prevent-use-outside", onPrevent, false)
        document.addEventListener("prevent-disable-use-outside", onPreventDisable, false)
        document.addEventListener("mousedown", hookHandler, false)

        return () => {
            document.removeEventListener("mousedown", hookHandler, false)
            document.removeEventListener("prevent-use-outside", onPrevent, false)
            document.removeEventListener("prevent-disable-use-outside", onPreventDisable, false)
        }
    }, [])

    return domNode
}

export default useClickOutside