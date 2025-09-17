import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import Box from '@/components/Box'

const AntheliosComponents = ({ mt = 16, mb = 8 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				теперь в продаже весь год
			</ProductModal.Typography>
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
									height={96}
									src="assets/images/lrp/modals/anthelios/anthelios.png"
								/>
								<ProductModal.Volume>50 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>ANTHELIOS СОЛНЦЕЗАЩИТНЫЙ НЕВИДИМЫЙ ФЛЮИД</b> SPF 50+/ PPD 46
					</Subtitle>
					<Text>Солнцезащитное средство для лица и кожи вокруг глаз</Text>
					<DescriptionList>
						<DescriptionItem>Высокая степень защиты​</DescriptionItem>
						<DescriptionItem>Суперстойкость</DescriptionItem>
						<DescriptionItem>Невидимая текстура​</DescriptionItem>
						<DescriptionItem>Без жирных следов​</DescriptionItem>
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
									height={110}
									src="assets/images/lrp/modals/anthelios/anthelios-oil.png"
								/>
								<ProductModal.Volume>50 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>ANTHELIOS OIL CORRECT</b> SPF 50+
					</Subtitle>
					<Text>
						Солнцезащитный крем для жирной, проблемной, склонной к акне кожи
						лица SPF 50+/PPD 27
					</Text>
					<DescriptionList>
						<DescriptionItem>Защита от UV-лучей и поллютантов</DescriptionItem>
						<DescriptionItem>Корректирует выраженность акне</DescriptionItem>
						<DescriptionItem>Сокращает выработку себума</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
		</>
	)
}

export default AntheliosComponents

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
