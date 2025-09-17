import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import useResponsive from '@/hooks/useResponsive'
import Box from '@/components/Box'

const DermallergoComponents = ({ mt = 8, mb = 8 }) => {
	const { isMobile } = useResponsive()

	const position = {
		bottom: '25%',
		right: '5%',
	}

	const direction = 'left'

	return (
		<>
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
								height={119}
								src="assets/images/lrp/modals/dermallergo/cream.png"
							/>
							<ProductModal.Volume>40 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<Subtitle>
					<b>TOLERIANE DERMALLERGO</b>
				</Subtitle>
				<DescriptionList>
					<DescriptionItem>
						Эффективно устраняет покраснение и зуд
					</DescriptionItem>
					<DescriptionItem>
						Успокаивает и уменьшает раздражение кожи
					</DescriptionItem>
					<DescriptionItem>
						Восстанавливает гидролипидный барьер кожи
					</DescriptionItem>
					<DescriptionItem>Нормализует функцию микробиома</DescriptionItem>
				</DescriptionList>
			</ProductModal.Line>
		</>
	)
}

export default DermallergoComponents

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

const DescriptionList = styled.div`
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
