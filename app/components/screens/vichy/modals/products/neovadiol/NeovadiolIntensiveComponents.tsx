import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'

const NeovadiolIntensiveComponents = ({ mt = 8, mb = 16 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				ИНТЕНСИВНЫЙ УХОД
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

export default NeovadiolIntensiveComponents

const componentsIntensive = [
	{
		src: 'assets/images/vichy/modals/neovadiol/meno.png',
		srcHeight: 92,
		title: 'NEOVADIOL',
		description: 'Бифазная сыворотка MENO-5',
		content: (
			<ul>
				<li>Повышает плотность кожи</li>
				<li>Выравнивает и осветляет общий тон</li>
				<li>Повышает содержание эпидермальных липидов</li>
			</ul>
		),
	},
]
