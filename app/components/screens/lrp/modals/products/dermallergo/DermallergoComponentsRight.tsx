import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const DermallergoComponents = ({ mt = 8, mb = 8 }) => {
	const { isMobile } = useResponsive()

	const position = {
		bottom: '25%',
		right: '5%',
	}

	const direction = 'left'

	return (
		<>
			<ProductModal.List>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/dermallergo/sphingobioma2.png"
							alt=""
						/>
						<div>
							<Subtitle>SPHINGOBIOMA</Subtitle>
							<Text>
								Нормализует функцию микробиома и укрепляет эпидермальный барьер
							</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/dermallergo/neurosensin.png"
							alt=""
						/>
						<div>
							<Subtitle>Нейросенсин</Subtitle>
							<Text>
								Препятствует синтезу субстанции Р и оказывает
								противовоспалительное действие
							</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/dermallergo/hlycerin.png"
							alt=""
						/>
						<div>
							<Subtitle>Глицерин</Subtitle>
							<Text>Увлажняет</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
				<ProductModalMiniDescr>
					<ProductModalContent>
						<img
							height={54}
							src="assets/images/lrp/modals/dermallergo/termal.png"
							alt=""
						/>
						<div>
							<Subtitle>
								Термальная вода <br /> LA ROCHE-POSAY
							</Subtitle>
							<Text>Оказывает успокаивающее и смягчающее действия</Text>
						</div>
					</ProductModalContent>
				</ProductModalMiniDescr>
			</ProductModal.List>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				применение
			</ProductModal.Typography>
			<ProductModalMiniDescrPlus>
				<ProductModalContent>
					<img
						height={61}
						src="assets/images/lrp/modals/dermallergo/plus.png"
						alt=""
						style={{ marginRight: '4px' }}
					/>
					<div>
						<Subtitle>ДЛЯ ЛИЦА и тела</Subtitle>
						<Text>
							Наносить на предварительно очищенную кожу. Кратность — по
							необходимости
						</Text>
					</div>
				</ProductModalContent>
				<Molecule
					id="lrp-molecule-8"
					position={{
						bottom: '-40%',
						right: '5%',
					}}
					direction="left"
				/>
			</ProductModalMiniDescrPlus>
		</>
	)
}

export default DermallergoComponents

const ProductModalMiniDescr = styled.div`
	background: #f6f6f6;
	border-radius: 4px;
	padding: 12px;
	position: relative;
	margin: 4px 0;
`
const ProductModalMiniDescrPlus = styled.div`
	background: #f6f6f6;
	border-radius: 4px;
	padding: 10px 10px 12px 5px;
	position: relative;
	margin: 4px 0;
`
const ProductModalContent = styled.div`
	display: flex;

	img {
		margin-right: 10px;
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
