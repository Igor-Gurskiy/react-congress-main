import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const EffaclarPedsLine = () => {
	const { isMobile } = useResponsive()

	const position = {
		top: '45%',
		left: '10%',
	}

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
								height={102}
								src="assets/images/lrp/modals/effaclar-peds/duo.png"
							/>
							<ProductModal.Volume>40 мл</ProductModal.Volume>
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
								height={130}
								src="assets/images/lrp/modals/effaclar-peds/gel200.png"
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
								height={174}
								src="assets/images/lrp/modals/effaclar-peds/gel400.png"
							/>
							<ProductModal.Volume>400 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>

				{isMobile && (
					<Molecule
						id="effaclar-peds"
						position={position}
						direction="right"
						translate={{ x: '-50%' }}
					/>
				)}
			</ProductModal.Line>
		</ProductModal.LineContainer>
	)
}

export default EffaclarPedsLine
