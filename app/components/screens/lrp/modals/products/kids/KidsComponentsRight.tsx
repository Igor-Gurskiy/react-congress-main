import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'
import Molecule from '@/components/ui/molecule/Molecule'

const KidsComponentsRight = ({ mt = 8, mb = 8 }) => {
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
									height={130}
									src="assets/images/lrp/modals/kids/anthelios-wetskin.png"
								/>
								<ProductModal.Volume>250 мл</ProductModal.Volume>
							</Box>
						</Box>
						<Molecule
							id="lrp-molecule-10"
							position={{ top: '10%', right: '15%' }}
							direction="left"
						/>
					</Box>
					<Subtitle>
						<b>ANTHELIOS DERMO-PEDIATRICS</b>
					</Subtitle>
					<Text>
						Гель с технологией нанесения на влажную кожу для детей от 3-х лет
					</Text>
					<DescriptionList>
						<DescriptionItem>Доказанная эффективность</DescriptionItem>
						<DescriptionItem>
							Очень высокая защита от UVA- и UVB-лучей
						</DescriptionItem>
						<DescriptionItem>Супер водостойкая формула</DescriptionItem>
						<DescriptionItem>
							Технология ветскин: можно наносить на&nbsp;влажную кожу
						</DescriptionItem>
						<DescriptionItem>
							Силикон и сополимеры для создания водоотталкивающего барьера
						</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
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
									height={140}
									src="assets/images/lrp/modals/kids/anthelios-spray.png"
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
								style={{ margin: '0 5px' }}
							>
								<img
									height={130}
									src="assets/images/lrp/modals/kids/anthelios-lotion.png"
								/>
								<ProductModal.Volume>250 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>ANTHELIOS DERMO-PEDIATRICS</b>
					</Subtitle>
					<Text>Молочко и спрей для детей с 3-х лет</Text>
					<DescriptionList>
						<DescriptionItem>
							Очень высокая защита от UVA- и UVB-лучей
						</DescriptionItem>
						<DescriptionItem>Гарантированная эффективность</DescriptionItem>
						<DescriptionItem>
							Максимально водостойкая формула: выдерживает 4 купания по 20 минут
						</DescriptionItem>
						<DescriptionItem>
							Не вызывает жжения при попадании в&nbsp;глаза
						</DescriptionItem>
						<DescriptionItem>
							Без наночастиц, октокрилена, отдушек, парабенов
						</DescriptionItem>
						<DescriptionItem>
							Протестировано под контролем педиатров и дерматологов, при участии
							детей с чувствительной, реактивной и склонной к атопии кожей
						</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
		</>
	)
}

export default KidsComponentsRight

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
