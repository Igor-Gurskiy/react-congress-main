import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'

const MineralLine = () => {
	return (
		<ProductModal.LineContainer>
			<ProductModal.Typography $subtitle>
				Объёмы средств
			</ProductModal.Typography>
			<ProductModal.Line filter>
				<ProductModal.Typography $subtitle $mb={20}>
					ИНТЕНСИВНЫЙ УХОД
				</ProductModal.Typography>
				<Box $flex $fullWidth $direction="column" $flexGrow={1} $p="14px 16px">
					<Box $fullWidth $flex $justifyContent="space-between">
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={137}
								src="assets/images/vichy/modals/mineral/booster.png"
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
								height={114}
								src="assets/images/vichy/modals/mineral/probiotic.png"
							/>
							<ProductModal.Volume>30 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>

				<ProductModal.Typography $subtitle $mt={16} $mb={16}>
					БАЗОВЫЙ УХОД
				</ProductModal.Typography>
				<Box $flex $fullWidth $direction="column" $flexGrow={1} $p="14px 16px">
					<Box $fullWidth $flex $justifyContent="space-between">
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={79}
								src="assets/images/vichy/modals/mineral/mineral.png"
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
								height={79}
								src="assets/images/vichy/modals/mineral/mineral-rich.png"
							/>
							<ProductModal.Volume>50 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
			</ProductModal.Line>
		</ProductModal.LineContainer>
	)
}

export default MineralLine
