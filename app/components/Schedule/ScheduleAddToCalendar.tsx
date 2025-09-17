import media, { mediaMin } from '@/utils/media'
import React from 'react'
import { isIOS, isMacOs } from 'react-device-detect'
import { useMediaQuery } from 'react-responsive'
import styled, { css } from 'styled-components'
import AddToCalendarPlusIcon from './AddToCalendarPlusIcon'

const ScheduleAddToCalendar = ({ googleLink = '#', iosLink = '#' }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' })
	const link = isIOS || isMacOs ? iosLink : googleLink
	// const link = iosLink

	return (
		<AddToCalendarWrapper onClick={(e) => e.stopPropagation()}>
			{/* {!isMobile && <AddToCalendarText>ДОБАВИТЬ<br />В КАЛЕНДАРЬ</AddToCalendarText>}
            {iosLink && (
                <AddToCalendarIOS as="a" href={iosLink} target="_blank">
                    <IOSCalendarIcon />
                </AddToCalendarIOS>
            )}
            {googleLink && (
                <AddToCalendarGoogle as="a" href={googleLink} target="_blank">
                    <GoogleCalendarIcon />
                </AddToCalendarGoogle>
            )} */}
			<AddToCalendarBtn href={link} />
		</AddToCalendarWrapper>
	)
}

export default ScheduleAddToCalendar

const AddToCalendarBtn = ({ href }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' })

	return (
		<AddToCalendarBtnWrapper $fullWidth={isMobile} href={href} target="_blank">
			<AddToCalendarPlusIcon />
			<AddToCalendarText>Добавить в календарь</AddToCalendarText>
		</AddToCalendarBtnWrapper>
	)
}

const AddToCalendarText = styled.div`
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	display: flex;
	align-items: center;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	color: #ffffff;
	white-space: nowrap;

	${mediaMin.phone_xl`
        font-size: 16px;
    `}
`

const AddToCalendarBtnWrapper = styled.a<{ $fullWidth: boolean }>`
	display: grid;
	grid-template-columns: 20px auto;
	gap: 7px;
	align-items: center;
	height: 39px;
	padding: 0 16px;
	background: #5294e5;
	border-radius: 2px;

	${({ $fullWidth }) =>
		$fullWidth &&
		css`
			max-width: 100%;
		`}
`

const AddToCalendarIOS = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	text-decoration: none;
`
const AddToCalendarGoogle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

// const AddToCalendarText = styled.div`
//     font-weight: 300;
//     font-size: 16px;
//     line-height: 19px;
//     display: flex;
//     align-items: center;
//     text-align: right;
//     color: #444444;
//     min-width: 105px;
// `

const AddToCalendarWrapper = styled.div`
	display: flex;
	z-index: 11;
	max-width: 145px;
	width: 100%;
	${media.md`
        max-width: 100%;
    `}
`
