import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'

const NeovadiolBasicComponents = ({ mt = 16, mb = 16 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				БАЗОВЫЙ УХОД
			</ProductModal.Typography>
			<ProductModal.List>
				{componentsIntensive.map((component, idx) => (
					<ProductModal.Accordion
						key={idx}
						src={component.src}
						srcHeight={component.srcHeight}
						title={component.title}
						description={component.description}
						content={component.content}
						disc="#F1C34D"
						extend={false}
						isOpen={true}
						filter
					/>
				))}
			</ProductModal.List>
		</>
	)
}

export default NeovadiolBasicComponents

const componentsIntensive = [
	{
		src: 'assets/images/vichy/modals/neovadiol/lifting.png',
		srcHeight: 43,
		title: 'NEOVADIOL',
		description:
			'Уплотняющий дневной лифтинг-крем для нормальной и комбинированной кожи',
		content: (
			<ul>
				<li>
					Поддерживает физиологическую регенерацию кожи в период менопаузального
					старения
				</li>
				<li>Повышает плотность кожи и корректирует овал лица</li>
			</ul>
		),
	},
	{
		src: 'assets/images/vichy/modals/neovadiol/antisagginess.png',
		srcHeight: 43,
		title: 'NEOVADIOL',
		description: 'Восстанавливающий и ремоделирующий контуры лица дневной крем',
		content: (
			<ul>
				<li>
					Поддерживает физиологическую регенерацию кожи в период
					постменопаузального старения
				</li>
				<li>Повышает плотность кожи и корректирует овал лица</li>
				<li>Уменьшает сухость кожи</li>
			</ul>
		),
	},
]
