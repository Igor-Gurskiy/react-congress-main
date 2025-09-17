import ProductModal from "@/components/shared/product-modal/ProductModal";
import React from "react";
import styled from "styled-components";
import Molecule from "@/components/ui/molecule/Molecule";

const IsoBiomeCleaning = ({mt = 16, mb = 16}) => {

    const position = {
        bottom: '15%',
        right: '0%'
    }

    return (
        <>
            <ProductModal.Typography $subtitle $mt={mt} $mb={mb}>Очищение</ProductModal.Typography>
            <ProductModal.List>
                <Molecule id="isobiome" position={position} direction="left"
                          translate={{x: '-50%'}}/>
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

export default IsoBiomeCleaning

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
        src: "assets/images/lrp/modals/isobiome/creme390.png",
        srcHeight: 128,
        title: <Name><b>EFFACLAR</b> H ISO-<span>BIOME</span></Name>,
        description: 'Успокаивающий очищающий крем-гель',
        content: ''
    },
]

