import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'
import media from '@/utils/media'
import Box from '@/components/Box'

const LaitComponentsRight = ({ mt = 8, mb = 8 }) => {
	const { isMobile } = useResponsive()

	const position = {
		bottom: '-20%',
		left: '50%',
	}

	const mobilePos = {
		bottom: '-15%',
		right: '5%',
	}

	return (
		<>
			<ProductModal.Typography $subtitle $mt={8} $mb={8}>
				ОЧИЩЕНИЕ
			</ProductModal.Typography>
			<ProductModal.List>
				<ProductModal.Line>
					<Box $flex $direction="row" $flexGrow={1}>
						<Box $fullWidth $flex $justifyContent="space-between">
							<Box
								$flex
								$flexGrow={1}
								$direction="column"
								$alignItems="center"
								$justifyContent="flex-end"
							>
								<img
									height={95}
									src="assets/images/lrp/modals/lait/lavant200.png"
								/>
								<ProductModal.Volume>200 мл</ProductModal.Volume>
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
									height={127}
									src="assets/images/lrp/modals/lait/lavant400.png"
								/>
								<ProductModal.Volume>400 мл</ProductModal.Volume>
							</Box>
						</Box>
					</Box>
					<Subtitle>
						<b>Lipikar</b> GEL LAVANT
					</Subtitle>
					<Text>
						Успокаивающий гель для душа с защитными свойствами
						для чувствительной кожи младенцев, детей и взрослых
					</Text>
					<DescriptionList>
						<DescriptionItem>Эффективно и бережно очищает</DescriptionItem>
						<DescriptionItem>Имеет физиологический pH</DescriptionItem>
						<DescriptionItem>Не щиплет глазки</DescriptionItem>
						<DescriptionItem>Подходит для интимной гигиены</DescriptionItem>
					</DescriptionList>
				</ProductModal.Line>
			</ProductModal.List>
		</>
	)
}

export default LaitComponentsRight

const Subtitle = styled.div`
	align-self: flex-start;
	color: #122c4f;
	font-family: Gilroy;
	font-size: 13px;
	font-weight: 300;
	line-height: 120%;
	letter-spacing: 0.39px;
	text-transform: uppercase;
	margin-top: 20px;
	margin-bottom: 10px;

	span {
		color: #36b0fc;
	}
`
const Text = styled.div`
	color: #1f1f1f;
	font-size: 12px;
	font-weight: 300;
	line-height: 16px;
	align-self: flex-start;
`

const DescriptionList = styled.div`
	margin-top: 10px;

	margin-left: 14px;
	align-self: flex-start;
`

const DescriptionItem = styled.div`
	position: relative;
	margin-bottom: 4px;
	color: #262626;
	font-size: 12px;
	font-weight: 300;
	line-height: 17px;
	&::before {
		content: '';
		position: absolute;
		width: 5px;
		height: 5px;
		top: 6px;
		left: -12px;
		background-color: #36b0fc;
		border-radius: 50%;
	}
`
