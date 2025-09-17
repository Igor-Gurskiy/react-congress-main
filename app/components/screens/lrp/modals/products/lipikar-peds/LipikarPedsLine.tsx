import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'

const LipikarPedsLine = () => {
	return (
		<ProductModal.LineContainer>
			<ProductModal.Typography $subtitle>
				Объёмы средств
			</ProductModal.Typography>
			<ProductModal.Line>
				<ProductModal.Typography $subtitle $mb={20}>
					уход
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
								height={88}
								src="assets/images/lrp/modals/lipikar/baume75.png"
							/>
							<ProductModal.Volume>75 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={101}
								src="assets/images/lrp/modals/lipikar/baume200.png"
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
								height={101}
								src="assets/images/lrp/modals/lipikar/baume400.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>

				<ProductModal.Typography $subtitle $mt={32} $mb={32}>
					очищение
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
								height={88}
								src="assets/images/lrp/modals/lipikar/syndet200.png"
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
								height={101}
								src="assets/images/lrp/modals/lipikar/syndet400.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={101}
								src="assets/images/lrp/modals/lipikar/syndetcreme.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
					</Box>
					<Box $fullWidth $flex $justifyContent="space-between" $mt={16}>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={88}
								src="assets/images/lrp/modals/lipikar/huile200.png"
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
								height={101}
								src="assets/images/lrp/modals/lipikar/huile400.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={101}
								src="assets/images/lrp/modals/lipikar/huilecreme.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
			</ProductModal.Line>
		</ProductModal.LineContainer>
	)
}

export default LipikarPedsLine
