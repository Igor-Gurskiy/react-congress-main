import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'
import Molecule from '@/components/ui/molecule/Molecule'
import { useUIStore } from '@/stores/uiStore'

const AntheliosComponentsRight = ({ mt = 8, mb = 16 }) => {
	const spec = useUIStore((state) => state.specialization)

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
								height={115}
								src="assets/images/lrp/modals/anthelios/anthelios-age.png"
							/>
							<ProductModal.Volume>50 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<Subtitle>
					<b>ANTHELIOS СОЛНЦЕЗАЩИТНЫЙ АНТИВОЗРАСТНОЙ КРЕМ ДЛЯ ЛИЦА </b>
					SPF 50/PPD 19
				</Subtitle>
				<Text>Солнцезащитное средство для лица</Text>
				<DescriptionList>
					<DescriptionItem>
						Эффективно защищает от UVB-, UVA-лучей и поллютантов
					</DescriptionItem>
					<DescriptionItem>
						Уменьшает признаки фотостарения: морщины и гиперпигментацию
					</DescriptionItem>
					<DescriptionItem>Обладает антиоксидантным действием</DescriptionItem>
					<DescriptionItem>
						Подходит для ежедневного использования
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
								height={140}
								src="assets/images/lrp/modals/anthelios/anthelios-hydratant.png"
							/>
							<ProductModal.Volume>250 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<Subtitle>
					<b>ANTHELIOS СОЛНЦЕЗАЩИТНОЕ УВЛАЖНЯЮЩЕЕ МОЛОЧКО</b> SPF 50/ PPD 30
				</Subtitle>
				<Text>
					Солнцезащитное средство для лица и тела. Подходит даже
					для&nbsp;чувствительной кожи и кожи, склонной к аллергии на солнце
				</Text>
				<DescriptionList>
					<DescriptionItem>
						Увлажняющая текстура, нежирная, нелипкая, устойчивая к воде и поту
					</DescriptionItem>
					<DescriptionItem>Не оставляет белых следов</DescriptionItem>
					<DescriptionItem>Без отдушек</DescriptionItem>
					<DescriptionItem>
						Протестировано под контролем дерматологов и офтальмологов
					</DescriptionItem>
				</DescriptionList>
				{spec === 'allerg' && (
					<Molecule
						id="lrp-molecule-10"
						position={{
							top: '7%',
							right: '20%',
						}}
						direction="right"
					/>
				)}
			</ProductModal.Line>
		</ProductModal.List>
	)
}

export default AntheliosComponentsRight

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
		color: #f7943a;
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
		background-color: #f7943a;
		border-radius: 50%;
	}
`
