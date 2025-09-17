import { RefObject, useEffect, useState } from 'react'

const useHover = (ref: RefObject<any>) => {
    const [isHovering, setHovering] = useState(false)

    const onMouseEnter = () => setHovering(true)
    const onMouseLeave = () => setHovering(false)

    useEffect(() => {
        if (!ref.current) {
            return
        }

        const node = ref.current

        node.addEventListener('mouseenter', onMouseEnter)
        node.addEventListener('mousemove', onMouseEnter)
        node.addEventListener('mouseleave', onMouseLeave)

        return function () {
            node.removeEventListener('mouseenter', onMouseEnter)
            node.removeEventListener('mousemove', onMouseEnter)
            node.removeEventListener ('mouseleave', onMouseLeave)
        }
    }, [])

    return isHovering
}

export default useHover