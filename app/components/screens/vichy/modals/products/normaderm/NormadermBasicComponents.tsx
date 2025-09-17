import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'

const NormadermBasicComponents = ({ mt = 16, mb = 16 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
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
						disc="#00964A"
						extend={false}
						isOpen={true}
						filter
					/>
				))}
			</ProductModal.List>
		</>
	)
}

export default NormadermBasicComponents

const componentsBasic = [
	{
		src: 'assets/images/vichy/modals/normaderm/double-correction.png',
		srcHeight: 92,
		title: 'NORMADERM',
		description:
			'Корректирующий уход с обновляющим и противовоспалительным действием',
		content: (
			<ul>
				<li>
					Оказывает противовоспалительное и себорегулирующее действия, уменьшая
					появление акне
				</li>
				<li>Восстанавливает барьерную функцию кожи</li>
			</ul>
		),
	},
	{
		src: 'assets/images/vichy/modals/normaderm/correct.png',
		srcHeight: 93,
		title: 'NORMADERM',
		description: (
			<>
				Корректирующий уход против несовершенств и жирного блеска, 24&nbsp;часа
				увлажнения
			</>
		),
		content: (
			<ul>
				<li>Оказывает противовоспалительное действие</li>
				<li>Абсорбирует избыток себума</li>
				<li>Увлажняет кожу</li>
			</ul>
		),
	},
]
