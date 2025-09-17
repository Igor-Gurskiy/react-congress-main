import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const BaumeLine = () => {
	const { isMobile } = useResponsive()

	const position = {
		bottom: -40,
		left: '50%',
	}

	const mobilePos = {
		top: '-15%',
		right: '-5%',
	}

	return (
		<ProductModal.LineContainer>
			<ProductModal.Typography $subtitle>
				Объёмы средств
			</ProductModal.Typography>
			<ProductModal.Line>
				<Molecule
					id="baume"
					position={isMobile ? mobilePos : position}
					translate={{ x: '-50%' }}
				/>

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
								height={133}
								src="assets/images/lrp/modals/baume/baume15.png"
							/>
							<ProductModal.Volume>15 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>

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
								height={165}
								src="assets/images/lrp/modals/baume/baume40.png"
							/>
							<ProductModal.Volume>40 мл</ProductModal.Volume>
						</Box>
						<Box
							$flex
							$flexGrow={1}
							$direction="column"
							$alignItems="center"
							$justifyContent="flex-end"
						>
							<img
								height={182}
								src="assets/images/lrp/modals/baume/baume100.png"
							/>
							<ProductModal.Volume>100 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
			</ProductModal.Line>
		</ProductModal.LineContainer>
	)
}

export default BaumeLine
