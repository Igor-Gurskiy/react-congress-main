import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'
import Molecule from '@/components/ui/molecule/Molecule'

const TolerianeRosaliacComponentsRight = ({ mt = 8, mb = 16 }) => {
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
								height={121}
								src="assets/images/lrp/modals/toleriane-rosaliac/rosaliac-ar-spf.png"
							/>
							<ProductModal.Volume>50 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<Subtitle>
					<b>TOLERIANE</b> <span>ROSALIAC AR</span> SPF 30
				</Subtitle>
				<Text>Увлажняющий уход с SPF 30</Text>
				<DescriptionList>
					<DescriptionItem>Защищает от UV-воздействия</DescriptionItem>
					<DescriptionItem>Смягчает</DescriptionItem>
					<DescriptionItem>Увлажняет</DescriptionItem>
				</DescriptionList>
			</ProductModal.Line>
			<ProductModalMiniDescr>
				<ProductModalContent>
					<img
						height={64}
						width={74}
						src="assets/images/lrp/modals/toleriane-rosaliac/minidescr-icon1.png"
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
			<ProductModalMiniDescr>
				<ProductModalContent>
					<img
						height={64}
						width={74}
						src="assets/images/lrp/modals/toleriane-rosaliac/minidescr-icon2.png"
						alt=""
					/>
					<div>
						<SubtitleAqua>Sphingobioma</SubtitleAqua>
						<Text>
							Нормализует функцию микробиома и укрепляет эпидермальный барьер
						</Text>
					</div>
				</ProductModalContent>
			</ProductModalMiniDescr>
			<ProductModalMiniDescr>
				<ProductModalContent>
					<img
						height={64}
						width={74}
						src="assets/images/lrp/modals/toleriane-rosaliac/minidescr-icon3.png"
						alt=""
					/>
					<div>
						<SubtitleAqua>Sweetone</SubtitleAqua>
						<Text>Уменьшает воспаление</Text>
					</div>
				</ProductModalContent>
			</ProductModalMiniDescr>
			<ProductModalMiniDescr>
				<ProductModalContent>
					<img
						height={64}
						width={74}
						src="assets/images/lrp/modals/toleriane-rosaliac/minidescr-icon4.png"
						alt=""
					/>
					<div>
						<SubtitleAqua>Масло Карите 10%</SubtitleAqua>
						<Text>
							Обеспечивает восполнение липидов, способствуя уменьшению сухости и
							ощущения стянутости кожи
						</Text>
					</div>
				</ProductModalContent>
			</ProductModalMiniDescr>
			<ProductModalMiniDescr>
				<ProductModalContent>
					<img
						height={64}
						width={74}
						src="assets/images/lrp/modals/toleriane-rosaliac/minidescr-icon5.png"
						alt=""
					/>
					<div>
						<SubtitleAqua>глицерин</SubtitleAqua>
						<Text>Увлажняет </Text>
					</div>
					<Molecule
						id="lrp-molecule-8"
						position={{
							top: '20%',
							right: '0%',
						}}
						direction="left"
						translate={{ x: '-50%' }}
					/>
				</ProductModalContent>
			</ProductModalMiniDescr>
			<ProductModalMiniDescr>
				<ProductModalContent>
					<img
						height={64}
						width={74}
						src="assets/images/lrp/modals/toleriane-rosaliac/minidescr-icon6.png"
						alt=""
					/>
					<div>
						<SubtitleAqua>
							Термальная вода
							<br /> LA ROCHE-POSAY
						</SubtitleAqua>
						<Text>Восстанавливает кожный барьер </Text>
					</div>
				</ProductModalContent>
			</ProductModalMiniDescr>
		</ProductModal.List>
	)
}

export default TolerianeRosaliacComponentsRight

const ProductModalMiniDescr = styled.div`
	background: #f6f6f6;
	border-radius: 4px;
	padding: 10px 10px 14px 5px;
	position: relative;
	margin: 4px 0;
`
const ProductModalContent = styled.div`
	display: flex;
	align-items: center;

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
const Text = styled.div`
	color: #1f1f1f;
	font-size: 12px;
	font-weight: 300;
	line-height: 16px;
	align-self: flex-start;
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

	b {
		font-weight: 600;
	}

	span {
		font-weight: 300;
		color: #d32a5c;
	}
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
