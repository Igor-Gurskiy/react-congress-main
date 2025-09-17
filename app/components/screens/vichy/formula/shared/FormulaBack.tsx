import React from 'react'
import styled from 'styled-components'

import Link from 'next/link'
import Box from '@/components/Box'
import media from '@/utils/media'
import PulseButton from '@/components/Help/PulsingButton'

const GameAppbar = ({ link = '/', color = '#000' }) => {
	return (
		<Header>
			<Link legacyBehavior href={link}>
				<BackButton>
					<BackBox $flex $alignItems="center" $justifyContent="center">
						<PulseButton>
							<svg
								width="24"
								height="24"
								viewBox="0 0 18 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.2101 22.7897L2.4205 11.9999L13.2101 1.21027"
									stroke="#5C6164"
									strokeWidth="3"
								/>
							</svg>
						</PulseButton>
						<BackTitle $color={color}>НАЗАД</BackTitle>
					</BackBox>
				</BackButton>
			</Link>
		</Header>
	)
}

export default GameAppbar

const BackTitle = styled(Box)<{ $color?: string }>`
	font-family: Gilroy, sans-serif;
	font-weight: 400;
	font-size: 16px;
	line-height: 120%;
	letter-spacing: 0.07em;
	text-transform: uppercase;

	color: ${({ $color }) => $color};
	margin-left: 24px;
`

const BackBox = styled(Box)`
	${media.lg`
        width: 100%;
        ${BackTitle} {
            flex-grow: 1;
            margin-left: 12px;
        }  
    `}
`

const BackButton = styled.div`
	display: inline-block;
	padding: 10px;
	cursor: pointer;

	${media.lg`
     width: 100%;
     
     button {
        flex-shrink: 0;
        padding: 8px;
        
        svg {
            width: 16px;
            height: 16px;
        }
     }
  `}
`

const Header = styled.div`
	height: 60px;
	background: transparent;
	padding: 0 10px;
	display: flex;
	align-items: center;
	position: fixed;
	top: 20px;
	left: 0px;
	z-index: 1101;

	${media.lg`
     top: 8px;
  `}
`
