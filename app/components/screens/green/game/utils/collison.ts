import { MutableRefObject } from 'react'

export const isCollided = (
	el: MutableRefObject<HTMLDivElement | null>,
	target: MutableRefObject<HTMLDivElement | null>,
) => {
	// prevent null refs
	if (!el.current || !target.current) return false

	const elRect = el.current.getBoundingClientRect()
	const targetRect = target.current.getBoundingClientRect()

	return (
		elRect.x < targetRect.x + targetRect.width &&
		elRect.x + elRect.width > targetRect.x &&
		elRect.y < targetRect.y + targetRect.height &&
		elRect.y + elRect.height > targetRect.y
	)
}
