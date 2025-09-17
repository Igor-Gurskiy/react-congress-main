import {dispatchCloseModals, OPEN_MODAL,} from '@/components/shared/modal/modal-utils'
import {FC, ReactNode} from 'react'

interface CallbackProps<T> {
    component: ReactNode
    props: T
}

const ModalService = {
    on(event: string, callback: <T>(props: CallbackProps<T>) => void) {
        document.addEventListener(event, (e) => callback((e as CustomEvent).detail))
    },
    open<T>(component: FC<any>, props = {} as T) {
        const event = new CustomEvent(OPEN_MODAL, {
            detail: {
                component,
                props,
            },
        })
        document.dispatchEvent(event)
    },
    close() {
        dispatchCloseModals()
    },
}
export default ModalService