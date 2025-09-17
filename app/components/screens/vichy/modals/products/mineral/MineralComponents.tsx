import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'

const MineralComponents = ({ mt = 16, mb = 16 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				ИНТЕНСИВНЫЙ УХОД
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
						disc="#008DAF"
						extend={false}
						isOpen={true}
						filter
					/>
				))}
			</ProductModal.List>
		</>
	)
}

export default MineralComponents

const componentsBasic = [
	{
		src: 'assets/images/vichy/modals/mineral/booster.png',
		srcHeight: 89,
		title: 'MINÉRAL 89',
		description:
			'Ежедневный гель-сыворотка для кожи, подверженной агрессивным внешним воздействиям',
		content: (
			<ul>
				<li>Увлажняет и восстанавливает барьерную функцию кожи</li>
			</ul>
		),
	},
	{
		src: 'assets/images/vichy/modals/mineral/probiotic.png',
		srcHeight: 73,
		title: (
			<>
				MINÉRAL 89
				<br />
				PROBIOTIC FRACTIONS
			</>
		),
		description: 'Восстанавливающая и укрепляющая сыворотка-концентрат ',
		content: (
			<ul>
				<li>Укрепляет кожный барьер и восстанавливает защитную функцию кожи</li>
				<li>Уменьшает клинические проявления стресса кожи</li>
				<li>Уменьшает раздражение кожи на фоне лечения различных дерматозов</li>
			</ul>
		),
	},
]
