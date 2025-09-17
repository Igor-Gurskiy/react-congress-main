export const FORCE_CLOSE_MODALS = 'MODALS_FORCE-CLOSE-MODALS'
export const OPEN_MODAL = 'MODALS_OPEN-MODAL'

export const dispatchCloseModals = () => {
    const closeEvent = new CustomEvent(FORCE_CLOSE_MODALS)

    document.dispatchEvent(closeEvent)
}