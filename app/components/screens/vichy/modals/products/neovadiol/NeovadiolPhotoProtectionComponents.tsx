import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'

const NeovadiolPhotoProtectionComponents = ({ mt = 16, mb = 16 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				ФОТОПРОТЕКЦИЯ
			</ProductModal.Typography>
			<ProductModal.List>
				{componentsIntensive.map((component, idx) => (
					<ProductModal.Accordion
						key={idx}
						src={component.src}
						srcHeight={component.srcHeight}
						title={component.title}
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

export default NeovadiolPhotoProtectionComponents

const componentsIntensive = [
	{
		src: 'assets/images/vichy/modals/neovadiol/soleil.png',
		srcHeight: 97,
		title: 'CAPITAL SOLEIL SPF 50+/PPD 46 Флюид UV-AGE DAILY',
		content: (
			<ul>
				<li>Защищает кожу от всего спектра UV-лучей</li>
				<li>
					Предупреждает фотостарение кожи: пигментацию, преждевременные морщины
					и снижение эластичности
				</li>
			</ul>
		),
	},
]
