import { useConferenceStore } from '@/stores/conferenceStore'
import { sizes } from '@/utils/media'
import schedule from '@/utils/schedule/schedule'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import ScrollbarsBody from '../ScollbarsBody'
import Schedule from './Schedule'

const daySchedule = schedule.get('2022-11-11')

const DayOneSchedule = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' })
	const ped = useConferenceStore((state) => state.ped)
	const topImage = (name, ext = 'jpg') =>
		`assets/images/schedule/${name}.${ext} 1x, assets/images/schedule/${name}@2x.${ext} 2x`

	if (!daySchedule) return null

	return (
		<ScrollbarsBody>
			<Schedule>
				<Schedule.Content>
					<Schedule.Header>
						<Schedule.HeaderImage>
							<picture>
								<source
									srcSet={topImage('day-2/top-664')}
									media={`(min-width: ${sizes.phone_xl}px)`}
								/>
								<img src="#" srcSet={topImage('day-2/top')} />
							</picture>
						</Schedule.HeaderImage>

						<div className="text">
							<h1>
								<span className="title1">
									НАУЧНАЯ
									<br /> ПРОГРАММА
									<br /> ACD КОНГРЕССА
								</span>
								<time className="date" dateTime="2022-11-11">
									11 ноября
								</time>
								<span className="title2">
									дерматозы детей
									<br />и подростков
								</span>
							</h1>
						</div>
					</Schedule.Header>

					<Schedule.Box>
						{/*{daySchedule.map((section) => (*/}
						{/*    <ScheduleSection key={section.id} state={ped} section={section}/>*/}
						{/*))}*/}
					</Schedule.Box>
				</Schedule.Content>
			</Schedule>
		</ScrollbarsBody>
	)
}

export default DayOneSchedule
