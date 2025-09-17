import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

const VichyPoints = () => {
	return (
		<PointsWrapper>
			<PointItem>
				<Wrapper>
					<ImageWrapper>
						<img
							src="/assets/images/green/modals/ecological/waterdrop.png"
							alt="waterdrop"
						/>
					</ImageWrapper>
					<div>
						<Text>
							Завод Vichy – образец ответственного современного производства.
							Завод сократил до нуля выбросы углекислого газа в процессе своей
							производственной деятельности.
						</Text>
					</div>
				</Wrapper>
			</PointItem>
			<PointItem>
				<Wrapper>
					<ImageWrapper>
						<img
							src="/assets/images/green/modals/ecological/waterdrop.png"
							alt="waterdrop"
						/>
					</ImageWrapper>
					<div>
						<Text>
							Сегодня 47% пластиковой упаковки Vichy пригодны для повторного
							использования или переработки, а к 2025 году 100% упаковки станет
							перерабатываемой или биоразлагаемой.
						</Text>
					</div>
				</Wrapper>
			</PointItem>
			<PointItem>
				<Wrapper>
					<ImageWrapper>
						<img
							src="/assets/images/green/modals/ecological/waterdrop.png"
							alt="waterdrop"
						/>
					</ImageWrapper>
					<div>
						<Text>
							Большое внимание бренд уделяет водным ресурсам и особенно —
							источнику вулканической воды Vichy. Бренд ограничивает ее добычу,
							извлекая в среднем менее 4% суточного объема, тем самым сохраняя
							ее запас, а также гарантирует ее чистоту с момента добычи до
							использования потребителями.
						</Text>
					</div>
				</Wrapper>
			</PointItem>
		</PointsWrapper>
	)
}

export default VichyPoints

const ImageWrapper = styled.div``

const Text = styled.div`
	font-weight: 300;
	font-size: 20px;
	line-height: 120%;
	color: #000000;

	${media.sm`
     font-size: 16px;
  `}
`

const Wrapper = styled.div`
	display: flex;

	img {
		margin-right: 16px;
		flex-shrink: 0;
	}
`

const PointItem = styled.div`
	display: flex;
	flex-direction: column;

	padding: 0 16px;

	&:not(:last-child) {
		margin-bottom: 18px;
	}

	${media.sm`
      &:not(:last-child) {
        margin-bottom: 32px;
      }
  `}
`

const PointsWrapper = styled.div`
	position: relative;
	margin: 40px auto 380px auto;
	max-width: 600px;
	width: 100%;
	${media.tablet`
	margin: 40px auto 210px auto;
  `}
`

const Title = styled.div`
	font-weight: 300;
	font-size: 16px;
	line-height: 120%;
	text-transform: uppercase;
	color: #000000;
	margin-bottom: 8px;
`
