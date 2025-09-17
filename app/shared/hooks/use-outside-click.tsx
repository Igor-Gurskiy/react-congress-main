import { useEffect } from 'react'
import { useLatest } from '@/shared/hooks/use-latest'

type Fn = (...args: any[]) => void

const excludedList = [
	'reserve',
	'onair_close',
	'onair',
	'onair_container',
	'onair_close_svg',
	'onair_live_icon',
	'onair_content',
	'onair_live_text',
	'onair_event_name',
	'onair_content_link',
]

export function useOutsideClick(elementRef: any, handler: Fn, attached = true) {
	const latestHandler = useLatest(handler)

	useEffect(() => {
		if (!attached) return

		const handleClick = (e: any) => {
			if (!elementRef.current) return

			if (!elementRef.current.contains(e.target)) {
				if (excludedList.indexOf(e.target.id) !== -1) return
				latestHandler.current()
			}
		}

		document.addEventListener('mousedown', handleClick)

		return () => {
			document.removeEventListener('mousedown', handleClick)
		}
	}, [elementRef, latestHandler, attached])
}
