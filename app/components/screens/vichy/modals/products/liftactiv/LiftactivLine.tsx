import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'

const LiftactivLine = () => {
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
								height={115}
								src="assets/images/vichy/modals/liftactiv/c-serum.png"
							/>
							<ProductModal.Volume>20 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={115}
								src="assets/images/vichy/modals/liftactiv/filler.png"
							/>
							<ProductModal.Volume>30 мл</ProductModal.Volume>
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
								src="assets/images/vichy/modals/liftactiv/retinol-specialist.png"
							/>
							<ProductModal.Volume>30 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={115}
								src="assets/images/vichy/modals/liftactiv/b3-serum.png"
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
								height={78}
								src="assets/images/vichy/modals/liftactiv/b3-anti-dark.png"
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
								height={78}
								src="assets/images/vichy/modals/liftactiv/collagen-specialist-nuit.png"
							/>
							<ProductModal.Volume>50 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>

				<ProductModal.Typography $subtitle $mt={16} $mb={20}>
					ФОТОПРОТЕКЦИЯ
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
								height={128}
								src="assets/images/vichy/modals/liftactiv/uv-age.png"
							/>
							<ProductModal.Volume>40 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
			</ProductModal.Line>
		</ProductModal.LineContainer>
	)
}

export default LiftactivLine
