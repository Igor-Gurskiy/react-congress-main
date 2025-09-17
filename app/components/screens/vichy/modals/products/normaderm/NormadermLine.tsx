import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const NormadermLine = () => {
	const { isMobile } = useResponsive()

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
								height={114}
								src="assets/images/vichy/modals/normaderm/probio.png"
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
								height={140}
								src="assets/images/vichy/modals/normaderm/double-correction.png"
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
								height={139}
								src="assets/images/vichy/modals/normaderm/correct.png"
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
								height={124}
								src="assets/images/vichy/modals/normaderm/capital-soleil.png"
							/>
							<ProductModal.Volume>40 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
			</ProductModal.Line>
			{!isMobile && (
				<Molecule
					type="vichy"
					id="vichy-normaderm"
					position={{
						top: '-2%',
						right: '-10%',
					}}
					direction="left"
					translate={{ x: '-50%' }}
				/>
			)}
		</ProductModal.LineContainer>
	)
}

export default NormadermLine
