import { useCallback, useRef } from 'react'
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect'

export function useEvent<T extends (...args: any[]) => any>(fn: T) {
	const fnRef = useRef(fn)

	useIsomorphicLayoutEffect(() => {
		fnRef.current = fn
	}, [fn])

	return useCallback(
		(...args: Parameters<T>) => {
			return fnRef.current.apply(null, args)
		},
		[fnRef],
	)
}
