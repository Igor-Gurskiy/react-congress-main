import ProductModal from '@/components/shared/product-modal/ProductModal'
import Box from '@/components/Box'
import React from 'react'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const TolerianeRosaliacLine = () => {
	const { isMobile } = useResponsive()

	const position = {
		top: '-25%',
		right: '0%',
	}

	const mPos = {
		top: '10%',
		left: '10%',
	}

	const direction = isMobile ? 'right' : 'left'

	return (
		<ProductModal.LineContainer>
			<ProductModal.Typography $subtitle>
				Объёмы средств
			</ProductModal.Typography>
			<ProductModal.Line>
				<ProductModal.Typography $subtitle $mb={20}>
					уход
				</ProductModal.Typography>
				<Molecule
					id="toleriane"
					position={isMobile ? mPos : position}
					direction={direction}
					translate={{ x: '0%' }}
				/>
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
								height={157}
								src="assets/images/lrp/modals/toleriane/serum.png"
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
								height={243}
								src="assets/images/lrp/modals/toleriane/creme.png"
							/>
							<ProductModal.Volume>40 мл</ProductModal.Volume>
						</Box>
					</Box>
				</Box>
			</ProductModal.Line>
		</ProductModal.LineContainer>
	)
}

export default TolerianeRosaliacLine
