import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'

const AminexilComponents = ({ mt = 8, mb = 16 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				ОСНОВНОЙ УХОД
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
						disc="#9F0109"
						extend={false}
						isOpen={true}
						filter
					/>
				))}
			</ProductModal.List>
		</>
	)
}

export default AminexilComponents

const Name = styled.div`
	font-weight: 400;
	font-size: 13px;
	line-height: 16px;
	color: #122c4f;

	b {
		font-weight: 600;
	}
`

const componentsBasic = [
	{
		src: 'assets/images/dercos/modals/aminexil/serum.png',
		srcHeight: 100,
		title: 'DERCOS AMINEXIL INTENSIVE 5',
		description: 'Средство против выпадения волос',
		content: (
			<ul>
				<li>
					Воздействует на все звенья патогенеза выпадения: фиброз, воспаление и
					ломкость
				</li>
				<li>
					Снижает выработку провоспалительных цитокинов и может использоваться в
					терапии постковидной алопеции
				</li>
			</ul>
		),
	},
	{
		src: 'assets/images/dercos/modals/aminexil/aminexil.png',
		srcHeight: 56,
		title: 'Аминексил',
		description:
			'Ингибирует лизилгидроксилазу и реорганизует сеть коллагеновых волокон',
		content: '',
	},
	{
		src: 'assets/images/dercos/modals/aminexil/arginin.png',
		srcHeight: 56,
		title: 'Аргинин',
		description: '',
		content: (
			<ul>
				<li>Стимулирует микроциркуляцию</li>
				<li>Улучшает трофику волосяного фолликула</li>
			</ul>
		),
	},
	{
		src: 'assets/images/dercos/modals/aminexil/sp94.png',
		srcHeight: 56,
		title: 'SP94',
		description: 'Улучшает функционирование волосяной луковицы\n',
		content: '',
	},
	{
		src: 'assets/images/dercos/modals/aminexil/octane.png',
		srcHeight: 56,
		title: 'Октеин',
		description: '',
		content: (
			<ul>
				<li>Восстанавливает баланс кожи головы</li>
				<li>Оказывает успокаивающее действие</li>
			</ul>
		),
	},
	{
		src: 'assets/images/dercos/modals/aminexil/volcano.png',
		srcHeight: 56,
		title: 'Вулканическая вода VICHY',
		description: '',
		content: (
			<ul>
				<li>Повышает активность каталазы, СОД, глутатион пероксидазы</li>
				<li>Усиливает когезию кератиноцитов</li>
				<li>Восстанавливает эпидермис и поддерживает поверхностный pH кожи</li>
				<li>Снижает выработку субстанции Р</li>
			</ul>
		),
	},
]
