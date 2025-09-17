import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'

const LipikarCareComponents = ({ mt = 16, mb = 8 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				УХОД
			</ProductModal.Typography>
			<ProductModal.List>
				{componentsBasic.map((component, idx) => (
					<ProductModal.Accordion
						key={idx}
						src={component.src}
						srcHeight={component.srcHeight}
						title={component.title}
						description={component.description}
						content={component.content}
						disc="#36B0FC"
						extend={false}
						isOpen={true}
					/>
				))}
			</ProductModal.List>
		</>
	)
}

export default LipikarCareComponents

const Name = styled.div`
	font-weight: 400;
	font-size: 13px;
	line-height: 16px;
	color: #122c4f;

	span {
		font-weight: 600;
		color: #36b0fc;
	}
`

const componentsBasic = [
	{
		src: 'assets/images/lrp/modals/lipikar/baume400.png',
		srcHeight: 139,
		title: (
			<Name>
				<b>LIPIKAR</b> BAUME <span>AP+M</span>
			</Name>
		),
		description:
			'Липидовосполняющее средство, эффективно нормализующее микробиом и увеличивающее периоды ремиссии у пациентов с атопическим дерматитом',
		content: (
			<ul>
				<li>Восстанавливает гидролипидный барьер</li>
				<li>Предупреждает рецидивы и увеличивает периоды ремиссии</li>
				<li>Эффективно регулирует баланс микробиома кожи</li>
				<li>Оказывает противозудное действие</li>
				<li>Уменьшает воспаление</li>
			</ul>
		),
	},
	{
		src: 'assets/images/lrp/modals/lipikar/lait400.png',
		srcHeight: 143,
		title: (
			<Name>
				<b>LIPIKAR</b> LAIT
			</Name>
		),
		description:
			'Молочко для сухой и очень сухой кожи младенцев, детей и взрослых',
		content: (
			<ul>
				<li>Мгновенно смягчает, увлажняет, успокаивает</li>
				<li>Легко наносится</li>
				<li>Быстро впитывается</li>
			</ul>
		),
	},
]
