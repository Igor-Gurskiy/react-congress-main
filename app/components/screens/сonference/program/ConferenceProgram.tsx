import useHover from '@/hooks/useHover'
import { easePoly } from 'd3-ease'
import React, { useRef } from 'react'
import { animated, useTransition } from 'react-spring'


import styled from 'styled-components'
import DayOneSchedule from '@/components/screens/сonference/schedule/DayOneSchedule'
import DayTwoSchedule from '@/components/screens/сonference/schedule/DayTwoSchedule'
import DayThreeSchedule from '@/components/screens/сonference/schedule/DayThreeSchedule'
import DayFourSchedule from '@/components/screens/сonference/schedule/DayFourSchedule'
import DayFiveSchedule from '@/components/screens/сonference/schedule/DayFiveSchedule'
import DaySixSchedule from '@/components/screens/сonference/schedule/DaySixSchedule'
import { IProgramStatusEnum } from '@/utils/schedule/schedule.utils'
import ProgramItem, { IProgramItem } from './program-item/ProgramItem'

const days: IProgramItem[] = [
	{
		key: 'day1',
		src: '/assets/images/conference/program/q1.png',
		date: '30 Ноября',
		day: '2023-11-30',
		name: (
			<>
				Социальный проект
				<br />
				медицина онлайн
			</>
		),
		status: IProgramStatusEnum.Future,
		schedule: DayOneSchedule,
	},
	{
		key: 'day2',
		src: '/assets/images/conference/program/q2.png',
		date: '1 декабря',
		day: '2023-12-01',
		name: 'ДЕТИ И ПОДРОСТКИ',
		status: IProgramStatusEnum.Future,
		schedule: DayTwoSchedule,
	},
	{
		key: 'day3',
		src: '/assets/images/conference/program/q3.png',
		date: '2 декабря',
		day: '2023-12-02',
		name: (
			<>
				ДЕРМАТОЗЫ
				<br />
				ВЗРОСЛЫХ
			</>
		),
		status: IProgramStatusEnum.Future,
		schedule: DayThreeSchedule,
	},
	{
		key: 'day4',
		src: '/assets/images/conference/program/q4.png',
		date: '3 декабря',
		day: '2023-12-03',
		name: 'ОНКОЛОГИя',
		status: IProgramStatusEnum.Future,
		schedule: DayFourSchedule,
	},
	{
		key: 'day5',
		src: '/assets/images/conference/program/q5.png',
		date: '4 декабря',
		day: '2023-12-04',
		name: 'ТРИХОЛОГИя КОСМЕТОЛОГИЯ',
		status: IProgramStatusEnum.Future,
		schedule: DayFiveSchedule,
	},
	{
		key: 'day6',
		src: '/assets/images/conference/program/q6.png',
		date: '5 декабря',
		day: '2023-12-05',
		name: 'Фармация',
		status: IProgramStatusEnum.Future,
		schedule: DaySixSchedule,
	},
]

const ConferenceProgram = ({ ...otherProps }) => {
	const ref = useRef(null)
	const active = useHover(ref)

	const transitions = useTransition(active, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			easing: easePoly.exponent(2),
			duration: 300,
		},
	})

	return (
		<Wrapper ref={ref} {...otherProps}>
			{transitions((style, item) =>
				item ? (
					<Light
						style={style}
						src="assets/images/conference/light/program.png"
					/>
				) : (
					''
				),
			)}

			<ProgramWrapper>
				{days.map((day) => (
					<ProgramItem
						key={day.key}
						src={day.src}
						date={day.date}
						day={day.day}
						name={day.name}
						status={day.status}
						schedule={day.schedule}
					/>
				))}
			</ProgramWrapper>
		</Wrapper>
	)
}

export default ConferenceProgram

const Wrapper = styled.a`
	position: absolute;
	top: 237px;
	left: 1033px;
	width: 491px;
	height: 710px;
	cursor: pointer;
	z-index: 11;
`

const Light = styled(animated.img)`
	position: absolute;
	top: -45px;
	left: -57px;
	pointer-events: none;
`

const ProgramWrapper = styled.div`
	width: 430px;
	height: 649px;
	position: absolute;
	top: 27px;
	left: 29px;

	padding: 20px 24px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: 16px;
`
