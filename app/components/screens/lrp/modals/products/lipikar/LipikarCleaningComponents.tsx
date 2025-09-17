import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Molecule from '@/components/ui/molecule/Molecule'
import Box from '@/components/Box'
import media from '@/utils/media'
import { useUIStore } from '@/stores/uiStore'

const LipikarCleaningComponents = ({ mt = 16, mb = 16 }) => {
	const spec = useUIStore((state) => state.specialization)

	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				ОЧИЩЕНИЕ
			</ProductModal.Typography>
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
								height={92}
								src="assets/images/lrp/modals/lipikar/syndet1.png"
							/>
							<ProductModal.Volume>200 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={132}
								src="assets/images/lrp/modals/lipikar/syndet2.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={109}
								src="assets/images/lrp/modals/lipikar/syndet3.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<Subtitle>
					<b>LIPIKAR</b> SYNDET <span>AP+</span>
				</Subtitle>
				<Text>Липидовосстанавливающий очищающий крем-гель для лица и тела</Text>

				<Molecule
					id="lrp-molecule-5"
					position={{
						top: '-17%',
						right: '-10%',
					}}
					direction="left"
					translate={{ x: '-50%' }}
				/>
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
								height={107}
								src="assets/images/lrp/modals/lipikar/oil1.png"
							/>
							<ProductModal.Volume>200 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={132}
								src="assets/images/lrp/modals/lipikar/oil2.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={109}
								src="assets/images/lrp/modals/lipikar/oil3.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<Subtitle>
					<b>LIPIKAR</b> OIL <span>AP+</span>
				</Subtitle>
				<Text>Липидовосстанавливающее смягчающее масло для ванны и душа</Text>
			</ProductModal.Line>
			<ProductModalAquaPosae>
				<ProductModalContent>
					<img
						height={54}
						width={54}
						src="assets/images/lrp/modals/lipikar/aqua-posae.png"
						alt=""
					/>
					<div>
						<SubtitleAqua>Aqua Posae Filiformis</SubtitleAqua>
						<Text>Пробиотическое действие</Text>
						<DescriptionList>
							<DescriptionItem>
								Сокращает нейрогенное воспаление, вызванное веществом Р
							</DescriptionItem>
							<DescriptionItem>
								Поддерживает клеточный гомеостаз
							</DescriptionItem>
							<DescriptionItem>Укрепляет кожный барьер</DescriptionItem>
						</DescriptionList>
					</div>
				</ProductModalContent>

				{spec === 'allerg' && (
					<Molecule
						id="lrp-molecule-6"
						position={{
							top: '20%',
							left: '3%',
						}}
						direction="left"
					/>
				)}
			</ProductModalAquaPosae>
		</>
	)
}

export default LipikarCleaningComponents

const ProductModalAquaPosae = styled.div`
	background: #f6f6f6;
	border-radius: 4px;
	padding: 12px;
	position: relative;
	margin: 16px 0;
`
const ProductModalContent = styled.div`
	display: flex;

	img {
		margin-right: 15px;
	}
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
		font-weight: 600;
	}
`
const SubtitleAqua = styled.div`
	color: #2c435f;
	font-size: 13px;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 0.39px;
	text-transform: uppercase;
`

const Text = styled.div`
	color: #1f1f1f;
	font-size: 12px;
	font-weight: 300;
	line-height: 16px;
	margin-bottom: 10px;
	${media.md`
	align-self: flex-start;
  `}
`

const DescriptionList = styled.div`
	margin-left: 14px;
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
