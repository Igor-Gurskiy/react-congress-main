import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Box from '@/components/Box'
import Molecule from '@/components/ui/molecule/Molecule'

const BaumeBenefites = ({ mt = 8, mb = 16 }) => {
	return (
		<>
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
								style={{ margin: '0 5px' }}
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
								style={{ margin: '0 5px' }}
							>
								<img
									height={125}
									src="assets/images/lrp/modals/cicaplastbaume-peds/baume100.png"
								/>
								<ProductModal.Volume>100 мл</ProductModal.Volume>
							</Box>
						</Box>
						<Molecule
							id="lrp-molecule-7"
							position={{
								top: '0%',
								left: '0%',
							}}
							direction="right"
						/>
					</Box>
					<Subtitle>
						<b>CICAPLAST</b> BAUME <span>B5</span>+
					</Subtitle>

					<DescriptionList>
						<DescriptionItem>
							Нормализует баланс микробиома поврежденной кожи
						</DescriptionItem>
						<DescriptionItem>Ускоряет процесс регенерации кожи</DescriptionItem>
						<DescriptionItem>
							Оказывает антибактериальное действие
						</DescriptionItem>
						<DescriptionItem>Уменьшает воспаление</DescriptionItem>
						<DescriptionItem>Снижает раздражение, жжение и зуд</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
		</>
	)
}

export default BaumeBenefites

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
