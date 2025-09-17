import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import Box from '@/components/Box'

const KidsComponents = ({ mt = 8, mb = 8 }) => {
	return (
		<>
			<ProductModal.List>
				<ProductModal.Line>
					<Box $flex $direction="row" $flexGrow={1}>
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
									height={96}
									src="assets/images/lrp/modals/kids/anthelios-babylotion.png"
								/>
								<ProductModal.Volume>50 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>ANTHELIOS DERMO-PEDIATRICS BABY</b>
					</Subtitle>
					<Text>Молочко для младенцев с 6 месяцев</Text>
					<DescriptionList>
						<DescriptionItem>Доказанная безопасность</DescriptionItem>
						<DescriptionItem>
							Специальная текстура для равномерного нанесения на кожу малыша
						</DescriptionItem>
						<DescriptionItem>
							Содержит масло карите для увлажнения
						</DescriptionItem>
						<DescriptionItem>
							Протестировано под дерматологическим и педиатрическим контролем
							на чувствительной коже и коже, склонной к АД
						</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
		</>
	)
}

export default KidsComponents

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
		background-color: #f4852c;
		border-radius: 50%;
	}
`
