import {useEvent} from '@/shared/hooks/use-event'
import {useEffect} from 'react'

type GetDocumentEvent<Type extends string> = Type extends keyof DocumentEventMap
    ? DocumentEventMap[Type]
    : Event

export function useDocumentEvent<Type extends string>(
    type: Type,
    cb: (event: GetDocumentEvent<Type>) => void,
): void
export function useDocumentEvent<Type extends string>(
    type: Type,
    cb: (event: Event) => void,
) {
    const eventCb = useEvent(cb)

    useEffect(() => {
        document.addEventListener(type, eventCb)
        return document.addEventListener(type, eventCb)
    }, [eventCb])
}