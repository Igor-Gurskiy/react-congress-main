import { useRef } from 'react'
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect'

export const useLatest = <T,>(value: T) => {
	const valueRef = useRef(value)

	useIsomorphicLayoutEffect(() => {
		valueRef.current = value
	}, [value])

	return valueRef
}
