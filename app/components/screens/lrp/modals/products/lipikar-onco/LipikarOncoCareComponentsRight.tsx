import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'
import Box from '@/components/Box'

const LipikarOncoCareComponents = ({ mt = 16, mb = 8 }) => {
	const { isMobile } = useResponsive()

	const position = {
		bottom: '-3%',
		left: '2%',
	}

	const mPos = {
		top: '13%',
		left: '2%',
	}

	const pos = isMobile ? mPos : position

	return (
		<>
			<ProductModal.List>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/lipikar-onco/filiformis.png"
							alt=""
						/>
						<div>
							<SubtitleMini>
								Aqua Posae Filiformis
								<br /> + Microresyl
							</SubtitleMini>
							<Text>
								Регулирует микробиом кожи, сдерживая рост стафилококка и
								ингибируя его биопленку. Способствует укреплению естественных
								защитных функций кожи
							</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/lipikar-onco/carite.png"
							alt=""
						/>
						<div>
							<SubtitleMini>
								Масло Карите <br /> (Масло Ши)
							</SubtitleMini>
							<Text>
								Обеспечивает восполнение липидов, способствуя уменьшению сухости
								и ощущения стянутости кожи
							</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/lipikar-onco/niacinamid.png"
							alt=""
						/>
						<div>
							<SubtitleMini>Ниацинамид</SubtitleMini>
							<Text>
								Снимает зуд, обладает противовоспалительным действием,
								предупреждает снижение защитных свойств кожи{' '}
							</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/lipikar-onco/termal.png"
							alt=""
						/>
						<div>
							<SubtitleMini>
								Термальная вода <br /> LA ROCHE-POSAY
							</SubtitleMini>
							<Text>
								Смягчает и укрепляет естественный барьер кожи, оказывает
								успокаивающее действие
							</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
			</ProductModal.List>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				Очищение
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
							>
								<img
									height={90}
									src="assets/images/lrp/modals/lipikar-onco/syndet200.png"
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
							>
								<img
									height={121}
									src="assets/images/lrp/modals/lipikar-onco/syndet400.png"
								/>
								<ProductModal.Volume>400 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>LIPIKAR</b> SYNDET <span>AP+</span>
					</Subtitle>
					<Text>
						Липидовосстанавливающий очищающий крем-гель для лица и тела
					</Text>
				</ProductModal.Line>
				<Molecule
					id="lrp-molecule-6"
					position={{
						top: '-10%',
						right: '5%',
					}}
					direction="left"
				/>
			</ProductModal.List>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				Применение
			</ProductModal.Typography>
			<ProductModalMiniDescrPlus>
				<ProductModalContent>
					<img
						height={61}
						src="assets/images/lrp/modals/lipikar-onco/plus.png"
						alt=""
						style={{ marginRight: '0px' }}
					/>
					<div>
						<SubtitleMini>Для лица и тела</SubtitleMini>
						<Text>
							Использовать вместо геля для душа, кратность – по необходимости
						</Text>
					</div>
				</ProductModalContent>
			</ProductModalMiniDescrPlus>
		</>
	)
}

export default LipikarOncoCareComponents

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

const ProductModalMiniDescr = styled.div`
	background: #f6f6f6;
	border-radius: 4px;
	padding: 12px;
	position: relative;
	margin: 4px 0;
`
const ProductModalMiniDescrPlus = styled.div`
	background: #f6f6f6;
	border-radius: 4px;
	padding: 10px 10px 12px 5px;
	position: relative;
	margin: 4px 0;
`
const ProductModalContent = styled.div`
	display: flex;

	img {
		margin-right: 10px;
	}
`
