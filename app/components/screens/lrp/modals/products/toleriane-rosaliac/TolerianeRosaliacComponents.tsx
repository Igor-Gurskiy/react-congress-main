import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import useResponsive from '@/hooks/useResponsive'
import Box from '@/components/Box'

const TolerianeRosaliacComponents = ({ mt = 8, mb = 16 }) => {
	const { isMobile } = useResponsive()

	const direction = isMobile ? 'right' : 'left'
	return (
		<>
			<ProductModal.List>
				<ProductModal.Line>
					<Box $flex $direction="column" $flexGrow={1}>
						<Box $fullWidth $flex $justifyContent="space-between">
							<Box
								$flex
								$flexGrow={1}
								$direction="column"
								$alignItems="center"
								$justifyContent="flex-end"
							>
								<img
									height={140}
									src="assets/images/lrp/modals/toleriane-rosaliac/rosaliac-gel.png"
								/>
								<ProductModal.Volume>195 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>TOLERIANE</b> <span>ROSALIAC</span> GEL
					</Subtitle>
					<Text>Очищающий мицеллярный гель для лица и век</Text>
					<DescriptionList>
						<DescriptionItem>
							Эффективно снимает макияж и бережно очищает чувствительную кожу
						</DescriptionItem>
						<DescriptionItem>
							Заметно успокаивает чувствительную кожу, склонную к покраснениям
						</DescriptionItem>
						<DescriptionItem>
							Обеспечивает мгновенное увлажнение
						</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
			<ProductModal.List>
				<ProductModal.Line>
					<Box $flex $direction="column" $flexGrow={1}>
						<Box $fullWidth $flex $justifyContent="space-between">
							<Box
								$flex
								$flexGrow={1}
								$direction="column"
								$alignItems="center"
								$justifyContent="flex-end"
							>
								<img
									height={120}
									src="assets/images/lrp/modals/toleriane-rosaliac/rosaliac-ar.png"
								/>
								<ProductModal.Volume>40 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>TOLERIANE</b> <span>ROSALIAC AR</span>
					</Subtitle>
					<Text>Интенсивный корректирующий уход</Text>
					<DescriptionList>
						<DescriptionItem>Регулирует функцию микробиома</DescriptionItem>
						<DescriptionItem>
							Уменьшает выраженность эритемы и телеангиэктазий
						</DescriptionItem>
						<DescriptionItem>Смягчает</DescriptionItem>
						<DescriptionItem>Увлажняет</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
		</>
	)
}

export default TolerianeRosaliacComponents

const Subtitle = styled.div`
	align-self: flex-start;
	color: #122c4f;
	font-family: Gilroy;
	font-size: 13px;
	font-weight: 300;
	line-height: 120%;
	letter-spacing: 0.39px;
	text-transform: uppercase;
	margin-top: 20px;
	margin-bottom: 10px;

	b {
		font-weight: 600;
	}

	span {
		font-weight: 300;
		color: #d32a5c;
	}
`

const Text = styled.div`
	color: #1f1f1f;
	font-size: 12px;
	font-weight: 300;
	line-height: 16px;
	align-self: flex-start;
`

const DescriptionList = styled.div`
	margin-top: 10px;
	margin-left: 14px;
	align-self: flex-start;
`
const DescriptionItem = styled.div`
	position: relative;
	margin-bottom: 4px;
	color: #262626;
	font-size: 12px;
	font-weight: 300;
	line-height: 17px;

	&::before {
		content: '';
		position: absolute;
		width: 5px;
		height: 5px;
		top: 6px;
		left: -12px;
		background-color: #36b0fc;
		border-radius: 50%;
	}
`
