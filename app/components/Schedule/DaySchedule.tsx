import React from 'react'
import styled from 'styled-components'
import ScheduleModal from './ScheduleModal'

import DayOneSchedule from './DayOneSchedule'

const DaySchedule = () => {
	return (
		<ScheduleModal close={() => {}}>
			<Container>
				<DayOneSchedule />
				{/*{schedule === 'program' && <DayOneSchedule />}*/}
				{/*{schedule === 'ped' && <DayTwoSchedule />}*/}
				{/*{schedule === 'teen' && <DayThreeSchedule />}*/}
				{/*{schedule === 'adult' && <DayFourSchedule />}*/}
				{/*{schedule === 'cosm' && <DayFiveSchedule />}*/}
			</Container>
		</ScheduleModal>
	)
}

export default DaySchedule

const Container = styled.div`
	border-radius: 81px;
	-webkit-backface-visibility: hidden;
	-webkit-perspective: 1000;
	-webkit-transform: translate3d(0, 0, 0);

	* {
		-webkit-overflow-scrolling: touch;
	}
`
