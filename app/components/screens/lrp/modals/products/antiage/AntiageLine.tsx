import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const AntiageLine = () => {
	const { isMobile } = useResponsive()

	const position = {
		bottom: -45,
		left: '50%',
	}

	const mPos = {
		top: '-25%',
		right: '0%',
	}

	return (
		<ProductModal.LineContainer>
			<ProductModal.Typography $subtitle>
				Объёмы средств
			</ProductModal.Typography>
			<ProductModal.Line>
				<Molecule
					id="antiage"
					position={isMobile ? mPos : position}
					direction="left"
					translate={{ x: isMobile ? 0 : '-50%' }}
				/>
				<ProductModal.Typography $subtitle $mt={16} $mb={16}>
					Гамма сывороток
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
								height={153}
								src="assets/images/lrp/modals/antiage/pure.png"
							/>
							<ProductModal.Volume>30 мл</ProductModal.Volume>
						</Box>
					</Box>
					<Box $fullWidth $flex $justifyContent="space-between">
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={167}
								src="assets/images/lrp/modals/antiage/retinol.png"
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
								height={167}
								src="assets/images/lrp/modals/antiage/hyalu.png"
							/>
							<ProductModal.Volume>30 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
			</ProductModal.Line>
		</ProductModal.LineContainer>
	)
}

export default AntiageLine
