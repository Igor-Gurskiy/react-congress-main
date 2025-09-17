import { MouseEvent, TouchEvent } from 'react'

export function isTouchEvent(e: TouchEvent | MouseEvent): e is TouchEvent {
	return e && 'touches' in e
}

export function isMouseEvent(e: TouchEvent | MouseEvent): e is MouseEvent {
	return e && 'screenX' in e
}
