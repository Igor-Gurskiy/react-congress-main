import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'

const LiftactivIntensiveComponents = ({ mt = 8, mb = 16 }) => {
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
						extend={false}
						isOpen={true}
						filter
					/>
				))}
			</ProductModal.List>
		</>
	)
}

export default LiftactivIntensiveComponents

const componentsIntensive = [
	{
		src: 'assets/images/vichy/modals/liftactiv/c-serum.png',
		srcHeight: 88,
		title: 'LIFTACTIV SUPREME',
		description: 'Концентрированная сыворотка с витамином С для сияния кожи',
		content: (
			<ul>
				<li>
					Способствует антиоксидантной защите и восстановлению кожи после
					воздействия экспозом-факторов
				</li>
				<li>Улучшает цвет кожи</li>
				<li>Уменьшает выраженность пигментации</li>
			</ul>
		),
	},
	{
		src: 'assets/images/vichy/modals/liftactiv/filler.png',
		srcHeight: 92,
		title: 'LIFTACTIV SUPREME',
		description: 'Гиалуроновая сыворотка-филлер пролонгированного действия',
		content: (
			<ul>
				<li>Разглаживает поверхностные морщины</li>
				<li>Улучшает цвет и текстуру кожи</li>
				<li>
					Улучшает заживление после травмирующих косметологических процедур
				</li>
			</ul>
		),
	},
	{
		src: 'assets/images/vichy/modals/liftactiv/retinol-specialist.png',
		srcHeight: 88,
		title: 'LIFTACTIV RETINOL SERUM',
		description: 'Сыворотка для коррекции глубоких морщин',
		content: (
			<ul>
				<li>Сокращает морщины, корректирует овал лица</li>
				<li>Уменьшает выраженность пигментации</li>
				<li>
					Гипоаллергенно. Протестировано на чувствительной коже под контролем
					дерматологов
				</li>
			</ul>
		),
	},
	{
		src: 'assets/images/vichy/modals/liftactiv/b3-serum.png',
		srcHeight: 88,
		title: 'LIFTACTIV SPECIALIST',
		description:
			'Сыворотка комплексного действия с витамином B3 против пигментации и морщин',
		content: (
			<ul>
				<li>Сокращает пигментацию</li>
				<li>Выравнивает и осветляет общий тон</li>
				<li>Разглаживает мелкие морщины</li>
			</ul>
		),
	},
]
