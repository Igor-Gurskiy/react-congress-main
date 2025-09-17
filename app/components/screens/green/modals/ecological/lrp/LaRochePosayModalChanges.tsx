import React, { useEffect } from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import LRPPointsChanges from '@/components/screens/green/modals/ecological/lrp/LRPPointsChanges'
import ScrollbarsBody from '@/components/ScollbarsBody'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'

const LaRochePosayModalChanges = () => {
	useEffect(() => {
		API.tracker.sendEvent(EventsEnum.greenLRPChangesVisit)
	}, [])

	return (
		<Wrapper>
			<ScrollbarsBody factor={-60}>
				<Content>
					<Header>
						<Title>
							<b>
								НЕСУ <br />
								ПЕРЕМЕНЫ
							</b>
						</Title>
						<Subtitle>
							<p>
								Проект по переработке <br />
								упаковки от косметики
							</p>
						</Subtitle>
					</Header>

					<Body>
						<LRPPointsChanges />
					</Body>
				</Content>
			</ScrollbarsBody>
		</Wrapper>
	)
}

export default LaRochePosayModalChanges

const Content = styled.div`
	background-position: bottom center;
	background-repeat: no-repeat;

	display: flex;
	flex-shrink: 0;
	width: 100%;
	flex-direction: column;
`

const Wrapper = styled.div`
	width: 100%;
	background-color: #fff;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	transition: all 0.3s ease-out;
`

const Header = styled.div`
	width: 100%;
	padding: 0 16px 16px 16px;
	min-height: 279px;
	display: flex;
	flex-direction: column;
	align-items: center;

	background-image: url('/assets/images/green/modals/ecological/changes-popup/bg1.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	${media.sm`
		min-height: 279px;

	background-image: url('/assets/images/green/modals/ecological/changes-popup/bg1-mobile.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
  `}
`

const Body = styled.div`
	width: 100%;
`

const Title = styled.div`
	color: #fff;
	text-align: center;
	text-shadow: 0px 1.2979165315628052px 1.2979165315628052px
		rgba(12, 23, 14, 0.4);
	font-family: Gilroy;
	font-size: 44px;
	font-style: normal;
	font-weight: 800;
	line-height: 93%;
	letter-spacing: 3.52px;
	margin-top: 77px;
	margin-bottom: 9px;

	${media.sm`
    font-size: 40px;
  `}
`

const Subtitle = styled.div`
	color: #fff;
	text-align: center;
	text-shadow: 0px 1.2979165315628052px 1.2979165315628052px
		rgba(12, 23, 14, 0.4);
	font-family: Gilroy;
	font-size: 18px;
	font-style: normal;
	font-weight: 600;
	line-height: 105%;
	letter-spacing: 1.44px;
	text-transform: uppercase;

	${media.sm`
    font-size: 16px;
  `}
`
