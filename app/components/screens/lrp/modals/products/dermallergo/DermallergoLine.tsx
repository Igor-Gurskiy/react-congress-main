import ProductModal from "@/components/shared/product-modal/ProductModal";
import Box from "@/components/Box";
import React from "react";
import Molecule from "@/components/ui/molecule/Molecule";

const DermallergoLine = () => {

    const position = {
        top: '30%',
        right: '5%'
    }


    const direction = 'left'
    return (
        <ProductModal.LineContainer>
            <ProductModal.Typography $subtitle>Объёмы средств</ProductModal.Typography>
            <ProductModal.Line>
                <Molecule id="toleriane-onco" position={position} direction={direction}
                          translate={{x: '0%'}}/>
                <Box $flex $fullWidth $direction="column" $flexGrow={1} $mt={16} $mb={16}>
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={243} src="assets/images/lrp/modals/dermallergo/cream.png"/>
                            <ProductModal.Volume>40 мл</ProductModal.Volume>
                        </Box>
                    </Box>
                </Box>

            </ProductModal.Line>
        </ProductModal.LineContainer>
    )
}

export default DermallergoLine