import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import useResponsive from '@/hooks/useResponsive'
import Box from '@/components/Box'

const LipikarOncoCareComponents = ({ mt = 8, mb = 8 }) => {
	const { isMobile } = useResponsive()

	const position = {
		bottom: '-3%',
		left: '2%',
	}

	const mPos = {
		top: '13%',
		left: '2%',
	}

	const pos = isMobile ? mPos : position

	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				Действия
			</ProductModal.Typography>
			<DescriptionList>
				<DescriptionItem>
					Подходят для сухой и раздраженной кожи
				</DescriptionItem>
				<DescriptionItem>Моментально смягчают и увлажняют</DescriptionItem>
				<DescriptionItem>Восстанавливают гидролипидный барьер</DescriptionItem>
			</DescriptionList>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				Уход
			</ProductModal.Typography>
			<ProductModal.Line>
				<Box $flex $direction="row" $flexGrow={1}>
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
								src="assets/images/lrp/modals/lipikar-onco/baume75.png"
							/>
							<ProductModal.Volume>75 мл</ProductModal.Volume>
						</Box>
					</Box>
					<Box $fullWidth $flex $justifyContent="space-between">
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={92}
								src="assets/images/lrp/modals/lipikar-onco/baume200.png"
							/>
							<ProductModal.Volume>200 мл</ProductModal.Volume>
						</Box>
					</Box>
					<Box $fullWidth $flex $justifyContent="space-between">
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={127}
								src="assets/images/lrp/modals/lipikar-onco/baume400.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<Subtitle>
					<b>LIPIKAR</b> BAUME <span>AP+M</span>
				</Subtitle>
				<Text>
					Липидовосполняющее средство, эффективно нормализующее микробиом и
					увеличивающее периоды ремиссии у пациентов с атопическим дерматитом
				</Text>
			</ProductModal.Line>
		</>
	)
}

export default LipikarOncoCareComponents

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
