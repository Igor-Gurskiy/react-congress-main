import ProductModal from "@/components/shared/product-modal/ProductModal";
import React from "react";
import styled from "styled-components";

const IsoBiomeBenefites = ({mt = 8, mb = 16}) => {
    return (
        <>
            <ProductModal.Typography $subtitle $mt={mt} $mb={mb}>Основной уход</ProductModal.Typography>
            <ProductModal.List>
                {componentsBasic.map((component, idx) => (
                    <ProductModal.Accordion
                        key={idx}
                        src={component.src}
                        srcHeight={component.srcHeight}
                        title={component.title}
                        description={component.description}
                        content={component.content}
                        disc="#36B0FC"
                        extend={false}
                        isOpen={true}
                    />
                ))}
            </ProductModal.List>
        </>
    )
}

export default IsoBiomeBenefites

const Name = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #122C4F;

  b {
    font-weight: 600;
  }

  span {
    font-weight: 600;
    color: #36B0FC;
  }
`

const componentsBasic = [
    {
        src: "assets/images/lrp/modals/isobiome/apaisant.png",
        srcHeight: 131,
        title: <Name><b>EFFACLAR</b> H ISO-<span>BIOME</span></Name>,
        description: 'Ультра успокаивающий восстанавливающий уход',
        content: (
            <ul>
                <li>Регулирует микробиом</li>
                <li>Уменьшает выраженность побочных эффектов лекарственной терапии</li>
                <li>Нормализует себорегуляцию жирной кожи, пересушенной в результате нерационального ухода</li>
                <li>Предотвращает появление поствоспалительной гиперпигментации</li>
            </ul>
        )
    },
    {
        src: "assets/images/lrp/modals/isobiome/filiformis.png",
        srcHeight: 54,
        title: <Name><b>AQUA POSAE FILIFORMIS</b></Name>,
        description: 'Восстанавливает микробиом',
        content: ''
    },
    {
        src: "assets/images/lrp/modals/isobiome/annato.png",
        srcHeight: 54,
        title: <Name><b>Экстракт Аннато</b></Name>,
        description: 'Регулирует кератинизацию и выработку себума, снижает вирулентность C.acnes',
        content: ''
    },
    {
        src: "assets/images/lrp/modals/isobiome/termal.png",
        srcHeight: 54,
        title: <Name><b>Термальная вода LA ROCHE-POSAY и ниацинамид</b></Name>,
        description: 'Успокаивают и уменьшают воспаления',
        content: ''
    },
    {
        src: "assets/images/lrp/modals/isobiome/b5.png",
        srcHeight: 54,
        title: <Name><b>Витамин В5</b></Name>,
        description: 'Восстанавливает и уменьшает воспаление',
        content: ''
    },
    {
        src: "assets/images/lrp/modals/isobiome/skvalan.png",
        srcHeight: 54,
        title: <Name><b>Сквалан и глицерин</b></Name>,
        description: 'Увлажняют',
        content: ''
    },
    {
        src: "assets/images/lrp/modals/isobiome/procerad.png",
        srcHeight: 54,
        title: <Name><b>PROCERAD</b></Name>,
        description: 'Уменьшает воспаление и предотвращает поствоспалительную гиперпигментацию',
        content: ''
    },
]

