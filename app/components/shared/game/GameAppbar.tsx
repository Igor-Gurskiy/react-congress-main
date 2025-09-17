import React from 'react'
import styled from 'styled-components'

import Link from 'next/link'
import Box from '@/components/Box'
import media from '@/utils/media'

const GameAppbar = ({ showText = false, link = '/' }) => {
	return (
		<Header>
			<Link legacyBehavior href={link}>
				<BackButton>
					<BackBox $flex $alignItems="center" $justifyContent="center">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.2101 22.7897L2.4205 11.9999L13.2101 1.21027"
								stroke="#5C6164"
								strokeWidth="3"
							/>
						</svg>
						{showText && <BackTitle>ВЫЙТИ ИЗ ИГРЫ</BackTitle>}
					</BackBox>
				</BackButton>
			</Link>
		</Header>
	)
}

export default GameAppbar

const BackTitle = styled(Box)`
	font-family: Gilroy, sans-serif;
	font-weight: 300;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #262626;
`

const BackBox = styled(Box)`
	${media.md`
        width: 100%;
        ${BackTitle} {
            flex-grow: 1;
            margin-left: -24px;
        }  
    `}
`

const BackButton = styled.div`
	display: inline-block;
	padding: 10px;
	cursor: pointer;
	${media.md`
        width: 100%;
    `}
`

const Header = styled.div`
	height: 60px;
	width: 100%;
	background: #ffffff;
	border-radius: 0px 0px 10px 10px;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
	padding: 0 10px;
	display: flex;
	align-items: center;
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 1101;
`
