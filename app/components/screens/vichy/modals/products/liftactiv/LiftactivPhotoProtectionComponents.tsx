import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'

const LiftactivPhotoProtectionComponents = ({ mt = 16, mb = 16 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mb={mt} $mt={mb}>
				ФОТОПРОТЕКЦИЯ
			</ProductModal.Typography>
			<ProductModal.List>
				{componentsPhoto.map((component, idx) => (
					<ProductModal.Accordion
						key={idx}
						src={component.src}
						srcHeight={component.srcHeight}
						title={component.title}
						description={component.description}
						content={component.content}
						extend={false}
						isOpen={true}
						filter
					/>
				))}
			</ProductModal.List>
		</>
	)
}

export default LiftactivPhotoProtectionComponents

const componentsPhoto = [
	{
		src: 'assets/images/vichy/modals/liftactiv/uv-age.png',
		srcHeight: 97,
		title: 'CAPITAL SOLEIL SPF 50+/PPD 46 Флюид UV-AGE DAILY',
		description: '',
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
