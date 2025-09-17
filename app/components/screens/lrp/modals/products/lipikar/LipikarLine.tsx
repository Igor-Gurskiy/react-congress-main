import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

const LipikarLine = () => {
	return (
		<ProductModal.LineContainer>
			<ProductModal.Typography $subtitle>УХОД</ProductModal.Typography>
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
								height={71}
								src="assets/images/lrp/modals/lipikar/baume75.png"
							/>
							<ProductModal.Volume>75 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={92}
								src="assets/images/lrp/modals/lipikar/baume200.png"
							/>
							<ProductModal.Volume>200 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={127}
								src="assets/images/lrp/modals/lipikar/baume400.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
					</Box>
					{/* <Box $fullWidth $flex $justifyContent="space-between" $mt={16}>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={125}
								src="assets/images/lrp/modals/lipikar/lait200.png"
							/>
							<ProductModal.Volume>200 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={160}
								src="assets/images/lrp/modals/lipikar/lait400.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
					</Box> */}
				</Box>
				<Subtitle>
					<b>LIPIKAR</b> BAUME <span>AP+M</span>
				</Subtitle>
				<Text>
					Липидовосполняющее средство, эффективно нормализующее микробиом и
					увеличивающее периоды ремиссии у пациентов с атопическим дерматитом
				</Text>
				<DescriptionList>
					<DescriptionItem>
						Восстанавливает гидролипидный барьер
					</DescriptionItem>
					<DescriptionItem>
						Предупреждает рецидивы и увеличивает периоды ремиссии
					</DescriptionItem>
					<DescriptionItem>
						Эффективно регулирует баланс микробиома кожи
					</DescriptionItem>
					<DescriptionItem>Оказывает противозудное действие</DescriptionItem>
					<DescriptionItem>Доказанная эффективность</DescriptionItem>
					<DescriptionItem>Уменьшает воспаление</DescriptionItem>
				</DescriptionList>

				{/* <ProductModal.Typography $subtitle $mt={16} $mb={16}>
					очищение
				</ProductModal.Typography> */}
				{/* <Box $flex $fullWidth $direction="column" $flexGrow={1}>
					<Box $fullWidth $flex $justifyContent="space-between">
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={106}
								src="assets/images/lrp/modals/lipikar/syndet200.png"
							/>
							<ProductModal.Volume>200 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={140}
								src="assets/images/lrp/modals/lipikar/syndet400.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={144}
								src="assets/images/lrp/modals/lipikar/syndetcreme.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
					</Box>
					<Box $fullWidth $flex $justifyContent="space-between" $mt={16}>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={117}
								src="assets/images/lrp/modals/lipikar/huile200.png"
							/>
							<ProductModal.Volume>200 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={138}
								src="assets/images/lrp/modals/lipikar/huile400.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={139}
								src="assets/images/lrp/modals/lipikar/huilecreme.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box> */}
			</ProductModal.Line>
		</ProductModal.LineContainer>
	)
}

export default LipikarLine

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
		font-weight: 600;
	}
`
const Text = styled.div`
	color: #1f1f1f;
	font-size: 12px;
	font-weight: 300;
	line-height: 16px;
	margin-bottom: 10px;
	align-self: flex-start;
`

const DescriptionList = styled.div`
	margin-left: 14px;
	${media.md`
	align-self: flex-start;
  `}
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
