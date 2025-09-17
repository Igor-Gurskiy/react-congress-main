import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'

const AminexilLine = () => {
	return (
		<ProductModal.LineContainer>
			<ProductModal.Typography $subtitle>
				Объёмы средств
			</ProductModal.Typography>
			<ProductModal.Line filter>
				<ProductModal.Typography $subtitle $mt={16} $mb={16}>
					основной УХОД
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
								height={107}
								src="assets/images/dercos/modals/aminexil/serum-gamma.png"
							/>
							<ProductModal.Volume>21 шт по 6 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
				<ProductModal.Typography $subtitle $mt={32} $mb={16}>
					ДОПОЛНИТЕЛЬНЫЙ уход
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
								src="assets/images/dercos/modals/aminexil/shampoo.png"
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
								height={170}
								src="assets/images/dercos/modals/aminexil/conditioner.png"
							/>
							<ProductModal.Volume>200 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
			</ProductModal.Line>
		</ProductModal.LineContainer>
	)
}

export default AminexilLine
