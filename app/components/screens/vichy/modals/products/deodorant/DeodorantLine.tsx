import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const position = {
	bottom: '-7%',
	left: '50%',
}

const mobilePos = {
	bottom: '5%',
	left: '15%',
}

const DeodorantLine = () => {
	const { isMobile } = useResponsive()

	return (
		<ProductModal.LineContainer>
			<ProductModal.Typography $subtitle>
				Объёмы средств
			</ProductModal.Typography>
			<ProductModal.Line filter>
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
								height={135}
								src="assets/images/vichy/modals/deodorant/deodorant1.png"
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
								height={135}
								src="assets/images/vichy/modals/deodorant/deodorant2.png"
							/>
							<ProductModal.Volume>50 мл</ProductModal.Volume>
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
								height={134}
								src="assets/images/vichy/modals/deodorant/deodorant3.png"
							/>
							<ProductModal.Volume>50 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
			</ProductModal.Line>
			<Molecule
				type="vichy"
				id="vichy-deodorant-line"
				position={isMobile ? mobilePos : position}
				direction="right"
				translate={{ x: '-50%' }}
			/>
		</ProductModal.LineContainer>
	)
}

export default DeodorantLine
