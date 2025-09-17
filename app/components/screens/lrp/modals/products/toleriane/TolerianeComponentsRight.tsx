import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'
import Molecule from '@/components/ui/molecule/Molecule'

const TolerianeComponentsRight = ({ mt = 16, mb = 8 }) => {
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
									height={98}
									src="assets/images/lrp/modals/toleriane/serum.png"
								/>
								<ProductModal.Volume>20 мл</ProductModal.Volume>
								<Molecule
									id="lrp-molecule-9"
									position={{
										top: '10%',
										left: '60%',
									}}
									direction="left"
									translate={{ x: '-50%' }}
								/>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>TOLERIANE</b> ULTRA <b>DERMALLERGO</b>
					</Subtitle>
					<Text>
						Интенсивная успокаивающая сыворотка, активирующая защитную функцию
						кожи
					</Text>
					<DescriptionList>
						<DescriptionItem>Интенсивно успокаивает кожу</DescriptionItem>
						<DescriptionItem>
							Предотвращает пенетрацию в кожу аллергенов и ирритантов
						</DescriptionItem>
						<DescriptionItem>
							Восстанавливает эпидермальный барьер
						</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>

			<ProductModal.List>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={64}
							width={74}
							src="assets/images/lrp/modals/antiage/minidescr-icon.png"
							alt=""
						/>
						<div>
							<SubtitleAqua>Нейросенсин</SubtitleAqua>
							<Text>
								Успокаивает кожу, снижая ее чувствительность и реактивность
							</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
			</ProductModal.List>

			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				ОЧИЩЕНИЕ
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
								style={{ margin: '0 5px' }}
							>
								<img
									height={120}
									src="assets/images/lrp/modals/toleriane/gel-mousse.png"
								/>
								<ProductModal.Volume>400 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>TOLERIANE </b> гель-пенка
					</Subtitle>
					<Text>
						Очищающая гель-пенка для&nbsp;лица двойного действия
						для&nbsp;чувствительной и&nbsp;сверхчувствительной кожи
					</Text>
					<DescriptionList>
						<DescriptionItem>
							Эффективно очищает от&nbsp;загрязнений и&nbsp;макияжа, включая
							макияж для&nbsp;глаз
						</DescriptionItem>
						<DescriptionItem>Заметно увлажняет</DescriptionItem>
						<DescriptionItem>Поддерживает кожный барьер</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
		</>
	)
}

export default TolerianeComponentsRight

const ProductModalMiniDescr = styled.div`
	background: #f6f6f6;
	border-radius: 4px;
	padding: 10px 10px 14px 5px;
	position: relative;
	margin: 4px 0;
`
const ProductModalContent = styled.div`
	display: flex;

	img {
		margin-right: 6px;
	}
`

const SubtitleAqua = styled.div`
	color: #2c435f;
	font-size: 13px;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 0.39px;
	text-transform: uppercase;
	margin-top: 3px;
`

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
