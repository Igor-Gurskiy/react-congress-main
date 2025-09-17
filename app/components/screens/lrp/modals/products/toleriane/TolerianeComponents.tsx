import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'

const TolerianeComponents = ({ mt = 8, mb = 16 }) => {
	return (
		<>
			<ProductModal.List>
				<ProductModal.Typography $subtitle $mt={16} $mb={8}>
					основной уход
				</ProductModal.Typography>
				<ProductModal.Line>
					<Box $flex $direction="column" $flexGrow={1}>
						<Box $fullWidth $flex $justifyContent="space-between">
							<Box
								$flex
								$flexGrow={1}
								$direction="column"
								$alignItems="center"
								$justifyContent="flex-end"
								style={{ margin: '0 5px' }}
							>
								<img
									height={119}
									src="assets/images/lrp/modals/toleriane/creme.png"
								/>
								<ProductModal.Volume>40 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>TOLERIANE DERMALLERGO</b>
					</Subtitle>
					<Text>
						Интенсивный успокаивающий уход для сверхчувствительной и склонной к
						аллергии кожи
					</Text>
					<DescriptionList>
						<DescriptionItem>Нормализует функцию микробиома</DescriptionItem>
						<DescriptionItem>
							Успокаивает кожу за счет регуляции воспалительной реакции
						</DescriptionItem>
						<DescriptionItem>
							Восстанавливает эпидермальный барьер
						</DescriptionItem>
						<DescriptionItem>
							Предотвращает появления кожных симптомов
						</DescriptionItem>
						<DescriptionItem>
							Уменьшает клинические проявления аллергодерматозов
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
								style={{ margin: '0 5px' }}
							>
								<img
									height={119}
									src="assets/images/lrp/modals/toleriane/dermallergo-nuit.png"
								/>
								<ProductModal.Volume>40 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>TOLERIANE DERMALLERGO Nuit</b>
					</Subtitle>
					<Text>
						Ночной интенсивный успокаивающий уход для сверхчувствительной и
						склонной к аллергии кожи
					</Text>
					<DescriptionList>
						<DescriptionItem>
							Успокаивает кожу во время сна, восстанавливает и защищает кожу
						</DescriptionItem>
						<DescriptionItem>
							[Сфингобиома] помогает поддержать барьерную функцию микробиома
							кожи
						</DescriptionItem>
						<DescriptionItem>
							Гипоаллергенно, 0% отдушек, этилового спирта, красителей,
							парабенов
						</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
		</>
	)
}

export default TolerianeComponents

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

	span {
		color: #36b0fc;
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
