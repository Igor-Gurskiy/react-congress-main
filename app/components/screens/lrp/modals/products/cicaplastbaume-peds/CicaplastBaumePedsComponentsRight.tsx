import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'

const CicaplastBaumePedsComponentsRight = ({ mt = 8, mb = 8 }) => {
	return (
		<>
			<ProductModal.List>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/cicaplastbaume-peds/tribioma.png"
							alt=""
						/>
						<div>
							<Subtitle>TRIBIOMA</Subtitle>
							<Text>Нормализует микробиом кожи</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/cicaplastbaume-peds/filiformis.png"
							alt=""
						/>
						<div>
							<Subtitle>AQUA POSAE FILIFORMIS</Subtitle>
							<Text>Нормализует микробиом кожи</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/cicaplastbaume-peds/pantenol.png"
							alt=""
						/>
						<div>
							<Subtitle>Пантенол</Subtitle>
							<Text>Успокаивает и восстанавливает</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/cicaplastbaume-peds/made.png"
							alt=""
						/>
						<div>
							<Subtitle>Мадекассосид</Subtitle>
							<Text>Ускоряет заживление</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/cicaplastbaume-peds/cink.png"
							alt=""
						/>
						<div>
							<Subtitle>Цинк+Марганец</Subtitle>
							<Text>Оказывают антибактериальное действие</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/cicaplastbaume-peds/carite.png"
							alt=""
						/>
						<div>
							<Subtitle>Масло Карите</Subtitle>
							<Text>Восстанавливает кожный барьер </Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
			</ProductModal.List>
		</>
	)
}

export default CicaplastBaumePedsComponentsRight

const ProductModalMiniDescr = styled.div`
	background: #f6f6f6;
	border-radius: 4px;
	padding: 10px 10px 14px 5px;
	position: relative;
	margin: 4px 0;
`
const ProductModalContent = styled.div`
	display: flex;
	align-items: center;

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
