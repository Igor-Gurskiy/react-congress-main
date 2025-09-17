import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'

const AntiageComponents = ({ mt = 8, mb = 16 }) => {
	return (
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
								height={90}
								src="assets/images/lrp/modals/antiage/antiage-hyalu.png"
							/>
							<ProductModal.Volume>30 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<Subtitle>
					<b>HYALU B5 </b> СЫВОРОТКА
				</Subtitle>
				<Text>
					Сыворотка с гиалуроновой кислотой для сухой и обезвоженной кожи
				</Text>
				<DescriptionList>
					<DescriptionItem>Интенсивно увлажняет кожу</DescriptionItem>
					<DescriptionItem>
						Повышает эффективность эстетических процедур
					</DescriptionItem>
					<DescriptionItem>Уменьшает выраженность морщин</DescriptionItem>
					<DescriptionItem>
						Повышает упругость, тонус
						<br />и эластичность кожи
					</DescriptionItem>
				</DescriptionList>
			</ProductModal.Line>
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
								height={90}
								src="assets/images/lrp/modals/antiage/antiage-niacinamid.png"
							/>
							<ProductModal.Volume>30 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<Subtitle>
					<b>NIACINAMIDE 10</b> СЫВОРОТКА
				</Subtitle>
				<Text>Концентрированная сыворотка против всех видов пигментации</Text>
				<DescriptionList>
					<DescriptionItemNiacinamid>
						Уменьшает выраженность пигментных пятен и выравнивает тон кожи
					</DescriptionItemNiacinamid>
					<DescriptionItemNiacinamid>
						Высокая эффективность и оптимальная переносимость
					</DescriptionItemNiacinamid>
					<DescriptionItemNiacinamid>
						Протестировано на всех типах кожи
					</DescriptionItemNiacinamid>
					<DescriptionItemNiacinamid>
						Подходит даже для чувствительной кожи
					</DescriptionItemNiacinamid>
				</DescriptionList>
			</ProductModal.Line>
		</ProductModal.List>
	)
}

export default AntiageComponents

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
const DescriptionItemNiacinamid = styled.div`
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
		background-color: #861b86;
		border-radius: 50%;
	}
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
