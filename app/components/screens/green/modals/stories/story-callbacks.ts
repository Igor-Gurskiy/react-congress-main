import { EventsEnum } from '@/api/tracker'
import { API } from '@/api'

export const onStoryEnd = (event: EventsEnum, duration: number) => {
	API.tracker.sendEvent(event, `params[duration]=${duration}`)
}

export const onStoryStart = (event: EventsEnum) => {
	API.tracker.sendEvent(event)
}
