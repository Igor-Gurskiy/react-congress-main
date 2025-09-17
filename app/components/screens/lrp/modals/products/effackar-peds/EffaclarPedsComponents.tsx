import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'

const EffaclarPedsComponents = ({ mt = 8, mb = 8 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mt={16} $mb={8}>
				Основной уход
			</ProductModal.Typography>
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
									height={90}
									src="assets/images/lrp/modals/effaclar-peds/duo-unifiant.png"
								/>
								<ProductModal.Volume>40 мл</ProductModal.Volume>
							</Box>
						</Box>
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
									height={90}
									src="assets/images/lrp/modals/effaclar-peds/duo.png"
								/>
								<ProductModal.Volume>40 мл</ProductModal.Volume>
							</Box>
						</Box>
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
									height={90}
									src="assets/images/lrp/modals/effaclar-peds/duo-spf.png"
								/>
								<ProductModal.Volume>40 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>EFFACLAR</b> DUO(<span>+</span>)
					</Subtitle>
					<Text>Корректирующий крем-гель для проблемной кожи</Text>
					<DescriptionList>
						<DescriptionItem>
							Действует на все звенья патогенеза акне
						</DescriptionItem>
						<DescriptionItem>
							Предотвращает появление поствоспалительной гиперпигментации
						</DescriptionItem>
						<DescriptionItem>Нормализует микробиом кожи</DescriptionItem>
						<DescriptionItem>Предупреждает обострения</DescriptionItem>
					</DescriptionList>
					<Subtitle>
						<b>effaclar</b> duo(<span>+</span>) spf 30
					</Subtitle>
					<Text>
						Корректирующий крем-гель с защитой от UVA-/UVB-лучей SPF30/PPD10
					</Text>
					<Subtitle>
						<b>effaclar</b> duo(<span>+</span>) тонирующий
					</Subtitle>
					<Text>
						Корректирующий тонирующий крем-гель. Выравнивает тон кожи, не
						закупоривая поры и не создавая эффекта маски
					</Text>
				</ProductModal.Line>
			</ProductModal.List>
		</>
	)
}

export default EffaclarPedsComponents

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
