import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

interface MessageContainerProps {
	bgSrc: string
	padding?: string
	top?: string
	left?: string
	right?: string
	width?: string
	height?: string
}

const LineGameMessage = ({
	messageContent,
	bgSrc,
	padding,
	top,
	left,
	right,
}) => {
	return (
		<>
			<MessageContainer
				dangerouslySetInnerHTML={{ __html: messageContent }}
				bgSrc={bgSrc}
				padding={padding}
				top={top}
				left={left}
				right={right}
			></MessageContainer>
		</>
	)
}

export default LineGameMessage

const MessageContainer = styled.div<MessageContainerProps>`
	background-image: url(${(props) => props.bgSrc});
	background-size: contain;
	background-repeat: no-repeat;
	width: 302px;

	/* height: 130px; */
	z-index: 5;
	padding: ${(props) => props.padding || '0'};
	color: #fff;
	text-align: center;
	font-size: 20px;
	line-height: 22px;
	font-weight: 600;
	letter-spacing: 0.08px;
	text-transform: uppercase;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: ${(props) => props.top || '0'};
	left: ${(props) => props.left || 'auto'};
	right: ${(props) => props.right || 'auto'};

	${media.md`	
		font-size: 16px;
		line-height: 18px;
		width: 270px;
		`}
	${media.sm`	
	padding-top: 14px;
		font-size: 13px;
		line-height: 16px;
		width: 220px;
		`}
`
