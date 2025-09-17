import styled from 'styled-components'

const AddToCalendarPlusIcon = () => {
	return (
		<AddCalendarIconWrapper>
			<svg
				width="23"
				height="23"
				viewBox="0 0 21 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14.0938 9.375H11.125V6.40625C11.125 6.32031 11.0547 6.25 10.9688 6.25H10.0312C9.94531 6.25 9.875 6.32031 9.875 6.40625V9.375H6.90625C6.82031 9.375 6.75 9.44531 6.75 9.53125V10.4688C6.75 10.5547 6.82031 10.625 6.90625 10.625H9.875V13.5938C9.875 13.6797 9.94531 13.75 10.0312 13.75H10.9688C11.0547 13.75 11.125 13.6797 11.125 13.5938V10.625H14.0938C14.1797 10.625 14.25 10.5547 14.25 10.4688V9.53125C14.25 9.44531 14.1797 9.375 14.0938 9.375Z"
					fill="white"
				/>
				<path
					d="M10.5 1.25C5.66797 1.25 1.75 5.16797 1.75 10C1.75 14.832 5.66797 18.75 10.5 18.75C15.332 18.75 19.25 14.832 19.25 10C19.25 5.16797 15.332 1.25 10.5 1.25ZM10.5 17.2656C6.48828 17.2656 3.23438 14.0117 3.23438 10C3.23438 5.98828 6.48828 2.73438 10.5 2.73438C14.5117 2.73438 17.7656 5.98828 17.7656 10C17.7656 14.0117 14.5117 17.2656 10.5 17.2656Z"
					fill="white"
				/>
			</svg>
		</AddCalendarIconWrapper>
	)
}

export default AddToCalendarPlusIcon

const AddCalendarIconWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-contenet: center;
	align-items: center;
	margin-right: 8px !important;
`
