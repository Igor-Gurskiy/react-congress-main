import { useEffect, useRef } from 'react'

type FrameCallback = (time: number, deltaTime: number) => void

export const useFrameLoop = (callback: FrameCallback): void => {
	const requestID = useRef<number>()
	const previousTime = useRef<number>()

	const loop = (time: number): void => {
		if (previousTime.current !== undefined) {
			const deltaTime: number = time - previousTime.current
			callback(time, deltaTime)
		}

		previousTime.current = time
		requestID.current = requestAnimationFrame(loop)
	}

	useEffect(() => {
		requestID.current = requestAnimationFrame(loop)

		return () => cancelAnimationFrame(requestID.current!)
	}, [callback])
}
