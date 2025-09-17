export const RECYCLE_TIP_OPEN = 'recycle-tip-open'

const RecycleTipService = {
    on(event, callback) {
        document.addEventListener(event, e => callback(e.detail))
    },
    open(component, props = {}) {
        const event = new CustomEvent(RECYCLE_TIP_OPEN, {
            detail: {
                component,
                props
            }
        })
        document.dispatchEvent(event)
    }
}

export default RecycleTipService