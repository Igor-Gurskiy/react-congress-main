import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'

const AntheliosLine = () => {
	return (
		<ProductModal.LineContainer>
			<ProductModal.Typography $subtitle>
				Объёмы средств
			</ProductModal.Typography>
			<ProductModal.Line>
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
								height={175}
								src="assets/images/lrp/modals/anthelios/oil.png"
							/>
							<ProductModal.Volume>50 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={175}
								src="assets/images/lrp/modals/anthelios/age.png"
							/>
							<ProductModal.Volume>50 мл</ProductModal.Volume>
						</Box>
					</Box>
					<Box $fullWidth $flex $justifyContent="space-between" $mt={40}>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={167}
								src="assets/images/lrp/modals/anthelios/ka.png"
							/>
							<ProductModal.Volume>50 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={156}
								src="assets/images/lrp/modals/anthelios/invisible.png"
							/>
							<ProductModal.Volume>50 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
			</ProductModal.Line>
		</ProductModal.LineContainer>
	)
}

export default AntheliosLine
