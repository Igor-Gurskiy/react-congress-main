import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'
import Molecule from '@/components/ui/molecule/Molecule'

const DendruffLine = () => {
	return (
		<ProductModal.LineContainer>
			<ProductModal.Typography $subtitle>
				Объёмы средств
			</ProductModal.Typography>
			<ProductModal.Line filter>
				<ProductModal.Typography $subtitle $mt={1} $mb={16}>
					основной уход
				</ProductModal.Typography>
				<Box $flex $fullWidth $direction="column" $flexGrow={1}>
					<Box $fullWidth $flex $justifyContent="space-between">
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={248}
								src="assets/images/dercos/modals/dandruff/normal.png"
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
								height={248}
								src="assets/images/dercos/modals/dandruff/dry.png"
							/>
							<ProductModal.Volume>200 мл</ProductModal.Volume>
						</Box>
					</Box>
					<Molecule
						type="dercos"
						id="dercos-dandruff"
						position={{
							bottom: '-10%',
							left: '50%',
						}}
						direction="left"
						translate={{ x: '-50%' }}
					/>
				</Box>

				{/* <ProductModal.Typography $subtitle $mt={32} $mb={16}>
					ДОПОЛНИТЕЛЬНЫЙ УХОД
				</ProductModal.Typography>
				<Box $flex $fullWidth $direction="column" $flexGrow={1}>
					<Box $fullWidth $flex $justifyContent="space-between">
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={195}
								src="assets/images/dercos/modals/dandruff/deep.png"
							/>
							<ProductModal.Volume>200 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box> */}
			</ProductModal.Line>
		</ProductModal.LineContainer>
	)
}

export default DendruffLine
