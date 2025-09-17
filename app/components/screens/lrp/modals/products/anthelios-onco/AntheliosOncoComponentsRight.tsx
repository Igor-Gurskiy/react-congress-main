import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'

const AntheliosOncoComponentsRight = ({ mt = 16, mb = 8 }) => {
	return (
		<>
			<ProductModalMiniDescr>
				<ProductModalContent>
					<img
						height={61}
						src="assets/images/lrp/modals/anthelios-onco/athelios-protect.png"
						alt=""
					/>
					<div>
						<Subtitle>XL-Protect™</Subtitle>
						<Text>
							Комплекс запатентованных фотостабильных химических фильтров,
							эффективных против UVA,UVB, IRA лучей
						</Text>
					</div>
				</ProductModalContent>
			</ProductModalMiniDescr>
			<ProductModalMiniDescr>
				<ProductModalContent>
					<img
						height={61}
						src="assets/images/lrp/modals/anthelios-onco/athelios-vitamin.png"
						alt=""
					/>
					<div>
						<Subtitle>Витамин Е</Subtitle>
						<Text>Оказывает антиоксидантное действие</Text>
					</div>
				</ProductModalContent>
			</ProductModalMiniDescr>
			<ProductModalMiniDescr>
				<ProductModalContent>
					<img
						height={61}
						src="assets/images/lrp/modals/anthelios-onco/athelios-termal.png"
						alt=""
					/>
					<div>
						<Subtitle>Термальная вода LA ROCHE-POSAY</Subtitle>
						<Text>Оказывает успокаивающее действие</Text>
					</div>
				</ProductModalContent>
			</ProductModalMiniDescr>

			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				применение
			</ProductModal.Typography>
			<ProductModalMiniDescr>
				<ProductModalContent>
					<img
						height={61}
						src="assets/images/lrp/modals/anthelios-onco/athelios-plus.png"
						alt=""
					/>
					<div>
						<Subtitle>ДЛЯ ЛИЦА и тела</Subtitle>
						<Text>
							Наносить за 30 мин до выхода на улицу, обновлять каждые 2 часа,
							независимо от сезона
						</Text>
					</div>
				</ProductModalContent>
			</ProductModalMiniDescr>
		</>
	)
}

export default AntheliosOncoComponentsRight

const ProductModalMiniDescr = styled.div`
	background: #f6f6f6;
	border-radius: 4px;
	padding: 10px 10px 12px 5px;
	position: relative;
	margin: 4px 0;
`
const ProductModalContent = styled.div`
	display: flex;
	/* align-items: center; */

	img {
		margin-right: 6px;
	}
`

const Subtitle = styled.div`
	color: #2c435f;
	font-size: 13px;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 0.39px;
	text-transform: uppercase;
	margin-top: 3px;
`
const Text = styled.div`
	color: #1f1f1f;
	font-size: 12px;
	font-weight: 300;
	line-height: 16px;
	align-self: flex-start;
`
