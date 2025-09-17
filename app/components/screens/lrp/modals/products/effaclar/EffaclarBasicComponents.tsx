import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'
import Box from '@/components/Box'

const EffaclarBasicComponents = ({ mt = 16, mb = 8 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				ОСНОВНОЙ УХОД
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
									height={91}
									src="assets/images/lrp/modals/effaclar/serum1.png"
								/>
								<ProductModal.Volume>30 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>EFFACLAR</b> СЫВОРОТКА
					</Subtitle>
					<Text>
						Ультраконцентрированная сыворотка для пациентов с акне обладает
						синергическим действием 4-х кислот
					</Text>
					<DescriptionList>
						<DescriptionItemSerum>
							Оказывает кератолитический эффект
						</DescriptionItemSerum>
						<DescriptionItemSerum>
							Обладает противовоспалительным действием
						</DescriptionItemSerum>
						<DescriptionItemSerum>
							Предотвращает повторное появление элементов
						</DescriptionItemSerum>
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
									height={90}
									src="assets/images/lrp/modals/effaclar/duo1.png"
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
				</ProductModal.Line>

				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={64}
							width={74}
							src="assets/images/lrp/modals/effaclar/minidescr-icon.png"
							alt=""
						/>
						<div>
							<SubtitleAqua>Салициловая кислота + LHA</SubtitleAqua>
							<Text>
								Выравнивает поверхность кожи за счёт отшелушивающего действия
							</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={64}
							width={74}
							src="assets/images/lrp/modals/effaclar/minidescr-icon2.png"
							alt=""
						/>
						<div>
							<SubtitleAqua>AQUA POSAE FILIFORMIS</SubtitleAqua>
							<Text>
								Восстанавливает защитные свойства проблемной кожи, регулируя её
								микробиом
							</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={64}
							width={74}
							src="assets/images/lrp/modals/effaclar/minidescr-icon3.png"
							alt=""
						/>
						<div>
							<SubtitleAqua>PROCERAD</SubtitleAqua>
							<Text>Предотвращает появление следов постакне</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
			</ProductModal.List>
		</>
	)
}

export default EffaclarBasicComponents

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
	${media.md`
	align-self: flex-start;
  `}
`
const DescriptionItemSerum = styled.div`
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
		background-color: #009d86;
		border-radius: 50%;
	}
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
