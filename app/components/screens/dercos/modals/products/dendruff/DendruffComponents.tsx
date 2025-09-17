import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'
import Molecule from '@/components/ui/molecule/Molecule'

const TypographyDesktop = styled(ProductModal.Typography)`
	@media (max-width: 767px) {
		display: none;
	}
`

const DendruffComponents = ({ mt = 8, mb = 16 }) => {
	return (
		<>
			<TypographyDesktop $subtitle $mt={mt} $mb={mb}>
				Основной уход
			</TypographyDesktop>
			<ProductModal.List>
				{componentsBasic.map((component, idx) => (
					<ProductModal.Accordion
						key={idx}
						src={component.src}
						srcHeight={component.srcHeight}
						title={component.title}
						description={component.description}
						content={component.content}
						disc="#089C3E"
						extend={false}
						isOpen={true}
						filter
					/>
				))}
				<Molecule
					type="dercos"
					id="dercos-dandruff-components"
					position={{
						top: '40%',
						left: '15%',
					}}
					direction="left"
					translate={{ x: '-50%' }}
				/>
			</ProductModal.List>
		</>
	)
}

export default DendruffComponents

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
		src: 'assets/images/dercos/modals/dandruff/dry.png',
		srcHeight: 142,
		title: 'DERCOS ANTI-DANDRUFF',
		description: 'Интенсивный шампунь против перхоти с дисульфидом селена',
		content: (
			<ul>
				<li>Восстанавливает баланс микробиома</li>
				<li>Устраняет перхоть и зуд</li>
				<li>Удлиняет период ремиссии себорейного дерматита</li>
			</ul>
		),
	},
	{
		src: 'assets/images/dercos/modals/dandruff/selen.png',
		srcHeight: 55,
		title: '1% дисульфид селена',
		description:
			'Оказывает фунгицидное действие на грибок Malassezia и бактериостатическое действие на St. epidermidis, восстанавливая микробиом кожи головы \n',
		content: '',
	},
	{
		src: 'assets/images/dercos/modals/dandruff/salycil.png',
		srcHeight: 55,
		title: '1% салициловой кислоты',
		description:
			'Обладает отшелушивающим действием и способствует очищению кожи головы',
		content: '',
	},
	{
		src: 'assets/images/dercos/modals/dandruff/keramid.png',
		srcHeight: 55,
		title: 'Керамид R',
		description: 'Укрепляет стержень волоса',
		content: '',
	},
	{
		src: 'assets/images/dercos/modals/dandruff/vitamin.png',
		srcHeight: 55,
		title: 'Витамин Е',
		description:
			'Снижает интенсивность перекисного окисления липидов и уменьшает зуд',
		content: '',
	},
]
