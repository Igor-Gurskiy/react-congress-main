import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'
import styled from 'styled-components'
import Box from '@/components/Box'

const EffaclarAcneSkinComponents = ({ mt = 16, mb = 4 }) => {
	const { isMobile } = useResponsive()

	const position = {
		bottom: '-10%',
		right: '0%',
	}

	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				Для кожи, пересушенной в результате лечения акне
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
									height={103}
									src="assets/images/lrp/modals/effaclar/biom1.png"
								/>
								<ProductModal.Volume>40 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>EFFACLAR</b> H ISO-<span>BIOME</span>
					</Subtitle>
					<Text>Ультрауспокаивающий восстанавливающий уход</Text>
					<DescriptionList>
						<DescriptionItem>Регулирует микробиом</DescriptionItem>
						<DescriptionItem>
							Уменьшает выраженность побочных эффектов лекарственной терапии
						</DescriptionItem>
						<DescriptionItem>
							Нормализует себорегуляцию жирной кожи, пересушенной в результате
							нерационального ухода
						</DescriptionItem>
						<DescriptionItem>
							Предотвращает появление поствоспалительной гиперпигментации
						</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
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
									src="assets/images/lrp/modals/effaclar/biom2.png"
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
									src="assets/images/lrp/modals/effaclar/biom3.png"
								/>
								<ProductModal.Volume>390 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>EFFACLAR</b> H ISO-<span>BIOME</span>
					</Subtitle>
					<Text>Успокаивающий очищающий крем-гель</Text>
				</ProductModal.Line>
				<Molecule
					id="lrp-molecule-7"
					position={{
						top: '5%',
						left: '40%',
					}}
					direction="left"
					translate={{ x: '-50%' }}
				/>
			</ProductModal.List>
		</>
	)
}

export default EffaclarAcneSkinComponents

const componentsCleaning = [
	{
		src: 'assets/images/lrp/modals/effaclar/purifiant200.png',
		srcHeight: 90,
		title: 'EFFACLAR',
		description: (
			<>
				Очищающий
				<br />
				пенящийся гель
			</>
		),
		content: '',
	},
	{
		src: 'assets/images/lrp/modals/effaclar/moussant200.png',
		srcHeight: 89,
		title: 'EFFACLAR',
		description: (
			<>
				Микроотшелушивающий
				<br />
				гель
			</>
		),
		content: '',
	},
]

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
