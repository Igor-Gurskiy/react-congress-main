import ProductModal from "@/components/shared/product-modal/ProductModal";
import React from "react";
import styled from "styled-components";

const NiacinamideBenefites = ({mt = 8, mb = 16}) => {
    return (
        <>
            <ProductModal.Typography $subtitle $mt={mt} $mb={mb}>преимущества</ProductModal.Typography>
            <ProductModal.List>
                {componentsBasic.map((component, idx) => (
                    <ProductModal.Accordion
                        key={idx}
                        src={component.src}
                        srcHeight={component.srcHeight}
                        title={component.title}
                        description={component.description}
                        content={component.content}
                        disc="#861B86"
                        extend={false}
                        isOpen={true}
                    />
                ))}
            </ProductModal.List>
        </>
    )
}

export default NiacinamideBenefites

const Name = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #122C4F;
  
  span {
    font-weight: 600;
    color: #36B0FC;
  }
`

const componentsBasic = [
    {
        src: "assets/images/lrp/modals/niacinamide/niacinamide.png",
        srcHeight: 124,
        title: <Name><b>NIACINAMIDE</b> 10</Name>,
        description: '',
        content: (
            <ul>
                <li>Уменьшает выраженность пигментных пятен и выравнивает тон кожи</li>
                <li>Высокая эффективность и оптимальная переносимость</li>
                <li>Протестировано на всех типах кожи</li>
                <li>Подходит даже для чувствительной кожи</li>
            </ul>
        )
    },
    {
        src: "assets/images/lrp/modals/niacinamide/niacomp.png",
        srcHeight: 54,
        title: <Name><b>Ниацинамид 10%</b></Name>,
        description: 'Уменьшает выраженность пигментных пятен и препятствует появлению поствоспалительной гиперпигментации',
        content: ''
    },
    {
        src: "assets/images/lrp/modals/niacinamide/fe.png",
        srcHeight: 54,
        title: <Name><b>ФE-резорцинол</b></Name>,
        description: 'Регулирует синтез меланина',
        content: ''
    },
    {
        src: "assets/images/lrp/modals/niacinamide/hepes.png",
        srcHeight: 54,
        title: <Name><b>Хепес</b></Name>,
        description: 'Мягко отшелушивает и выравнивает рельеф кожи',
        content: ''
    },
    {
        src: "assets/images/lrp/modals/niacinamide/hyalu.png",
        srcHeight: 54,
        title: <Name><b>Гиалуроновая кислота</b></Name>,
        description: 'Восстанавливает кожный барьер, увлажняет',
        content: ''
    },
]

