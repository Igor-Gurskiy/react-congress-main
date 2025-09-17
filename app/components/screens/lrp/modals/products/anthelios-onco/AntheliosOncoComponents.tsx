import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'
import Box from '@/components/Box'

const AntheliosOncoComponents = ({ mt = 8, mb = 8 }) => {
	const { isMobile } = useResponsive()

	const position = {
		bottom: '-20%',
		right: '5%',
	}

	return (
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
							style={{ margin: '0 5px' }}
						>
							<img
								height={96}
								src="assets/images/lrp/modals/anthelios-onco/fluid.png"
							/>
							<ProductModal.Volume>50 мл</ProductModal.Volume>
						</Box>
						<Molecule
							id="lrp-molecule-10"
							position={{
								top: '10%',
								left: '15%',
							}}
							direction="right"
						/>
					</Box>
				</Box>
				<Subtitle>
					<b>ANTHELIOS СОЛНЦЕЗАЩИТНЫЙ НЕВИДИМЫЙ ФЛЮИД</b> SPF 50+/ PPD 46
				</Subtitle>

				<DescriptionList>
					<DescriptionItem>Высокая защита от UVA-, UVB-лучей</DescriptionItem>
					<DescriptionItem>Высокая фотостабильность до 6 часов</DescriptionItem>
					<DescriptionItem>
						Обеспечивает максимальный комфорт: ультралегкая текстура и
						водостойкая формула
					</DescriptionItem>
				</DescriptionList>
			</ProductModal.Line>
		</ProductModal.List>
	)
}

export default AntheliosOncoComponents

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
		background-color: #f4852c;
		border-radius: 50%;
	}
`
