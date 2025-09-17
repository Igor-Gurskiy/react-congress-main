import { MutableRefObject, useEffect } from 'react'
import { OverlayScrollbars } from 'overlayscrollbars'

const config = {}

const useScrollbars = (
	root: MutableRefObject<HTMLElement | null>,
	hasScroll?: boolean,
) => {
	useEffect(() => {
		let scrollbars: OverlayScrollbars

		if (root.current && hasScroll) {
			scrollbars = OverlayScrollbars(root.current, config)
		}

		return () => {
			if (scrollbars) {
				scrollbars.destroy()
			}
		}
	}, [root, hasScroll])
}

export default useScrollbars
