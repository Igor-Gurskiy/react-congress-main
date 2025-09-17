import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const position = {
	top: '-25%',
	right: '-10%',
}

const mobilePos = {
	top: '60%',
	left: '12%',
}

const NormadermPhotoProtectionComponents = ({ mt = 16, mb = 16 }) => {
	const { isMobile } = useResponsive()

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
						disc="#00964A"
						extend={false}
						isOpen={true}
						filter
					/>
				))}
				<Molecule
					type="vichy"
					id="vichy-normaderm-photo"
					position={isMobile ? mobilePos : position}
					direction="left"
					translate={{ x: '-50%' }}
				/>
			</ProductModal.List>
		</>
	)
}

export default NormadermPhotoProtectionComponents

const componentsPhoto = [
	{
		src: 'assets/images/vichy/modals/normaderm/capital-soleil.png',
		srcHeight: 98,
		title: 'CAPITAL SOLEIL UV-CLEAR SPF 50+',
		description: 'Солнцезащитный флюид для лица против несовершенств',
		content: (
			<ul>
				<li>
					Обеспечивает очень высокую степень UVA и UVB защиты благодаря системе
					UV-фильтров SPF50+/ PA++++ (UVA PF / PPD 22)
				</li>
				<li>
					Моментально матирует и предотвращает появление жирного блеска в
					течение дня
				</li>
				<li>Увлажняет кожу</li>
			</ul>
		),
	},
]
