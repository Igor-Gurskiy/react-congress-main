import ProductModal from '@/components/shared/product-modal/ProductModal'
import React from 'react'
import styled from 'styled-components'

const PsolutionComponents = ({ mt = 8, mb = 16 }) => {
	return (
		<>
			<ProductModal.Typography $subtitle $mt={mt} $mb={mb}>
				Действия
			</ProductModal.Typography>
			<ProductModal.UList $disc="#009D86">
				<ul>
					<li>Деликатно очищает кожу головы</li>
					<li>
						Предотвращает зуд и раздражение кожи, вызываемые применением
						топических средств
					</li>
				</ul>
			</ProductModal.UList>
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

export default PsolutionComponents

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
		src: 'assets/images/dercos/modals/psolution/mocha.png',
		srcHeight: 56,
		title: 'Мочевина 5%',
		description: 'Обладает кератолитическим и увлажняющим действием',
		content: '',
	},
	{
		src: 'assets/images/dercos/modals/psolution/salycil.png',
		srcHeight: 56,
		title: 'Салициловая кислота 2%',
		description: 'Оказывает кератолитическое и противовоспалительное действие',
		content: '',
	},
	{
		src: 'assets/images/dercos/modals/psolution/glycerin.png',
		srcHeight: 56,
		title: 'Глицерин 1%',
		description: 'Оказывает увлажняющее действие',
		content: '',
	},
]
