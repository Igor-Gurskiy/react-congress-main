const ReserveModalService = {
    on(event, callback) {
        document.addEventListener(event, e => callback(e.detail))
    },
    open(component, props = {}) {
        const event = new CustomEvent('reserve-open', {
            detail: {
                component,
                props
            }
        })
        document.dispatchEvent(event)
    }
}

export default ReserveModalService