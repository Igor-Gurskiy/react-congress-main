import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'
import Molecule from '@/components/ui/molecule/Molecule'
import { useUIStore } from '@/stores/uiStore'

const CicaplastComponentsRight = ({ mt = 16, mb = 8 }) => {
	const spec = useUIStore((state) => state.specialization)

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
							>
								<img
									height={103}
									src="assets/images/lrp/modals/cicaplast/baume-spf.png"
								/>
								<ProductModal.Volume>40 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>CICAPLAST</b> baume <span>B5</span> SPF 50+
					</Subtitle>
					<Text>
						Обеспечивает очень сильную защиту <p />
						от UVA-UVB-лучей (SPF 50+)
					</Text>
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
									height={130}
									src="assets/images/lrp/modals/cicaplast/spray.png"
								/>
								<ProductModal.Volume>100 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>CICAPLAST</b> <span>B5</span> СПРЕЙ
					</Subtitle>
					<Text>
						Мультивосстанавливающий спрей для младенцев, детей и взрослых
					</Text>
					<DescriptionList>
						<DescriptionItem>Моментально успокаивает</DescriptionItem>
						<DescriptionItem>
							Смягчает, увлажняет и уменьшает дискомфорт кожи
						</DescriptionItem>
						<DescriptionItem>Поддерживает баланс микробиома</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
			<ProductModal.List>
				<ShowingBlock>
					<div>
						<b>
							БЕРЕЖНОЕ <br />
							БЕСКОНТАКТНОЕ
						</b>
						<br />
						НАНЕСЕНИЕ
					</div>
					<img src="assets/images/lrp/modals/cicaplast/spray-hand.png" alt="" />
				</ShowingBlock>
				{spec === 'allerg' && (
					<Molecule
						id="lrp-molecule-8"
						position={{
							bottom: '7%',
							right: '15%',
						}}
						direction="right"
					/>
				)}
			</ProductModal.List>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				Очищение
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
									height={140}
									src="assets/images/lrp/modals/cicaplast/lavant.png"
								/>
								<ProductModal.Volume>200 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>CICAPLAST</b> <span>LAvant b5</span>
					</Subtitle>
					<Text>Очищающий гель</Text>
					<DescriptionList>
						<DescriptionItem>
							Ультрамягкая формула очищает, увлажняет и заметно успокаивает
						</DescriptionItem>
						<DescriptionItem>
							Содержит комплекс с признанными антибактериальными свойствами
							[Медь, Цинк, Марганец]
						</DescriptionItem>
						<DescriptionItem>
							Успокаивает сухие, раздраженные участки кожи [Пантенол 5%]
						</DescriptionItem>
						<DescriptionItem>
							Увлажняет, сохраняя влагу в коже [Глицерин]
						</DescriptionItem>
						<DescriptionItem>
							Не содержит мыла, отдушек и парабенов
						</DescriptionItem>
						<DescriptionItem>
							Физиологический pH, подходит для интимной гигиены
						</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
		</>
	)
}

export default CicaplastComponentsRight

const ShowingBlock = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 16px;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: 0.48px;
	text-transform: uppercase;
	height: 152px;
	background: #81b5ef;
	border-radius: 4px;
	min-height: 70px;
	padding: 14px;
	-webkit-transition: all 0.7s;
	transition: all 0.7s;

	b {
		font-weight: 800;
	}

	img {
		position: absolute;
		bottom: 0;
		right: 0;
		height: 143px;
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

	b {
		font-weight: 600;
	}

	span {
		font-weight: 300;
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
