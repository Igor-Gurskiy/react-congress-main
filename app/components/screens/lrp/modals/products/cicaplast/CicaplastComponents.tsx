import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'

const CicaplastComponents = ({ mt = 16, mb = 8 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				Уход
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
									height={98}
									src="assets/images/lrp/modals/cicaplast/serum.png"
								/>
								<ProductModal.Volume>30 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>CICAPLAST</b> <span>B5</span> сыворотка
					</Subtitle>
					<Text>Восстанавливающая сыворотка для кожи лица</Text>
					<DescriptionList>
						<DescriptionItem>
							Содержит пантенол [витамин B5] в концентрации 10%
						</DescriptionItem>
						<DescriptionItem>
							Улучшает процесс восстановления кожи
						</DescriptionItem>
						<DescriptionItem>
							Протестировано на коже после дерматологических процедур и в
							экстремальных погодных условиях
						</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
				<ProductModal.Line filter>
					<Box $flex $direction="row" $flexGrow={1} style={{ gap: 12 }}>
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
									src="assets/images/lrp/modals/cicaplastbaume-peds/baume15.png"
								/>
								<ProductModal.Volume>15 мл</ProductModal.Volume>
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
									src="assets/images/lrp/modals/cicaplastbaume-peds/baume40.png"
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
							>
								<img
									height={125}
									src="assets/images/lrp/modals/cicaplastbaume-peds/baume100.png"
								/>
								<ProductModal.Volume>100 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>CICAPLAST</b> BAUME <span>B5</span>+
					</Subtitle>
					<Text>Восстанавливающий успокаивающий бальзам</Text>
					<DescriptionList>
						<DescriptionItem>
							Нормализует баланс микробиома поврежденной кожи
						</DescriptionItem>
						<DescriptionItem>Ускоряет процесс регенерации кожи</DescriptionItem>
						<DescriptionItem>
							Оказывает антибактериальное действие
						</DescriptionItem>
						<DescriptionItem>Уменьшает воспаление</DescriptionItem>
						<DescriptionItem>
							Снижает раздражение, жжение и&nbsp;зуд
						</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
			<ProductModal.List>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/cicaplastbaume-peds/tribioma.png"
							alt=""
						/>
						<div>
							<SubtitleMini>TRIBIOMA</SubtitleMini>
							<Text>Нормализует микробиом кожи</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/cicaplastbaume-peds/filiformis.png"
							alt=""
						/>
						<div>
							<SubtitleMini>AQUA POSAE FILIFORMIS</SubtitleMini>
							<Text>Нормализует микробиом кожи</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/cicaplastbaume-peds/pantenol.png"
							alt=""
						/>
						<div>
							<SubtitleMini>Пантенол</SubtitleMini>
							<Text>Успокаивает и восстанавливает</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/cicaplastbaume-peds/madecassosid.png"
							alt=""
						/>
						<div>
							<SubtitleMini>Мадекассосид</SubtitleMini>
							<Text>Ускоряет заживление</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/cicaplastbaume-peds/cink.png"
							alt=""
						/>
						<div>
							<SubtitleMini>Цинк+Марганец</SubtitleMini>
							<Text>Оказывают антибактериальное действие</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/cicaplastbaume-peds/carite.png"
							alt=""
						/>
						<div>
							<SubtitleMini>Масло Карите</SubtitleMini>
							<Text>Восстанавливает кожный барьер</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
			</ProductModal.List>
		</>
	)
}

export default CicaplastComponents

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
		color: #36b0fc;
	}
`

const ProductModalMiniDescr = styled.div`
	background: #f6f6f6;
	border-radius: 4px;
	padding: 12px;
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

const SubtitleMini = styled.div`
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
