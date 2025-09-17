import ProductModal from "@/components/shared/product-modal/ProductModal";
import Box from "@/components/Box";
import React from "react";
import Molecule from "@/components/ui/molecule/Molecule";
import useResponsive from "@/hooks/useResponsive";

const AntheliosOncoLine = () => {
    const {isMobile} = useResponsive()

    const position = {
        top: '5%',
        left: '10%'
    }

    const mPos = {
        top: '25%',
        left: '10%'
    }
    return (
        <ProductModal.LineContainer>
            <ProductModal.Typography $subtitle>Объёмы средств</ProductModal.Typography>
            <ProductModal.Line>
                <Molecule id="anthelios-onco" position={isMobile ? mPos : position} direction="right"
                          translate={{x: '-50%'}}/>
                <Box $flex $fullWidth $direction="column" $flexGrow={1} $mt={16} $mb={16}>
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={243} src="assets/images/lrp/modals/anthelios-onco/fluid.png"/>
                            <ProductModal.Volume>50 мл</ProductModal.Volume>
                        </Box>
                    </Box>
                </Box>

            </ProductModal.Line>
        </ProductModal.LineContainer>
    )
}

export default AntheliosOncoLine