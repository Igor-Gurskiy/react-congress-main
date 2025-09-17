import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'

const PsolutionLine = () => {
	return (
		<ProductModal.LineContainer>
			<ProductModal.Typography $subtitle>
				Объёмы средств
			</ProductModal.Typography>
			<ProductModal.Line filter>
				<Box $flex $fullWidth $direction="column" $flexGrow={1}>
					<Box
						$fullWidth
						$flex
						$justifyContent="space-between"
						$mt={40}
						$mb={40}
					>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={248}
								src="assets/images/dercos/modals/psolution/shampoo.png"
							/>
							<ProductModal.Volume>200 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
			</ProductModal.Line>
		</ProductModal.LineContainer>
	)
}

export default PsolutionLine
