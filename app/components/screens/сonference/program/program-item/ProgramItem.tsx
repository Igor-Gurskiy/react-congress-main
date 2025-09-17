import styles from './ProgramItem.module.scss'
import { FC, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import ModalService from '@/components/shared/modal/ModalService'
import { handleLorealRedirect } from '@/components/screens/hall/lights/TVLight'
import { useUIStore } from '@/stores/uiStore'
import {
	IProgramStatusEnum,
	useScheduleCurrentState,
} from '@/utils/schedule/schedule.utils'

export interface IProgramItem {
	key: string
	src: string
	date: string
	day: string
	name: string | ReactNode
	status: IProgramStatusEnum
	schedule: ReactNode
}

const ProgramItem: FC<IProgramItem> = ({
	src,
	name,
	date,
	day,
	schedule: Schedule,
}) => {
	const [state, setState] = useState<IProgramStatusEnum>(
		IProgramStatusEnum.Future,
	)
	const live = useUIStore((state) => state.live)
	const { getScheduleCurrentState } = useScheduleCurrentState()

	console.log()

	useEffect(() => {
		const currentState = getScheduleCurrentState(day)
		setState(currentState)
	}, [getScheduleCurrentState])

	useEffect(() => {
		const currentState = getScheduleCurrentState(day)
		setState(currentState)
	}, [live])

	const handleClick = () => {
		if (state === IProgramStatusEnum.Finished) return
		if (state == IProgramStatusEnum.Live) {
			handleLorealRedirect()
			return
		}

		ModalService.open(Schedule as FC)
	}

	return (
		<div className={styles.wrapper} onClick={handleClick}>
			<div className={styles.imageContainer}>
				<img src={src} alt="day 1 banner" />
				{state === IProgramStatusEnum.Live && (
					<LiveTag>
						<Circle />
						<div>LIVE</div>
					</LiveTag>
				)}
			</div>
			<div className={styles.info}>
				<div className={styles.date}>{date}</div>
				<div className={styles.name}>{name}</div>
			</div>
			<StatusBadge status={state} />
		</div>
	)
}

export default ProgramItem

const Circle = styled.div`
	width: 6px;
	height: 6px;
	background: #fff;
	border-radius: 50%;
`

const LiveTag = styled.div`
	border-radius: 0px 4px 4px 8px;
	background: rgba(255, 0, 0, 0.7);
	backdrop-filter: blur(11.5px);
	width: 64px;
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 6px;

	position: absolute;
	bottom: 0;
	left: 0;

	color: #fff;
	font-size: 16px;
	font-weight: 600;
	line-height: 148%;
	letter-spacing: 0.32px;
	text-transform: uppercase;
`

const StatusBadge = ({ status }) => {
	const text = getStatusText(status)
	return (
		<StatusWrapper>
			<StatusText $live={status === IProgramStatusEnum.Live}>{text}</StatusText>
		</StatusWrapper>
	)
}

const getStatusText = (status) => {
	if (status === IProgramStatusEnum.Finished) return 'трансляция завершена'
	if (status === IProgramStatusEnum.Records) return 'смотреть записи'
	if (status === IProgramStatusEnum.Future) return 'добавить в календарь'
	if (status === IProgramStatusEnum.Live) return 'смотреть сейчас'
	return ''
}

const StatusWrapper = styled.div`
	position: absolute;
	right: -6px;
	top: -10px;
	border-radius: 5px;
	background: #fff;
	display: flex;
	padding: 6px 8px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	width: 180px;
	height: 34px;
`

const StatusText = styled.div<{ $live?: boolean }>`
	color: ${(props) => (props.$live ? '#FF2626' : '#016fc2')};
	text-align: center;
	font-size: 13px;
	font-weight: 600;
	line-height: 110%;
	letter-spacing: 0.13px;
	text-transform: uppercase;
`
