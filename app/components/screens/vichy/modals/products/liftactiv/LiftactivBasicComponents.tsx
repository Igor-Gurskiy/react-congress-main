import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'

const LiftactivBasicComponents = ({ mt = 16, mb = 16 }) => {
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
						extend={false}
						isOpen={true}
						filter
					/>
				))}
			</ProductModal.List>
		</>
	)
}

export default LiftactivBasicComponents

const componentsBasic = [
	{
		src: 'assets/images/vichy/modals/liftactiv/b3-anti-dark.png',
		srcHeight: 43,
		title: 'LIFTACTIV',
		description: 'Дневной крем с витамином B3 против пигментации SPF 50',
		content: (
			<ul>
				<li>Уменьшает выраженность пигментации и препятствует ее появлению</li>
				<li>Повышает упругость кожи и сокращает морщины</li>
				<li>
					Обеспечивает очень высокую степень UVA и UVB защиты благодаря системе
					UV-фильтров SPF50+/ PA++++ (UVA PF / PPD 22)
				</li>
				<li>
					Гипоаллергенно. Протестировано на чувствительной коже под контролем
					дерматологов
				</li>
			</ul>
		),
	},
	{
		src: 'assets/images/vichy/modals/liftactiv/collagen-specialist-nuit.png',
		srcHeight: 43,
		title: 'LIFTACTIV COLLAGEN SPECIALIST',
		description: 'Ночной крем',
		content: (
			<ul>
				<li>Повышает упругость кожи</li>
				<li>Разглаживает морщины</li>
				<li>Оказывает дренажное действие</li>
			</ul>
		),
	},
]
