import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'

const MineralBasicComponents = ({ mt = 16, mb = 16 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mb={mt} $mt={mb}>
				БАЗОВЫЙ УХОД
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

export default MineralBasicComponents

const componentsBasic = [
	{
		src: 'assets/images/vichy/modals/mineral/mineral.png',
		srcHeight: 43,
		title: 'MINÉRAL 89',
		description: 'Увлажняющий крем 72 часа для всех типов кожи',
		content: (
			<ul>
				<li>Обеспечивает увлажнение до 72 часов</li>
				<li>Восстанавливает кожный барьер</li>
				<li>Выравнивает тон кожи и придает сияние</li>
			</ul>
		),
	},
	{
		src: 'assets/images/vichy/modals/mineral/mineral-rich.png',
		srcHeight: 43,
		title: 'MINÉRAL 89',
		description: 'Увлажняющий крем 72 часа для сухой кожи',
		content: (
			<ul>
				<li>Обеспечивает увлажнение до 72 часов</li>
				<li>
					Восстанавливает кожный барьер, восполняя уровень липидов сухой кожи
				</li>
				<li>Выравнивает тон кожи и придает сияние</li>
			</ul>
		),
	},
]
