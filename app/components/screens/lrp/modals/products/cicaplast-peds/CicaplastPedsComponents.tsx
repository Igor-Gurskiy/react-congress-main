import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import Box from '@/components/Box'

const CicaplastPedsComponents = ({ mt = 8, mb = 8 }) => {
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
								style={{ margin: '0 5px' }}
							>
								<img
									height={130}
									src="assets/images/lrp/modals/cicaplast-peds/cicaplast-spray.png"
								/>
								<ProductModal.Volume>100 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>CICAPLAST</b> <span>B5</span> СПРЕЙ
					</Subtitle>
					<Text>
						Мультивосстанавливающий спрей для младенцев, детей и взрослых
					</Text>
					<DescriptionList>
						<DescriptionItem>Моментально успокаивает</DescriptionItem>
						<DescriptionItem>
							Смягчает, увлажняет и уменьшает дискомфорт кожи
						</DescriptionItem>
						<DescriptionItem>Поддерживает баланс микробиома</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
		</>
	)
}

export default CicaplastPedsComponents

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
