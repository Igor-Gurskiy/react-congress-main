import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Molecule from '@/components/ui/molecule/Molecule'
import Box from '@/components/Box'

const EffaclarPedsComponentsRight = ({ mt = 8, mb = 8 }) => {
	return (
		<>
			<ProductModal.List></ProductModal.List>
			<ProductModal.Typography $subtitle $mt={5} $mb={12}>
				ОЧИЩЕНИЕ
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
								style={{ margin: '0 5px' }}
							>
								<img
									height={90}
									src="assets/images/lrp/modals/effaclar-peds/effaclar-gel.png"
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
								style={{ margin: '0 5px' }}
							>
								<img
									height={127}
									src="assets/images/lrp/modals/effaclar-peds/effaclar.png"
								/>
								<ProductModal.Volume>400 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>EFFACLAR</b>
					</Subtitle>
					<Text>Очищающий пенящийся гель</Text>
					<DescriptionList>
						<DescriptionItem>
							Оказывает себорегулирующее и антибактериальное действие​
						</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
				<Molecule
					id="lrp-molecule-7"
					position={{
						top: '5%',
						right: '5%',
					}}
					direction="left"
					translate={{ x: '0%' }}
				/>
			</ProductModal.List>
		</>
	)
}

export default EffaclarPedsComponentsRight

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
