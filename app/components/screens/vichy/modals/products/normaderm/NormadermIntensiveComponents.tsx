import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import Molecule from '@/components/ui/molecule/Molecule'
import useResponsive from '@/hooks/useResponsive'

const NormadermIntensiveComponents = ({ mt = 8, mb = 16 }) => {
	const { isMobile } = useResponsive()

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
						disc="#00964A"
						extend={false}
						isOpen={true}
						filter
					/>
				))}
				{isMobile && (
					<Molecule
						type="vichy"
						id="vichy-normaderm"
						position={{
							top: '-25%',
							right: '-5%',
						}}
						direction="left"
						translate={{ x: '-50%' }}
					/>
				)}
			</ProductModal.List>
		</>
	)
}

export default NormadermIntensiveComponents

const componentsIntensive = [
	{
		src: 'assets/images/vichy/modals/normaderm/probio.png',
		srcHeight: 96,
		title: 'NORMADERM',
		description: 'Пробиотическая обновляющая сыворотка',
		content: (
			<ul>
				<li>Осветляет поствоспалительную пигментацию</li>
				<li>Уменьшает количество комедонов</li>
				<li>Снижает выработку себума</li>
			</ul>
		),
	},
]
