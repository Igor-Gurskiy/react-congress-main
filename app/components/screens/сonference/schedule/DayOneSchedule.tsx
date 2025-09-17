import { sizes } from '@/utils/media'
import React, { forwardRef, useEffect } from 'react'
import DayScheduleModal from '@/components/Schedule/DayScheduleModal'
import Schedule from '@/components/Schedule/Schedule'
import ScheduleSection from '@/components/Schedule/ScheduleSection'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import { useScheduleCurrentState } from '@/utils/schedule/schedule.utils'
import { useScheduleSelector } from '@/api/hooks/use-schedule-selector'

const DayOneSchedule = forwardRef<HTMLDivElement, any>(({ close }, ref) => {
	const { getScheduleCurrentState } = useScheduleCurrentState()
	const daySchedule = useScheduleSelector('2023-11-30')
	const status = getScheduleCurrentState('2023-11-30')

	const topImage = (name, ext = 'jpg') =>
		`/assets/images/schedule/${name}.${ext} 1x, assets/images/schedule/${name}@2x.${ext} 2x`

	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.confDay1)
	}, [])

	if (!daySchedule) return null

	return (
		<DayScheduleModal ref={ref} close={close}>
			<Schedule>
				<Schedule.Content>
					<Schedule.Header>
						<Schedule.HeaderImage>
							<picture>
								<source
									srcSet={topImage('day-1/top-664')}
									media={`(min-width: ${sizes.phone_xl}px)`}
								/>
								<img src="#" srcSet={topImage('day-1/top')} />
							</picture>
						</Schedule.HeaderImage>

						<div className="text">
							<h1>
								<div className="heading">
									<div className="heading__title">
										НАУЧНАЯ
										<br /> ПРОГРАММА
									</div>
									<div className="heading__caption">
										онлайн-конгресса <br />
										L'Oreal Dermatological Beauty
									</div>
								</div>
								<time className="date" dateTime="2022-11-10">
									30 ноября
								</time>
								<span className="title2">
									открытие конгресса
									<br />
									социальный проект
									<br />
									медицина онлайн
								</span>
							</h1>
						</div>
					</Schedule.Header>

					<Schedule.Box>
						{daySchedule.map((section) => (
							<ScheduleSection
								key={section.id}
								state={status}
								section={section}
							/>
						))}
					</Schedule.Box>
				</Schedule.Content>
			</Schedule>
		</DayScheduleModal>
	)
})

export default DayOneSchedule
