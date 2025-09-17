import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import useResponsive from '@/hooks/useResponsive'
import Box from '@/components/Box'
import media from '@/utils/media'

const LipikarCleaningComponentsTwo = ({ mt = 16, mb = 16 }) => {
	const { isMobile } = useResponsive()

	const position = {
		bottom: '-10%',
		left: '15%',
	}

	const mobilePos = {
		bottom: '5%',
		right: '0%',
	}

	return (
		<>
			<ProductModalMiniDescr>
				<ProductModalContent>
					<img
						height={64}
						width={74}
						src="assets/images/lrp/modals/lipikar/carite-icon.png"
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
						src="assets/images/lrp/modals/lipikar/niacinamid-icon.png"
						alt=""
					/>
					<div>
						<SubtitleAqua>Ниацинамид 2%</SubtitleAqua>
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
						height={64}
						width={74}
						src="assets/images/lrp/modals/lipikar/coldcream-icon.png"
						alt=""
					/>
					<div>
						<SubtitleAqua>Колд-крем 3%</SubtitleAqua>
						<Text>
							Обеспечивает восстановление кожи и ее длительное увлажнение,
							препятствует испарению влаги и предохраняет от агрессивных
							факторов (напр. внешних: ветра, жесткой воды, мороза)
						</Text>
					</div>
				</ProductModalContent>
			</ProductModalMiniDescr>
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
								height={95}
								src="assets/images/lrp/modals/lipikar/gel-lavant1.png"
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
								height={127}
								src="assets/images/lrp/modals/lipikar/gel-lavant2.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<Subtitle>
					<b>LIPIKAR</b> GEL LAVANT
				</Subtitle>
				<Text>
					Успокаивающий гель для душа с защитными свойствами для чувствительной
					кожи
				</Text>
				<DescriptionList>
					<DescriptionItem>Эффективно и бережно очищает</DescriptionItem>
					<DescriptionItem>Имеет физиологический pH</DescriptionItem>
					<DescriptionItem>Не щиплет глазки</DescriptionItem>
					<DescriptionItem>Подходит для интимной гигиены</DescriptionItem>
					<DescriptionItem>
						Мгновенно смягчает, увлажняет, успокаивает
					</DescriptionItem>
					<DescriptionItem>Легко наносится</DescriptionItem>
					<DescriptionItem>Быстро впитывается</DescriptionItem>
				</DescriptionList>
			</ProductModal.Line>
		</>
	)
}

export default LipikarCleaningComponentsTwo

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
	margin-top: 3px;
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
