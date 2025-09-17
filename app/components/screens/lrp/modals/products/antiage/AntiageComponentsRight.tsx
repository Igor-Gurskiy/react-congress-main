import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'
import Molecule from '@/components/ui/molecule/Molecule'

const AntiageComponentsRight = ({ mt = 8, mb = 16 }) => {
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
								height={90}
								src="assets/images/lrp/modals/antiage/antiage-retinol.png"
							/>
							<ProductModal.Volume>30 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<Subtitle>
					<b>RETINOL B3</b> СЫВОРОТКА
				</Subtitle>
				<Text>
					Сыворотка с ретинолом для эффективной коррекции глубоких морщин и
					гиперпигментации
				</Text>
				<DescriptionList>
					<DescriptionItemRetinol>
						Уменьшает гиперпигментацию
					</DescriptionItemRetinol>
					<DescriptionItemRetinol>
						Выравнивает рельеф кожи
					</DescriptionItemRetinol>
					<DescriptionItemRetinol>
						Сокращает выраженность морщин
					</DescriptionItemRetinol>
					<DescriptionItemRetinol>
						Повышает эластичность и упругость кожи
					</DescriptionItemRetinol>
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
								src="assets/images/lrp/modals/antiage/antiage-vitamin.png"
							/>
							<ProductModal.Volume>30 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<Subtitle>
					<b>VITAMIN C10</b> СЫВОРОТКА
				</Subtitle>
				<Text>
					Антиоксидантная сыворотка с витамином&nbsp;С в концентрации 10% для
					чувствительной кожи
				</Text>
				<DescriptionList>
					<DescriptionItemVitamin>
						Мгновенно увлажняет и смягчает кожу
					</DescriptionItemVitamin>
					<DescriptionItemVitamin>
						Уменьшает выраженность морщин
					</DescriptionItemVitamin>
					<DescriptionItemVitamin>
						Выравнивает поверхность и тон кожи
					</DescriptionItemVitamin>
				</DescriptionList>
			</ProductModal.Line>
			<FlaskImageContainer>
				<img src="assets/images/lrp/modals/antiage/flask.png" alt="" />

				<Molecule
					id="lrp-molecule-10"
					position={{
						top: '-5%',
						left: '50%',
					}}
					direction="left"
					translate={{ x: '-50%' }}
				/>
			</FlaskImageContainer>
		</ProductModal.List>
	)
}

export default AntiageComponentsRight

const FlaskImageContainer = styled.div`
	position: relative;

	img {
		width: 100%;
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
const DescriptionItemRetinol = styled.div`
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
		background-color: #db0002;
		border-radius: 50%;
	}
`
const DescriptionItemVitamin = styled.div`
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
		background-color: #e17000;
		border-radius: 50%;
	}
`
