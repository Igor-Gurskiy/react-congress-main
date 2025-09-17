import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'

const DeodorantBasicComponents = ({ mt = 16, mb = 16 }) => {
	return (
		<>
			<ProductModal.List>
				{componentsBasic.map((component, idx) => (
					<ProductModal.Accordion
						key={idx}
						src={component.src}
						srcHeight={component.srcHeight}
						title={component.title}
						description={component.description}
						content={component.content}
						disc="#8AB1BD"
						extend={false}
						isOpen={true}
						filter
					/>
				))}
			</ProductModal.List>
		</>
	)
}

export default DeodorantBasicComponents

const componentsBasic = [
	{
		src: 'assets/images/vichy/modals/deodorant/deodorant1.png',
		srcHeight: 69,
		title: 'DEODORANT',
		description:
			'Дезодорант-антистресс от избыточного потоотделения с защитой 72 часа',
		content: (
			<ul>
				<li>
					Эффективен при гипергидрозе и при повышенном потоотделении в период
					стресса
				</li>
				<li>
					Подходит для применения в области подмышечных впадин, ладоней и стоп
				</li>
				<li>Гипоаллергенно, подходит для чувствительной кожи</li>
				<li>Протестировано под контролем дерматологов</li>
			</ul>
		),
	},
	{
		src: 'assets/images/vichy/modals/deodorant/deodorant2.png',
		srcHeight: 69,
		title: 'DEODORANT',
		description:
			'Шариковый дезодорант, регулирующий избыточное потоотделение 48 часов',
		content: (
			<ul>
				<li>
					Средство подходит для всех типов кожи, включая даже самую
					чувствительную, обеспечивает защиту от чрезмерного потоотделения
				</li>
				<li>Гипоаллергенно, подходит для чувствительной кожи</li>
				<li>Протестировано под контролем дерматологов</li>
			</ul>
		),
	},
	{
		src: 'assets/images/vichy/modals/deodorant/deodorant3.png',
		srcHeight: 69,
		title: 'DEODORANT',
		description:
			'Успокаивающий шариковый дезодорант для защиты кожи на 48 часов',
		content: (
			<ul>
				<li>
					Уменьшает избыточное потоотделение и подходит для гиперчувствительной
					и эпилированной кожи
				</li>
				<li>Гипоаллергенно, подходит для чувствительной кожи</li>
				<li>Протестировано под контролем дерматологов</li>
				<li>Не содержит спирт</li>
			</ul>
		),
	},
]
