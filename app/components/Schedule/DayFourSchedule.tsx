import { useConferenceStore } from '@/stores/conferenceStore'
import { sizes } from '@/utils/media'
import schedule from '@/utils/schedule/schedule'
import React from 'react'
import ScrollbarsBody from '../ScollbarsBody'
import Schedule from './Schedule'

const daySchedule = schedule.get('2022-11-13')

const DayThreeSchedule = () => {
	const adult = useConferenceStore((state) => state.adult)
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
									srcSet={topImage('day-4/top-664')}
									media={`(min-width: ${sizes.phone_xl}px)`}
								/>
								<img src="#" srcSet={topImage('day-4/top')} />
							</picture>
							<img
								src="#"
								srcSet={topImage('decor', 'png')}
								className="decor"
							/>
						</Schedule.HeaderImage>

						<div className="text">
							<h1>
								<span className="title1">
									НАУЧНАЯ
									<br /> ПРОГРАММА
									<br /> ACD КОНГРЕССА
								</span>
								<time className="date" dateTime="2022-11-13">
									13 ноября
								</time>
								<span className="title2">ДЕРМАТОЗЫ ВЗРОСЛЫХ</span>
							</h1>
						</div>
					</Schedule.Header>

					<Schedule.Box>
						{/*{daySchedule.map((section) => (*/}
						{/*	<ScheduleSection*/}
						{/*		key={section.id}*/}
						{/*		state={adult}*/}
						{/*		section={section}*/}
						{/*	/>*/}
						{/*))}*/}
					</Schedule.Box>
				</Schedule.Content>
			</Schedule>
		</ScrollbarsBody>
	)
}

export default DayThreeSchedule
